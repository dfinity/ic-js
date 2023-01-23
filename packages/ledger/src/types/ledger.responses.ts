import type { Principal } from "@dfinity/principal";
import type { Subaccount, Value } from "../../candid/icrc1_ledger";

// Source: https://github.com/dfinity/icrc-1#standard-metadata-entries
export enum Icrc1MetadataResponseEntries {
  SYMBOL = "icrc1:symbol",
  NAME = "icrc1:name",
  DECIMALS = "icrc1:decimals",
  FEE = "icrc1:fee",
}

export type Icrc1TokenMetadataResponse = [
  string | Icrc1MetadataResponseEntries,
  Value
][];

export interface Icrc1Account {
  owner: Principal;
  subaccount?: Subaccount;
}
