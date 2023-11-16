import type { ActorMethod } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export type AuthzChangeOp =
  | { Authorize: { add_self: boolean } }
  | { Deauthorize: null };
export interface CanisterCallError {
  code: [] | [number];
  description: string;
}
export interface CanisterIdRecord {
  canister_id: Principal;
}
export type CanisterInstallMode =
  | { reinstall: null }
  | { upgrade: null }
  | { install: null };
export interface CanisterStatusResult {
  status: CanisterStatusType;
  memory_size: bigint;
  cycles: bigint;
  settings: DefiniteCanisterSettings;
  module_hash: [] | [Uint8Array | number[]];
}
export interface CanisterStatusResultV2 {
  status: CanisterStatusType;
  memory_size: bigint;
  cycles: bigint;
  settings: DefiniteCanisterSettingsArgs;
  idle_cycles_burned_per_day: bigint;
  module_hash: [] | [Uint8Array | number[]];
}
export type CanisterStatusType =
  | { stopped: null }
  | { stopping: null }
  | { running: null };
export interface CanisterSummary {
  status: [] | [CanisterStatusResultV2];
  canister_id: [] | [Principal];
}
export interface ChangeCanisterProposal {
  arg: Uint8Array | number[];
  wasm_module: Uint8Array | number[];
  stop_before_installing: boolean;
  mode: CanisterInstallMode;
  canister_id: Principal;
  query_allocation: [] | [bigint];
  authz_changes: Array<MethodAuthzChange>;
  memory_allocation: [] | [bigint];
  compute_allocation: [] | [bigint];
}
export interface DefiniteCanisterSettings {
  controllers: Array<Principal>;
}
export interface DefiniteCanisterSettingsArgs {
  freezing_threshold: bigint;
  controllers: Array<Principal>;
  memory_allocation: bigint;
  compute_allocation: bigint;
}
export interface FailedUpdate {
  err: [] | [CanisterCallError];
  dapp_canister_id: [] | [Principal];
}
export interface GetSnsCanistersSummaryRequest {
  update_canister_list: [] | [boolean];
}
export interface GetSnsCanistersSummaryResponse {
  root: [] | [CanisterSummary];
  swap: [] | [CanisterSummary];
  ledger: [] | [CanisterSummary];
  index: [] | [CanisterSummary];
  governance: [] | [CanisterSummary];
  dapps: Array<CanisterSummary>;
  archives: Array<CanisterSummary>;
}
export interface ListSnsCanistersResponse {
  root: [] | [Principal];
  swap: [] | [Principal];
  ledger: [] | [Principal];
  index: [] | [Principal];
  governance: [] | [Principal];
  dapps: Array<Principal>;
  archives: Array<Principal>;
}
export interface MethodAuthzChange {
  principal: [] | [Principal];
  method_name: string;
  canister: Principal;
  operation: AuthzChangeOp;
}
export interface RegisterDappCanisterRequest {
  canister_id: [] | [Principal];
}
export interface RegisterDappCanistersRequest {
  canister_ids: Array<Principal>;
}
export interface SetDappControllersRequest {
  canister_ids: [] | [RegisterDappCanistersRequest];
  controller_principal_ids: Array<Principal>;
}
export interface SetDappControllersResponse {
  failed_updates: Array<FailedUpdate>;
}
export interface SnsRootCanister {
  dapp_canister_ids: Array<Principal>;
  testflight: boolean;
  latest_ledger_archive_poll_timestamp_seconds: [] | [bigint];
  archive_canister_ids: Array<Principal>;
  governance_canister_id: [] | [Principal];
  index_canister_id: [] | [Principal];
  swap_canister_id: [] | [Principal];
  ledger_canister_id: [] | [Principal];
}
export interface _SERVICE {
  canister_status: ActorMethod<[CanisterIdRecord], CanisterStatusResult>;
  change_canister: ActorMethod<[ChangeCanisterProposal], undefined>;
  get_build_metadata: ActorMethod<[], string>;
  get_sns_canisters_summary: ActorMethod<
    [GetSnsCanistersSummaryRequest],
    GetSnsCanistersSummaryResponse
  >;
  list_sns_canisters: ActorMethod<[{}], ListSnsCanistersResponse>;
  register_dapp_canister: ActorMethod<[RegisterDappCanisterRequest], {}>;
  register_dapp_canisters: ActorMethod<[RegisterDappCanistersRequest], {}>;
  set_dapp_controllers: ActorMethod<
    [SetDappControllersRequest],
    SetDappControllersResponse
  >;
}
