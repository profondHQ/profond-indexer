import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0xf052b1c1026689919114f8793cf965d335eccf16799335b447793ba16682d8c1",
    "language": "ink! 4.3.0",
    "compiler": "rustc 1.70.0-nightly",
    "build_info": {
      "build_mode": "Release",
      "cargo_contract_version": "2.2.1",
      "rust_toolchain": "nightly-x86_64-unknown-linux-gnu",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "base_token",
    "version": "1.0.0",
    "authors": [
      "Irfi M. <mrizkyirfianto@gmail.com>"
    ]
  },
  "spec": {
    "constructors": [
      {
        "args": [
          {
            "label": "total_supply",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          },
          {
            "label": "name",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 7
            }
          },
          {
            "label": "symbol",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 7
            }
          },
          {
            "label": "decimals",
            "type": {
              "displayName": [
                "u8"
              ],
              "type": 3
            }
          },
          {
            "label": "is_pausable",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 4
            }
          },
          {
            "label": "is_mintable",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 4
            }
          },
          {
            "label": "is_burnable",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 4
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "new",
        "payable": false,
        "returnType": {
          "displayName": [
            "ink_primitives",
            "ConstructorResult"
          ],
          "type": 8
        },
        "selector": "0x9bae9d5e"
      }
    ],
    "docs": [],
    "environment": {
      "accountId": {
        "displayName": [
          "AccountId"
        ],
        "type": 5
      },
      "balance": {
        "displayName": [
          "Balance"
        ],
        "type": 0
      },
      "blockNumber": {
        "displayName": [
          "BlockNumber"
        ],
        "type": 19
      },
      "chainExtension": {
        "displayName": [
          "ChainExtension"
        ],
        "type": 20
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 17
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 18
      }
    },
    "events": [],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 9
    },
    "messages": [
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "change_state",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 10
        },
        "selector": "0x300f90c8"
      },
      {
        "args": [
          {
            "label": "account",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 5
            }
          },
          {
            "label": "amount",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "mint_to",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 10
        },
        "selector": "0x1d2f13c5"
      },
      {
        "args": [
          {
            "label": "amount",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "burn",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 10
        },
        "selector": "0xb1efc17b"
      },
      {
        "args": [
          {
            "label": "spender",
            "type": {
              "displayName": [
                "psp22_external",
                "IncreaseAllowanceInput1"
              ],
              "type": 5
            }
          },
          {
            "label": "delta_value",
            "type": {
              "displayName": [
                "psp22_external",
                "IncreaseAllowanceInput2"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [
          " Atomically increases the allowance granted to `spender` by the caller.",
          "",
          " An `Approval` event is emitted.",
          "",
          " # Errors",
          "",
          " Returns `ZeroSenderAddress` error if sender's address is zero.",
          "",
          " Returns `ZeroRecipientAddress` error if recipient's address is zero."
        ],
        "label": "PSP22::increase_allowance",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 10
        },
        "selector": "0x96d6b57a"
      },
      {
        "args": [
          {
            "label": "to",
            "type": {
              "displayName": [
                "psp22_external",
                "TransferInput1"
              ],
              "type": 5
            }
          },
          {
            "label": "value",
            "type": {
              "displayName": [
                "psp22_external",
                "TransferInput2"
              ],
              "type": 0
            }
          },
          {
            "label": "data",
            "type": {
              "displayName": [
                "psp22_external",
                "TransferInput3"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [
          " Transfers `value` amount of tokens from the caller's account to account `to`",
          " with additional `data` in unspecified format.",
          "",
          " On success a `Transfer` event is emitted.",
          "",
          " # Errors",
          "",
          " Returns `InsufficientBalance` error if there are not enough tokens on",
          " the caller's account Balance.",
          "",
          " Returns `ZeroSenderAddress` error if sender's address is zero.",
          "",
          " Returns `ZeroRecipientAddress` error if recipient's address is zero."
        ],
        "label": "PSP22::transfer",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 10
        },
        "selector": "0xdb20f9f5"
      },
      {
        "args": [
          {
            "label": "spender",
            "type": {
              "displayName": [
                "psp22_external",
                "ApproveInput1"
              ],
              "type": 5
            }
          },
          {
            "label": "value",
            "type": {
              "displayName": [
                "psp22_external",
                "ApproveInput2"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [
          " Allows `spender` to withdraw from the caller's account multiple times, up to",
          " the `value` amount.",
          "",
          " If this function is called again it overwrites the current allowance with `value`.",
          "",
          " An `Approval` event is emitted.",
          "",
          " # Errors",
          "",
          " Returns `ZeroSenderAddress` error if sender's address is zero.",
          "",
          " Returns `ZeroRecipientAddress` error if recipient's address is zero."
        ],
        "label": "PSP22::approve",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 10
        },
        "selector": "0xb20f1bbd"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Returns the total token supply."
        ],
        "label": "PSP22::total_supply",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x162df8c2"
      },
      {
        "args": [
          {
            "label": "owner",
            "type": {
              "displayName": [
                "psp22_external",
                "AllowanceInput1"
              ],
              "type": 5
            }
          },
          {
            "label": "spender",
            "type": {
              "displayName": [
                "psp22_external",
                "AllowanceInput2"
              ],
              "type": 5
            }
          }
        ],
        "default": false,
        "docs": [
          " Returns the amount which `spender` is still allowed to withdraw from `owner`.",
          "",
          " Returns `0` if no allowance has been set `0`."
        ],
        "label": "PSP22::allowance",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x4d47d921"
      },
      {
        "args": [
          {
            "label": "spender",
            "type": {
              "displayName": [
                "psp22_external",
                "DecreaseAllowanceInput1"
              ],
              "type": 5
            }
          },
          {
            "label": "delta_value",
            "type": {
              "displayName": [
                "psp22_external",
                "DecreaseAllowanceInput2"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [
          " Atomically decreases the allowance granted to `spender` by the caller.",
          "",
          " An `Approval` event is emitted.",
          "",
          " # Errors",
          "",
          " Returns `InsufficientAllowance` error if there are not enough tokens allowed",
          " by owner for `spender`.",
          "",
          " Returns `ZeroSenderAddress` error if sender's address is zero.",
          "",
          " Returns `ZeroRecipientAddress` error if recipient's address is zero."
        ],
        "label": "PSP22::decrease_allowance",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 10
        },
        "selector": "0xfecb57d5"
      },
      {
        "args": [
          {
            "label": "owner",
            "type": {
              "displayName": [
                "psp22_external",
                "BalanceOfInput1"
              ],
              "type": 5
            }
          }
        ],
        "default": false,
        "docs": [
          " Returns the account Balance for the specified `owner`.",
          "",
          " Returns `0` if the account is non-existent."
        ],
        "label": "PSP22::balance_of",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 13
        },
        "selector": "0x6568382f"
      },
      {
        "args": [
          {
            "label": "from",
            "type": {
              "displayName": [
                "psp22_external",
                "TransferFromInput1"
              ],
              "type": 5
            }
          },
          {
            "label": "to",
            "type": {
              "displayName": [
                "psp22_external",
                "TransferFromInput2"
              ],
              "type": 5
            }
          },
          {
            "label": "value",
            "type": {
              "displayName": [
                "psp22_external",
                "TransferFromInput3"
              ],
              "type": 0
            }
          },
          {
            "label": "data",
            "type": {
              "displayName": [
                "psp22_external",
                "TransferFromInput4"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [
          " Transfers `value` tokens on the behalf of `from` to the account `to`",
          " with additional `data` in unspecified format.",
          "",
          " This can be used to allow a contract to transfer tokens on ones behalf and/or",
          " to charge fees in sub-currencies, for example.",
          "",
          " On success a `Transfer` and `Approval` events are emitted.",
          "",
          " # Errors",
          "",
          " Returns `InsufficientAllowance` error if there are not enough tokens allowed",
          " for the caller to withdraw from `from`.",
          "",
          " Returns `InsufficientBalance` error if there are not enough tokens on",
          " the the account Balance of `from`.",
          "",
          " Returns `ZeroSenderAddress` error if sender's address is zero.",
          "",
          " Returns `ZeroRecipientAddress` error if recipient's address is zero."
        ],
        "label": "PSP22::transfer_from",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 10
        },
        "selector": "0x54b3c76e"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Returns the token name."
        ],
        "label": "PSP22Metadata::token_name",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 14
        },
        "selector": "0x3d261bd4"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Returns the token symbol."
        ],
        "label": "PSP22Metadata::token_symbol",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 14
        },
        "selector": "0x34205be5"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Returns the token decimals."
        ],
        "label": "PSP22Metadata::token_decimals",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 15
        },
        "selector": "0x7271b782"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Returns true if the contract is paused, and false otherwise."
        ],
        "label": "Pausable::paused",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 16
        },
        "selector": "0xd123ce11"
      }
    ]
  },
  "storage": {
    "root": {
      "layout": {
        "struct": {
          "fields": [
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 0
                        }
                      },
                      "name": "supply"
                    },
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0x1d458d3b",
                              "ty": 0
                            }
                          },
                          "root_key": "0x1d458d3b"
                        }
                      },
                      "name": "balances"
                    },
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0x0abd72fb",
                              "ty": 0
                            }
                          },
                          "root_key": "0x0abd72fb"
                        }
                      },
                      "name": "allowances"
                    },
                    {
                      "layout": {
                        "enum": {
                          "dispatchKey": "0x00000000",
                          "name": "Option",
                          "variants": {
                            "0": {
                              "fields": [],
                              "name": "None"
                            },
                            "1": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x00000000",
                                      "ty": 1
                                    }
                                  },
                                  "name": "0"
                                }
                              ],
                              "name": "Some"
                            }
                          }
                        }
                      },
                      "name": "_reserved"
                    }
                  ],
                  "name": "Data"
                }
              },
              "name": "psp22"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "enum": {
                          "dispatchKey": "0x00000000",
                          "name": "Option",
                          "variants": {
                            "0": {
                              "fields": [],
                              "name": "None"
                            },
                            "1": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x00000000",
                                      "ty": 2
                                    }
                                  },
                                  "name": "0"
                                }
                              ],
                              "name": "Some"
                            }
                          }
                        }
                      },
                      "name": "name"
                    },
                    {
                      "layout": {
                        "enum": {
                          "dispatchKey": "0x00000000",
                          "name": "Option",
                          "variants": {
                            "0": {
                              "fields": [],
                              "name": "None"
                            },
                            "1": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x00000000",
                                      "ty": 2
                                    }
                                  },
                                  "name": "0"
                                }
                              ],
                              "name": "Some"
                            }
                          }
                        }
                      },
                      "name": "symbol"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 3
                        }
                      },
                      "name": "decimals"
                    },
                    {
                      "layout": {
                        "enum": {
                          "dispatchKey": "0x00000000",
                          "name": "Option",
                          "variants": {
                            "0": {
                              "fields": [],
                              "name": "None"
                            },
                            "1": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x00000000",
                                      "ty": 1
                                    }
                                  },
                                  "name": "0"
                                }
                              ],
                              "name": "Some"
                            }
                          }
                        }
                      },
                      "name": "_reserved"
                    }
                  ],
                  "name": "Data"
                }
              },
              "name": "metadata"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 4
                        }
                      },
                      "name": "is_pausable"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 4
                        }
                      },
                      "name": "is_mintable"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 4
                        }
                      },
                      "name": "is_burnable"
                    },
                    {
                      "layout": {
                        "enum": {
                          "dispatchKey": "0x00000000",
                          "name": "Option",
                          "variants": {
                            "0": {
                              "fields": [],
                              "name": "None"
                            },
                            "1": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x00000000",
                                      "ty": 5
                                    }
                                  },
                                  "name": "0"
                                }
                              ],
                              "name": "Some"
                            }
                          }
                        }
                      },
                      "name": "minter_address"
                    }
                  ],
                  "name": "EnabledFeatures"
                }
              },
              "name": "features"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 4
                        }
                      },
                      "name": "paused"
                    },
                    {
                      "layout": {
                        "enum": {
                          "dispatchKey": "0x00000000",
                          "name": "Option",
                          "variants": {
                            "0": {
                              "fields": [],
                              "name": "None"
                            },
                            "1": {
                              "fields": [
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x00000000",
                                      "ty": 1
                                    }
                                  },
                                  "name": "0"
                                }
                              ],
                              "name": "Some"
                            }
                          }
                        }
                      },
                      "name": "_reserved"
                    }
                  ],
                  "name": "Data"
                }
              },
              "name": "pause"
            }
          ],
          "name": "Contract"
        }
      },
      "root_key": "0x00000000"
    }
  },
  "types": [
    {
      "id": 0,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 1,
      "type": {
        "def": {
          "tuple": []
        }
      }
    },
    {
      "id": 2,
      "type": {
        "def": {
          "sequence": {
            "type": 3
          }
        }
      }
    },
    {
      "id": 3,
      "type": {
        "def": {
          "primitive": "u8"
        }
      }
    },
    {
      "id": 4,
      "type": {
        "def": {
          "primitive": "bool"
        }
      }
    },
    {
      "id": 5,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 6,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "AccountId"
        ]
      }
    },
    {
      "id": 6,
      "type": {
        "def": {
          "array": {
            "len": 32,
            "type": 3
          }
        }
      }
    },
    {
      "id": 7,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 2
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 2
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 8,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 1
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 9
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 1
          },
          {
            "name": "E",
            "type": 9
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 9,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 1,
                "name": "CouldNotReadInput"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "LangError"
        ]
      }
    },
    {
      "id": 10,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 11
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 9
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 11
          },
          {
            "name": "E",
            "type": 9
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 11,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 1
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 1
          },
          {
            "name": "E",
            "type": 12
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 12,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 2,
                    "typeName": "String"
                  }
                ],
                "index": 0,
                "name": "Custom"
              },
              {
                "index": 1,
                "name": "InsufficientBalance"
              },
              {
                "index": 2,
                "name": "InsufficientAllowance"
              },
              {
                "index": 3,
                "name": "ZeroRecipientAddress"
              },
              {
                "index": 4,
                "name": "ZeroSenderAddress"
              },
              {
                "fields": [
                  {
                    "type": 2,
                    "typeName": "String"
                  }
                ],
                "index": 5,
                "name": "SafeTransferCheckFailed"
              }
            ]
          }
        },
        "path": [
          "openbrush_contracts",
          "traits",
          "errors",
          "psp22",
          "PSP22Error"
        ]
      }
    },
    {
      "id": 13,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 0
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 9
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 0
          },
          {
            "name": "E",
            "type": 9
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 14,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 7
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 9
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 7
          },
          {
            "name": "E",
            "type": 9
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 15,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 3
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 9
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 3
          },
          {
            "name": "E",
            "type": 9
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 16,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 4
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 9
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 4
          },
          {
            "name": "E",
            "type": 9
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 17,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 6,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "Hash"
        ]
      }
    },
    {
      "id": 18,
      "type": {
        "def": {
          "primitive": "u64"
        }
      }
    },
    {
      "id": 19,
      "type": {
        "def": {
          "primitive": "u32"
        }
      }
    },
    {
      "id": 20,
      "type": {
        "def": {
          "variant": {}
        },
        "path": [
          "ink_env",
          "types",
          "NoChainExtension"
        ]
      }
    }
  ],
  "version": "4"
}

