import { Principal } from "@dfinity/principal";
import type { DeployedSns } from "../../candid/sns_wasm";

export const deployedSnsMock: DeployedSns[] = [
  {
    root_canister_id: [Principal.fromText("pin7y-wyaaa-aaaaa-aacpa-cai")],
    governance_canister_id: [Principal.fromText("pin7y-wyaaa-aaaaa-aacpa-cai")],
    index_canister_id: [Principal.fromText("pin7y-wyaaa-aaaaa-aacpa-cai")],
    swap_canister_id: [Principal.fromText("pin7y-wyaaa-aaaaa-aacpa-cai")],
    ledger_canister_id: [Principal.fromText("pin7y-wyaaa-aaaaa-aacpa-cai")],
  },
  {
    root_canister_id: [Principal.fromText("zdlco-vyaaa-aaaaa-aabva-cai")],
    governance_canister_id: [Principal.fromText("zdlco-vyaaa-aaaaa-aabva-cai")],
    index_canister_id: [Principal.fromText("zdlco-vyaaa-aaaaa-aabva-cai")],
    swap_canister_id: [Principal.fromText("zdlco-vyaaa-aaaaa-aabva-cai")],
    ledger_canister_id: [Principal.fromText("zdlco-vyaaa-aaaaa-aabva-cai")],
  },
];
