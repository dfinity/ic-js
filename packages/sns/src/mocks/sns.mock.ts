import { Principal } from "@dfinity/principal";
import { CanisterStatusResultV2 } from "../../../../candid/sns_root";

export const rootCanisterId: Principal = Principal.fromText(
  "sp3hj-caaaa-aaaaa-aaajq-cai"
);

export const snsMock: [string, Principal, CanisterStatusResultV2][] = [
  ["root", rootCanisterId, {} as unknown as CanisterStatusResultV2],
  [
    "ledger",
    Principal.fromText("si2b5-pyaaa-aaaaa-aaaja-cai"),
    {} as unknown as CanisterStatusResultV2,
  ],
  [
    "governance",
    Principal.fromText("sbzkb-zqaaa-aaaaa-aaaiq-cai"),
    {} as unknown as CanisterStatusResultV2,
  ],
  [
    "sale",
    Principal.fromText("s24we-diaaa-aaaaa-aaaka-cai"),
    {} as unknown as CanisterStatusResultV2,
  ],
];
