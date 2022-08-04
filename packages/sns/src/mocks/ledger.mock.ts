import type { Value } from "../../candid/icrc1_ledger";
import { SnsMetadataResponseEntries } from "../types/ledger.responses";

export const tokeMetadataResponseMock: [string | SnsMetadataResponseEntries, Value][] =
  [
    [SnsMetadataResponseEntries.DECIMALS, { Nat: BigInt(8) }],
    [SnsMetadataResponseEntries.NAME, { Text: "Beta Test" }],
    [SnsMetadataResponseEntries.SYMBOL, { Text: "BTA" }],
    [SnsMetadataResponseEntries.FEE, { Nat: BigInt(1000) }],
  ];
