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

// Shibuya
const CONTRACT_ADDRESS_SS58 = "bPDAvNfosiVGRzzdE4EidP9utXsiTz6STZvi8SH8QgWEKvg";
const SS58_PREFIX = ss58.decode(CONTRACT_ADDRESS_SS58).prefix;

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: lookupArchive("shibuya", {
      release: "FireSquid",
      type: "Substrate",
    }),
  })
  .setBlockRange({ from: 4654321 })
  .addEvent("Contracts.Instantiated");

type Item = BatchProcessorItem<typeof processor>;
type Ctx = BatchContext<Store, Item>;

const main = async () => {
  processor.run(new TypeormDatabase(), async (ctx) => {
    processBlocks(ctx);
  });
};
main();

const psp22CodeHash =
  "0xf052b1c1026689919114f8793cf965d335eccf16799335b447793ba16682d8c1";

const psp34CodeHash =
  "0x23e2ae0aa98a1e52a6d6d30fcc1ce713bee5425c26725e6c802b2737ee88fa18";

function addressEncoder(hexAddress: string): string {
  return ss58
    .codec(SS58_PREFIX)
    .encode(Buffer.from(hexAddress.replace("0x", ""), "hex"));
}

function processBlocks(ctx: Ctx) {
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.name === "Contracts.Instantiated") {
        const codeHash = item?.event?.call?.args.codeHash;
        if (codeHash === psp22CodeHash) {
          const params = psp22.decodeConstructor(item?.event?.call?.args.data);
          const ownerAddress = addressEncoder(item.event.args.deployer);
          const contractAddress = addressEncoder(item.event.args.contract);
          console.log(`[+] params`);
          console.log(params);
          console.log(`[+] ownerAddress ${ownerAddress}`);
          console.log(`[+] contractAddress ${contractAddress}`);
        } else if (codeHash === psp34CodeHash) {
          const params = psp34_inkv4.decodeConstructor(
            item?.event?.call?.args.data
          );
          const ownerAddress = addressEncoder(item.event.args.deployer);
          const contractAddress = addressEncoder(item.event.args.contract);
          console.log(`[+] params`);
          console.log(params);
          console.log(`[+] ownerAddress ${ownerAddress}`);
          console.log(`[+] contractAddress ${contractAddress}`);
        }
      }
    }
  }
}
