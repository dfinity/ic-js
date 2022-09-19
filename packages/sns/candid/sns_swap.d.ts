import type { ActorMethod } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export interface BuyerState {
  icp_disbursing: boolean;
  amount_sns_e8s: bigint;
  amount_icp_e8s: bigint;
  sns_disbursing: boolean;
}
export interface CanisterCallError {
  code: [] | [number];
  description: string;
}
export interface CanisterStatusResultV2 {
  controller: Principal;
  status: CanisterStatusType;
  freezing_threshold: bigint;
  balance: Array<[Uint8Array, bigint]>;
  memory_size: bigint;
  cycles: bigint;
  settings: DefiniteCanisterSettingsArgs;
  idle_cycles_burned_per_day: bigint;
  module_hash: [] | [Uint8Array];
}
export type CanisterStatusType =
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
export interface DerivedState {
  sns_tokens_per_icp: number;
  buyer_total_icp_e8s: bigint;
}
export interface ErrorRefundIcpRequest {
  icp_e8s: bigint;
  fee_override_e8s: bigint;
}
export interface FailedUpdate {
  err: [] | [CanisterCallError];
  dapp_canister_id: [] | [Principal];
}
export interface FinalizeSwapResponse {
  set_dapp_controllers_result: [] | [SetDappControllersCallResult];
  sns_governance_normal_mode_enabled: [] | [SetModeCallResult];
  sweep_icp: [] | [SweepResult];
  sweep_sns: [] | [SweepResult];
  create_neuron: [] | [SweepResult];
}
export interface GetBuyerStateRequest {
  principal_id: [] | [Principal];
}
export interface GetBuyerStateResponse {
  buyer_state: [] | [BuyerState];
}
export interface GetBuyersTotalResponse {
  buyers_total: bigint;
}
export interface GetStateResponse {
  swap: [] | [Swap];
  derived: [] | [DerivedState];
}
export interface Init {
  sns_root_canister_id: string;
  min_participant_icp_e8s: bigint;
  fallback_controller_principal_ids: Array<string>;
  max_icp_e8s: bigint;
  min_participants: number;
  nns_governance_canister_id: string;
  icp_ledger_canister_id: string;
  sns_ledger_canister_id: string;
  max_participant_icp_e8s: bigint;
  sns_governance_canister_id: string;
  min_icp_e8s: bigint;
}
export type Possibility =
  | { Ok: SetDappControllersResponse }
  | { Err: CanisterCallError };
export type Possibility_1 = { Err: CanisterCallError };
export interface RefreshBuyerTokensRequest {
  buyer: string;
}
export interface SetDappControllersCallResult {
  possibility: [] | [Possibility];
}
export interface SetDappControllersResponse {
  failed_updates: Array<FailedUpdate>;
}
export interface SetModeCallResult {
  possibility: [] | [Possibility_1];
}
export interface SetOpenTimeWindowRequest {
  open_time_window: [] | [TimeWindow];
}
export interface State {
  open_time_window: [] | [TimeWindow];
  sns_token_e8s: bigint;
  lifecycle: number;
  buyers: Array<[string, BuyerState]>;
}
export interface Swap {
  init: [] | [Init];
  state: [] | [State];
}
export interface SweepResult {
  failure: number;
  skipped: number;
  success: number;
}
export interface TimeWindow {
  start_timestamp_seconds: bigint;
  end_timestamp_seconds: bigint;
}
export interface _SERVICE {
  error_refund_icp: ActorMethod<[ErrorRefundIcpRequest], {}>;
  finalize_swap: ActorMethod<[{}], FinalizeSwapResponse>;
  get_buyer_state: ActorMethod<[GetBuyerStateRequest], GetBuyerStateResponse>;
  get_buyers_total: ActorMethod<[{}], GetBuyersTotalResponse>;
  get_canister_status: ActorMethod<[{}], CanisterStatusResultV2>;
  get_state: ActorMethod<[{}], GetStateResponse>;
  refresh_buyer_tokens: ActorMethod<[RefreshBuyerTokensRequest], {}>;
  refresh_sns_tokens: ActorMethod<[{}], {}>;
  set_open_time_window: ActorMethod<[SetOpenTimeWindowRequest], {}>;
}
