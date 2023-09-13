import type { ActorMethod } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export interface Account {
  owner: [] | [Principal];
  subaccount: [] | [Subaccount];
}
export type Action =
  | {
      ManageNervousSystemParameters: NervousSystemParameters;
    }
  | { AddGenericNervousSystemFunction: NervousSystemFunction }
  | { RemoveGenericNervousSystemFunction: bigint }
  | { UpgradeSnsToNextVersion: {} }
  | { RegisterDappCanisters: RegisterDappCanisters }
  | { TransferSnsTreasuryFunds: TransferSnsTreasuryFunds }
  | { UpgradeSnsControlledCanister: UpgradeSnsControlledCanister }
  | { DeregisterDappCanisters: DeregisterDappCanisters }
  | { Unspecified: {} }
  | { ManageSnsMetadata: ManageSnsMetadata }
  | {
      ExecuteGenericNervousSystemFunction: ExecuteGenericNervousSystemFunction;
    }
  | { Motion: Motion };
export interface AddMaturityRequest {
  id: [] | [NeuronId];
  amount_e8s: [] | [bigint];
}
export interface AddMaturityResponse {
  new_maturity_e8s: [] | [bigint];
}
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
  status: CanisterStatusType;
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
export interface ChangeAutoStakeMaturity {
  requested_setting_for_auto_stake_maturity: boolean;
}
export interface ClaimOrRefresh {
  by: [] | [By];
}
export interface ClaimOrRefreshResponse {
  refreshed_neuron_id: [] | [NeuronId];
}
export interface ClaimSwapNeuronsRequest {
  neuron_parameters: Array<NeuronParameters>;
}
export interface ClaimSwapNeuronsResponse {
  claim_swap_neurons_result: [] | [ClaimSwapNeuronsResult];
}
export type ClaimSwapNeuronsResult =
  | { Ok: ClaimedSwapNeurons }
  | { Err: number };
export interface ClaimedSwapNeurons {
  swap_neurons: Array<SwapNeuron>;
}
export type Command =
  | { Split: Split }
  | { Follow: Follow }
  | { DisburseMaturity: DisburseMaturity }
  | { ClaimOrRefresh: ClaimOrRefresh }
  | { Configure: Configure }
  | { RegisterVote: RegisterVote }
  | { MakeProposal: Proposal }
  | { StakeMaturity: StakeMaturity }
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
  | { StakeMaturity: StakeMaturityResponse }
  | { MergeMaturity: MergeMaturityResponse }
  | { Disburse: DisburseResponse }
  | { AddNeuronPermission: {} };
export type Command_2 =
  | { Split: Split }
  | { Follow: Follow }
  | { DisburseMaturity: DisburseMaturity }
  | { Configure: Configure }
  | { RegisterVote: RegisterVote }
  | { SyncCommand: {} }
  | { MakeProposal: Proposal }
  | { FinalizeDisburseMaturity: FinalizeDisburseMaturity }
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
  freezing_threshold: bigint;
  controllers: Array<Principal>;
  memory_allocation: bigint;
  compute_allocation: bigint;
}
export interface DeregisterDappCanisters {
  canister_ids: Array<Principal>;
  new_controllers: Array<Principal>;
}
export interface Disburse {
  to_account: [] | [Account];
  amount: [] | [Amount];
}
export interface DisburseMaturity {
  to_account: [] | [Account];
  percentage_to_disburse: number;
}
export interface DisburseMaturityInProgress {
  timestamp_of_disbursement_seconds: bigint;
  amount_e8s: bigint;
  account_to_disburse_to: [] | [Account];
}
export interface DisburseMaturityResponse {
  amount_disbursed_e8s: bigint;
  amount_deducted_e8s: [] | [bigint];
}
export interface DisburseResponse {
  transfer_block_height: bigint;
}
export type DissolveState =
  | { DissolveDelaySeconds: bigint }
  | { WhenDissolvedTimestampSeconds: bigint };