const _abi = new Abi(metadata)

export function decodeEvent(hex: string): Event {
    return _abi.decodeEvent(hex)
}

export function decodeMessage(hex: string): Message {
    return _abi.decodeMessage(hex)
}

export function decodeConstructor(hex: string): Constructor {
    return _abi.decodeConstructor(hex)
}

export interface Chain {
    client: {
        call: <T=any>(method: string, params?: unknown[]) => Promise<T>
    }
}

export interface ChainContext {
    _chain: Chain
}

export class Contract {
    constructor(private ctx: ChainContext, private address: string, private blockHash?: string) { }

    PSP22_total_supply(): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x162df8c2', [])
    }

    PSP22_allowance(owner: Uint8Array, spender: Uint8Array): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x4d47d921', [owner, spender])
    }

    PSP22_balance_of(owner: Uint8Array): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x6568382f', [owner])
    }

    PSP22Metadata_token_name(): Promise<Result<(Uint8Array | undefined), LangError>> {
        return this.stateCall('0x3d261bd4', [])
    }

    PSP22Metadata_token_symbol(): Promise<Result<(Uint8Array | undefined), LangError>> {
        return this.stateCall('0x34205be5', [])
    }

    PSP22Metadata_token_decimals(): Promise<Result<u8, LangError>> {
        return this.stateCall('0x7271b782', [])
    }

    Pausable_paused(): Promise<Result<bool, LangError>> {
        return this.stateCall('0xd123ce11', [])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.client.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Event = never

export type Message = Message_change_state | Message_mint_to | Message_burn | Message_PSP22_increase_allowance | Message_PSP22_transfer | Message_PSP22_approve | Message_PSP22_total_supply | Message_PSP22_allowance | Message_PSP22_decrease_allowance | Message_PSP22_balance_of | Message_PSP22_transfer_from | Message_PSP22Metadata_token_name | Message_PSP22Metadata_token_symbol | Message_PSP22Metadata_token_decimals | Message_Pausable_paused

export interface Message_change_state {
    __kind: 'change_state'
}

export interface Message_mint_to {
    __kind: 'mint_to'
    account: Uint8Array
    amount: bigint
}

export interface Message_burn {
    __kind: 'burn'
    amount: bigint
}

/**
 *  Atomically increases the allowance granted to `spender` by the caller.
 * 
 *  An `Approval` event is emitted.
 * 
 *  # Errors
 * 
 *  Returns `ZeroSenderAddress` error if sender's address is zero.
 * 
 *  Returns `ZeroRecipientAddress` error if recipient's address is zero.
 */
export interface Message_PSP22_increase_allowance {
    __kind: 'PSP22_increase_allowance'
    spender: Uint8Array
    deltaValue: bigint
}

/**
 *  Transfers `value` amount of tokens from the caller's account to account `to`
 *  with additional `data` in unspecified format.
 * 
 *  On success a `Transfer` event is emitted.
 * 
 *  # Errors
 * 
 *  Returns `InsufficientBalance` error if there are not enough tokens on
 *  the caller's account Balance.
 * 
 *  Returns `ZeroSenderAddress` error if sender's address is zero.
 * 
 *  Returns `ZeroRecipientAddress` error if recipient's address is zero.
 */
export interface Message_PSP22_transfer {
    __kind: 'PSP22_transfer'
    to: Uint8Array
    value: bigint
    data: Uint8Array
}

/**
 *  Allows `spender` to withdraw from the caller's account multiple times, up to
 *  the `value` amount.
 * 
 *  If this function is called again it overwrites the current allowance with `value`.
 * 
 *  An `Approval` event is emitted.
 * 
 *  # Errors
 * 
 *  Returns `ZeroSenderAddress` error if sender's address is zero.
 * 
 *  Returns `ZeroRecipientAddress` error if recipient's address is zero.
 */
export interface Message_PSP22_approve {
    __kind: 'PSP22_approve'
    spender: Uint8Array
    value: bigint
}

/**
 *  Returns the total token supply.
 */
export interface Message_PSP22_total_supply {
    __kind: 'PSP22_total_supply'
}

/**
 *  Returns the amount which `spender` is still allowed to withdraw from `owner`.
 * 
 *  Returns `0` if no allowance has been set `0`.
 */
export interface Message_PSP22_allowance {
    __kind: 'PSP22_allowance'
    owner: Uint8Array
    spender: Uint8Array
}

/**
 *  Atomically decreases the allowance granted to `spender` by the caller.
 * 
 *  An `Approval` event is emitted.
 * 
 *  # Errors
 * 
 *  Returns `InsufficientAllowance` error if there are not enough tokens allowed
 *  by owner for `spender`.
 * 
 *  Returns `ZeroSenderAddress` error if sender's address is zero.
 * 
 *  Returns `ZeroRecipientAddress` error if recipient's address is zero.
 */
export interface Message_PSP22_decrease_allowance {
    __kind: 'PSP22_decrease_allowance'
    spender: Uint8Array
    deltaValue: bigint
}

/**
 *  Returns the account Balance for the specified `owner`.
 * 
 *  Returns `0` if the account is non-existent.
 */
export interface Message_PSP22_balance_of {
    __kind: 'PSP22_balance_of'
    owner: Uint8Array
}

/**
 *  Transfers `value` tokens on the behalf of `from` to the account `to`
 *  with additional `data` in unspecified format.
 * 
 *  This can be used to allow a contract to transfer tokens on ones behalf and/or
 *  to charge fees in sub-currencies, for example.
 * 
 *  On success a `Transfer` and `Approval` events are emitted.
 * 
 *  # Errors
 * 
 *  Returns `InsufficientAllowance` error if there are not enough tokens allowed
 *  for the caller to withdraw from `from`.
 * 
 *  Returns `InsufficientBalance` error if there are not enough tokens on
 *  the the account Balance of `from`.
 * 
 *  Returns `ZeroSenderAddress` error if sender's address is zero.
 * 
 *  Returns `ZeroRecipientAddress` error if recipient's address is zero.
 */
export interface Message_PSP22_transfer_from {
    __kind: 'PSP22_transfer_from'
    from: Uint8Array
    to: Uint8Array
    value: bigint
    data: Uint8Array
}

/**
 *  Returns the token name.
 */
export interface Message_PSP22Metadata_token_name {
    __kind: 'PSP22Metadata_token_name'
}

/**
 *  Returns the token symbol.
 */
export interface Message_PSP22Metadata_token_symbol {
    __kind: 'PSP22Metadata_token_symbol'
}

/**
 *  Returns the token decimals.
 */
export interface Message_PSP22Metadata_token_decimals {
    __kind: 'PSP22Metadata_token_decimals'
}

/**
 *  Returns true if the contract is paused, and false otherwise.
 */
export interface Message_Pausable_paused {
    __kind: 'Pausable_paused'
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    totalSupply: bigint
    name: (Uint8Array | undefined)
    symbol: (Uint8Array | undefined)
    decimals: u8
    isPausable: bool
    isMintable: bool
    isBurnable: bool
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type u8 = number

export type bool = boolean

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
