import type { ActorMethod } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export interface BuyerState {
  icp: undefined | [] | [TransferableAmount];
  has_created_neuron_recipes: undefined | [] | [boolean];
}
export interface CanisterCallError {
  code: undefined | [] | [number];
  description: string;
}
export interface CanisterStatusResultV2 {
  status: CanisterStatusType;
  memory_size: bigint;
  cycles: bigint;
  settings: DefiniteCanisterSettingsArgs;
  idle_cycles_burned_per_day: bigint;
  module_hash: undefined | [] | [Uint8Array | number[]];
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
  has_created_neuron_recipes: undefined | [] | [boolean];
  nns_neuron_id: bigint;
  amount_icp_e8s: bigint;
}
export interface CfParticipant {
  hotkey_principal: string;
  cf_neurons: Array<CfNeuron>;
}
export interface Countries {
  iso_codes: Array<string>;
}
export interface DefiniteCanisterSettingsArgs {
  freezing_threshold: bigint;
  controllers: Array<Principal>;
  memory_allocation: bigint;
  compute_allocation: bigint;
}
export interface DerivedState {
  sns_tokens_per_icp: number;
  buyer_total_icp_e8s: bigint;
  cf_participant_count: undefined | [] | [bigint];
  neurons_fund_participation_icp_e8s: undefined | [] | [bigint];
  direct_participation_icp_e8s: undefined | [] | [bigint];
  direct_participant_count: undefined | [] | [bigint];
  cf_neuron_count: undefined | [] | [bigint];
}
export interface DirectInvestment {
  buyer_principal: string;
}
export interface Err {
  description: undefined | [] | [string];
  error_type: undefined | [] | [number];
}
export interface Err_1 {
  error_type: undefined | [] | [number];
}
export interface Err_2 {
  invalid_user_amount: undefined | [] | [InvalidUserAmount];
  existing_ticket: undefined | [] | [Ticket];
  error_type: number;
}
export interface Error {
  message: undefined | [] | [string];
}
export interface ErrorRefundIcpRequest {
  source_principal_id: undefined | [] | [Principal];
}
export interface ErrorRefundIcpResponse {
  result: undefined | [] | [Result];
}
export interface FailedUpdate {
  err: undefined | [] | [CanisterCallError];
  dapp_canister_id: undefined | [] | [Principal];
}
export interface FinalizeSwapResponse {
  set_dapp_controllers_call_result: undefined | [] | [SetDappControllersCallResult];
  create_sns_neuron_recipes_result: undefined | [] | [SweepResult];
  settle_community_fund_participation_result:
    | []
    | [SettleCommunityFundParticipationResult];
  error_message: undefined | [] | [string];
  settle_neurons_fund_participation_result:
    | []
    | [SettleNeuronsFundParticipationResult];
  set_mode_call_result: undefined | [] | [SetModeCallResult];
  sweep_icp_result: undefined | [] | [SweepResult];
  claim_neuron_result: undefined | [] | [SweepResult];
  sweep_sns_result: undefined | [] | [SweepResult];
}
export interface GetAutoFinalizationStatusResponse {
  auto_finalize_swap_response: undefined | [] | [FinalizeSwapResponse];
  has_auto_finalize_been_attempted: undefined | [] | [boolean];
  is_auto_finalize_enabled: undefined | [] | [boolean];
}
export interface GetBuyerStateRequest {
  principal_id: undefined | [] | [Principal];
}
export interface GetBuyerStateResponse {
  buyer_state: undefined | [] | [BuyerState];
}
export interface GetBuyersTotalResponse {
  buyers_total: bigint;
}
export interface GetDerivedStateResponse {
  sns_tokens_per_icp: undefined | [] | [number];
  buyer_total_icp_e8s: undefined | [] | [bigint];
  cf_participant_count: undefined | [] | [bigint];
  neurons_fund_participation_icp_e8s: undefined | [] | [bigint];
  direct_participation_icp_e8s: undefined | [] | [bigint];
  direct_participant_count: undefined | [] | [bigint];
  cf_neuron_count: undefined | [] | [bigint];
}
export interface GetInitResponse {
  init: undefined | [] | [Init];
}
export interface GetLifecycleResponse {
  decentralization_sale_open_timestamp_seconds: undefined | [] | [bigint];
  lifecycle: undefined | [] | [number];
  decentralization_swap_termination_timestamp_seconds: undefined | [] | [bigint];
}
export interface GetOpenTicketResponse {
  result: undefined | [] | [Result_1];
}
export interface GetSaleParametersResponse {
  params: undefined | [] | [Params];
}
export interface GetStateResponse {
  swap: undefined | [] | [Swap];
  derived: undefined | [] | [DerivedState];
}
export interface GovernanceError {
  error_message: string;
  error_type: number;
}
export interface Icrc1Account {
  owner: undefined | [] | [Principal];
  subaccount: undefined | [] | [Uint8Array | number[]];
}
export interface IdealMatchedParticipationFunction {
  serialized_representation: undefined | [] | [string];
}
export interface Init {
  nns_proposal_id: undefined | [] | [bigint];
  sns_root_canister_id: string;
  neurons_fund_participation: undefined | [] | [boolean];
  min_participant_icp_e8s: undefined | [] | [bigint];
  neuron_basket_construction_parameters:
    | []
    | [NeuronBasketConstructionParameters];
  fallback_controller_principal_ids: Array<string>;
  max_icp_e8s: undefined | [] | [bigint];
  neuron_minimum_stake_e8s: undefined | [] | [bigint];
  confirmation_text: undefined | [] | [string];
  swap_start_timestamp_seconds: undefined | [] | [bigint];
  swap_due_timestamp_seconds: undefined | [] | [bigint];
  min_participants: undefined | [] | [number];
  sns_token_e8s: undefined | [] | [bigint];
  nns_governance_canister_id: string;
  transaction_fee_e8s: undefined | [] | [bigint];
  icp_ledger_canister_id: string;
  sns_ledger_canister_id: string;
  neurons_fund_participation_constraints:
    | []
    | [NeuronsFundParticipationConstraints];
  neurons_fund_participants: undefined | [] | [NeuronsFundParticipants];
  should_auto_finalize: undefined | [] | [boolean];
  max_participant_icp_e8s: undefined | [] | [bigint];
  sns_governance_canister_id: string;
  min_direct_participation_icp_e8s: undefined | [] | [bigint];
  restricted_countries: undefined | [] | [Countries];
  min_icp_e8s: undefined | [] | [bigint];
  max_direct_participation_icp_e8s: undefined | [] | [bigint];
}
export interface InvalidUserAmount {
  min_amount_icp_e8s_included: bigint;
  max_amount_icp_e8s_included: bigint;
}
export type Investor =
  | { CommunityFund: CfInvestment }
  | { Direct: DirectInvestment };
