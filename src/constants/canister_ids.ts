import { Principal } from "@dfinity/principal";

export const GOVERNANCE_CANISTER_ID = Principal.fromText(
  "rrkah-fqaaa-aaaaa-aaaaq-cai"
);

export const MAINNET_GOVERNANCE_CANISTER_ID = Principal.fromText(
  "rrkah-fqaaa-aaaaa-aaaaq-cai"
);

export const MAINNET_LEDGER_CANISTER_ID = Principal.fromText(
  "ryjl3-tyaaa-aaaaa-aaaba-cai"
);

export const MAINNET_GENESIS_TOKEN_CANISTER_ID = Principal.fromText(
  "renrk-eyaaa-aaaaa-aaada-cai"
);

// TODO: Sns-wasm canister is not yet deployed on mainnet
export const MAINNET_SNS_WASM_CANISTER_ID = Principal.fromText(
  "r7inp-6aaaa-aaaaa-aaabq-cai"
);
