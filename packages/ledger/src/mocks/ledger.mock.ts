import { Principal } from "@dfinity/principal";
import type { Value } from "../../candid/icrc1_ledger";
import { IcrcMetadataResponseEntries } from "../types/ledger.responses";

export const tokeMetadataResponseMock: [
  string | IcrcMetadataResponseEntries,
  Value
][] = [
  [IcrcMetadataResponseEntries.DECIMALS, { Nat: BigInt(8) }],
  [IcrcMetadataResponseEntries.NAME, { Text: "Beta Test" }],
  [IcrcMetadataResponseEntries.SYMBOL, { Text: "BTA" }],
  [IcrcMetadataResponseEntries.FEE, { Nat: BigInt(1000) }],
];

export const mockPrincipalText =
  "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe";

export const mockPrincipal = Principal.fromText(mockPrincipalText);

export const ledgerCanisterIdMock: Principal = Principal.fromText(
  "ktxdj-qiaaa-aaaaa-aacqa-cai"
);
