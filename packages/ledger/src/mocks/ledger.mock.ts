import { Principal } from "@dfinity/principal";
import type { Value } from "../../candid/icrc1_ledger";
import { Icrc1MetadataResponseEntries } from "../types/ledger.responses";

export const tokeMetadataResponseMock: [
  string | Icrc1MetadataResponseEntries,
  Value
][] = [
  [Icrc1MetadataResponseEntries.DECIMALS, { Nat: BigInt(8) }],
  [Icrc1MetadataResponseEntries.NAME, { Text: "Beta Test" }],
  [Icrc1MetadataResponseEntries.SYMBOL, { Text: "BTA" }],
  [Icrc1MetadataResponseEntries.FEE, { Nat: BigInt(1000) }],
];

export const mockPrincipalText =
  "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe";

export const mockPrincipal = Principal.fromText(mockPrincipalText);

export const ledgerCanisterIdMock: Principal = Principal.fromText(
  "ktxdj-qiaaa-aaaaa-aacqa-cai"
);
