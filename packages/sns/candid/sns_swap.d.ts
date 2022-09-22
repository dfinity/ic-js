import type { ActorMethod } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export interface BuyerState {
  icp: [] | [TransferableAmount];
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
export interface CfInvestment {
  hotkey_principal: string;
  nns_neuron_id: bigint;
}
export interface CfNeuron {
  nns_neuron_id: bigint;
  amount_icp_e8s: bigint;
}
export interface CfParticipant {
  hotkey_principal: string;
  cf_neurons: Array<CfNeuron>;
}
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
export interface DirectInvestment {
  buyer_principal: string;
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
  settle_community_fund_participation_result:
    | []
    | [SettleCommunityFundParticipationResult];
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
export interface GovernanceError {
  error_message: string;
  error_type: number;
}
export interface Init {
  sns_root_canister_id: string;
  fallback_controller_principal_ids: Array<string>;
  nns_governance_canister_id: string;
  icp_ledger_canister_id: string;
  sns_ledger_canister_id: string;
  sns_governance_canister_id: string;
}
export type Investor =
  | { CommunityFund: CfInvestment }
  | { Direct: DirectInvestment };
export interface OpenRequest {
  cf_participants: Array<CfParticipant>;
  params: [] | [Params];
  open_sns_token_swap_proposal_id: [] | [bigint];
}
export interface Params {
  min_participant_icp_e8s: bigint;
  max_icp_e8s: bigint;
  swap_due_timestamp_seconds: bigint;
  min_participants: number;
  sns_token_e8s: bigint;
  max_participant_icp_e8s: bigint;
  min_icp_e8s: bigint;
}
export type Possibility = { Ok: Response } | { Err: CanisterCallError };
export type Possibility_1 =
  | { Ok: SetDappControllersResponse }
  | { Err: CanisterCallError };
export type Possibility_2 = { Err: CanisterCallError };
export interface RefreshBuyerTokensRequest {
  buyer: string;
}
export interface RefreshBuyerTokensResponse {
  icp_accepted_participation_e8s: bigint;
  icp_ledger_account_balance_e8s: bigint;
}
export interface Response {
  governance_error: [] | [GovernanceError];
}
export interface SetDappControllersCallResult {
  possibility: [] | [Possibility_1];
}
export interface SetDappControllersResponse {
  failed_updates: Array<FailedUpdate>;
}
export interface SetModeCallResult {
  possibility: [] | [Possibility_2];
}
export interface SettleCommunityFundParticipationResult {
  possibility: [] | [Possibility];
}
export interface SnsNeuronRecipe {
  sns: [] | [TransferableAmount];
  investor: [] | [Investor];
}
export interface Swap {
  neuron_recipes: Array<SnsNeuronRecipe>;
  cf_participants: Array<CfParticipant>;
  init: [] | [Init];
  lifecycle: number;
  buyers: Array<[string, BuyerState]>;
  params: [] | [Params];
  open_sns_token_swap_proposal_id: [] | [bigint];
}
export interface SweepResult {
  failure: number;
  skipped: number;
  success: number;
}
export interface TransferableAmount {
  transfer_start_timestamp_seconds: bigint;
  amount_e8s: bigint;
  transfer_success_timestamp_seconds: bigint;
}
export interface _SERVICE {
  error_refund_icp: ActorMethod<[ErrorRefundIcpRequest], {}>;
  finalize_swap: ActorMethod<[{}], FinalizeSwapResponse>;
  get_buyer_state: ActorMethod<[GetBuyerStateRequest], GetBuyerStateResponse>;
  get_buyers_total: ActorMethod<[{}], GetBuyersTotalResponse>;
  get_canister_status: ActorMethod<[{}], CanisterStatusResultV2>;
  get_state: ActorMethod<[{}], GetStateResponse>;
  open: ActorMethod<[OpenRequest], {}>;
  refresh_buyer_tokens: ActorMethod<
    [RefreshBuyerTokensRequest],
    RefreshBuyerTokensResponse
  >;
}
