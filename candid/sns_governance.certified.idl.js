/* Do not edit.  Compiled with ./scripts/compile-idl-js from candid/sns_governance.did */
export const idlFactory = ({ IDL }) => {
  const GenericNervousSystemFunction = IDL.Record({
    'validator_canister_id' : IDL.Opt(IDL.Principal),
    'target_canister_id' : IDL.Opt(IDL.Principal),
    'validator_method_name' : IDL.Opt(IDL.Text),
    'target_method_name' : IDL.Opt(IDL.Text),
  });
  const FunctionType = IDL.Variant({
    'NativeNervousSystemFunction' : IDL.Record({}),
    'GenericNervousSystemFunction' : GenericNervousSystemFunction,
  });
  const NervousSystemFunction = IDL.Record({
    'id' : IDL.Nat64,
    'name' : IDL.Text,
    'description' : IDL.Opt(IDL.Text),
    'function_type' : IDL.Opt(FunctionType),
  });
  const GovernanceCachedMetrics = IDL.Record({
    'not_dissolving_neurons_e8s_buckets' : IDL.Vec(
      IDL.Tuple(IDL.Nat64, IDL.Float64)
    ),
    'garbage_collectable_neurons_count' : IDL.Nat64,
    'neurons_with_invalid_stake_count' : IDL.Nat64,
    'not_dissolving_neurons_count_buckets' : IDL.Vec(
      IDL.Tuple(IDL.Nat64, IDL.Nat64)
    ),
    'neurons_with_less_than_6_months_dissolve_delay_count' : IDL.Nat64,
    'dissolved_neurons_count' : IDL.Nat64,
    'total_staked_e8s' : IDL.Nat64,
    'total_supply_governance_tokens' : IDL.Nat64,
    'not_dissolving_neurons_count' : IDL.Nat64,
    'dissolved_neurons_e8s' : IDL.Nat64,
    'neurons_with_less_than_6_months_dissolve_delay_e8s' : IDL.Nat64,
    'dissolving_neurons_count_buckets' : IDL.Vec(
      IDL.Tuple(IDL.Nat64, IDL.Nat64)
    ),
    'dissolving_neurons_count' : IDL.Nat64,
    'dissolving_neurons_e8s_buckets' : IDL.Vec(
      IDL.Tuple(IDL.Nat64, IDL.Float64)
    ),
    'timestamp_seconds' : IDL.Nat64,
  });
  const NeuronId = IDL.Record({ 'id' : IDL.Vec(IDL.Nat8) });
  const Followees = IDL.Record({ 'followees' : IDL.Vec(NeuronId) });
  const DefaultFollowees = IDL.Record({
    'followees' : IDL.Vec(IDL.Tuple(IDL.Nat64, Followees)),
  });
  const NeuronPermissionList = IDL.Record({
    'permissions' : IDL.Vec(IDL.Int32),
  });
  const NervousSystemParameters = IDL.Record({
    'default_followees' : IDL.Opt(DefaultFollowees),
    'max_dissolve_delay_seconds' : IDL.Opt(IDL.Nat64),
    'max_followees_per_function' : IDL.Opt(IDL.Nat64),
    'neuron_claimer_permissions' : IDL.Opt(NeuronPermissionList),
    'neuron_minimum_stake_e8s' : IDL.Opt(IDL.Nat64),
    'initial_voting_period' : IDL.Opt(IDL.Nat64),
    'max_neuron_age_for_age_bonus' : IDL.Opt(IDL.Nat64),
    'neuron_minimum_dissolve_delay_to_vote_seconds' : IDL.Opt(IDL.Nat64),
    'reject_cost_e8s' : IDL.Opt(IDL.Nat64),
    'max_proposals_to_keep_per_action' : IDL.Opt(IDL.Nat32),
    'max_number_of_neurons' : IDL.Opt(IDL.Nat64),
    'transaction_fee_e8s' : IDL.Opt(IDL.Nat64),
    'max_number_of_proposals_with_ballots' : IDL.Opt(IDL.Nat64),
    'reward_distribution_period_seconds' : IDL.Opt(IDL.Nat64),
    'neuron_grantable_permissions' : IDL.Opt(NeuronPermissionList),
    'max_number_of_principals_per_neuron' : IDL.Opt(IDL.Nat64),
  });
  const ProposalId = IDL.Record({ 'id' : IDL.Nat64 });
  const RewardEvent = IDL.Record({
    'actual_timestamp_seconds' : IDL.Nat64,
    'periods_since_genesis' : IDL.Nat64,
    'distributed_e8s_equivalent' : IDL.Nat64,
    'settled_proposals' : IDL.Vec(ProposalId),
  });
  const GovernanceError = IDL.Record({
    'error_message' : IDL.Text,
    'error_type' : IDL.Int32,
  });
  const Ballot = IDL.Record({
    'vote' : IDL.Int32,
    'cast_timestamp_seconds' : IDL.Nat64,
    'voting_power' : IDL.Nat64,
  });
  const Tally = IDL.Record({
    'no' : IDL.Nat64,
    'yes' : IDL.Nat64,
    'total' : IDL.Nat64,
    'timestamp_seconds' : IDL.Nat64,
  });
  const UpgradeSnsControlledCanister = IDL.Record({
    'new_canister_wasm' : IDL.Vec(IDL.Nat8),
    'canister_id' : IDL.Opt(IDL.Principal),
  });
  const ExecuteGenericNervousSystemFunction = IDL.Record({
    'function_id' : IDL.Nat64,
    'payload' : IDL.Vec(IDL.Nat8),
  });
  const Motion = IDL.Record({ 'motion_text' : IDL.Text });
  const Action = IDL.Variant({
    'ManageNervousSystemParameters' : NervousSystemParameters,
    'AddGenericNervousSystemFunction' : NervousSystemFunction,
    'RemoveGenericNervousSystemFunction' : IDL.Nat64,
    'UpgradeSnsControlledCanister' : UpgradeSnsControlledCanister,
    'Unspecified' : IDL.Record({}),
    'ExecuteGenericNervousSystemFunction' : ExecuteGenericNervousSystemFunction,
    'Motion' : Motion,
  });
  const Proposal = IDL.Record({
    'url' : IDL.Text,
    'title' : IDL.Text,
    'action' : IDL.Opt(Action),
    'summary' : IDL.Text,
  });
  const WaitForQuietState = IDL.Record({
    'current_deadline_timestamp_seconds' : IDL.Nat64,
  });
  const ProposalData = IDL.Record({
    'id' : IDL.Opt(ProposalId),
    'payload_text_rendering' : IDL.Opt(IDL.Text),
    'action' : IDL.Nat64,
    'failure_reason' : IDL.Opt(GovernanceError),
    'ballots' : IDL.Vec(IDL.Tuple(IDL.Text, Ballot)),
    'reward_event_round' : IDL.Nat64,
    'failed_timestamp_seconds' : IDL.Nat64,
    'proposal_creation_timestamp_seconds' : IDL.Nat64,
    'reject_cost_e8s' : IDL.Nat64,
    'latest_tally' : IDL.Opt(Tally),
    'decided_timestamp_seconds' : IDL.Nat64,
    'proposal' : IDL.Opt(Proposal),
    'proposer' : IDL.Opt(NeuronId),
    'wait_for_quiet_state' : IDL.Opt(WaitForQuietState),
    'executed_timestamp_seconds' : IDL.Nat64,
  });
  const Split = IDL.Record({ 'memo' : IDL.Nat64, 'amount_e8s' : IDL.Nat64 });
  const Follow = IDL.Record({
    'function_id' : IDL.Nat64,
    'followees' : IDL.Vec(NeuronId),
  });
  const AccountIdentifier = IDL.Record({ 'hash' : IDL.Vec(IDL.Nat8) });
  const DisburseMaturity = IDL.Record({
    'to_account' : IDL.Opt(AccountIdentifier),
    'percentage_to_disburse' : IDL.Nat32,
  });
  const IncreaseDissolveDelay = IDL.Record({
    'additional_dissolve_delay_seconds' : IDL.Nat32,
  });
  const SetDissolveTimestamp = IDL.Record({
    'dissolve_timestamp_seconds' : IDL.Nat64,
  });
  const Operation = IDL.Variant({
    'StopDissolving' : IDL.Record({}),
    'StartDissolving' : IDL.Record({}),
    'IncreaseDissolveDelay' : IncreaseDissolveDelay,
    'SetDissolveTimestamp' : SetDissolveTimestamp,
  });
  const Configure = IDL.Record({ 'operation' : IDL.Opt(Operation) });
  const RegisterVote = IDL.Record({
    'vote' : IDL.Int32,
    'proposal' : IDL.Opt(ProposalId),
  });
  const MemoAndController = IDL.Record({
    'controller' : IDL.Opt(IDL.Principal),
    'memo' : IDL.Nat64,
  });
  const By = IDL.Variant({
    'MemoAndController' : MemoAndController,
    'NeuronId' : IDL.Record({}),
  });
  const ClaimOrRefresh = IDL.Record({ 'by' : IDL.Opt(By) });
  const RemoveNeuronPermissions = IDL.Record({
    'permissions_to_remove' : IDL.Opt(NeuronPermissionList),
    'principal_id' : IDL.Opt(IDL.Principal),
  });
  const AddNeuronPermissions = IDL.Record({
    'permissions_to_add' : IDL.Opt(NeuronPermissionList),
    'principal_id' : IDL.Opt(IDL.Principal),
  });
  const MergeMaturity = IDL.Record({ 'percentage_to_merge' : IDL.Nat32 });
  const Amount = IDL.Record({ 'e8s' : IDL.Nat64 });
  const Disburse = IDL.Record({
    'to_account' : IDL.Opt(AccountIdentifier),
    'amount' : IDL.Opt(Amount),
  });
  const Command_2 = IDL.Variant({
    'Split' : Split,
    'Follow' : Follow,
    'DisburseMaturity' : DisburseMaturity,
    'Configure' : Configure,
    'RegisterVote' : RegisterVote,
    'MakeProposal' : Proposal,
    'ClaimOrRefreshNeuron' : ClaimOrRefresh,
    'RemoveNeuronPermissions' : RemoveNeuronPermissions,
    'AddNeuronPermissions' : AddNeuronPermissions,
    'MergeMaturity' : MergeMaturity,
    'Disburse' : Disburse,
  });
  const NeuronInFlightCommand = IDL.Record({
    'command' : IDL.Opt(Command_2),
    'timestamp' : IDL.Nat64,
  });
  const NeuronPermission = IDL.Record({
    'principal' : IDL.Opt(IDL.Principal),
    'permission_type' : IDL.Vec(IDL.Int32),
  });
  const DissolveState = IDL.Variant({
    'DissolveDelaySeconds' : IDL.Nat64,
    'WhenDissolvedTimestampSeconds' : IDL.Nat64,
  });
  const Neuron = IDL.Record({
    'id' : IDL.Opt(NeuronId),
    'permissions' : IDL.Vec(NeuronPermission),
    'maturity_e8s_equivalent' : IDL.Nat64,
    'cached_neuron_stake_e8s' : IDL.Nat64,
    'created_timestamp_seconds' : IDL.Nat64,
    'aging_since_timestamp_seconds' : IDL.Nat64,
    'dissolve_state' : IDL.Opt(DissolveState),
    'followees' : IDL.Vec(IDL.Tuple(IDL.Nat64, Followees)),
    'neuron_fees_e8s' : IDL.Nat64,
  });
  const Governance = IDL.Record({
    'root_canister_id' : IDL.Opt(IDL.Principal),
    'id_to_nervous_system_functions' : IDL.Vec(
      IDL.Tuple(IDL.Nat64, NervousSystemFunction)
    ),
    'metrics' : IDL.Opt(GovernanceCachedMetrics),
    'mode' : IDL.Int32,
    'parameters' : IDL.Opt(NervousSystemParameters),
    'latest_reward_event' : IDL.Opt(RewardEvent),
    'ledger_canister_id' : IDL.Opt(IDL.Principal),
    'proposals' : IDL.Vec(IDL.Tuple(IDL.Nat64, ProposalData)),
    'in_flight_commands' : IDL.Vec(IDL.Tuple(IDL.Text, NeuronInFlightCommand)),
    'neurons' : IDL.Vec(IDL.Tuple(IDL.Text, Neuron)),
    'genesis_timestamp_seconds' : IDL.Nat64,
  });
  const GetNeuron = IDL.Record({ 'neuron_id' : IDL.Opt(NeuronId) });
  const Result = IDL.Variant({ 'Error' : GovernanceError, 'Neuron' : Neuron });
  const GetNeuronResponse = IDL.Record({ 'result' : IDL.Opt(Result) });
  const GetProposal = IDL.Record({ 'proposal_id' : IDL.Opt(ProposalId) });
  const Result_1 = IDL.Variant({
    'Error' : GovernanceError,
    'Proposal' : ProposalData,
  });
  const GetProposalResponse = IDL.Record({ 'result' : IDL.Opt(Result_1) });
  const CanisterStatusType = IDL.Variant({
    'stopped' : IDL.Null,
    'stopping' : IDL.Null,
    'running' : IDL.Null,
  });
  const DefiniteCanisterSettingsArgs = IDL.Record({
    'controller' : IDL.Principal,
    'freezing_threshold' : IDL.Nat,
    'controllers' : IDL.Vec(IDL.Principal),
    'memory_allocation' : IDL.Nat,
    'compute_allocation' : IDL.Nat,
  });
  const CanisterStatusResultV2 = IDL.Record({
    'controller' : IDL.Principal,
    'status' : CanisterStatusType,
    'freezing_threshold' : IDL.Nat,
    'balance' : IDL.Vec(IDL.Tuple(IDL.Vec(IDL.Nat8), IDL.Nat)),
    'memory_size' : IDL.Nat,
    'cycles' : IDL.Nat,
    'settings' : DefiniteCanisterSettingsArgs,
    'idle_cycles_burned_per_day' : IDL.Nat,
    'module_hash' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const ListNervousSystemFunctionsResponse = IDL.Record({
    'reserved_ids' : IDL.Vec(IDL.Nat64),
    'functions' : IDL.Vec(NervousSystemFunction),
  });
  const ListNeurons = IDL.Record({
    'of_principal' : IDL.Opt(IDL.Principal),
    'limit' : IDL.Nat32,
    'start_page_at' : IDL.Opt(NeuronId),
  });
  const ListNeuronsResponse = IDL.Record({ 'neurons' : IDL.Vec(Neuron) });
  const ListProposals = IDL.Record({
    'include_reward_status' : IDL.Vec(IDL.Int32),
    'before_proposal' : IDL.Opt(ProposalId),
    'limit' : IDL.Nat32,
    'exclude_type' : IDL.Vec(IDL.Nat64),
    'include_status' : IDL.Vec(IDL.Int32),
  });
  const ListProposalsResponse = IDL.Record({
    'proposals' : IDL.Vec(ProposalData),
  });
  const Command = IDL.Variant({
    'Split' : Split,
    'Follow' : Follow,
    'DisburseMaturity' : DisburseMaturity,
    'ClaimOrRefresh' : ClaimOrRefresh,
    'Configure' : Configure,
    'RegisterVote' : RegisterVote,
    'MakeProposal' : Proposal,
    'RemoveNeuronPermissions' : RemoveNeuronPermissions,
    'AddNeuronPermissions' : AddNeuronPermissions,
    'MergeMaturity' : MergeMaturity,
    'Disburse' : Disburse,
  });
  const ManageNeuron = IDL.Record({
    'subaccount' : IDL.Vec(IDL.Nat8),
    'command' : IDL.Opt(Command),
  });
  const SplitResponse = IDL.Record({ 'created_neuron_id' : IDL.Opt(NeuronId) });
  const DisburseMaturityResponse = IDL.Record({
    'transfer_block_height' : IDL.Nat64,
    'amount_disbursed_e8s' : IDL.Nat64,
  });
  const ClaimOrRefreshResponse = IDL.Record({
    'refreshed_neuron_id' : IDL.Opt(NeuronId),
  });
  const MergeMaturityResponse = IDL.Record({
    'merged_maturity_e8s' : IDL.Nat64,
    'new_stake_e8s' : IDL.Nat64,
  });
  const DisburseResponse = IDL.Record({ 'transfer_block_height' : IDL.Nat64 });
  const Command_1 = IDL.Variant({
    'Error' : GovernanceError,
    'Split' : SplitResponse,
    'Follow' : IDL.Record({}),
    'DisburseMaturity' : DisburseMaturityResponse,
    'ClaimOrRefresh' : ClaimOrRefreshResponse,
    'Configure' : IDL.Record({}),
    'RegisterVote' : IDL.Record({}),
    'MakeProposal' : GetProposal,
    'RemoveNeuronPermission' : IDL.Record({}),
    'MergeMaturity' : MergeMaturityResponse,
    'Disburse' : DisburseResponse,
    'AddNeuronPermission' : IDL.Record({}),
  });
  const ManageNeuronResponse = IDL.Record({ 'command' : IDL.Opt(Command_1) });
  const SetMode = IDL.Record({ 'mode' : IDL.Int32 });
  return IDL.Service({
    'get_build_metadata' : IDL.Func([], [IDL.Text], []),
    'get_nervous_system_parameters' : IDL.Func(
        [IDL.Null],
        [NervousSystemParameters],
        [],
      ),
    'get_neuron' : IDL.Func([GetNeuron], [GetNeuronResponse], []),
    'get_proposal' : IDL.Func([GetProposal], [GetProposalResponse], []),
    'get_root_canister_status' : IDL.Func(
        [IDL.Null],
        [CanisterStatusResultV2],
        [],
      ),
    'list_nervous_system_functions' : IDL.Func(
        [],
        [ListNervousSystemFunctionsResponse],
        [],
      ),
    'list_neurons' : IDL.Func([ListNeurons], [ListNeuronsResponse], []),
    'list_proposals' : IDL.Func([ListProposals], [ListProposalsResponse], []),
    'manage_neuron' : IDL.Func([ManageNeuron], [ManageNeuronResponse], []),
    'set_mode' : IDL.Func([SetMode], [IDL.Record({})], []),
  });
};
export const init = ({ IDL }) => {
  const GenericNervousSystemFunction = IDL.Record({
    'validator_canister_id' : IDL.Opt(IDL.Principal),
    'target_canister_id' : IDL.Opt(IDL.Principal),
    'validator_method_name' : IDL.Opt(IDL.Text),
    'target_method_name' : IDL.Opt(IDL.Text),
  });
  const FunctionType = IDL.Variant({
    'NativeNervousSystemFunction' : IDL.Record({}),
    'GenericNervousSystemFunction' : GenericNervousSystemFunction,
  });
  const NervousSystemFunction = IDL.Record({
    'id' : IDL.Nat64,
    'name' : IDL.Text,
    'description' : IDL.Opt(IDL.Text),
    'function_type' : IDL.Opt(FunctionType),
  });
  const GovernanceCachedMetrics = IDL.Record({
    'not_dissolving_neurons_e8s_buckets' : IDL.Vec(
      IDL.Tuple(IDL.Nat64, IDL.Float64)
    ),
    'garbage_collectable_neurons_count' : IDL.Nat64,
    'neurons_with_invalid_stake_count' : IDL.Nat64,
    'not_dissolving_neurons_count_buckets' : IDL.Vec(
      IDL.Tuple(IDL.Nat64, IDL.Nat64)
    ),
    'neurons_with_less_than_6_months_dissolve_delay_count' : IDL.Nat64,
    'dissolved_neurons_count' : IDL.Nat64,
    'total_staked_e8s' : IDL.Nat64,
    'total_supply_governance_tokens' : IDL.Nat64,
    'not_dissolving_neurons_count' : IDL.Nat64,
    'dissolved_neurons_e8s' : IDL.Nat64,
    'neurons_with_less_than_6_months_dissolve_delay_e8s' : IDL.Nat64,
    'dissolving_neurons_count_buckets' : IDL.Vec(
      IDL.Tuple(IDL.Nat64, IDL.Nat64)
    ),
    'dissolving_neurons_count' : IDL.Nat64,
    'dissolving_neurons_e8s_buckets' : IDL.Vec(
      IDL.Tuple(IDL.Nat64, IDL.Float64)
    ),
    'timestamp_seconds' : IDL.Nat64,
  });
  const NeuronId = IDL.Record({ 'id' : IDL.Vec(IDL.Nat8) });
  const Followees = IDL.Record({ 'followees' : IDL.Vec(NeuronId) });
  const DefaultFollowees = IDL.Record({
    'followees' : IDL.Vec(IDL.Tuple(IDL.Nat64, Followees)),
  });
  const NeuronPermissionList = IDL.Record({
    'permissions' : IDL.Vec(IDL.Int32),
  });
  const NervousSystemParameters = IDL.Record({
    'default_followees' : IDL.Opt(DefaultFollowees),
    'max_dissolve_delay_seconds' : IDL.Opt(IDL.Nat64),
    'max_followees_per_function' : IDL.Opt(IDL.Nat64),
    'neuron_claimer_permissions' : IDL.Opt(NeuronPermissionList),
    'neuron_minimum_stake_e8s' : IDL.Opt(IDL.Nat64),
    'initial_voting_period' : IDL.Opt(IDL.Nat64),
    'max_neuron_age_for_age_bonus' : IDL.Opt(IDL.Nat64),
    'neuron_minimum_dissolve_delay_to_vote_seconds' : IDL.Opt(IDL.Nat64),
    'reject_cost_e8s' : IDL.Opt(IDL.Nat64),
    'max_proposals_to_keep_per_action' : IDL.Opt(IDL.Nat32),
    'max_number_of_neurons' : IDL.Opt(IDL.Nat64),
    'transaction_fee_e8s' : IDL.Opt(IDL.Nat64),
    'max_number_of_proposals_with_ballots' : IDL.Opt(IDL.Nat64),
    'reward_distribution_period_seconds' : IDL.Opt(IDL.Nat64),
    'neuron_grantable_permissions' : IDL.Opt(NeuronPermissionList),
    'max_number_of_principals_per_neuron' : IDL.Opt(IDL.Nat64),
  });
  const ProposalId = IDL.Record({ 'id' : IDL.Nat64 });
  const RewardEvent = IDL.Record({
    'actual_timestamp_seconds' : IDL.Nat64,
    'periods_since_genesis' : IDL.Nat64,
    'distributed_e8s_equivalent' : IDL.Nat64,
    'settled_proposals' : IDL.Vec(ProposalId),
  });
  const GovernanceError = IDL.Record({
    'error_message' : IDL.Text,
    'error_type' : IDL.Int32,
  });
  const Ballot = IDL.Record({
    'vote' : IDL.Int32,
    'cast_timestamp_seconds' : IDL.Nat64,
    'voting_power' : IDL.Nat64,
  });
  const Tally = IDL.Record({
    'no' : IDL.Nat64,
    'yes' : IDL.Nat64,
    'total' : IDL.Nat64,
    'timestamp_seconds' : IDL.Nat64,
  });
  const UpgradeSnsControlledCanister = IDL.Record({
    'new_canister_wasm' : IDL.Vec(IDL.Nat8),
    'canister_id' : IDL.Opt(IDL.Principal),
  });
  const ExecuteGenericNervousSystemFunction = IDL.Record({
    'function_id' : IDL.Nat64,
    'payload' : IDL.Vec(IDL.Nat8),
  });
  const Motion = IDL.Record({ 'motion_text' : IDL.Text });
  const Action = IDL.Variant({
    'ManageNervousSystemParameters' : NervousSystemParameters,
    'AddGenericNervousSystemFunction' : NervousSystemFunction,
    'RemoveGenericNervousSystemFunction' : IDL.Nat64,
    'UpgradeSnsControlledCanister' : UpgradeSnsControlledCanister,
    'Unspecified' : IDL.Record({}),
    'ExecuteGenericNervousSystemFunction' : ExecuteGenericNervousSystemFunction,
    'Motion' : Motion,
  });
  const Proposal = IDL.Record({
    'url' : IDL.Text,
    'title' : IDL.Text,
    'action' : IDL.Opt(Action),
    'summary' : IDL.Text,
  });
  const WaitForQuietState = IDL.Record({
    'current_deadline_timestamp_seconds' : IDL.Nat64,
  });
  const ProposalData = IDL.Record({
    'id' : IDL.Opt(ProposalId),
    'payload_text_rendering' : IDL.Opt(IDL.Text),
    'action' : IDL.Nat64,
    'failure_reason' : IDL.Opt(GovernanceError),
    'ballots' : IDL.Vec(IDL.Tuple(IDL.Text, Ballot)),
    'reward_event_round' : IDL.Nat64,
    'failed_timestamp_seconds' : IDL.Nat64,
    'proposal_creation_timestamp_seconds' : IDL.Nat64,
    'reject_cost_e8s' : IDL.Nat64,
    'latest_tally' : IDL.Opt(Tally),
    'decided_timestamp_seconds' : IDL.Nat64,
    'proposal' : IDL.Opt(Proposal),
    'proposer' : IDL.Opt(NeuronId),
    'wait_for_quiet_state' : IDL.Opt(WaitForQuietState),
    'executed_timestamp_seconds' : IDL.Nat64,
  });
  const Split = IDL.Record({ 'memo' : IDL.Nat64, 'amount_e8s' : IDL.Nat64 });
  const Follow = IDL.Record({
    'function_id' : IDL.Nat64,
    'followees' : IDL.Vec(NeuronId),
  });
  const AccountIdentifier = IDL.Record({ 'hash' : IDL.Vec(IDL.Nat8) });
  const DisburseMaturity = IDL.Record({
    'to_account' : IDL.Opt(AccountIdentifier),
    'percentage_to_disburse' : IDL.Nat32,
  });
  const IncreaseDissolveDelay = IDL.Record({
    'additional_dissolve_delay_seconds' : IDL.Nat32,
  });
  const SetDissolveTimestamp = IDL.Record({
    'dissolve_timestamp_seconds' : IDL.Nat64,
  });
  const Operation = IDL.Variant({
    'StopDissolving' : IDL.Record({}),
    'StartDissolving' : IDL.Record({}),
    'IncreaseDissolveDelay' : IncreaseDissolveDelay,
    'SetDissolveTimestamp' : SetDissolveTimestamp,
  });
  const Configure = IDL.Record({ 'operation' : IDL.Opt(Operation) });
  const RegisterVote = IDL.Record({
    'vote' : IDL.Int32,
    'proposal' : IDL.Opt(ProposalId),
  });
  const MemoAndController = IDL.Record({
    'controller' : IDL.Opt(IDL.Principal),
    'memo' : IDL.Nat64,
  });
  const By = IDL.Variant({
    'MemoAndController' : MemoAndController,
    'NeuronId' : IDL.Record({}),
  });
  const ClaimOrRefresh = IDL.Record({ 'by' : IDL.Opt(By) });
  const RemoveNeuronPermissions = IDL.Record({
    'permissions_to_remove' : IDL.Opt(NeuronPermissionList),
    'principal_id' : IDL.Opt(IDL.Principal),
  });
  const AddNeuronPermissions = IDL.Record({
    'permissions_to_add' : IDL.Opt(NeuronPermissionList),
    'principal_id' : IDL.Opt(IDL.Principal),
  });
  const MergeMaturity = IDL.Record({ 'percentage_to_merge' : IDL.Nat32 });
  const Amount = IDL.Record({ 'e8s' : IDL.Nat64 });
  const Disburse = IDL.Record({
    'to_account' : IDL.Opt(AccountIdentifier),
    'amount' : IDL.Opt(Amount),
  });
  const Command_2 = IDL.Variant({
    'Split' : Split,
    'Follow' : Follow,
    'DisburseMaturity' : DisburseMaturity,
    'Configure' : Configure,
    'RegisterVote' : RegisterVote,
    'MakeProposal' : Proposal,
    'ClaimOrRefreshNeuron' : ClaimOrRefresh,
    'RemoveNeuronPermissions' : RemoveNeuronPermissions,
    'AddNeuronPermissions' : AddNeuronPermissions,
    'MergeMaturity' : MergeMaturity,
    'Disburse' : Disburse,
  });
  const NeuronInFlightCommand = IDL.Record({
    'command' : IDL.Opt(Command_2),
    'timestamp' : IDL.Nat64,
  });
  const NeuronPermission = IDL.Record({
    'principal' : IDL.Opt(IDL.Principal),
    'permission_type' : IDL.Vec(IDL.Int32),
  });
  const DissolveState = IDL.Variant({
    'DissolveDelaySeconds' : IDL.Nat64,
    'WhenDissolvedTimestampSeconds' : IDL.Nat64,
  });
  const Neuron = IDL.Record({
    'id' : IDL.Opt(NeuronId),
    'permissions' : IDL.Vec(NeuronPermission),
    'maturity_e8s_equivalent' : IDL.Nat64,
    'cached_neuron_stake_e8s' : IDL.Nat64,
    'created_timestamp_seconds' : IDL.Nat64,
    'aging_since_timestamp_seconds' : IDL.Nat64,
    'dissolve_state' : IDL.Opt(DissolveState),
    'followees' : IDL.Vec(IDL.Tuple(IDL.Nat64, Followees)),
    'neuron_fees_e8s' : IDL.Nat64,
  });
  const Governance = IDL.Record({
    'root_canister_id' : IDL.Opt(IDL.Principal),
    'id_to_nervous_system_functions' : IDL.Vec(
      IDL.Tuple(IDL.Nat64, NervousSystemFunction)
    ),
    'metrics' : IDL.Opt(GovernanceCachedMetrics),
    'mode' : IDL.Int32,
    'parameters' : IDL.Opt(NervousSystemParameters),
    'latest_reward_event' : IDL.Opt(RewardEvent),
    'ledger_canister_id' : IDL.Opt(IDL.Principal),
    'proposals' : IDL.Vec(IDL.Tuple(IDL.Nat64, ProposalData)),
    'in_flight_commands' : IDL.Vec(IDL.Tuple(IDL.Text, NeuronInFlightCommand)),
    'neurons' : IDL.Vec(IDL.Tuple(IDL.Text, Neuron)),
    'genesis_timestamp_seconds' : IDL.Nat64,
  });
  return [Governance];
};
