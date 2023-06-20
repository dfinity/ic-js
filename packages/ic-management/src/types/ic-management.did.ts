import type { definite_canister_settings } from "../../candid/ic-management";

export type CanisterStatusDid =
  | { stopped: null }
  | { stopping: null }
  | { running: null };

export type CanisterStatusDidResponse = {
  status: CanisterStatusDid;
  memory_size: bigint;
  cycles: bigint;
  settings: definite_canister_settings;
  module_hash: [] | [Array<number>];
};
