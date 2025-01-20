import type { ActorMethod } from "@dfinity/agent";
import type { IDL } from "@dfinity/candid";
import type { Principal } from "@dfinity/principal";

export interface BuyerState {
  icp: [] | [TransferableAmount];
  has_created_neuron_recipes: [] | [boolean];
}
export interface CanisterCallError {
  code: [] | [number];
  description: string;
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
export interface CfInvestment {
  controller: [] | [Principal];
  hotkey_principal: string;
  hotkeys: [] | [Principals];
  nns_neuron_id: bigint;
}
export interface CfNeuron {
  has_created_neuron_recipes: [] | [boolean];
  hotkeys: [] | [Principals];
  nns_neuron_id: bigint;
  amount_icp_e8s: bigint;
}
export interface CfParticipant {
  controller: [] | [Principal];
  hotkey_principal: string;
  cf_neurons: Array<CfNeuron>;
}
export interface Countries {
  iso_codes: Array<string>;
}
export interface DefiniteCanisterSettingsArgs {
  freezing_threshold: bigint;
  wasm_memory_threshold: [] | [bigint];
  controllers: Array<Principal>;
  wasm_memory_limit: [] | [bigint];
  memory_allocation: bigint;
  compute_allocation: bigint;
}
export interface DerivedState {
  sns_tokens_per_icp: number;
  buyer_total_icp_e8s: bigint;
  cf_participant_count: [] | [bigint];
  neurons_fund_participation_icp_e8s: [] | [bigint];
  direct_participation_icp_e8s: [] | [bigint];
  direct_participant_count: [] | [bigint];
  cf_neuron_count: [] | [bigint];
}
export interface DirectInvestment {
  buyer_principal: string;
}
export interface Err {
  description: [] | [string];
  error_type: [] | [number];
}
export interface Err_1 {
  error_type: [] | [number];
}
export interface Err_2 {
  invalid_user_amount: [] | [InvalidUserAmount];
  existing_ticket: [] | [Ticket];
  error_type: number;
}
export interface Error {
  message: [] | [string];
}
export interface ErrorRefundIcpRequest {
  source_principal_id: [] | [Principal];
}
export interface ErrorRefundIcpResponse {
  result: [] | [Result];
}
export interface FailedUpdate {
  err: [] | [CanisterCallError];
  dapp_canister_id: [] | [Principal];
}
export interface FinalizeSwapResponse {
  set_dapp_controllers_call_result: [] | [SetDappControllersCallResult];
  create_sns_neuron_recipes_result: [] | [SweepResult];
  settle_community_fund_participation_result:
    | []
    | [SettleCommunityFundParticipationResult];
  error_message: [] | [string];
  settle_neurons_fund_participation_result:
    | []
    | [SettleNeuronsFundParticipationResult];
  set_mode_call_result: [] | [SetModeCallResult];
  sweep_icp_result: [] | [SweepResult];
  claim_neuron_result: [] | [SweepResult];
  sweep_sns_result: [] | [SweepResult];
}
export interface GetAutoFinalizationStatusResponse {
  auto_finalize_swap_response: [] | [FinalizeSwapResponse];
  has_auto_finalize_been_attempted: [] | [boolean];
  is_auto_finalize_enabled: [] | [boolean];
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
export interface GetDerivedStateResponse {
  sns_tokens_per_icp: [] | [number];
  buyer_total_icp_e8s: [] | [bigint];
  cf_participant_count: [] | [bigint];
  neurons_fund_participation_icp_e8s: [] | [bigint];
  direct_participation_icp_e8s: [] | [bigint];
  direct_participant_count: [] | [bigint];
  cf_neuron_count: [] | [bigint];
}
export interface GetInitResponse {
  init: [] | [Init];
}
export interface GetLifecycleResponse {
  decentralization_sale_open_timestamp_seconds: [] | [bigint];
  lifecycle: [] | [number];
  decentralization_swap_termination_timestamp_seconds: [] | [bigint];
}
export interface GetOpenTicketResponse {
  result: [] | [Result_1];
}
export interface GetSaleParametersResponse {
  params: [] | [Params];
}
export interface GetStateResponse {
  swap: [] | [Swap];
  derived: [] | [DerivedState];
}
export interface GetTimersResponse {
  timers: [] | [Timers];
}
export interface GovernanceError {
  error_message: string;
  error_type: number;
}
export interface Icrc1Account {
  owner: [] | [Principal];
  subaccount: [] | [Uint8Array | number[]];
}
export interface IdealMatchedParticipationFunction {
  serialized_representation: [] | [string];
}
export interface Init {
  nns_proposal_id: [] | [bigint];
  sns_root_canister_id: string;
  neurons_fund_participation: [] | [boolean];
  min_participant_icp_e8s: [] | [bigint];
  neuron_basket_construction_parameters:
    | []
    | [NeuronBasketConstructionParameters];
  fallback_controller_principal_ids: Array<string>;
  max_icp_e8s: [] | [bigint];
  neuron_minimum_stake_e8s: [] | [bigint];
  confirmation_text: [] | [string];
  swap_start_timestamp_seconds: [] | [bigint];
  swap_due_timestamp_seconds: [] | [bigint];
  min_participants: [] | [number];
  sns_token_e8s: [] | [bigint];
  nns_governance_canister_id: string;
  transaction_fee_e8s: [] | [bigint];
  icp_ledger_canister_id: string;
  sns_ledger_canister_id: string;
  neurons_fund_participation_constraints:
    | []
    | [NeuronsFundParticipationConstraints];
  should_auto_finalize: [] | [boolean];
  max_participant_icp_e8s: [] | [bigint];
  sns_governance_canister_id: string;
  min_direct_participation_icp_e8s: [] | [bigint];
  restricted_countries: [] | [Countries];
  min_icp_e8s: [] | [bigint];
  max_direct_participation_icp_e8s: [] | [bigint];
}
export interface InvalidUserAmount {
  min_amount_icp_e8s_included: bigint;
  max_amount_icp_e8s_included: bigint;
}
export type Investor =
  | { CommunityFund: CfInvestment }
  | { Direct: DirectInvestment };
export interface LinearScalingCoefficient {
  slope_numerator: [] | [bigint];
  intercept_icp_e8s: [] | [bigint];
  from_direct_participation_icp_e8s: [] | [bigint];
  slope_denominator: [] | [bigint];
  to_direct_participation_icp_e8s: [] | [bigint];
}
export interface ListCommunityFundParticipantsRequest {
  offset: [] | [bigint];
  limit: [] | [number];
}
export interface ListCommunityFundParticipantsResponse {
  cf_participants: Array<CfParticipant>;
}
export interface ListDirectParticipantsRequest {
  offset: [] | [number];
  limit: [] | [number];
}
export interface ListDirectParticipantsResponse {
  participants: Array<Participant>;
}
export interface ListSnsNeuronRecipesRequest {
  offset: [] | [bigint];
  limit: [] | [number];
}
export interface ListSnsNeuronRecipesResponse {
  sns_neuron_recipes: Array<SnsNeuronRecipe>;
}
export interface NeuronAttributes {
  dissolve_delay_seconds: bigint;
  memo: bigint;
  followees: Array<NeuronId>;
}
export interface NeuronBasketConstructionParameters {
  dissolve_delay_interval_seconds: bigint;
  count: bigint;
}
export interface NeuronId {
  id: Uint8Array | number[];
}
export interface NeuronsFundParticipationConstraints {
  coefficient_intervals: Array<LinearScalingCoefficient>;
  max_neurons_fund_participation_icp_e8s: [] | [bigint];
  min_direct_participation_threshold_icp_e8s: [] | [bigint];
  ideal_matched_participation_function:
    | []
    | [IdealMatchedParticipationFunction];
}
export interface NewSaleTicketRequest {
  subaccount: [] | [Uint8Array | number[]];
  amount_icp_e8s: bigint;
}
export interface NewSaleTicketResponse {
  result: [] | [Result_2];
}
export interface Ok {
  block_height: [] | [bigint];
}
export interface Ok_1 {
  neurons_fund_participation_icp_e8s: [] | [bigint];
  neurons_fund_neurons_count: [] | [bigint];
}
export interface Ok_2 {
  ticket: [] | [Ticket];
}
export interface Params {
  min_participant_icp_e8s: bigint;
  neuron_basket_construction_parameters:
    | []
    | [NeuronBasketConstructionParameters];
  max_icp_e8s: bigint;
  swap_due_timestamp_seconds: bigint;
  min_participants: number;
  sns_token_e8s: bigint;
  sale_delay_seconds: [] | [bigint];
  max_participant_icp_e8s: bigint;
  min_direct_participation_icp_e8s: [] | [bigint];
  min_icp_e8s: bigint;
  max_direct_participation_icp_e8s: [] | [bigint];
}
export interface Participant {
  participation: [] | [BuyerState];
  participant_id: [] | [Principal];
}
export type Possibility =
  | { Ok: SetDappControllersResponse }
  | { Err: CanisterCallError };
export type Possibility_1 = { Ok: Response } | { Err: CanisterCallError };
export type Possibility_2 = { Ok: Ok_1 } | { Err: Error };
export type Possibility_3 = { Ok: {} } | { Err: CanisterCallError };
export interface Principals {
  principals: Array<Principal>;
}
export interface RefreshBuyerTokensRequest {
  confirmation_text: [] | [string];
  buyer: string;
}
export interface RefreshBuyerTokensResponse {
  icp_accepted_participation_e8s: bigint;
  icp_ledger_account_balance_e8s: bigint;
}
export interface Response {
  governance_error: [] | [GovernanceError];
}
export type Result = { Ok: Ok } | { Err: Err };
export type Result_1 = { Ok: Ok_2 } | { Err: Err_1 };
export type Result_2 = { Ok: Ok_2 } | { Err: Err_2 };
export interface SetDappControllersCallResult {
  possibility: [] | [Possibility];
}
export interface SetDappControllersResponse {
  failed_updates: Array<FailedUpdate>;
}
export interface SetModeCallResult {
  possibility: [] | [Possibility_3];
}
export interface SettleCommunityFundParticipationResult {
  possibility: [] | [Possibility_1];
}
export interface SettleNeuronsFundParticipationResult {
  possibility: [] | [Possibility_2];
}
export interface SnsNeuronRecipe {
  sns: [] | [TransferableAmount];
  claimed_status: [] | [number];
  neuron_attributes: [] | [NeuronAttributes];
  investor: [] | [Investor];
}
export interface Swap {
  auto_finalize_swap_response: [] | [FinalizeSwapResponse];
  neuron_recipes: Array<SnsNeuronRecipe>;
  next_ticket_id: [] | [bigint];
  decentralization_sale_open_timestamp_seconds: [] | [bigint];
  finalize_swap_in_progress: [] | [boolean];
  timers: [] | [Timers];
  cf_participants: Array<CfParticipant>;
  init: [] | [Init];
  already_tried_to_auto_finalize: [] | [boolean];
  neurons_fund_participation_icp_e8s: [] | [bigint];
  purge_old_tickets_last_completion_timestamp_nanoseconds: [] | [bigint];
  direct_participation_icp_e8s: [] | [bigint];
  lifecycle: number;
  purge_old_tickets_next_principal: [] | [Uint8Array | number[]];
  decentralization_swap_termination_timestamp_seconds: [] | [bigint];
  buyers: Array<[string, BuyerState]>;
  params: [] | [Params];
  open_sns_token_swap_proposal_id: [] | [bigint];
}
export interface SweepResult {
  failure: number;
  skipped: number;
  invalid: number;
  success: number;
  global_failures: number;
}
export interface Ticket {
  creation_time: bigint;
  ticket_id: bigint;
  account: [] | [Icrc1Account];
  amount_icp_e8s: bigint;
}
export interface Timers {
  last_spawned_timestamp_seconds: [] | [bigint];
  last_reset_timestamp_seconds: [] | [bigint];
  requires_periodic_tasks: [] | [boolean];
}
export interface TransferableAmount {
  transfer_fee_paid_e8s: [] | [bigint];
  transfer_start_timestamp_seconds: bigint;
  amount_e8s: bigint;
  amount_transferred_e8s: [] | [bigint];
  transfer_success_timestamp_seconds: bigint;
}
export interface _SERVICE {
  error_refund_icp: ActorMethod<
    [ErrorRefundIcpRequest],
    ErrorRefundIcpResponse
  >;
  finalize_swap: ActorMethod<[{}], FinalizeSwapResponse>;
  get_auto_finalization_status: ActorMethod<
    [{}],
    GetAutoFinalizationStatusResponse
  >;
  get_buyer_state: ActorMethod<[GetBuyerStateRequest], GetBuyerStateResponse>;
  get_buyers_total: ActorMethod<[{}], GetBuyersTotalResponse>;
  get_canister_status: ActorMethod<[{}], CanisterStatusResultV2>;
  get_derived_state: ActorMethod<[{}], GetDerivedStateResponse>;
  get_init: ActorMethod<[{}], GetInitResponse>;
  get_lifecycle: ActorMethod<[{}], GetLifecycleResponse>;
  get_open_ticket: ActorMethod<[{}], GetOpenTicketResponse>;
  get_sale_parameters: ActorMethod<[{}], GetSaleParametersResponse>;
  get_state: ActorMethod<[{}], GetStateResponse>;
  get_timers: ActorMethod<[{}], GetTimersResponse>;
  list_community_fund_participants: ActorMethod<
    [ListCommunityFundParticipantsRequest],
    ListCommunityFundParticipantsResponse
  >;
  list_direct_participants: ActorMethod<
    [ListDirectParticipantsRequest],
    ListDirectParticipantsResponse
  >;
  list_sns_neuron_recipes: ActorMethod<
    [ListSnsNeuronRecipesRequest],
    ListSnsNeuronRecipesResponse
  >;
  new_sale_ticket: ActorMethod<[NewSaleTicketRequest], NewSaleTicketResponse>;
  notify_payment_failure: ActorMethod<[{}], Ok_2>;
  refresh_buyer_tokens: ActorMethod<
    [RefreshBuyerTokensRequest],
    RefreshBuyerTokensResponse
  >;
  reset_timers: ActorMethod<[{}], {}>;
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
