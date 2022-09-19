import type { ActorMethod } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export interface AccountIdentifier {
  hash: Uint8Array;
}
export type Action =
  | { RegisterKnownNeuron: KnownNeuron }
  | { ManageNeuron: ManageNeuron }
  | { ExecuteNnsFunction: ExecuteNnsFunction }
  | { RewardNodeProvider: RewardNodeProvider }
  | { OpenSnsTokenSwap: OpenSnsTokenSwap }
  | { SetSnsTokenSwapOpenTimeWindow: SetSnsTokenSwapOpenTimeWindow }
  | { SetDefaultFollowees: SetDefaultFollowees }
  | { RewardNodeProviders: RewardNodeProviders }
  | { ManageNetworkEconomics: NetworkEconomics }
  | { ApproveGenesisKyc: ApproveGenesisKyc }
  | { AddOrRemoveNodeProvider: AddOrRemoveNodeProvider }
  | { Motion: Motion };
export interface AddHotKey {
  new_hot_key: [] | [Principal];
}
export interface AddOrRemoveNodeProvider {
  change: [] | [Change];
}
export interface Amount {
  e8s: bigint;
}
export interface ApproveGenesisKyc {
  principals: Array<Principal>;
}
export interface Ballot {
  vote: number;
  voting_power: bigint;
}
export interface BallotInfo {
  vote: number;
  proposal_id: [] | [NeuronId];
}
export type By =
  | { NeuronIdOrSubaccount: {} }
  | { MemoAndController: ClaimOrRefreshNeuronFromAccount }
  | { Memo: bigint };
export interface CfNeuron {
  nns_neuron_id: bigint;
  amount_icp_e8s: bigint;
}
export interface CfParticipant {
  hotkey_principal: string;
  cf_neurons: Array<CfNeuron>;
}
export type Change = { ToRemove: NodeProvider } | { ToAdd: NodeProvider };
export interface ChangeAutoStakeMaturity {
  requested_setting_for_auto_stake_maturity: boolean;
}
export interface ClaimOrRefresh {
  by: [] | [By];
}
export interface ClaimOrRefreshNeuronFromAccount {
  controller: [] | [Principal];
  memo: bigint;
}
export interface ClaimOrRefreshNeuronFromAccountResponse {
  result: [] | [Result_1];
}
export interface ClaimOrRefreshResponse {
  refreshed_neuron_id: [] | [NeuronId];
}
export type Command =
  | { Spawn: Spawn }
  | { Split: Split }
  | { Follow: Follow }
  | { ClaimOrRefresh: ClaimOrRefresh }
  | { Configure: Configure }
  | { RegisterVote: RegisterVote }
  | { Merge: Merge }
  | { DisburseToNeuron: DisburseToNeuron }
  | { MakeProposal: Proposal }
  | { StakeMaturity: StakeMaturity }
  | { MergeMaturity: MergeMaturity }
  | { Disburse: Disburse };
export type Command_1 =
  | { Error: GovernanceError }
  | { Spawn: SpawnResponse }
  | { Split: SpawnResponse }
  | { Follow: {} }
  | { ClaimOrRefresh: ClaimOrRefreshResponse }
  | { Configure: {} }
  | { RegisterVote: {} }
  | { Merge: {} }
  | { DisburseToNeuron: SpawnResponse }
  | { MakeProposal: MakeProposalResponse }
  | { StakeMaturity: StakeMaturityResponse }
  | { MergeMaturity: MergeMaturityResponse }
  | { Disburse: DisburseResponse };
export type Command_2 =
  | { Spawn: NeuronId }
  | { Split: Split }
  | { Configure: Configure }
  | { Merge: Merge }
  | { DisburseToNeuron: DisburseToNeuron }
  | { SyncCommand: {} }
  | { ClaimOrRefreshNeuron: ClaimOrRefresh }
  | { MergeMaturity: MergeMaturity }
  | { Disburse: Disburse };
export interface Committed {
  sns_governance_canister_id: [] | [Principal];
}
export interface Configure {
  operation: [] | [Operation];
}
export interface Disburse {
  to_account: [] | [AccountIdentifier];
  amount: [] | [Amount];
}
export interface DisburseResponse {
  transfer_block_height: bigint;
}
export interface DisburseToNeuron {
  dissolve_delay_seconds: bigint;
  kyc_verified: boolean;
  amount_e8s: bigint;
  new_controller: [] | [Principal];
  nonce: bigint;
}
export type DissolveState =
  | { DissolveDelaySeconds: bigint }
  | { WhenDissolvedTimestampSeconds: bigint };
