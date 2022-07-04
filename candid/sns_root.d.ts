import type { Principal } from "@dfinity/principal";
export interface CanisterStatusResultV2 {
  controller: Principal;
  status: CanisterStatusType_1;
  freezing_threshold: bigint;
  balance: Array<[Array<number>, bigint]>;
  memory_size: bigint;
  cycles: bigint;
  settings: DefiniteCanisterSettingsArgs;
  idle_cycles_burned_per_day: bigint;
  module_hash: [] | [Array<number>];
}
export type CanisterStatusType_1 =
  | { stopped: null }
  | { stopping: null }
  | { running: null };
export interface DefiniteCanisterSettingsArgs {
  controller: Principal;
  freezing_threshold: bigint;
  controllers: Array<Principal>;
  memory_allocation: bigint;
  compute_allocation: bigint;
}
export interface _SERVICE {
  get_sns_canisters_summary: (
    arg_0: Array<Principal>
  ) => Promise<Array<[string, Principal, CanisterStatusResultV2]>>;
}
