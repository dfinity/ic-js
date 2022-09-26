import { Principal } from "@dfinity/principal";
import type { Value } from "../../candid/icrc1_ledger";
import { SnsMetadataResponseEntries } from "../types/ledger.responses";

export const tokeMetadataResponseMock: [
  string | SnsMetadataResponseEntries,
  Value
][] = [
  [SnsMetadataResponseEntries.DECIMALS, { Nat: BigInt(8) }],
  [SnsMetadataResponseEntries.NAME, { Text: "Beta Test" }],
  [SnsMetadataResponseEntries.SYMBOL, { Text: "BTA" }],
  [SnsMetadataResponseEntries.FEE, { Nat: BigInt(1000) }],
];

export const mockPrincipalText =
  "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe";

export const mockPrincipal = Principal.fromText(mockPrincipalText);
