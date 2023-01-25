import type { Principal } from "@dfinity/principal";
import type { Subaccount, Value } from "../../candid/icrc1_ledger";

// Source: https://github.com/dfinity/icrc-1#standard-metadata-entries
export enum IcrcMetadataResponseEntries {
  SYMBOL = "icrc1:symbol",
  NAME = "icrc1:name",
  DECIMALS = "icrc1:decimals",
  FEE = "icrc1:fee",
}

export type IcrcTokenMetadataResponse = [
  string | IcrcMetadataResponseEntries,
  Value
][];

export interface IcrcAccount {
  owner: Principal;
  subaccount?: Subaccount;
}
