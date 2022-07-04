import { Principal } from "@dfinity/principal";
import { DeployedSns } from "../../candid/sns_wasm.idl";

export const snsMock: DeployedSns[] = [
  {
    root_canister_id: [Principal.fromText("rrkah-fqaaa-aaaaa-aaaaq-cai")],
  },
  {
    root_canister_id: [Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai")],
  },
];