export interface ExecuteNnsFunction {
  nns_function: number;
  payload: Uint8Array;
}
export interface Follow {
  topic: number;
  followees: Array<NeuronId>;
}
export interface Followees {
  followees: Array<NeuronId>;
}
export interface Governance {
  default_followees: Array<[number, Followees]>;
  most_recent_monthly_node_provider_rewards:
    | []
    | [MostRecentMonthlyNodeProviderRewards];
  maturity_modulation_last_updated_at_timestamp_seconds: [] | [bigint];
  wait_for_quiet_threshold_seconds: bigint;
  metrics: [] | [GovernanceCachedMetrics];
  node_providers: Array<NodeProvider>;
  cached_daily_maturity_modulation_basis_points: [] | [number];
  economics: [] | [NetworkEconomics];
  spawning_neurons: [] | [boolean];
  latest_reward_event: [] | [RewardEvent];
  to_claim_transfers: Array<NeuronStakeTransfer>;
  short_voting_period_seconds: bigint;
  proposals: Array<[bigint, ProposalData]>;
  in_flight_commands: Array<[bigint, NeuronInFlightCommand]>;
  neurons: Array<[bigint, Neuron]>;
  genesis_timestamp_seconds: bigint;
}
export interface GovernanceCachedMetrics {
  not_dissolving_neurons_e8s_buckets: Array<[bigint, number]>;
  garbage_collectable_neurons_count: bigint;
  neurons_with_invalid_stake_count: bigint;
  not_dissolving_neurons_count_buckets: Array<[bigint, bigint]>;
  total_supply_icp: bigint;
  neurons_with_less_than_6_months_dissolve_delay_count: bigint;
  dissolved_neurons_count: bigint;
  total_staked_e8s: bigint;
  not_dissolving_neurons_count: bigint;
  dissolved_neurons_e8s: bigint;
  neurons_with_less_than_6_months_dissolve_delay_e8s: bigint;
  dissolving_neurons_count_buckets: Array<[bigint, bigint]>;
  dissolving_neurons_count: bigint;
  dissolving_neurons_e8s_buckets: Array<[bigint, number]>;
  community_fund_total_staked_e8s: bigint;
  timestamp_seconds: bigint;
}
export interface GovernanceError {
  error_message: string;
  error_type: number;
}
export interface IncreaseDissolveDelay {
  additional_dissolve_delay_seconds: number;
}
export interface KnownNeuron {
  id: [] | [NeuronId];
  known_neuron_data: [] | [KnownNeuronData];
}
export interface KnownNeuronData {
  name: string;
  description: [] | [string];
}
export interface ListKnownNeuronsResponse {
  known_neurons: Array<KnownNeuron>;
}
export interface ListNeurons {
  neuron_ids: BigUint64Array;
  include_neurons_readable_by_caller: boolean;
}
export interface ListNeuronsResponse {
  neuron_infos: Array<[bigint, NeuronInfo]>;
  full_neurons: Array<Neuron>;
}
export interface ListNodeProvidersResponse {
  node_providers: Array<NodeProvider>;
}
export interface ListProposalInfo {
  include_reward_status: Int32Array;
  before_proposal: [] | [NeuronId];
  limit: number;
  exclude_topic: Int32Array;
  include_status: Int32Array;
}
export interface ListProposalInfoResponse {
  proposal_info: Array<ProposalInfo>;
}
export interface MakeProposalResponse {
  proposal_id: [] | [NeuronId];
}
export interface ManageNeuron {
  id: [] | [NeuronId];
  command: [] | [Command];
  neuron_id_or_subaccount: [] | [NeuronIdOrSubaccount];
}
export interface ManageNeuronResponse {
  command: [] | [Command_1];
}
export interface Merge {
  source_neuron_id: [] | [NeuronId];
}
export interface MergeMaturity {
  percentage_to_merge: number;
}
export interface MergeMaturityResponse {
  merged_maturity_e8s: bigint;
  new_stake_e8s: bigint;
}
export interface MostRecentMonthlyNodeProviderRewards {
  timestamp: bigint;
  rewards: Array<RewardNodeProvider>;
}
export interface Motion {
  motion_text: string;
}
export interface NetworkEconomics {
  neuron_minimum_stake_e8s: bigint;
  max_proposals_to_keep_per_topic: number;
  neuron_management_fee_per_proposal_e8s: bigint;
  reject_cost_e8s: bigint;
  transaction_fee_e8s: bigint;
  neuron_spawn_dissolve_delay_seconds: bigint;
  minimum_icp_xdr_rate: bigint;
  maximum_node_provider_rewards_e8s: bigint;
}
export interface Neuron {
  id: [] | [NeuronId];
  staked_maturity_e8s_equivalent: [] | [bigint];
  controller: [] | [Principal];
  recent_ballots: Array<BallotInfo>;
  kyc_verified: boolean;
  not_for_profit: boolean;
  maturity_e8s_equivalent: bigint;
  cached_neuron_stake_e8s: bigint;
  created_timestamp_seconds: bigint;
  auto_stake_maturity: [] | [boolean];
  aging_since_timestamp_seconds: bigint;
  hot_keys: Array<Principal>;
  account: Uint8Array;
  joined_community_fund_timestamp_seconds: [] | [bigint];
  dissolve_state: [] | [DissolveState];
  followees: Array<[number, Followees]>;
  neuron_fees_e8s: bigint;
  transfer: [] | [NeuronStakeTransfer];
  known_neuron_data: [] | [KnownNeuronData];
  spawn_at_timestamp_seconds: [] | [bigint];
}
export interface NeuronId {
  id: bigint;
}
export type NeuronIdOrSubaccount =
  | { Subaccount: Uint8Array }
  | { NeuronId: NeuronId };
