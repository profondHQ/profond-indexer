import { lookupArchive } from "@subsquid/archive-registry";
import * as ss58 from "@subsquid/ss58";
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor,
} from "@subsquid/substrate-processor";
import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
import * as psp34_inkv4 from "./abi/psp34_inkv4";
import * as psp22 from "./abi/psp22";
import { MongoClient, Db, Decimal128 } from "mongodb";
import { Pool } from "pg";

// Shibuya Details
const chainName = "shibuya";
const psp22CodeHash =
  "0x0aedeeccb1ce02c852cc0aa2b78d26837d464fa93857123fd726ca52a9a6b364";
const psp34CodeHash =
  "0x23e2ae0aa98a1e52a6d6d30fcc1ce713bee5425c26725e6c802b2737ee88fa18";

const CONTRACT_ADDRESS_SS58 = "bPDAvNfosiVGRzzdE4EidP9utXsiTz6STZvi8SH8QgWEKvg";
const SS58_PREFIX = ss58.decode(CONTRACT_ADDRESS_SS58).prefix;

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: lookupArchive(chainName, {
      release: "FireSquid",
      type: "Substrate",
    }),
  })
  .setBlockRange({ from: 4654321 }) // deployed block height on shibuya
  .addEvent("Contracts.Instantiated")
  .addEvent("Contracts.ContractEmitted");

type Item = BatchProcessorItem<typeof processor>;
type Ctx = BatchContext<Store, Item>;

const main = async () => {
  const db = (await MongoClient.connect(process.env.MONGODB_URL || "")).db(
    process.env.DB
  );

  const analyticDbPool = new Pool({
    connectionString: process.env.PG_CONNECTION_STRING,
  });

  processor.run(new TypeormDatabase(), async (ctx) => {
    processBlocks(ctx, db, analyticDbPool);
  });
};

main();

function addressEncoder(hexAddress: string): string {
  return ss58
    .codec(SS58_PREFIX)
    .encode(Buffer.from(hexAddress.replace("0x", ""), "hex"));
}

const processBlocks = async (ctx: Ctx, db: Db, analyticDbPool: Pool) => {
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.name === "Contracts.ContractEmitted") {
        let event;
        let contractAddress = addressEncoder(item.event.args.contract);
        try {
          event = psp22.decodeEvent(item.event.args.data);
        } catch {
          continue;
        }
        if (event.__kind === "SetSaleOptions") {
          console.log(`[+] SetSaleOptions params`);
          console.log(event);
          await db.collection("coins").updateOne(
            {
              contract_address: contractAddress,
            },
            {
              $set: {
                max_supply: event.maxSupply.toString(),
                bought_supply: "0",
                sale_rate: event.saleRate.toString(),
                start_at: event.startAt,
                end_at: event.endAt,
                updated_at: new Date().getTime(),
              },
            }
          );
        } else if (event.__kind === "TokenBought") {
          console.log(`[+] TokenBought params`);
          console.log(event);

          const receiverAddress = ss58
            .codec(SS58_PREFIX)
            .encode(event.receiverAddress);
          const updatedAt = new Date().getTime();

          await db.collection("coin_sales").insertOne({
            contract_address: contractAddress,
            amount: event.amount.toString(),
            receiver_address: receiverAddress,
            updated_at: updatedAt,
          });

          await db.collection("coins").updateOne(
            {
              contract_address: contractAddress,
            },
            {
              $inc: {
                bought_supply: event.amount.toString(),
              },
            }
          );

          const coin = await db
            .collection("coins")
            .findOne({ contract_address: contractAddress });

          await analyticDbPool.query(
            `INSERT INTO 
                transactions(wallet_address, timestamp, coin_address, smart_contract_coin, quantity, action, price, chain)
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            `,
            [
              receiverAddress,
              updatedAt,
              contractAddress,
              contractAddress,
              (event.amount / BigInt(10 ** coin?.decimals)).toString(),
              "buy",
              1 / coin?.sale_rate,
              chainName,
            ]
          );
        }
      } else if (item.name === "Contracts.Instantiated") {
        const codeHash = item?.event?.call?.args.codeHash;
        if (codeHash === psp22CodeHash) {
          const params = psp22.decodeConstructor(item?.event?.call?.args.data);
          const ownerAddress = addressEncoder(item.event.args.deployer);
          const contractAddress = addressEncoder(item.event.args.contract);
          console.log(`[+] PSP22 Contracts instantiated params`);
          console.log(params);
          console.log(`[+] ownerAddress ${ownerAddress}`);
          console.log(`[+] contractAddress ${contractAddress}`);

          await db.collection("coins").updateOne(
            {
              contract_address: contractAddress,
            },
            {
              $set: {
                contract_address: contractAddress,
                minter_address: ownerAddress,
                name: new TextDecoder().decode(params.name),
                symbol: new TextDecoder().decode(params.symbol),
                decimals: params.decimals,
                total_supply: params.initialSupply.toString(),
                is_pausable: params.isPausable,
                is_mintable: params.isMintable,
                is_burnable: params.isBurnable,
                is_sale: params.isSale,
                chain: chainName,
              },
            },
            {
              upsert: true,
            }
          );
        } else if (codeHash === psp34CodeHash) {
          const params = psp34_inkv4.decodeConstructor(
            item?.event?.call?.args.data
          );
          const ownerAddress = addressEncoder(item.event.args.deployer);
          const contractAddress = addressEncoder(item.event.args.contract);
          console.log(`[+] PSP34 Contract instantiated params`);
          console.log(params);
          console.log(`[+] ownerAddress ${ownerAddress}`);
          console.log(`[+] contractAddress ${contractAddress}`);

          await db.collection("collections").updateOne(
            {
              contract_address: contractAddress,
            },
            {
              $set: {
                contract_address: contractAddress,
                owner_address: ownerAddress,
                name: new TextDecoder().decode(params.name),
                symbol: new TextDecoder().decode(params.symbol),
                base_uri: new TextDecoder().decode(params.baseUri),
                total_supply: params.maxSupply,
                price_per_mint: params.pricePerMint,
                public_sale_start_at: params.publicSaleStartAt,
                public_sale_end_at: params.publicSaleEndAt,
                launchpad_fee: params.launchpadFee,
                project_treasury: new TextDecoder().decode(
                  params.projectTreasury
                ),
                launchpad_treasury: new TextDecoder().decode(
                  params.launchpadTreasury
                ),
                chain: chainName,
              },
            },
            {
              upsert: true,
            }
          );
        }
      }
    }
  }
};
