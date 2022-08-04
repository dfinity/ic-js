import type { Value } from "../../candid/icrc1_ledger";

// Source: https://github.com/dfinity/icrc-1#standard-metadata-entries
export enum SnsMetadataResponseEntries {
  SYMBOL = "icrc1:symbol",
  NAME = "icrc1:name",
  DECIMALS = "icrc1:decimals",
  FEE = "icrc1:fee",
}

export type SnsTokenMetadataResponse = [string | SnsMetadataResponseEntries, Value][];