export interface LinearScalingCoefficient {
  slope_numerator: undefined | [] | [bigint];
  intercept_icp_e8s: undefined | [] | [bigint];
  from_direct_participation_icp_e8s: undefined | [] | [bigint];
  slope_denominator: undefined | [] | [bigint];
  to_direct_participation_icp_e8s: undefined | [] | [bigint];
}
export interface ListCommunityFundParticipantsRequest {
  offset: undefined | [] | [bigint];
  limit: undefined | [] | [number];
}
export interface ListDirectParticipantsRequest {
  offset: undefined | [] | [number];
  limit: undefined | [] | [number];
}
export interface ListDirectParticipantsResponse {
  participants: Array<Participant>;
}
export interface ListSnsNeuronRecipesRequest {
  offset: undefined | [] | [bigint];
  limit: undefined | [] | [number];
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
export interface NeuronsFundParticipants {
  cf_participants: Array<CfParticipant>;
}
export interface NeuronsFundParticipationConstraints {
  coefficient_intervals: Array<LinearScalingCoefficient>;
  max_neurons_fund_participation_icp_e8s: undefined | [] | [bigint];
  min_direct_participation_threshold_icp_e8s: undefined | [] | [bigint];
  ideal_matched_participation_function:
    | []
    | [IdealMatchedParticipationFunction];
}
export interface NewSaleTicketRequest {
  subaccount: undefined | [] | [Uint8Array | number[]];
  amount_icp_e8s: bigint;
}
export interface NewSaleTicketResponse {
  result: undefined | [] | [Result_2];
}
export interface Ok {
  block_height: undefined | [] | [bigint];
}
export interface Ok_1 {
  neurons_fund_participation_icp_e8s: undefined | [] | [bigint];
  neurons_fund_neurons_count: undefined | [] | [bigint];
}
export interface Ok_2 {
  ticket: undefined | [] | [Ticket];
}
export interface OpenRequest {
  cf_participants: Array<CfParticipant>;
  params: undefined | [] | [Params];
  open_sns_token_swap_proposal_id: undefined | [] | [bigint];
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
  sale_delay_seconds: undefined | [] | [bigint];
  max_participant_icp_e8s: bigint;
  min_direct_participation_icp_e8s: undefined | [] | [bigint];
  min_icp_e8s: bigint;
  max_direct_participation_icp_e8s: undefined | [] | [bigint];
}
export interface Participant {
  participation: undefined | [] | [BuyerState];
  participant_id: undefined | [] | [Principal];
}
export type Possibility =
  | { Ok: SetDappControllersResponse }
  | { Err: CanisterCallError };
export type Possibility_1 = { Ok: Response } | { Err: CanisterCallError };
export type Possibility_2 = { Ok: Ok_1 } | { Err: Error };
export type Possibility_3 = { Ok: {} } | { Err: CanisterCallError };
export interface RefreshBuyerTokensRequest {
  confirmation_text: undefined | [] | [string];
  buyer: string;
}
export interface RefreshBuyerTokensResponse {
  icp_accepted_participation_e8s: bigint;
  icp_ledger_account_balance_e8s: bigint;
}
export interface Response {
  governance_error: undefined | [] | [GovernanceError];
}
export type Result = { Ok: Ok } | { Err: Err };
export type Result_1 = { Ok: Ok_2 } | { Err: Err_1 };
export type Result_2 = { Ok: Ok_2 } | { Err: Err_2 };
export interface SetDappControllersCallResult {
  possibility: undefined | [] | [Possibility];
}
export interface SetDappControllersResponse {
  failed_updates: Array<FailedUpdate>;
}
export interface SetModeCallResult {
  possibility: undefined | [] | [Possibility_3];
}
export interface SettleCommunityFundParticipationResult {
  possibility: undefined | [] | [Possibility_1];
}
export interface SettleNeuronsFundParticipationResult {
  possibility: undefined | [] | [Possibility_2];
}
export interface SnsNeuronRecipe {
  sns: undefined | [] | [TransferableAmount];
  claimed_status: undefined | [] | [number];
  neuron_attributes: undefined | [] | [NeuronAttributes];
  investor: undefined | [] | [Investor];
}
export interface Swap {
  auto_finalize_swap_response: undefined | [] | [FinalizeSwapResponse];
  neuron_recipes: Array<SnsNeuronRecipe>;
  next_ticket_id: undefined | [] | [bigint];
  decentralization_sale_open_timestamp_seconds: undefined | [] | [bigint];
  finalize_swap_in_progress: undefined | [] | [boolean];
  cf_participants: Array<CfParticipant>;
  init: undefined | [] | [Init];
  already_tried_to_auto_finalize: undefined | [] | [boolean];
  neurons_fund_participation_icp_e8s: undefined | [] | [bigint];
  purge_old_tickets_last_completion_timestamp_nanoseconds: undefined | [] | [bigint];
  direct_participation_icp_e8s: undefined | [] | [bigint];
  lifecycle: number;
  purge_old_tickets_next_principal: undefined | [] | [Uint8Array | number[]];
  decentralization_swap_termination_timestamp_seconds: undefined | [] | [bigint];
  buyers: Array<[string, BuyerState]>;
  params: undefined | [] | [Params];
  open_sns_token_swap_proposal_id: undefined | [] | [bigint];
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
  account: undefined | [] | [Icrc1Account];
  amount_icp_e8s: bigint;
}
export interface TransferableAmount {
  transfer_fee_paid_e8s: undefined | [] | [bigint];
  transfer_start_timestamp_seconds: bigint;
  amount_e8s: bigint;
  amount_transferred_e8s: undefined | [] | [bigint];
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
  list_community_fund_participants: ActorMethod<
    [ListCommunityFundParticipantsRequest],
    NeuronsFundParticipants
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
  open: ActorMethod<[OpenRequest], {}>;
  refresh_buyer_tokens: ActorMethod<
    [RefreshBuyerTokensRequest],
    RefreshBuyerTokensResponse
  >;
  restore_dapp_controllers: ActorMethod<[{}], SetDappControllersCallResult>;
}
