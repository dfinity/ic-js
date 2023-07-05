import { Principal } from "@dfinity/principal";
import { MetadataValue } from "../../candid/icrc1_ledger";
import { IcrcMetadataResponseEntries } from "../types/ledger.responses";

export const tokeMetadataResponseMock: [
  string | IcrcMetadataResponseEntries,
  MetadataValue
][] = [
  [IcrcMetadataResponseEntries.DECIMALS, { Nat: BigInt(8) }],
  [IcrcMetadataResponseEntries.NAME, { Text: "Beta Test" }],
  [IcrcMetadataResponseEntries.SYMBOL, { Text: "BTA" }],
  [IcrcMetadataResponseEntries.FEE, { Nat: BigInt(1000) }],
  [
    IcrcMetadataResponseEntries.LOGO,
    { Text: "data:image/svg+xml;base64,PHN2ZyB3aW..." },
  ],
];

export const mockPrincipalText =
  "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe";

export const mockPrincipal = Principal.fromText(mockPrincipalText);

export const ledgerCanisterIdMock: Principal = Principal.fromText(
  "ktxdj-qiaaa-aaaaa-aacqa-cai"
);

export const indexCanisterIdMock: Principal = Principal.fromText(
  "qjdve-lqaaa-aaaaa-aaaeq-cai"
);
