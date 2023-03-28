import { fromNullable } from "@dfinity/utils";
import {
  Account,
  AddNeuronPermissions,
  Amount,
  Ballot,
  CanisterStatusResultV2,
  ChangeAutoStakeMaturity,
  ClaimOrRefresh,
  ClaimOrRefreshResponse,
  ClaimSwapNeuronsRequest,
  ClaimSwapNeuronsResponse,
  ClaimedSwapNeurons,
  Configure,
  DefaultFollowees,
  DefiniteCanisterSettingsArgs,
  DeregisterDappCanisters,
  Disburse,
  DisburseMaturity,
  DisburseMaturityInProgress,
  DisburseMaturityResponse,
  DisburseResponse,
  ExecuteGenericNervousSystemFunction,
  FinalizeDisburseMaturity,
  Follow,
  Followees,
  GenericNervousSystemFunction,
  GetMetadataResponse,
  GetModeResponse,
  GetNeuron,
  GetNeuronResponse,
  GetProposal,
  GetProposalResponse,
  GetRunningSnsVersionResponse,
  GetSnsInitializationParametersResponse,
  Governance,
  GovernanceCachedMetrics,
  GovernanceError,
  IncreaseDissolveDelay,
  ListNervousSystemFunctionsResponse,
  ListNeurons,
  ListNeuronsResponse,
  ListProposals,
  ListProposalsResponse,
  ManageNeuron,
  ManageNeuronResponse,
  ManageSnsMetadata,
  MemoAndController,
  MergeMaturity,
  MergeMaturityResponse,
  Motion,
  NervousSystemFunction,
  NervousSystemParameters,
  Neuron,
  NeuronId,
  NeuronInFlightCommand,
  NeuronParameters,
  NeuronPermission,
  NeuronPermissionList,
  Proposal,
  ProposalData,
  ProposalId,
  RegisterDappCanisters,
  RegisterVote,
  RemoveNeuronPermissions,
  RewardEvent,
  SetDissolveTimestamp,
  SetMode,
  Split,
  SplitResponse,
  StakeMaturity,
  StakeMaturityResponse,
  Subaccount,
  SwapNeuron,
  Tally,
  TransferSnsTreasuryFunds,
  UpgradeInProgress,
  UpgradeSnsControlledCanister,
  Version,
  VotingRewardsParameters,
  WaitForQuietState
} from "./sns_governance";
import type { ActorMethod } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";
export interface OptionalAccount {
  owner: undefined | Principal;
  subaccount: undefined | OptionalSubaccount;
}
export function convertAccount(account: Account | undefined): OptionalAccount | undefined {
  return account === undefined ? undefined : {
    owner: fromNullable(account.owner),
    subaccount: convertSubaccount(fromNullable(account.subaccount))
  };
}
export type Action = {
  ManageNervousSystemParameters: NervousSystemParameters;
} | {
  AddGenericNervousSystemFunction: NervousSystemFunction;
} | {
  RemoveGenericNervousSystemFunction: bigint;
} | {
  UpgradeSnsToNextVersion: {};
} | {
  RegisterDappCanisters: RegisterDappCanisters;
} | {
  TransferSnsTreasuryFunds: TransferSnsTreasuryFunds;
} | {
  UpgradeSnsControlledCanister: UpgradeSnsControlledCanister;
} | {
  DeregisterDappCanisters: DeregisterDappCanisters;
} | {
  Unspecified: {};
} | {
  ManageSnsMetadata: ManageSnsMetadata;
} | {
  ExecuteGenericNervousSystemFunction: ExecuteGenericNervousSystemFunction;
} | {
  Motion: Motion;
};
export interface OptionalAddNeuronPermissions {
  permissions_to_add: undefined | OptionalNeuronPermissionList;
  principal_id: undefined | Principal;
}
export function convertAddNeuronPermissions(addNeuronPermissions: AddNeuronPermissions | undefined): OptionalAddNeuronPermissions | undefined {
  return addNeuronPermissions === undefined ? undefined : {
    permissions_to_add: convertNeuronPermissionList(fromNullable(addNeuronPermissions.permissions_to_add)),
    principal_id: fromNullable(addNeuronPermissions.principal_id)
  };
}
export interface OptionalAmount {
  e8s: bigint;
}
export function convertAmount(amount: Amount | undefined): OptionalAmount | undefined {
  return amount === undefined ? undefined : {
    e8s: amount.e8s
  };
}
export interface OptionalBallot {
  vote: number;
  cast_timestamp_seconds: bigint;
  voting_power: bigint;
}
export function convertBallot(ballot: Ballot | undefined): OptionalBallot | undefined {
  return ballot === undefined ? undefined : {
    vote: ballot.vote,
    cast_timestamp_seconds: ballot.cast_timestamp_seconds,
    voting_power: ballot.voting_power
  };
}
export type By = {
  MemoAndController: MemoAndController;
} | {
  NeuronId: {};
};
export interface OptionalCanisterStatusResultV2 {
  controller: Principal;
  status: CanisterStatusType;
  freezing_threshold: bigint;
  balance: Array<[Uint8Array, bigint]>;
  memory_size: bigint;
  cycles: bigint;
  settings: DefiniteCanisterSettingsArgs;
  idle_cycles_burned_per_day: bigint;
  module_hash: undefined | Uint8Array;
}
export function convertCanisterStatusResultV2(canisterStatusResultV2: CanisterStatusResultV2 | undefined): OptionalCanisterStatusResultV2 | undefined {
  return canisterStatusResultV2 === undefined ? undefined : {
    controller: canisterStatusResultV2.controller,
    status: canisterStatusResultV2.status,
    freezing_threshold: canisterStatusResultV2.freezing_threshold,
    balance: canisterStatusResultV2.balance,
    memory_size: canisterStatusResultV2.memory_size,
    cycles: canisterStatusResultV2.cycles,
    settings: canisterStatusResultV2.settings,
    idle_cycles_burned_per_day: canisterStatusResultV2.idle_cycles_burned_per_day,
    module_hash: fromNullable(canisterStatusResultV2.module_hash)
  };
}
export type CanisterStatusType = {
  stopped: null;
} | {
  stopping: null;
} | {
  running: null;
};
export interface OptionalChangeAutoStakeMaturity {
  requested_setting_for_auto_stake_maturity: boolean;
}
export function convertChangeAutoStakeMaturity(changeAutoStakeMaturity: ChangeAutoStakeMaturity | undefined): OptionalChangeAutoStakeMaturity | undefined {
  return changeAutoStakeMaturity === undefined ? undefined : {
    requested_setting_for_auto_stake_maturity: changeAutoStakeMaturity.requested_setting_for_auto_stake_maturity
  };
}
export interface OptionalClaimOrRefresh {
  by: undefined | By;
}
export function convertClaimOrRefresh(claimOrRefresh: ClaimOrRefresh | undefined): OptionalClaimOrRefresh | undefined {
  return claimOrRefresh === undefined ? undefined : {
    by: convertBy(fromNullable(claimOrRefresh.by))
  };
}
export interface OptionalClaimOrRefreshResponse {
  refreshed_neuron_id: undefined | OptionalNeuronId;
}
export function convertClaimOrRefreshResponse(claimOrRefreshResponse: ClaimOrRefreshResponse | undefined): OptionalClaimOrRefreshResponse | undefined {
  return claimOrRefreshResponse === undefined ? undefined : {
    refreshed_neuron_id: convertNeuronId(fromNullable(claimOrRefreshResponse.refreshed_neuron_id))
  };
}
export interface OptionalClaimSwapNeuronsRequest {
  neuron_parameters: Array<NeuronParameters>;
}
export function convertClaimSwapNeuronsRequest(claimSwapNeuronsRequest: ClaimSwapNeuronsRequest | undefined): OptionalClaimSwapNeuronsRequest | undefined {
  return claimSwapNeuronsRequest === undefined ? undefined : {
    neuron_parameters: claimSwapNeuronsRequest.neuron_parameters
  };
}
export interface OptionalClaimSwapNeuronsResponse {
  claim_swap_neurons_result: undefined | ClaimSwapNeuronsResult;
}
export function convertClaimSwapNeuronsResponse(claimSwapNeuronsResponse: ClaimSwapNeuronsResponse | undefined): OptionalClaimSwapNeuronsResponse | undefined {
  return claimSwapNeuronsResponse === undefined ? undefined : {
    claim_swap_neurons_result: convertClaimSwapNeuronsResult(fromNullable(claimSwapNeuronsResponse.claim_swap_neurons_result))
  };
}
export type ClaimSwapNeuronsResult = {
  Ok: ClaimedSwapNeurons;
} | {
  Err: number;
};
export interface OptionalClaimedSwapNeurons {
  swap_neurons: Array<SwapNeuron>;
}
export function convertClaimedSwapNeurons(claimedSwapNeurons: ClaimedSwapNeurons | undefined): OptionalClaimedSwapNeurons | undefined {
  return claimedSwapNeurons === undefined ? undefined : {
    swap_neurons: claimedSwapNeurons.swap_neurons
  };
}
export type Command = {
  Split: Split;
} | {
  Follow: Follow;
} | {
  DisburseMaturity: DisburseMaturity;
} | {
  ClaimOrRefresh: ClaimOrRefresh;
} | {
  Configure: Configure;
} | {
  RegisterVote: RegisterVote;
} | {
  MakeProposal: Proposal;
} | {
  StakeMaturity: StakeMaturity;
} | {
  RemoveNeuronPermissions: RemoveNeuronPermissions;
} | {
  AddNeuronPermissions: AddNeuronPermissions;
} | {
  MergeMaturity: MergeMaturity;
} | {
  Disburse: Disburse;
};
export type Command_1 = {
  Error: GovernanceError;
} | {
  Split: SplitResponse;
} | {
  Follow: {};
} | {
  DisburseMaturity: DisburseMaturityResponse;
} | {
  ClaimOrRefresh: ClaimOrRefreshResponse;
} | {
  Configure: {};
} | {
  RegisterVote: {};
} | {
  MakeProposal: GetProposal;
} | {
  RemoveNeuronPermission: {};
} | {
  StakeMaturity: StakeMaturityResponse;
} | {
  MergeMaturity: MergeMaturityResponse;
} | {
  Disburse: DisburseResponse;
} | {
  AddNeuronPermission: {};
};
export type Command_2 = {
  Split: Split;
} | {
  Follow: Follow;
} | {
  DisburseMaturity: DisburseMaturity;
} | {
  Configure: Configure;
} | {
  RegisterVote: RegisterVote;
} | {
  SyncCommand: {};
} | {
  MakeProposal: Proposal;
} | {
  FinalizeDisburseMaturity: FinalizeDisburseMaturity;
} | {
  ClaimOrRefreshNeuron: ClaimOrRefresh;
} | {
  RemoveNeuronPermissions: RemoveNeuronPermissions;
} | {
  AddNeuronPermissions: AddNeuronPermissions;
} | {
  MergeMaturity: MergeMaturity;
} | {
  Disburse: Disburse;
};
export interface OptionalConfigure {
  operation: undefined | Operation;
}
export function convertConfigure(configure: Configure | undefined): OptionalConfigure | undefined {
  return configure === undefined ? undefined : {
    operation: convertOperation(fromNullable(configure.operation))
  };
}
export interface OptionalDefaultFollowees {
  followees: Array<[bigint, Followees]>;
}
export function convertDefaultFollowees(defaultFollowees: DefaultFollowees | undefined): OptionalDefaultFollowees | undefined {
  return defaultFollowees === undefined ? undefined : {
    followees: defaultFollowees.followees
  };
}
export interface OptionalDefiniteCanisterSettingsArgs {
  controller: Principal;
  freezing_threshold: bigint;
  controllers: Array<Principal>;
  memory_allocation: bigint;
  compute_allocation: bigint;
}
export function convertDefiniteCanisterSettingsArgs(definiteCanisterSettingsArgs: DefiniteCanisterSettingsArgs | undefined): OptionalDefiniteCanisterSettingsArgs | undefined {
  return definiteCanisterSettingsArgs === undefined ? undefined : {
    controller: definiteCanisterSettingsArgs.controller,
    freezing_threshold: definiteCanisterSettingsArgs.freezing_threshold,
    controllers: definiteCanisterSettingsArgs.controllers,
    memory_allocation: definiteCanisterSettingsArgs.memory_allocation,
    compute_allocation: definiteCanisterSettingsArgs.compute_allocation
  };
}
export interface OptionalDeregisterDappCanisters {
  canister_ids: Array<Principal>;
  new_controllers: Array<Principal>;
}
export function convertDeregisterDappCanisters(deregisterDappCanisters: DeregisterDappCanisters | undefined): OptionalDeregisterDappCanisters | undefined {
  return deregisterDappCanisters === undefined ? undefined : {
    canister_ids: deregisterDappCanisters.canister_ids,
    new_controllers: deregisterDappCanisters.new_controllers
  };
}
export interface OptionalDisburse {
  to_account: undefined | OptionalAccount;
  amount: undefined | OptionalAmount;
}
export function convertDisburse(disburse: Disburse | undefined): OptionalDisburse | undefined {
  return disburse === undefined ? undefined : {
    to_account: convertAccount(fromNullable(disburse.to_account)),
    amount: convertAmount(fromNullable(disburse.amount))
  };
}
export interface OptionalDisburseMaturity {
  to_account: undefined | OptionalAccount;
  percentage_to_disburse: number;
}
export function convertDisburseMaturity(disburseMaturity: DisburseMaturity | undefined): OptionalDisburseMaturity | undefined {
  return disburseMaturity === undefined ? undefined : {
    to_account: convertAccount(fromNullable(disburseMaturity.to_account)),
    percentage_to_disburse: disburseMaturity.percentage_to_disburse
  };
}
export interface OptionalDisburseMaturityInProgress {
  timestamp_of_disbursement_seconds: bigint;
  amount_e8s: bigint;
  account_to_disburse_to: undefined | OptionalAccount;
}
export function convertDisburseMaturityInProgress(disburseMaturityInProgress: DisburseMaturityInProgress | undefined): OptionalDisburseMaturityInProgress | undefined {
  return disburseMaturityInProgress === undefined ? undefined : {
    timestamp_of_disbursement_seconds: disburseMaturityInProgress.timestamp_of_disbursement_seconds,
    amount_e8s: disburseMaturityInProgress.amount_e8s,
    account_to_disburse_to: convertAccount(fromNullable(disburseMaturityInProgress.account_to_disburse_to))
  };
}
export interface OptionalDisburseMaturityResponse {
  amount_disbursed_e8s: bigint;
}
export function convertDisburseMaturityResponse(disburseMaturityResponse: DisburseMaturityResponse | undefined): OptionalDisburseMaturityResponse | undefined {
  return disburseMaturityResponse === undefined ? undefined : {
    amount_disbursed_e8s: disburseMaturityResponse.amount_disbursed_e8s
  };
}
export interface OptionalDisburseResponse {
  transfer_block_height: bigint;
}
export function convertDisburseResponse(disburseResponse: DisburseResponse | undefined): OptionalDisburseResponse | undefined {
  return disburseResponse === undefined ? undefined : {
    transfer_block_height: disburseResponse.transfer_block_height
  };
}
export type DissolveState = {
  DissolveDelaySeconds: bigint;
} | {
  WhenDissolvedTimestampSeconds: bigint;
};
export interface OptionalExecuteGenericNervousSystemFunction {
  function_id: bigint;
  payload: Uint8Array;
}
export function convertExecuteGenericNervousSystemFunction(executeGenericNervousSystemFunction: ExecuteGenericNervousSystemFunction | undefined): OptionalExecuteGenericNervousSystemFunction | undefined {
  return executeGenericNervousSystemFunction === undefined ? undefined : {
    function_id: executeGenericNervousSystemFunction.function_id,
    payload: executeGenericNervousSystemFunction.payload
  };
}
export interface OptionalFinalizeDisburseMaturity {
  amount_to_be_disbursed_e8s: bigint;
  to_account: undefined | OptionalAccount;
}
export function convertFinalizeDisburseMaturity(finalizeDisburseMaturity: FinalizeDisburseMaturity | undefined): OptionalFinalizeDisburseMaturity | undefined {
  return finalizeDisburseMaturity === undefined ? undefined : {
    amount_to_be_disbursed_e8s: finalizeDisburseMaturity.amount_to_be_disbursed_e8s,
    to_account: convertAccount(fromNullable(finalizeDisburseMaturity.to_account))
  };
}
export interface OptionalFollow {
  function_id: bigint;
  followees: Array<NeuronId>;
}
export function convertFollow(follow: Follow | undefined): OptionalFollow | undefined {
  return follow === undefined ? undefined : {
    function_id: follow.function_id,
    followees: follow.followees
  };
}
export interface OptionalFollowees {
  followees: Array<NeuronId>;
}
export function convertFollowees(followees: Followees | undefined): OptionalFollowees | undefined {
  return followees === undefined ? undefined : {
    followees: followees.followees
  };
}
export type FunctionType = {
  NativeNervousSystemFunction: {};
} | {
  GenericNervousSystemFunction: GenericNervousSystemFunction;
};
export interface OptionalGenericNervousSystemFunction {
  validator_canister_id: undefined | Principal;
  target_canister_id: undefined | Principal;
  validator_method_name: undefined | string;
  target_method_name: undefined | string;
}
export function convertGenericNervousSystemFunction(genericNervousSystemFunction: GenericNervousSystemFunction | undefined): OptionalGenericNervousSystemFunction | undefined {
  return genericNervousSystemFunction === undefined ? undefined : {
    validator_canister_id: fromNullable(genericNervousSystemFunction.validator_canister_id),
    target_canister_id: fromNullable(genericNervousSystemFunction.target_canister_id),
    validator_method_name: fromNullable(genericNervousSystemFunction.validator_method_name),
    target_method_name: fromNullable(genericNervousSystemFunction.target_method_name)
  };
}
export interface OptionalGetMetadataResponse {
  url: undefined | string;
  logo: undefined | string;
  name: undefined | string;
  description: undefined | string;
}
export function convertGetMetadataResponse(getMetadataResponse: GetMetadataResponse | undefined): OptionalGetMetadataResponse | undefined {
  return getMetadataResponse === undefined ? undefined : {
    url: fromNullable(getMetadataResponse.url),
    logo: fromNullable(getMetadataResponse.logo),
    name: fromNullable(getMetadataResponse.name),
    description: fromNullable(getMetadataResponse.description)
  };
}
export interface OptionalGetModeResponse {
  mode: undefined | number;
}
export function convertGetModeResponse(getModeResponse: GetModeResponse | undefined): OptionalGetModeResponse | undefined {
  return getModeResponse === undefined ? undefined : {
    mode: fromNullable(getModeResponse.mode)
  };
}
export interface OptionalGetNeuron {
  neuron_id: undefined | OptionalNeuronId;
}
export function convertGetNeuron(getNeuron: GetNeuron | undefined): OptionalGetNeuron | undefined {
  return getNeuron === undefined ? undefined : {
    neuron_id: convertNeuronId(fromNullable(getNeuron.neuron_id))
  };
}
export interface OptionalGetNeuronResponse {
  result: undefined | Result;
}
export function convertGetNeuronResponse(getNeuronResponse: GetNeuronResponse | undefined): OptionalGetNeuronResponse | undefined {
  return getNeuronResponse === undefined ? undefined : {
    result: convertResult(fromNullable(getNeuronResponse.result))
  };
}
export interface OptionalGetProposal {
  proposal_id: undefined | OptionalProposalId;
}
export function convertGetProposal(getProposal: GetProposal | undefined): OptionalGetProposal | undefined {
  return getProposal === undefined ? undefined : {
    proposal_id: convertProposalId(fromNullable(getProposal.proposal_id))
  };
}
export interface OptionalGetProposalResponse {
  result: undefined | Result_1;
}
export function convertGetProposalResponse(getProposalResponse: GetProposalResponse | undefined): OptionalGetProposalResponse | undefined {
  return getProposalResponse === undefined ? undefined : {
    result: convertResult_1(fromNullable(getProposalResponse.result))
  };
}
export interface OptionalGetRunningSnsVersionResponse {
  deployed_version: undefined | OptionalVersion;
  pending_version: undefined | OptionalUpgradeInProgress;
}
export function convertGetRunningSnsVersionResponse(getRunningSnsVersionResponse: GetRunningSnsVersionResponse | undefined): OptionalGetRunningSnsVersionResponse | undefined {
  return getRunningSnsVersionResponse === undefined ? undefined : {
    deployed_version: convertVersion(fromNullable(getRunningSnsVersionResponse.deployed_version)),
    pending_version: convertUpgradeInProgress(fromNullable(getRunningSnsVersionResponse.pending_version))
  };
}
export interface OptionalGetSnsInitializationParametersResponse {
  sns_initialization_parameters: string;
}
export function convertGetSnsInitializationParametersResponse(getSnsInitializationParametersResponse: GetSnsInitializationParametersResponse | undefined): OptionalGetSnsInitializationParametersResponse | undefined {
  return getSnsInitializationParametersResponse === undefined ? undefined : {
    sns_initialization_parameters: getSnsInitializationParametersResponse.sns_initialization_parameters
  };
}
export interface OptionalGovernance {
  root_canister_id: undefined | Principal;
  id_to_nervous_system_functions: Array<[bigint, NervousSystemFunction]>;
  metrics: undefined | OptionalGovernanceCachedMetrics;
  mode: number;
  parameters: undefined | OptionalNervousSystemParameters;
  is_finalizing_disburse_maturity: undefined | boolean;
  deployed_version: undefined | OptionalVersion;
  sns_initialization_parameters: string;
  latest_reward_event: undefined | OptionalRewardEvent;
  pending_version: undefined | OptionalUpgradeInProgress;
  swap_canister_id: undefined | Principal;
  ledger_canister_id: undefined | Principal;
  proposals: Array<[bigint, ProposalData]>;
  in_flight_commands: Array<[string, NeuronInFlightCommand]>;
  sns_metadata: undefined | OptionalManageSnsMetadata;
  neurons: Array<[string, Neuron]>;
  genesis_timestamp_seconds: bigint;
}
export function convertGovernance(governance: Governance | undefined): OptionalGovernance | undefined {
  return governance === undefined ? undefined : {
    root_canister_id: fromNullable(governance.root_canister_id),
    id_to_nervous_system_functions: governance.id_to_nervous_system_functions,
    metrics: convertGovernanceCachedMetrics(fromNullable(governance.metrics)),
    mode: governance.mode,
    parameters: convertNervousSystemParameters(fromNullable(governance.parameters)),
    is_finalizing_disburse_maturity: fromNullable(governance.is_finalizing_disburse_maturity),
    deployed_version: convertVersion(fromNullable(governance.deployed_version)),
    sns_initialization_parameters: governance.sns_initialization_parameters,
    latest_reward_event: convertRewardEvent(fromNullable(governance.latest_reward_event)),
    pending_version: convertUpgradeInProgress(fromNullable(governance.pending_version)),
    swap_canister_id: fromNullable(governance.swap_canister_id),
    ledger_canister_id: fromNullable(governance.ledger_canister_id),
    proposals: governance.proposals,
    in_flight_commands: governance.in_flight_commands,
    sns_metadata: convertManageSnsMetadata(fromNullable(governance.sns_metadata)),
    neurons: governance.neurons,
    genesis_timestamp_seconds: governance.genesis_timestamp_seconds
  };
}
export interface OptionalGovernanceCachedMetrics {
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
export function convertGovernanceCachedMetrics(governanceCachedMetrics: GovernanceCachedMetrics | undefined): OptionalGovernanceCachedMetrics | undefined {
  return governanceCachedMetrics === undefined ? undefined : {
    not_dissolving_neurons_e8s_buckets: governanceCachedMetrics.not_dissolving_neurons_e8s_buckets,
    garbage_collectable_neurons_count: governanceCachedMetrics.garbage_collectable_neurons_count,
    neurons_with_invalid_stake_count: governanceCachedMetrics.neurons_with_invalid_stake_count,
    not_dissolving_neurons_count_buckets: governanceCachedMetrics.not_dissolving_neurons_count_buckets,
    neurons_with_less_than_6_months_dissolve_delay_count: governanceCachedMetrics.neurons_with_less_than_6_months_dissolve_delay_count,
    dissolved_neurons_count: governanceCachedMetrics.dissolved_neurons_count,
    total_staked_e8s: governanceCachedMetrics.total_staked_e8s,
    total_supply_governance_tokens: governanceCachedMetrics.total_supply_governance_tokens,
    not_dissolving_neurons_count: governanceCachedMetrics.not_dissolving_neurons_count,
    dissolved_neurons_e8s: governanceCachedMetrics.dissolved_neurons_e8s,
    neurons_with_less_than_6_months_dissolve_delay_e8s: governanceCachedMetrics.neurons_with_less_than_6_months_dissolve_delay_e8s,
    dissolving_neurons_count_buckets: governanceCachedMetrics.dissolving_neurons_count_buckets,
    dissolving_neurons_count: governanceCachedMetrics.dissolving_neurons_count,
    dissolving_neurons_e8s_buckets: governanceCachedMetrics.dissolving_neurons_e8s_buckets,
    timestamp_seconds: governanceCachedMetrics.timestamp_seconds
  };
}
export interface OptionalGovernanceError {
  error_message: string;
  error_type: number;
}
export function convertGovernanceError(governanceError: GovernanceError | undefined): OptionalGovernanceError | undefined {
  return governanceError === undefined ? undefined : {
    error_message: governanceError.error_message,
    error_type: governanceError.error_type
  };
}
export interface OptionalIncreaseDissolveDelay {
  additional_dissolve_delay_seconds: number;
}
export function convertIncreaseDissolveDelay(increaseDissolveDelay: IncreaseDissolveDelay | undefined): OptionalIncreaseDissolveDelay | undefined {
  return increaseDissolveDelay === undefined ? undefined : {
    additional_dissolve_delay_seconds: increaseDissolveDelay.additional_dissolve_delay_seconds
  };
}
export interface OptionalListNervousSystemFunctionsResponse {
  reserved_ids: BigUint64Array;
  functions: Array<NervousSystemFunction>;
}
export function convertListNervousSystemFunctionsResponse(listNervousSystemFunctionsResponse: ListNervousSystemFunctionsResponse | undefined): OptionalListNervousSystemFunctionsResponse | undefined {
  return listNervousSystemFunctionsResponse === undefined ? undefined : {
    reserved_ids: listNervousSystemFunctionsResponse.reserved_ids,
    functions: listNervousSystemFunctionsResponse.functions
  };
}
export interface OptionalListNeurons {
  of_principal: undefined | Principal;
  limit: number;
  start_page_at: undefined | OptionalNeuronId;
}
export function convertListNeurons(listNeurons: ListNeurons | undefined): OptionalListNeurons | undefined {
  return listNeurons === undefined ? undefined : {
    of_principal: fromNullable(listNeurons.of_principal),
    limit: listNeurons.limit,
    start_page_at: convertNeuronId(fromNullable(listNeurons.start_page_at))
  };
}
export interface OptionalListNeuronsResponse {
  neurons: Array<Neuron>;
}
export function convertListNeuronsResponse(listNeuronsResponse: ListNeuronsResponse | undefined): OptionalListNeuronsResponse | undefined {
  return listNeuronsResponse === undefined ? undefined : {
    neurons: listNeuronsResponse.neurons
  };
}
export interface OptionalListProposals {
  include_reward_status: Int32Array;
  before_proposal: undefined | OptionalProposalId;
  limit: number;
  exclude_type: BigUint64Array;
  include_status: Int32Array;
}
export function convertListProposals(listProposals: ListProposals | undefined): OptionalListProposals | undefined {
  return listProposals === undefined ? undefined : {
    include_reward_status: listProposals.include_reward_status,
    before_proposal: convertProposalId(fromNullable(listProposals.before_proposal)),
    limit: listProposals.limit,
    exclude_type: listProposals.exclude_type,
    include_status: listProposals.include_status
  };
}
export interface OptionalListProposalsResponse {
  proposals: Array<ProposalData>;
}
export function convertListProposalsResponse(listProposalsResponse: ListProposalsResponse | undefined): OptionalListProposalsResponse | undefined {
  return listProposalsResponse === undefined ? undefined : {
    proposals: listProposalsResponse.proposals
  };
}
export interface OptionalManageNeuron {
  subaccount: Uint8Array;
  command: undefined | Command;
}
export function convertManageNeuron(manageNeuron: ManageNeuron | undefined): OptionalManageNeuron | undefined {
  return manageNeuron === undefined ? undefined : {
    subaccount: manageNeuron.subaccount,
    command: convertCommand(fromNullable(manageNeuron.command))
  };
}
export interface OptionalManageNeuronResponse {
  command: undefined | Command_1;
}
export function convertManageNeuronResponse(manageNeuronResponse: ManageNeuronResponse | undefined): OptionalManageNeuronResponse | undefined {
  return manageNeuronResponse === undefined ? undefined : {
    command: convertCommand_1(fromNullable(manageNeuronResponse.command))
  };
}
export interface OptionalManageSnsMetadata {
  url: undefined | string;
  logo: undefined | string;
  name: undefined | string;
  description: undefined | string;
}
export function convertManageSnsMetadata(manageSnsMetadata: ManageSnsMetadata | undefined): OptionalManageSnsMetadata | undefined {
  return manageSnsMetadata === undefined ? undefined : {
    url: fromNullable(manageSnsMetadata.url),
    logo: fromNullable(manageSnsMetadata.logo),
    name: fromNullable(manageSnsMetadata.name),
    description: fromNullable(manageSnsMetadata.description)
  };
}
export interface OptionalMemoAndController {
  controller: undefined | Principal;
  memo: bigint;
}
export function convertMemoAndController(memoAndController: MemoAndController | undefined): OptionalMemoAndController | undefined {
  return memoAndController === undefined ? undefined : {
    controller: fromNullable(memoAndController.controller),
    memo: memoAndController.memo
  };
}
export interface OptionalMergeMaturity {
  percentage_to_merge: number;
}
export function convertMergeMaturity(mergeMaturity: MergeMaturity | undefined): OptionalMergeMaturity | undefined {
  return mergeMaturity === undefined ? undefined : {
    percentage_to_merge: mergeMaturity.percentage_to_merge
  };
}
export interface OptionalMergeMaturityResponse {
  merged_maturity_e8s: bigint;
  new_stake_e8s: bigint;
}
export function convertMergeMaturityResponse(mergeMaturityResponse: MergeMaturityResponse | undefined): OptionalMergeMaturityResponse | undefined {
  return mergeMaturityResponse === undefined ? undefined : {
    merged_maturity_e8s: mergeMaturityResponse.merged_maturity_e8s,
    new_stake_e8s: mergeMaturityResponse.new_stake_e8s
  };
}
export interface OptionalMotion {
  motion_text: string;
}
export function convertMotion(motion: Motion | undefined): OptionalMotion | undefined {
  return motion === undefined ? undefined : {
    motion_text: motion.motion_text
  };
}
export interface OptionalNervousSystemFunction {
  id: bigint;
  name: string;
  description: undefined | string;
  function_type: undefined | FunctionType;
}
export function convertNervousSystemFunction(nervousSystemFunction: NervousSystemFunction | undefined): OptionalNervousSystemFunction | undefined {
  return nervousSystemFunction === undefined ? undefined : {
    id: nervousSystemFunction.id,
    name: nervousSystemFunction.name,
    description: fromNullable(nervousSystemFunction.description),
    function_type: convertFunctionType(fromNullable(nervousSystemFunction.function_type))
  };
}
export interface OptionalNervousSystemParameters {
  default_followees: undefined | OptionalDefaultFollowees;
  max_dissolve_delay_seconds: undefined | bigint;
  max_dissolve_delay_bonus_percentage: undefined | bigint;
  max_followees_per_function: undefined | bigint;
  neuron_claimer_permissions: undefined | OptionalNeuronPermissionList;
  neuron_minimum_stake_e8s: undefined | bigint;
  max_neuron_age_for_age_bonus: undefined | bigint;
  initial_voting_period_seconds: undefined | bigint;
  neuron_minimum_dissolve_delay_to_vote_seconds: undefined | bigint;
  reject_cost_e8s: undefined | bigint;
  max_proposals_to_keep_per_action: undefined | number;
  wait_for_quiet_deadline_increase_seconds: undefined | bigint;
  max_number_of_neurons: undefined | bigint;
  transaction_fee_e8s: undefined | bigint;
  max_number_of_proposals_with_ballots: undefined | bigint;
  max_age_bonus_percentage: undefined | bigint;
  neuron_grantable_permissions: undefined | OptionalNeuronPermissionList;
  voting_rewards_parameters: undefined | OptionalVotingRewardsParameters;
  max_number_of_principals_per_neuron: undefined | bigint;
}
export function convertNervousSystemParameters(nervousSystemParameters: NervousSystemParameters | undefined): OptionalNervousSystemParameters | undefined {
  return nervousSystemParameters === undefined ? undefined : {
    default_followees: convertDefaultFollowees(fromNullable(nervousSystemParameters.default_followees)),
    max_dissolve_delay_seconds: fromNullable(nervousSystemParameters.max_dissolve_delay_seconds),
    max_dissolve_delay_bonus_percentage: fromNullable(nervousSystemParameters.max_dissolve_delay_bonus_percentage),
    max_followees_per_function: fromNullable(nervousSystemParameters.max_followees_per_function),
    neuron_claimer_permissions: convertNeuronPermissionList(fromNullable(nervousSystemParameters.neuron_claimer_permissions)),
    neuron_minimum_stake_e8s: fromNullable(nervousSystemParameters.neuron_minimum_stake_e8s),
    max_neuron_age_for_age_bonus: fromNullable(nervousSystemParameters.max_neuron_age_for_age_bonus),
    initial_voting_period_seconds: fromNullable(nervousSystemParameters.initial_voting_period_seconds),
    neuron_minimum_dissolve_delay_to_vote_seconds: fromNullable(nervousSystemParameters.neuron_minimum_dissolve_delay_to_vote_seconds),
    reject_cost_e8s: fromNullable(nervousSystemParameters.reject_cost_e8s),
    max_proposals_to_keep_per_action: fromNullable(nervousSystemParameters.max_proposals_to_keep_per_action),
    wait_for_quiet_deadline_increase_seconds: fromNullable(nervousSystemParameters.wait_for_quiet_deadline_increase_seconds),
    max_number_of_neurons: fromNullable(nervousSystemParameters.max_number_of_neurons),
    transaction_fee_e8s: fromNullable(nervousSystemParameters.transaction_fee_e8s),
    max_number_of_proposals_with_ballots: fromNullable(nervousSystemParameters.max_number_of_proposals_with_ballots),
    max_age_bonus_percentage: fromNullable(nervousSystemParameters.max_age_bonus_percentage),
    neuron_grantable_permissions: convertNeuronPermissionList(fromNullable(nervousSystemParameters.neuron_grantable_permissions)),
    voting_rewards_parameters: convertVotingRewardsParameters(fromNullable(nervousSystemParameters.voting_rewards_parameters)),
    max_number_of_principals_per_neuron: fromNullable(nervousSystemParameters.max_number_of_principals_per_neuron)
  };
}
export interface OptionalNeuron {
  id: undefined | OptionalNeuronId;
  staked_maturity_e8s_equivalent: undefined | bigint;
  permissions: Array<NeuronPermission>;
  maturity_e8s_equivalent: bigint;
  cached_neuron_stake_e8s: bigint;
  created_timestamp_seconds: bigint;
  source_nns_neuron_id: undefined | bigint;
  auto_stake_maturity: undefined | boolean;
  aging_since_timestamp_seconds: bigint;
  dissolve_state: undefined | DissolveState;
  voting_power_percentage_multiplier: bigint;
  vesting_period_seconds: undefined | bigint;
  disburse_maturity_in_progress: Array<DisburseMaturityInProgress>;
  followees: Array<[bigint, Followees]>;
  neuron_fees_e8s: bigint;
}
export function convertNeuron(neuron: Neuron | undefined): OptionalNeuron | undefined {
  return neuron === undefined ? undefined : {
    id: convertNeuronId(fromNullable(neuron.id)),
    staked_maturity_e8s_equivalent: fromNullable(neuron.staked_maturity_e8s_equivalent),
    permissions: neuron.permissions,
    maturity_e8s_equivalent: neuron.maturity_e8s_equivalent,
    cached_neuron_stake_e8s: neuron.cached_neuron_stake_e8s,
    created_timestamp_seconds: neuron.created_timestamp_seconds,
    source_nns_neuron_id: fromNullable(neuron.source_nns_neuron_id),
    auto_stake_maturity: fromNullable(neuron.auto_stake_maturity),
    aging_since_timestamp_seconds: neuron.aging_since_timestamp_seconds,
    dissolve_state: convertDissolveState(fromNullable(neuron.dissolve_state)),
    voting_power_percentage_multiplier: neuron.voting_power_percentage_multiplier,
    vesting_period_seconds: fromNullable(neuron.vesting_period_seconds),
    disburse_maturity_in_progress: neuron.disburse_maturity_in_progress,
    followees: neuron.followees,
    neuron_fees_e8s: neuron.neuron_fees_e8s
  };
}
export interface OptionalNeuronId {
  id: Uint8Array;
}
export function convertNeuronId(neuronId: NeuronId | undefined): OptionalNeuronId | undefined {
  return neuronId === undefined ? undefined : {
    id: neuronId.id
  };
}
export interface OptionalNeuronInFlightCommand {
  command: undefined | Command_2;
  timestamp: bigint;
}
export function convertNeuronInFlightCommand(neuronInFlightCommand: NeuronInFlightCommand | undefined): OptionalNeuronInFlightCommand | undefined {
  return neuronInFlightCommand === undefined ? undefined : {
    command: convertCommand_2(fromNullable(neuronInFlightCommand.command)),
    timestamp: neuronInFlightCommand.timestamp
  };
}
export interface OptionalNeuronParameters {
  controller: undefined | Principal;
  dissolve_delay_seconds: undefined | bigint;
  source_nns_neuron_id: undefined | bigint;
  stake_e8s: undefined | bigint;
  followees: Array<NeuronId>;
  hotkey: undefined | Principal;
  neuron_id: undefined | OptionalNeuronId;
}
export function convertNeuronParameters(neuronParameters: NeuronParameters | undefined): OptionalNeuronParameters | undefined {
  return neuronParameters === undefined ? undefined : {
    controller: fromNullable(neuronParameters.controller),
    dissolve_delay_seconds: fromNullable(neuronParameters.dissolve_delay_seconds),
    source_nns_neuron_id: fromNullable(neuronParameters.source_nns_neuron_id),
    stake_e8s: fromNullable(neuronParameters.stake_e8s),
    followees: neuronParameters.followees,
    hotkey: fromNullable(neuronParameters.hotkey),
    neuron_id: convertNeuronId(fromNullable(neuronParameters.neuron_id))
  };
}
export interface OptionalNeuronPermission {
  principal: undefined | Principal;
  permission_type: Int32Array;
}
export function convertNeuronPermission(neuronPermission: NeuronPermission | undefined): OptionalNeuronPermission | undefined {
  return neuronPermission === undefined ? undefined : {
    principal: fromNullable(neuronPermission.principal),
    permission_type: neuronPermission.permission_type
  };
}
export interface OptionalNeuronPermissionList {
  permissions: Int32Array;
}
export function convertNeuronPermissionList(neuronPermissionList: NeuronPermissionList | undefined): OptionalNeuronPermissionList | undefined {
  return neuronPermissionList === undefined ? undefined : {
    permissions: neuronPermissionList.permissions
  };
}
export type Operation = {
  ChangeAutoStakeMaturity: ChangeAutoStakeMaturity;
} | {
  StopDissolving: {};
} | {
  StartDissolving: {};
} | {
  IncreaseDissolveDelay: IncreaseDissolveDelay;
} | {
  SetDissolveTimestamp: SetDissolveTimestamp;
};
export interface OptionalProposal {
  url: string;
  title: string;
  action: undefined | Action;
  summary: string;
}
export function convertProposal(proposal: Proposal | undefined): OptionalProposal | undefined {
  return proposal === undefined ? undefined : {
    url: proposal.url,
    title: proposal.title,
    action: convertAction(fromNullable(proposal.action)),
    summary: proposal.summary
  };
}
export interface OptionalProposalData {
  id: undefined | OptionalProposalId;
  payload_text_rendering: undefined | string;
  action: bigint;
  failure_reason: undefined | OptionalGovernanceError;
  ballots: Array<[string, Ballot]>;
  reward_event_round: bigint;
  failed_timestamp_seconds: bigint;
  reward_event_end_timestamp_seconds: undefined | bigint;
  proposal_creation_timestamp_seconds: bigint;
  initial_voting_period_seconds: bigint;
  reject_cost_e8s: bigint;
  latest_tally: undefined | OptionalTally;
  wait_for_quiet_deadline_increase_seconds: bigint;
  decided_timestamp_seconds: bigint;
  proposal: undefined | OptionalProposal;
  proposer: undefined | OptionalNeuronId;
  wait_for_quiet_state: undefined | OptionalWaitForQuietState;
  is_eligible_for_rewards: boolean;
  executed_timestamp_seconds: bigint;
}
export function convertProposalData(proposalData: ProposalData | undefined): OptionalProposalData | undefined {
  return proposalData === undefined ? undefined : {
    id: convertProposalId(fromNullable(proposalData.id)),
    payload_text_rendering: fromNullable(proposalData.payload_text_rendering),
    action: proposalData.action,
    failure_reason: convertGovernanceError(fromNullable(proposalData.failure_reason)),
    ballots: proposalData.ballots,
    reward_event_round: proposalData.reward_event_round,
    failed_timestamp_seconds: proposalData.failed_timestamp_seconds,
    reward_event_end_timestamp_seconds: fromNullable(proposalData.reward_event_end_timestamp_seconds),
    proposal_creation_timestamp_seconds: proposalData.proposal_creation_timestamp_seconds,
    initial_voting_period_seconds: proposalData.initial_voting_period_seconds,
    reject_cost_e8s: proposalData.reject_cost_e8s,
    latest_tally: convertTally(fromNullable(proposalData.latest_tally)),
    wait_for_quiet_deadline_increase_seconds: proposalData.wait_for_quiet_deadline_increase_seconds,
    decided_timestamp_seconds: proposalData.decided_timestamp_seconds,
    proposal: convertProposal(fromNullable(proposalData.proposal)),
    proposer: convertNeuronId(fromNullable(proposalData.proposer)),
    wait_for_quiet_state: convertWaitForQuietState(fromNullable(proposalData.wait_for_quiet_state)),
    is_eligible_for_rewards: proposalData.is_eligible_for_rewards,
    executed_timestamp_seconds: proposalData.executed_timestamp_seconds
  };
}
export interface OptionalProposalId {
  id: bigint;
}
export function convertProposalId(proposalId: ProposalId | undefined): OptionalProposalId | undefined {
  return proposalId === undefined ? undefined : {
    id: proposalId.id
  };
}
export interface OptionalRegisterDappCanisters {
  canister_ids: Array<Principal>;
}
export function convertRegisterDappCanisters(registerDappCanisters: RegisterDappCanisters | undefined): OptionalRegisterDappCanisters | undefined {
  return registerDappCanisters === undefined ? undefined : {
    canister_ids: registerDappCanisters.canister_ids
  };
}
export interface OptionalRegisterVote {
  vote: number;
  proposal: undefined | OptionalProposalId;
}
export function convertRegisterVote(registerVote: RegisterVote | undefined): OptionalRegisterVote | undefined {
  return registerVote === undefined ? undefined : {
    vote: registerVote.vote,
    proposal: convertProposalId(fromNullable(registerVote.proposal))
  };
}
export interface OptionalRemoveNeuronPermissions {
  permissions_to_remove: undefined | OptionalNeuronPermissionList;
  principal_id: undefined | Principal;
}
export function convertRemoveNeuronPermissions(removeNeuronPermissions: RemoveNeuronPermissions | undefined): OptionalRemoveNeuronPermissions | undefined {
  return removeNeuronPermissions === undefined ? undefined : {
    permissions_to_remove: convertNeuronPermissionList(fromNullable(removeNeuronPermissions.permissions_to_remove)),
    principal_id: fromNullable(removeNeuronPermissions.principal_id)
  };
}
export type Result = {
  Error: GovernanceError;
} | {
  Neuron: Neuron;
};
export type Result_1 = {
  Error: GovernanceError;
} | {
  Proposal: ProposalData;
};
export interface OptionalRewardEvent {
  actual_timestamp_seconds: bigint;
  end_timestamp_seconds: undefined | bigint;
  distributed_e8s_equivalent: bigint;
  round: bigint;
  settled_proposals: Array<ProposalId>;
}
export function convertRewardEvent(rewardEvent: RewardEvent | undefined): OptionalRewardEvent | undefined {
  return rewardEvent === undefined ? undefined : {
    actual_timestamp_seconds: rewardEvent.actual_timestamp_seconds,
    end_timestamp_seconds: fromNullable(rewardEvent.end_timestamp_seconds),
    distributed_e8s_equivalent: rewardEvent.distributed_e8s_equivalent,
    round: rewardEvent.round,
    settled_proposals: rewardEvent.settled_proposals
  };
}
export interface OptionalSetDissolveTimestamp {
  dissolve_timestamp_seconds: bigint;
}
export function convertSetDissolveTimestamp(setDissolveTimestamp: SetDissolveTimestamp | undefined): OptionalSetDissolveTimestamp | undefined {
  return setDissolveTimestamp === undefined ? undefined : {
    dissolve_timestamp_seconds: setDissolveTimestamp.dissolve_timestamp_seconds
  };
}
export interface OptionalSetMode {
  mode: number;
}
export function convertSetMode(setMode: SetMode | undefined): OptionalSetMode | undefined {
  return setMode === undefined ? undefined : {
    mode: setMode.mode
  };
}
export interface OptionalSplit {
  memo: bigint;
  amount_e8s: bigint;
}
export function convertSplit(split: Split | undefined): OptionalSplit | undefined {
  return split === undefined ? undefined : {
    memo: split.memo,
    amount_e8s: split.amount_e8s
  };
}
export interface OptionalSplitResponse {
  created_neuron_id: undefined | OptionalNeuronId;
}
export function convertSplitResponse(splitResponse: SplitResponse | undefined): OptionalSplitResponse | undefined {
  return splitResponse === undefined ? undefined : {
    created_neuron_id: convertNeuronId(fromNullable(splitResponse.created_neuron_id))
  };
}
export interface OptionalStakeMaturity {
  percentage_to_stake: undefined | number;
}
export function convertStakeMaturity(stakeMaturity: StakeMaturity | undefined): OptionalStakeMaturity | undefined {
  return stakeMaturity === undefined ? undefined : {
    percentage_to_stake: fromNullable(stakeMaturity.percentage_to_stake)
  };
}
export interface OptionalStakeMaturityResponse {
  maturity_e8s: bigint;
  staked_maturity_e8s: bigint;
}
export function convertStakeMaturityResponse(stakeMaturityResponse: StakeMaturityResponse | undefined): OptionalStakeMaturityResponse | undefined {
  return stakeMaturityResponse === undefined ? undefined : {
    maturity_e8s: stakeMaturityResponse.maturity_e8s,
    staked_maturity_e8s: stakeMaturityResponse.staked_maturity_e8s
  };
}
export interface OptionalSubaccount {
  subaccount: Uint8Array;
}
export function convertSubaccount(subaccount: Subaccount | undefined): OptionalSubaccount | undefined {
  return subaccount === undefined ? undefined : {
    subaccount: subaccount.subaccount
  };
}
export interface OptionalSwapNeuron {
  id: undefined | OptionalNeuronId;
  status: number;
}
export function convertSwapNeuron(swapNeuron: SwapNeuron | undefined): OptionalSwapNeuron | undefined {
  return swapNeuron === undefined ? undefined : {
    id: convertNeuronId(fromNullable(swapNeuron.id)),
    status: swapNeuron.status
  };
}
export interface OptionalTally {
  no: bigint;
  yes: bigint;
  total: bigint;
  timestamp_seconds: bigint;
}
export function convertTally(tally: Tally | undefined): OptionalTally | undefined {
  return tally === undefined ? undefined : {
    no: tally.no,
    yes: tally.yes,
    total: tally.total,
    timestamp_seconds: tally.timestamp_seconds
  };
}
export interface OptionalTransferSnsTreasuryFunds {
  from_treasury: number;
  to_principal: undefined | Principal;
  to_subaccount: undefined | OptionalSubaccount;
  memo: undefined | bigint;
  amount_e8s: bigint;
}
export function convertTransferSnsTreasuryFunds(transferSnsTreasuryFunds: TransferSnsTreasuryFunds | undefined): OptionalTransferSnsTreasuryFunds | undefined {
  return transferSnsTreasuryFunds === undefined ? undefined : {
    from_treasury: transferSnsTreasuryFunds.from_treasury,
    to_principal: fromNullable(transferSnsTreasuryFunds.to_principal),
    to_subaccount: convertSubaccount(fromNullable(transferSnsTreasuryFunds.to_subaccount)),
    memo: fromNullable(transferSnsTreasuryFunds.memo),
    amount_e8s: transferSnsTreasuryFunds.amount_e8s
  };
}
export interface OptionalUpgradeInProgress {
  mark_failed_at_seconds: bigint;
  checking_upgrade_lock: bigint;
  proposal_id: bigint;
  target_version: undefined | OptionalVersion;
}
export function convertUpgradeInProgress(upgradeInProgress: UpgradeInProgress | undefined): OptionalUpgradeInProgress | undefined {
  return upgradeInProgress === undefined ? undefined : {
    mark_failed_at_seconds: upgradeInProgress.mark_failed_at_seconds,
    checking_upgrade_lock: upgradeInProgress.checking_upgrade_lock,
    proposal_id: upgradeInProgress.proposal_id,
    target_version: convertVersion(fromNullable(upgradeInProgress.target_version))
  };
}
export interface OptionalUpgradeSnsControlledCanister {
  new_canister_wasm: Uint8Array;
  canister_id: undefined | Principal;
  canister_upgrade_arg: undefined | Uint8Array;
}
export function convertUpgradeSnsControlledCanister(upgradeSnsControlledCanister: UpgradeSnsControlledCanister | undefined): OptionalUpgradeSnsControlledCanister | undefined {
  return upgradeSnsControlledCanister === undefined ? undefined : {
    new_canister_wasm: upgradeSnsControlledCanister.new_canister_wasm,
    canister_id: fromNullable(upgradeSnsControlledCanister.canister_id),
    canister_upgrade_arg: fromNullable(upgradeSnsControlledCanister.canister_upgrade_arg)
  };
}
export interface OptionalVersion {
  archive_wasm_hash: Uint8Array;
  root_wasm_hash: Uint8Array;
  swap_wasm_hash: Uint8Array;
  ledger_wasm_hash: Uint8Array;
  governance_wasm_hash: Uint8Array;
  index_wasm_hash: Uint8Array;
}
export function convertVersion(version: Version | undefined): OptionalVersion | undefined {
  return version === undefined ? undefined : {
    archive_wasm_hash: version.archive_wasm_hash,
    root_wasm_hash: version.root_wasm_hash,
    swap_wasm_hash: version.swap_wasm_hash,
    ledger_wasm_hash: version.ledger_wasm_hash,
    governance_wasm_hash: version.governance_wasm_hash,
    index_wasm_hash: version.index_wasm_hash
  };
}
export interface OptionalVotingRewardsParameters {
  final_reward_rate_basis_points: undefined | bigint;
  initial_reward_rate_basis_points: undefined | bigint;
  reward_rate_transition_duration_seconds: undefined | bigint;
  round_duration_seconds: undefined | bigint;
}
export function convertVotingRewardsParameters(votingRewardsParameters: VotingRewardsParameters | undefined): OptionalVotingRewardsParameters | undefined {
  return votingRewardsParameters === undefined ? undefined : {
    final_reward_rate_basis_points: fromNullable(votingRewardsParameters.final_reward_rate_basis_points),
    initial_reward_rate_basis_points: fromNullable(votingRewardsParameters.initial_reward_rate_basis_points),
    reward_rate_transition_duration_seconds: fromNullable(votingRewardsParameters.reward_rate_transition_duration_seconds),
    round_duration_seconds: fromNullable(votingRewardsParameters.round_duration_seconds)
  };
}
export interface OptionalWaitForQuietState {
  current_deadline_timestamp_seconds: bigint;
}
export function convertWaitForQuietState(waitForQuietState: WaitForQuietState | undefined): OptionalWaitForQuietState | undefined {
  return waitForQuietState === undefined ? undefined : {
    current_deadline_timestamp_seconds: waitForQuietState.current_deadline_timestamp_seconds
  };
}
export interface _SERVICE {
  claim_swap_neurons: ActorMethod<[ClaimSwapNeuronsRequest], ClaimSwapNeuronsResponse>;
  get_build_metadata: ActorMethod<[], string>;
  get_metadata: ActorMethod<[{}], GetMetadataResponse>;
  get_mode: ActorMethod<[{}], GetModeResponse>;
  get_nervous_system_parameters: ActorMethod<[null], NervousSystemParameters>;
  get_neuron: ActorMethod<[GetNeuron], GetNeuronResponse>;
  get_proposal: ActorMethod<[GetProposal], GetProposalResponse>;
  get_root_canister_status: ActorMethod<[null], CanisterStatusResultV2>;
  get_running_sns_version: ActorMethod<[{}], GetRunningSnsVersionResponse>;
  get_sns_initialization_parameters: ActorMethod<[{}], GetSnsInitializationParametersResponse>;
  list_nervous_system_functions: ActorMethod<[], ListNervousSystemFunctionsResponse>;
  list_neurons: ActorMethod<[ListNeurons], ListNeuronsResponse>;
  list_proposals: ActorMethod<[ListProposals], ListProposalsResponse>;
  manage_neuron: ActorMethod<[ManageNeuron], ManageNeuronResponse>;
  set_mode: ActorMethod<[SetMode], {}>;
}