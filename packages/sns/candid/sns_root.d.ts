import type { ActorMethod } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export interface CanisterCallError {
  code: [] | [number];
  description: string;
}
export interface CanisterIdRecord {
  canister_id: Principal;
}
export interface CanisterStatusResult {
  controller: Principal;
  status: CanisterStatusType;
  memory_size: bigint;
  module_hash: [] | [Array<number>];
}
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
export type CanisterStatusType =
  | { stopped: null }
  | { stopping: null }
  | { running: null };
export type CanisterStatusType_1 =
  | { stopped: null }
  | { stopping: null }
  | { running: null };
export interface CanisterSummary {
  status: [] | [CanisterStatusResultV2];
  canister_id: [] | [Principal];
}
export interface DefiniteCanisterSettingsArgs {
  controller: Principal;
  freezing_threshold: bigint;
  controllers: Array<Principal>;
  memory_allocation: bigint;
  compute_allocation: bigint;
}
export interface FailedUpdate {
  err: [] | [CanisterCallError];
  dapp_canister_id: [] | [Principal];
}
export interface GetSnsCanistersSummaryResponse {
  ledger_canister_summary: [] | [CanisterSummary];
  governance_canister_summary: [] | [CanisterSummary];
  root_canister_summary: [] | [CanisterSummary];
  dapp_canister_summaries: Array<CanisterSummary>;
}
export interface RegisterDappCanisterRequest {
  canister_id: [] | [Principal];
}
export interface SetDappControllersRequest {
  controller_principal_ids: Array<Principal>;
}
export interface SetDappControllersResponse {
  failed_updates: Array<FailedUpdate>;
}
export interface SnsRootCanister {
  dapp_canister_ids: Array<Principal>;
  governance_canister_id: [] | [Principal];
  swap_canister_id: [] | [Principal];
  ledger_canister_id: [] | [Principal];
}
export interface _SERVICE {
  canister_status: ActorMethod<[CanisterIdRecord], CanisterStatusResult>;
  get_build_metadata: ActorMethod<[], string>;
  get_sns_canisters_summary: ActorMethod<[{}], GetSnsCanistersSummaryResponse>;
  register_dapp_canister: ActorMethod<[RegisterDappCanisterRequest], {}>;
  set_dapp_controllers: ActorMethod<
    [SetDappControllersRequest],
    SetDappControllersResponse
  >;
}