export interface NeuronInFlightCommand {
  command: [] | [Command_2];
  timestamp: bigint;
}
export interface NeuronInfo {
  dissolve_delay_seconds: bigint;
  recent_ballots: Array<BallotInfo>;
  created_timestamp_seconds: bigint;
  state: number;
  stake_e8s: bigint;
  joined_community_fund_timestamp_seconds: [] | [bigint];
  retrieved_at_timestamp_seconds: bigint;
  known_neuron_data: [] | [KnownNeuronData];
  voting_power: bigint;
  age_seconds: bigint;
}
export interface NeuronStakeTransfer {
  to_subaccount: Uint8Array;
  neuron_stake_e8s: bigint;
  from: [] | [Principal];
  memo: bigint;
  from_subaccount: Uint8Array;
  transfer_timestamp: bigint;
  block_height: bigint;
}
export interface NodeProvider {
  id: [] | [Principal];
  reward_account: [] | [AccountIdentifier];
}
export interface OpenSnsTokenSwap {
  community_fund_investment_e8s: [] | [bigint];
  target_swap_canister_id: [] | [Principal];
  params: [] | [Params];
}
export type Operation =
  | { RemoveHotKey: RemoveHotKey }
  | { AddHotKey: AddHotKey }
  | { ChangeAutoStakeMaturity: ChangeAutoStakeMaturity }
  | { StopDissolving: {} }
  | { StartDissolving: {} }
  | { IncreaseDissolveDelay: IncreaseDissolveDelay }
  | { JoinCommunityFund: {} }
  | { LeaveCommunityFund: {} }
  | { SetDissolveTimestamp: SetDissolveTimestamp };
export interface Params {
  min_participant_icp_e8s: bigint;
  max_icp_e8s: bigint;
  swap_due_timestamp_seconds: bigint;
  min_participants: number;
  sns_token_e8s: bigint;
  max_participant_icp_e8s: bigint;
  min_icp_e8s: bigint;
}
export interface Proposal {
  url: string;
  title: [] | [string];
  action: [] | [Action];
  summary: string;
}
export interface ProposalData {
  id: [] | [NeuronId];
  failure_reason: [] | [GovernanceError];
  cf_participants: Array<CfParticipant>;
  ballots: Array<[bigint, Ballot]>;
  proposal_timestamp_seconds: bigint;
  reward_event_round: bigint;
  failed_timestamp_seconds: bigint;
  reject_cost_e8s: bigint;
  latest_tally: [] | [Tally];
  sns_token_swap_lifecycle: [] | [number];
  decided_timestamp_seconds: bigint;
  proposal: [] | [Proposal];
  proposer: [] | [NeuronId];
  wait_for_quiet_state: [] | [WaitForQuietState];
  executed_timestamp_seconds: bigint;
  original_total_community_fund_maturity_e8s_equivalent: [] | [bigint];
}
export interface ProposalInfo {
  id: [] | [NeuronId];
  status: number;
  topic: number;
  failure_reason: [] | [GovernanceError];
  ballots: Array<[bigint, Ballot]>;
  proposal_timestamp_seconds: bigint;
  reward_event_round: bigint;
  deadline_timestamp_seconds: [] | [bigint];
  failed_timestamp_seconds: bigint;
  reject_cost_e8s: bigint;
  latest_tally: [] | [Tally];
  reward_status: number;
  decided_timestamp_seconds: bigint;
  proposal: [] | [Proposal];
  proposer: [] | [NeuronId];
  executed_timestamp_seconds: bigint;
}
export interface RegisterVote {
  vote: number;
  proposal: [] | [NeuronId];
}
export interface RemoveHotKey {
  hot_key_to_remove: [] | [Principal];
}
export type Result = { Ok: null } | { Err: GovernanceError };
export type Result_1 = { Error: GovernanceError } | { NeuronId: NeuronId };
export type Result_2 = { Ok: Neuron } | { Err: GovernanceError };
export type Result_3 = { Ok: RewardNodeProviders } | { Err: GovernanceError };
export type Result_4 = { Ok: NeuronInfo } | { Err: GovernanceError };
export type Result_5 = { Ok: NodeProvider } | { Err: GovernanceError };
export type Result_6 = { Committed: Committed } | { Aborted: {} };
export interface RewardEvent {
  day_after_genesis: bigint;
  actual_timestamp_seconds: bigint;
  distributed_e8s_equivalent: bigint;
  settled_proposals: Array<NeuronId>;
}
export type RewardMode =
  | { RewardToNeuron: RewardToNeuron }
  | { RewardToAccount: RewardToAccount };
