import type { Principal } from "@dfinity/principal";
export interface Account {
  of: [] | [Principal];
  subaccount: [] | [Subaccount];
}
export type Action =
  | {
      ManageNervousSystemParameters: NervousSystemParameters;
    }
  | { AddGenericNervousSystemFunction: NervousSystemFunction }
  | { RemoveGenericNervousSystemFunction: bigint }
  | { UpgradeSnsToNextVersion: {} }
  | { UpgradeSnsControlledCanister: UpgradeSnsControlledCanister }
  | { Unspecified: {} }
  | {
      ExecuteGenericNervousSystemFunction: ExecuteGenericNervousSystemFunction;
    }
  | { Motion: Motion };
export interface AddNeuronPermissions {
  permissions_to_add: [] | [NeuronPermissionList];
  principal_id: [] | [Principal];
}
export interface Amount {
  e8s: bigint;
}
export interface Ballot {
  vote: number;
  cast_timestamp_seconds: bigint;
  voting_power: bigint;
}
export type By = { MemoAndController: MemoAndController } | { NeuronId: {} };
export interface CanisterStatusResultV2 {
  controller: Principal;
  status: CanisterStatusType;
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
export interface ClaimOrRefresh {
  by: [] | [By];
}
export interface ClaimOrRefreshResponse {
  refreshed_neuron_id: [] | [NeuronId];
}
export type Command =
  | { Split: Split }
  | { Follow: Follow }
  | { DisburseMaturity: DisburseMaturity }
  | { ClaimOrRefresh: ClaimOrRefresh }
  | { Configure: Configure }
  | { RegisterVote: RegisterVote }
  | { MakeProposal: Proposal }
  | { RemoveNeuronPermissions: RemoveNeuronPermissions }
  | { AddNeuronPermissions: AddNeuronPermissions }
  | { MergeMaturity: MergeMaturity }
  | { Disburse: Disburse };
export type Command_1 =
  | { Error: GovernanceError }
  | { Split: SplitResponse }
  | { Follow: {} }
  | { DisburseMaturity: DisburseMaturityResponse }
  | { ClaimOrRefresh: ClaimOrRefreshResponse }
  | { Configure: {} }
  | { RegisterVote: {} }
  | { MakeProposal: GetProposal }
  | { RemoveNeuronPermission: {} }
  | { MergeMaturity: MergeMaturityResponse }
  | { Disburse: DisburseResponse }
  | { AddNeuronPermission: {} };
export type Command_2 =
  | { Split: Split }
  | { Follow: Follow }
  | { DisburseMaturity: DisburseMaturity }
  | { Configure: Configure }
  | { RegisterVote: RegisterVote }
  | { MakeProposal: Proposal }
  | { ClaimOrRefreshNeuron: ClaimOrRefresh }
  | { RemoveNeuronPermissions: RemoveNeuronPermissions }
  | { AddNeuronPermissions: AddNeuronPermissions }
  | { MergeMaturity: MergeMaturity }
  | { Disburse: Disburse };
export interface Configure {
  operation: [] | [Operation];
}
export interface DefaultFollowees {
  followees: Array<[bigint, Followees]>;
}
export interface DefiniteCanisterSettingsArgs {
  controller: Principal;
  freezing_threshold: bigint;
  controllers: Array<Principal>;
  memory_allocation: bigint;
  compute_allocation: bigint;
}
export interface Disburse {
  to_account: [] | [Account];
  amount: [] | [Amount];
}
export interface DisburseMaturity {
  to_account: [] | [Account];
  percentage_to_disburse: number;
}
export interface DisburseMaturityResponse {
  transfer_block_height: bigint;
  amount_disbursed_e8s: bigint;
}
export interface DisburseResponse {
  transfer_block_height: bigint;
}
export type DissolveState =
  | { DissolveDelaySeconds: bigint }
  | { WhenDissolvedTimestampSeconds: bigint };
export interface ExecuteGenericNervousSystemFunction {
  function_id: bigint;
  payload: Array<number>;
}
export interface Follow {
  function_id: bigint;
  followees: Array<NeuronId>;
}
export interface Followees {
  followees: Array<NeuronId>;
}
export type FunctionType =
  | { NativeNervousSystemFunction: {} }
  | { GenericNervousSystemFunction: GenericNervousSystemFunction };
export interface GenericNervousSystemFunction {
  validator_canister_id: [] | [Principal];
  target_canister_id: [] | [Principal];
  validator_method_name: [] | [string];
  target_method_name: [] | [string];
}
export interface GetMetadataResponse {
  url: [] | [string];
  logo: [] | [string];
  name: [] | [string];
  description: [] | [string];
}
export interface GetNeuron {
  neuron_id: [] | [NeuronId];
}
export interface GetNeuronResponse {
  result: [] | [Result];
}
export interface GetProposal {
  proposal_id: [] | [ProposalId];
}
export interface GetProposalResponse {
  result: [] | [Result_1];
}
export interface Governance {
  root_canister_id: [] | [Principal];
  id_to_nervous_system_functions: Array<[bigint, NervousSystemFunction]>;
  metrics: [] | [GovernanceCachedMetrics];
  mode: number;
  parameters: [] | [NervousSystemParameters];
  latest_reward_event: [] | [RewardEvent];
  swap_canister_id: [] | [Principal];
  ledger_canister_id: [] | [Principal];
  proposals: Array<[bigint, ProposalData]>;
  in_flight_commands: Array<[string, NeuronInFlightCommand]>;
  sns_metadata: [] | [GetMetadataResponse];
  neurons: Array<[string, Neuron]>;
  genesis_timestamp_seconds: bigint;
}
export interface GovernanceCachedMetrics {
  not_dissolving_neurons_e8s_buckets: Array<[bigint, number]>;
  garbage_collectable_neurons_count: bigint;
  neurons_with_invalid_stake_count: bigint;
  not_dissolving_neurons_count_buckets: Array<[bigint, bigint]>;
  neurons_with_less_than_6_months_dissolve_delay_count: bigint;
  dissolved_neurons_count: bigint;
  total_staked_e8s: bigint;
  total_supply_governance_tokens: bigint;
  not_dissolving_neurons_count: bigint;
  dissolved_neurons_e8s: bigint;
  neurons_with_less_than_6_months_dissolve_delay_e8s: bigint;
  dissolving_neurons_count_buckets: Array<[bigint, bigint]>;
  dissolving_neurons_count: bigint;
  dissolving_neurons_e8s_buckets: Array<[bigint, number]>;
  timestamp_seconds: bigint;
}
export interface GovernanceError {
  error_message: string;
  error_type: number;
}
export interface IncreaseDissolveDelay {
  additional_dissolve_delay_seconds: number;
}
export interface ListNervousSystemFunctionsResponse {
  reserved_ids: Array<bigint>;
  functions: Array<NervousSystemFunction>;
}
export interface ListNeurons {
  of_principal: [] | [Principal];
  limit: number;
  start_page_at: [] | [NeuronId];
}
export interface ListNeuronsResponse {
  neurons: Array<Neuron>;
}
export interface ListProposals {
  include_reward_status: Array<number>;
  before_proposal: [] | [ProposalId];
  limit: number;
  exclude_type: Array<bigint>;
  include_status: Array<number>;
}
export interface ListProposalsResponse {
  proposals: Array<ProposalData>;
}
export interface ManageNeuron {
  subaccount: Array<number>;
  command: [] | [Command];
}
export interface ManageNeuronResponse {
  command: [] | [Command_1];
}
export interface MemoAndController {
  controller: [] | [Principal];
  memo: bigint;
}
export interface MergeMaturity {
  percentage_to_merge: number;
}
export interface MergeMaturityResponse {
  merged_maturity_e8s: bigint;
  new_stake_e8s: bigint;
}
export interface Motion {
  motion_text: string;
}
export interface NervousSystemFunction {
  id: bigint;
  name: string;
  description: [] | [string];
  function_type: [] | [FunctionType];
}
export interface NervousSystemParameters {
  default_followees: [] | [DefaultFollowees];
  max_dissolve_delay_seconds: [] | [bigint];
  max_followees_per_function: [] | [bigint];
  neuron_claimer_permissions: [] | [NeuronPermissionList];
  neuron_minimum_stake_e8s: [] | [bigint];
  initial_voting_period: [] | [bigint];
  max_neuron_age_for_age_bonus: [] | [bigint];
  neuron_minimum_dissolve_delay_to_vote_seconds: [] | [bigint];
  reject_cost_e8s: [] | [bigint];
  max_proposals_to_keep_per_action: [] | [number];
  wait_for_quiet_deadline_increase_seconds: [] | [bigint];
  max_number_of_neurons: [] | [bigint];
  transaction_fee_e8s: [] | [bigint];
  max_number_of_proposals_with_ballots: [] | [bigint];
  reward_distribution_period_seconds: [] | [bigint];
  neuron_grantable_permissions: [] | [NeuronPermissionList];
  max_number_of_principals_per_neuron: [] | [bigint];
}
export interface Neuron {
  id: [] | [NeuronId];
  permissions: Array<NeuronPermission>;
  maturity_e8s_equivalent: bigint;
  cached_neuron_stake_e8s: bigint;
  created_timestamp_seconds: bigint;
  aging_since_timestamp_seconds: bigint;
  dissolve_state: [] | [DissolveState];
  followees: Array<[bigint, Followees]>;
  neuron_fees_e8s: bigint;
}
export interface NeuronId {
  id: Array<number>;
}
export interface NeuronInFlightCommand {
  command: [] | [Command_2];
  timestamp: bigint;
}
export interface NeuronPermission {
  principal: [] | [Principal];
  permission_type: Array<number>;
}
export interface NeuronPermissionList {
  permissions: Array<number>;
}
export type Operation =
  | { StopDissolving: {} }
  | { StartDissolving: {} }
  | { IncreaseDissolveDelay: IncreaseDissolveDelay }
  | { SetDissolveTimestamp: SetDissolveTimestamp };
export interface Proposal {
  url: string;
  title: string;
  action: [] | [Action];
  summary: string;
}
export interface ProposalData {
  id: [] | [ProposalId];
  payload_text_rendering: [] | [string];
  action: bigint;
  failure_reason: [] | [GovernanceError];
  ballots: Array<[string, Ballot]>;
  reward_event_round: bigint;
  failed_timestamp_seconds: bigint;
  proposal_creation_timestamp_seconds: bigint;
  reject_cost_e8s: bigint;
  latest_tally: [] | [Tally];
  decided_timestamp_seconds: bigint;
  proposal: [] | [Proposal];
  proposer: [] | [NeuronId];
  wait_for_quiet_state: [] | [WaitForQuietState];
  executed_timestamp_seconds: bigint;
}
export interface ProposalId {
  id: bigint;
}
export interface RegisterVote {
  vote: number;
  proposal: [] | [ProposalId];
}
export interface RemoveNeuronPermissions {
  permissions_to_remove: [] | [NeuronPermissionList];
  principal_id: [] | [Principal];
}
export type Result = { Error: GovernanceError } | { Neuron: Neuron };
export type Result_1 = { Error: GovernanceError } | { Proposal: ProposalData };
export interface RewardEvent {
  actual_timestamp_seconds: bigint;
  periods_since_genesis: bigint;
  distributed_e8s_equivalent: bigint;
  settled_proposals: Array<ProposalId>;
}
export interface SetDissolveTimestamp {
  dissolve_timestamp_seconds: bigint;
}
export interface SetMode {
  mode: number;
}
export interface Split {
  memo: bigint;
  amount_e8s: bigint;
}
export interface SplitResponse {
  created_neuron_id: [] | [NeuronId];
}
export interface Subaccount {
  subaccount: Array<number>;
}
export interface Tally {
  no: bigint;
  yes: bigint;
  total: bigint;
  timestamp_seconds: bigint;
}
export interface UpgradeSnsControlledCanister {
  new_canister_wasm: Array<number>;
  canister_id: [] | [Principal];
}
export interface WaitForQuietState {
  current_deadline_timestamp_seconds: bigint;
}
export interface _SERVICE {
  get_build_metadata: () => Promise<string>;
  get_metadata: (arg_0: {}) => Promise<GetMetadataResponse>;
  get_nervous_system_parameters: (
    arg_0: null
  ) => Promise<NervousSystemParameters>;
  get_neuron: (arg_0: GetNeuron) => Promise<GetNeuronResponse>;
  get_proposal: (arg_0: GetProposal) => Promise<GetProposalResponse>;
  get_root_canister_status: (arg_0: null) => Promise<CanisterStatusResultV2>;
  list_nervous_system_functions: () => Promise<ListNervousSystemFunctionsResponse>;
  list_neurons: (arg_0: ListNeurons) => Promise<ListNeuronsResponse>;
  list_proposals: (arg_0: ListProposals) => Promise<ListProposalsResponse>;
  manage_neuron: (arg_0: ManageNeuron) => Promise<ManageNeuronResponse>;
  set_mode: (arg_0: SetMode) => Promise<{}>;
}
