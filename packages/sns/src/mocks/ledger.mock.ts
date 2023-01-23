import type { Icrc1Value } from "@dfinity/ledger";
import { Icrc1MetadataResponseEntries } from "@dfinity/ledger";
import { Principal } from "@dfinity/principal";

export const tokeMetadataResponseMock: [
  string | Icrc1MetadataResponseEntries,
  Icrc1Value
][] = [
  [Icrc1MetadataResponseEntries.DECIMALS, { Nat: BigInt(8) }],
  [Icrc1MetadataResponseEntries.NAME, { Text: "Beta Test" }],
  [Icrc1MetadataResponseEntries.SYMBOL, { Text: "BTA" }],
  [Icrc1MetadataResponseEntries.FEE, { Nat: BigInt(1000) }],
];

export const mockPrincipalText =
  "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe";

export const mockPrincipal = Principal.fromText(mockPrincipalText);
