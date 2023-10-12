import type { Principal } from "@dfinity/principal";
import type { Subaccount, Value } from "../../candid/icrc_ledger";

// Source: https://github.com/dfinity/icrc-1#standard-metadata-entries
export enum IcrcMetadataResponseEntries {
  SYMBOL = "icrc1:symbol",
  NAME = "icrc1:name",
  DECIMALS = "icrc1:decimals",
  FEE = "icrc1:fee",
  LOGO = "icrc1:logo",
}

export type IcrcTokenMetadataResponse = [
  string | IcrcMetadataResponseEntries,
  Value
][];

export interface IcrcAccount {
  owner: Principal;
  subaccount?: Subaccount;
}
