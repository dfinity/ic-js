import type { definite_canister_settings } from "../../candid/ic-management";

export interface CanisterStatusResponse {
  status:
    | {
        stopped: null;
      }
    | {
        stopping: null;
      }
    | {
        running: null;
      };
  memory_size: bigint;
  cycles: bigint;
  settings: definite_canister_settings;
  module_hash: [] | [Array<number>];
}