export interface ExecuteGenericNervousSystemFunction {
  function_id: bigint;
  payload: Uint8Array;
}
export interface FinalizeDisburseMaturity {
  amount_to_be_disbursed_e8s: bigint;
  to_account: [] | [Account];
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
export interface GetMaturityModulationResponse {
  maturity_modulation: [] | [MaturityModulation];
}
export interface GetMetadataResponse {
  url: [] | [string];
  logo: [] | [string];
  name: [] | [string];
  description: [] | [string];
}
export interface GetModeResponse {
  mode: [] | [number];
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
export interface GetRunningSnsVersionResponse {
  deployed_version: [] | [Version];
  pending_version: [] | [UpgradeInProgress];
}
export interface GetSnsInitializationParametersResponse {
  sns_initialization_parameters: string;
}
export interface Governance {
  root_canister_id: [] | [Principal];
  id_to_nervous_system_functions: Array<[bigint, NervousSystemFunction]>;
  metrics: [] | [GovernanceCachedMetrics];
  maturity_modulation: [] | [MaturityModulation];
  mode: number;
  parameters: [] | [NervousSystemParameters];
  is_finalizing_disburse_maturity: [] | [boolean];
  deployed_version: [] | [Version];
  sns_initialization_parameters: string;
  latest_reward_event: [] | [RewardEvent];
  pending_version: [] | [UpgradeInProgress];
  swap_canister_id: [] | [Principal];
  ledger_canister_id: [] | [Principal];
  proposals: Array<[bigint, ProposalData]>;
  in_flight_commands: Array<[string, NeuronInFlightCommand]>;
  sns_metadata: [] | [ManageSnsMetadata];
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
  reserved_ids: BigUint64Array;
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
  include_reward_status: Int32Array;
  before_proposal: [] | [ProposalId];
  limit: number;
  exclude_type: BigUint64Array;
  include_status: Int32Array;
}
export interface ListProposalsResponse {
  proposals: Array<ProposalData>;
}
export interface ManageNeuron {
  subaccount: Uint8Array;
  command: [] | [Command];
}
export interface ManageNeuronResponse {
  command: [] | [Command_1];
}
export interface ManageSnsMetadata {
  url: [] | [string];
  logo: [] | [string];
  name: [] | [string];
  description: [] | [string];
}
export interface MaturityModulation {
  current_basis_points: [] | [number];
  updated_at_timestamp_seconds: [] | [bigint];
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
export interface MintTokensRequest {
  recipient: [] | [Account];
  amount_e8s: [] | [bigint];
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
  max_dissolve_delay_bonus_percentage: [] | [bigint];
  max_followees_per_function: [] | [bigint];
  neuron_claimer_permissions: [] | [NeuronPermissionList];
  neuron_minimum_stake_e8s: [] | [bigint];
  max_neuron_age_for_age_bonus: [] | [bigint];
  initial_voting_period_seconds: [] | [bigint];
  neuron_minimum_dissolve_delay_to_vote_seconds: [] | [bigint];
  reject_cost_e8s: [] | [bigint];
  max_proposals_to_keep_per_action: [] | [number];
  wait_for_quiet_deadline_increase_seconds: [] | [bigint];
  max_number_of_neurons: [] | [bigint];
  transaction_fee_e8s: [] | [bigint];
  max_number_of_proposals_with_ballots: [] | [bigint];
  max_age_bonus_percentage: [] | [bigint];
  neuron_grantable_permissions: [] | [NeuronPermissionList];
  voting_rewards_parameters: [] | [VotingRewardsParameters];
  maturity_modulation_disabled: [] | [boolean];
  max_number_of_principals_per_neuron: [] | [bigint];
}
export interface Neuron {
  id: [] | [NeuronId];
  staked_maturity_e8s_equivalent: [] | [bigint];
  permissions: Array<NeuronPermission>;
  maturity_e8s_equivalent: bigint;
  cached_neuron_stake_e8s: bigint;
  created_timestamp_seconds: bigint;
  source_nns_neuron_id: [] | [bigint];
  auto_stake_maturity: [] | [boolean];
  aging_since_timestamp_seconds: bigint;
  dissolve_state: [] | [DissolveState];
  voting_power_percentage_multiplier: bigint;
  vesting_period_seconds: [] | [bigint];
  disburse_maturity_in_progress: Array<DisburseMaturityInProgress>;
  followees: Array<[bigint, Followees]>;
  neuron_fees_e8s: bigint;
}
export interface NeuronId {
  id: Uint8Array;
}
export interface NeuronInFlightCommand {
  command: [] | [Command_2];
  timestamp: bigint;
}
export interface NeuronParameters {
  controller: [] | [Principal];
  dissolve_delay_seconds: [] | [bigint];
  source_nns_neuron_id: [] | [bigint];
  stake_e8s: [] | [bigint];
  followees: Array<NeuronId>;
  hotkey: [] | [Principal];
  neuron_id: [] | [NeuronId];
}
export interface NeuronPermission {
  principal: [] | [Principal];
  permission_type: Int32Array;
}
export interface NeuronPermissionList {
  permissions: Int32Array;
}
export type Operation =
  | {
      ChangeAutoStakeMaturity: ChangeAutoStakeMaturity;
    }
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
  reward_event_end_timestamp_seconds: [] | [bigint];
  proposal_creation_timestamp_seconds: bigint;
  initial_voting_period_seconds: bigint;
  reject_cost_e8s: bigint;
  latest_tally: [] | [Tally];
  wait_for_quiet_deadline_increase_seconds: bigint;
  decided_timestamp_seconds: bigint;
  proposal: [] | [Proposal];
  proposer: [] | [NeuronId];
  wait_for_quiet_state: [] | [WaitForQuietState];
  is_eligible_for_rewards: boolean;
  executed_timestamp_seconds: bigint;
}
export interface ProposalId {
  id: bigint;
}
export interface RegisterDappCanisters {
  canister_ids: Array<Principal>;
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
  rounds_since_last_distribution: [] | [bigint];
  actual_timestamp_seconds: bigint;
  end_timestamp_seconds: [] | [bigint];
  distributed_e8s_equivalent: bigint;
  round: bigint;
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
export interface StakeMaturity {
  percentage_to_stake: [] | [number];
}
export interface StakeMaturityResponse {
  maturity_e8s: bigint;
  staked_maturity_e8s: bigint;
}
export interface Subaccount {
  subaccount: Uint8Array;
}
export interface SwapNeuron {
  id: [] | [NeuronId];
  status: number;
}
export interface Tally {
  no: bigint;
  yes: bigint;
  total: bigint;
  timestamp_seconds: bigint;
}
export interface TransferSnsTreasuryFunds {
  from_treasury: number;
  to_principal: [] | [Principal];
  to_subaccount: [] | [Subaccount];
  memo: [] | [bigint];
  amount_e8s: bigint;
}
export interface UpgradeInProgress {
  mark_failed_at_seconds: bigint;
  checking_upgrade_lock: bigint;
  proposal_id: bigint;
  target_version: [] | [Version];
}
export interface UpgradeSnsControlledCanister {
  new_canister_wasm: Uint8Array;
  mode: [] | [number];
  canister_id: [] | [Principal];
  canister_upgrade_arg: [] | [Uint8Array];
}
export interface Version {
  archive_wasm_hash: Uint8Array;
  root_wasm_hash: Uint8Array;
  swap_wasm_hash: Uint8Array;
  ledger_wasm_hash: Uint8Array;
  governance_wasm_hash: Uint8Array;
  index_wasm_hash: Uint8Array;
}
export interface VotingRewardsParameters {
  final_reward_rate_basis_points: [] | [bigint];
  initial_reward_rate_basis_points: [] | [bigint];
  reward_rate_transition_duration_seconds: [] | [bigint];
  round_duration_seconds: [] | [bigint];
}
export interface WaitForQuietState {
  current_deadline_timestamp_seconds: bigint;
}
export interface _SERVICE {
  add_maturity: ActorMethod<[AddMaturityRequest], AddMaturityResponse>;
  claim_swap_neurons: ActorMethod<
    [ClaimSwapNeuronsRequest],
    ClaimSwapNeuronsResponse
  >;
  fail_stuck_upgrade_in_progress: ActorMethod<[{}], {}>;
  get_build_metadata: ActorMethod<[], string>;
  get_latest_reward_event: ActorMethod<[], RewardEvent>;
  get_maturity_modulation: ActorMethod<[{}], GetMaturityModulationResponse>;
  get_metadata: ActorMethod<[{}], GetMetadataResponse>;
  get_mode: ActorMethod<[{}], GetModeResponse>;
  get_nervous_system_parameters: ActorMethod<[null], NervousSystemParameters>;
  get_neuron: ActorMethod<[GetNeuron], GetNeuronResponse>;
  get_proposal: ActorMethod<[GetProposal], GetProposalResponse>;
  get_root_canister_status: ActorMethod<[null], CanisterStatusResultV2>;
  get_running_sns_version: ActorMethod<[{}], GetRunningSnsVersionResponse>;
  get_sns_initialization_parameters: ActorMethod<
    [{}],
    GetSnsInitializationParametersResponse
  >;
  list_nervous_system_functions: ActorMethod<
    [],
    ListNervousSystemFunctionsResponse
  >;
  list_neurons: ActorMethod<[ListNeurons], ListNeuronsResponse>;
  list_proposals: ActorMethod<[ListProposals], ListProposalsResponse>;
  manage_neuron: ActorMethod<[ManageNeuron], ManageNeuronResponse>;
  mint_tokens: ActorMethod<[MintTokensRequest], {}>;
  set_mode: ActorMethod<[SetMode], {}>;
  update_neuron: ActorMethod<[Neuron], [] | [GovernanceError]>;
}
