import { Principal } from "@dfinity/principal";
import type { DeployedSns } from "../../../../candid/sns_wasm";

export const snsMock: DeployedSns[] = [
  {
    root_canister_id: [Principal.fromText("sp3hj-caaaa-aaaaa-aaajq-cai")],
  },
  {
    root_canister_id: [Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai")],
  },
];
