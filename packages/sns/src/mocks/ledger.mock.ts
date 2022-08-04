import type { Value } from "../../candid/icrc1_ledger";
import { SnsMetadataEntries } from "../types/ledger.responses";

export const tokeMetadataResponseMock: [string | SnsMetadataEntries, Value][] =
  [
    [SnsMetadataEntries.DECIMALS, { Nat: BigInt(8) }],
    [SnsMetadataEntries.NAME, { Text: "Beta Test" }],
    [SnsMetadataEntries.SYMBOL, { Text: "BTA" }],
    [SnsMetadataEntries.FEE, { Nat: BigInt(1000) }],
  ];
