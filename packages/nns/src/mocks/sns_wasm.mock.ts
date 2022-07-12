import { Principal } from "@dfinity/principal";
import type { DeployedSns } from "../../candid/sns_wasm";

export const deployedSnsMock: DeployedSns[] = [
  {
    root_canister_id: [Principal.fromText("pin7y-wyaaa-aaaaa-aacpa-cai")],
  },
  {
    root_canister_id: [Principal.fromText("zdlco-vyaaa-aaaaa-aabva-cai")],
  },
];