export interface RewardNodeProvider {
  node_provider: [] | [NodeProvider];
  reward_mode: [] | [RewardMode];
  amount_e8s: bigint;
}
export interface RewardNodeProviders {
  use_registry_derived_rewards: [] | [boolean];
  rewards: Array<RewardNodeProvider>;
}
export interface RewardToAccount {
  to_account: [] | [AccountIdentifier];
}
export interface RewardToNeuron {
  dissolve_delay_seconds: bigint;
}
export interface SetDefaultFollowees {
  default_followees: Array<[number, Followees]>;
}
export interface SetDissolveTimestamp {
  dissolve_timestamp_seconds: bigint;
}
export interface SetOpenTimeWindowRequest {
  open_time_window: [] | [TimeWindow];
}
export interface SetSnsTokenSwapOpenTimeWindow {
  request: [] | [SetOpenTimeWindowRequest];
  swap_canister_id: [] | [Principal];
}
export interface SettleCommunityFundParticipation {
  result: [] | [Result_6];
  open_sns_token_swap_proposal_id: [] | [bigint];
}
export interface Spawn {
  percentage_to_spawn: [] | [number];
  new_controller: [] | [Principal];
  nonce: [] | [bigint];
}
export interface SpawnResponse {
  created_neuron_id: [] | [NeuronId];
}
export interface Split {
  amount_e8s: bigint;
}
export interface StakeMaturity {
  percentage_to_stake: [] | [number];
}
export interface StakeMaturityResponse {
  maturity_e8s: bigint;
  staked_maturity_e8s: bigint;
}
export interface Tally {
  no: bigint;
  yes: bigint;
  total: bigint;
  timestamp_seconds: bigint;
}
export interface TimeWindow {
  start_timestamp_seconds: bigint;
  end_timestamp_seconds: bigint;
}
export interface UpdateNodeProvider {
  reward_account: [] | [AccountIdentifier];
}
export interface WaitForQuietState {
  current_deadline_timestamp_seconds: bigint;
}
export interface _SERVICE {
  claim_gtc_neurons: ActorMethod<[Principal, Array<NeuronId>], Result>;
  claim_or_refresh_neuron_from_account: ActorMethod<
    [ClaimOrRefreshNeuronFromAccount],
    ClaimOrRefreshNeuronFromAccountResponse
  >;
  get_build_metadata: ActorMethod<[], string>;
  get_full_neuron: ActorMethod<[bigint], Result_2>;
  get_full_neuron_by_id_or_subaccount: ActorMethod<
    [NeuronIdOrSubaccount],
    Result_2
  >;
  get_monthly_node_provider_rewards: ActorMethod<[], Result_3>;
  get_most_recent_monthly_node_provider_rewards: ActorMethod<
    [],
    [] | [MostRecentMonthlyNodeProviderRewards]
  >;
  get_network_economics_parameters: ActorMethod<[], NetworkEconomics>;
  get_neuron_ids: ActorMethod<[], BigUint64Array>;
  get_neuron_info: ActorMethod<[bigint], Result_4>;
  get_neuron_info_by_id_or_subaccount: ActorMethod<
    [NeuronIdOrSubaccount],
    Result_4
  >;
  get_node_provider_by_caller: ActorMethod<[null], Result_5>;
  get_pending_proposals: ActorMethod<[], Array<ProposalInfo>>;
  get_proposal_info: ActorMethod<[bigint], [] | [ProposalInfo]>;
  list_known_neurons: ActorMethod<[], ListKnownNeuronsResponse>;
  list_neurons: ActorMethod<[ListNeurons], ListNeuronsResponse>;
  list_node_providers: ActorMethod<[], ListNodeProvidersResponse>;
  list_proposals: ActorMethod<[ListProposalInfo], ListProposalInfoResponse>;
  manage_neuron: ActorMethod<[ManageNeuron], ManageNeuronResponse>;
  settle_community_fund_participation: ActorMethod<
    [SettleCommunityFundParticipation],
    Result
  >;
  transfer_gtc_neuron: ActorMethod<[NeuronId, NeuronId], Result>;
  update_node_provider: ActorMethod<[UpdateNodeProvider], Result>;
}
