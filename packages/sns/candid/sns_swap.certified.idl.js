/* Do not edit.  Compiled with ./scripts/compile-idl-js from packages/sns/candid/sns_swap.did */
export const idlFactory = ({ IDL }) => {
  const Init = IDL.Record({
    'sns_root_canister_id' : IDL.Text,
    'fallback_controller_principal_ids' : IDL.Vec(IDL.Text),
    'neuron_minimum_stake_e8s' : IDL.Opt(IDL.Nat64),
    'nns_governance_canister_id' : IDL.Text,
    'transaction_fee_e8s' : IDL.Opt(IDL.Nat64),
    'icp_ledger_canister_id' : IDL.Text,
    'sns_ledger_canister_id' : IDL.Text,
    'sns_governance_canister_id' : IDL.Text,
  });
  const ErrorRefundIcpRequest = IDL.Record({
    'source_principal_id' : IDL.Opt(IDL.Principal),
  });
  const Ok = IDL.Record({ 'block_height' : IDL.Opt(IDL.Nat64) });
  const Err = IDL.Record({
    'description' : IDL.Opt(IDL.Text),
    'error_type' : IDL.Opt(IDL.Int32),
  });
  const Result = IDL.Variant({ 'Ok' : Ok, 'Err' : Err });
  const ErrorRefundIcpResponse = IDL.Record({ 'result' : IDL.Opt(Result) });
  const CanisterCallError = IDL.Record({
    'code' : IDL.Opt(IDL.Int32),
    'description' : IDL.Text,
  });
  const FailedUpdate = IDL.Record({
    'err' : IDL.Opt(CanisterCallError),
    'dapp_canister_id' : IDL.Opt(IDL.Principal),
  });
  const SetDappControllersResponse = IDL.Record({
    'failed_updates' : IDL.Vec(FailedUpdate),
  });
  const Possibility = IDL.Variant({
    'Ok' : SetDappControllersResponse,
    'Err' : CanisterCallError,
  });
  const SetDappControllersCallResult = IDL.Record({
    'possibility' : IDL.Opt(Possibility),
  });
  const GovernanceError = IDL.Record({
    'error_message' : IDL.Text,
    'error_type' : IDL.Int32,
  });
  const Response = IDL.Record({
    'governance_error' : IDL.Opt(GovernanceError),
  });
  const Possibility_1 = IDL.Variant({
    'Ok' : Response,
    'Err' : CanisterCallError,
  });
  const SettleCommunityFundParticipationResult = IDL.Record({
    'possibility' : IDL.Opt(Possibility_1),
  });
  const Possibility_2 = IDL.Variant({
    'Ok' : IDL.Record({}),
    'Err' : CanisterCallError,
  });
  const SetModeCallResult = IDL.Record({
    'possibility' : IDL.Opt(Possibility_2),
  });
  const SweepResult = IDL.Record({
    'failure' : IDL.Nat32,
    'skipped' : IDL.Nat32,
    'invalid' : IDL.Nat32,
    'success' : IDL.Nat32,
    'global_failures' : IDL.Nat32,
  });
  const FinalizeSwapResponse = IDL.Record({
    'set_dapp_controllers_call_result' : IDL.Opt(SetDappControllersCallResult),
    'settle_community_fund_participation_result' : IDL.Opt(
      SettleCommunityFundParticipationResult
    ),
    'error_message' : IDL.Opt(IDL.Text),
    'set_mode_call_result' : IDL.Opt(SetModeCallResult),
    'sweep_icp_result' : IDL.Opt(SweepResult),
    'claim_neuron_result' : IDL.Opt(SweepResult),
    'sweep_sns_result' : IDL.Opt(SweepResult),
  });
  const GetBuyerStateRequest = IDL.Record({
    'principal_id' : IDL.Opt(IDL.Principal),
  });
  const TransferableAmount = IDL.Record({
    'transfer_start_timestamp_seconds' : IDL.Nat64,
    'amount_e8s' : IDL.Nat64,
    'transfer_success_timestamp_seconds' : IDL.Nat64,
  });
  const BuyerState = IDL.Record({ 'icp' : IDL.Opt(TransferableAmount) });
  const GetBuyerStateResponse = IDL.Record({
    'buyer_state' : IDL.Opt(BuyerState),
  });
  const GetBuyersTotalResponse = IDL.Record({ 'buyers_total' : IDL.Nat64 });
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
  const GetDerivedStateResponse = IDL.Record({
    'sns_tokens_per_icp' : IDL.Opt(IDL.Float64),
    'buyer_total_icp_e8s' : IDL.Opt(IDL.Nat64),
  });
  const GetInitResponse = IDL.Record({ 'init' : IDL.Opt(Init) });
  const GetLifecycleResponse = IDL.Record({
    'decentralization_sale_open_timestamp_seconds' : IDL.Opt(IDL.Nat64),
    'lifecycle' : IDL.Opt(IDL.Int32),
  });
  const Icrc1Account = IDL.Record({
    'owner' : IDL.Opt(IDL.Principal),
    'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const Ticket = IDL.Record({
    'creation_time' : IDL.Nat64,
    'ticket_id' : IDL.Nat64,
    'account' : IDL.Opt(Icrc1Account),
    'amount_icp_e8s' : IDL.Nat64,
  });
  const Ok_1 = IDL.Record({ 'ticket' : IDL.Opt(Ticket) });
  const Err_1 = IDL.Record({ 'error_type' : IDL.Opt(IDL.Int32) });
  const Result_1 = IDL.Variant({ 'Ok' : Ok_1, 'Err' : Err_1 });
  const GetOpenTicketResponse = IDL.Record({ 'result' : IDL.Opt(Result_1) });
  const NeuronBasketConstructionParameters = IDL.Record({
    'dissolve_delay_interval_seconds' : IDL.Nat64,
    'count' : IDL.Nat64,
  });
  const Params = IDL.Record({
    'min_participant_icp_e8s' : IDL.Nat64,
    'neuron_basket_construction_parameters' : IDL.Opt(
      NeuronBasketConstructionParameters
    ),
    'max_icp_e8s' : IDL.Nat64,
    'swap_due_timestamp_seconds' : IDL.Nat64,
    'min_participants' : IDL.Nat32,
    'sns_token_e8s' : IDL.Nat64,
    'sale_delay_seconds' : IDL.Opt(IDL.Nat64),
    'max_participant_icp_e8s' : IDL.Nat64,
    'min_icp_e8s' : IDL.Nat64,
  });
  const GetSaleParametersResponse = IDL.Record({ 'params' : IDL.Opt(Params) });
  const NeuronId = IDL.Record({ 'id' : IDL.Vec(IDL.Nat8) });
  const NeuronAttributes = IDL.Record({
    'dissolve_delay_seconds' : IDL.Nat64,
    'memo' : IDL.Nat64,
    'followees' : IDL.Vec(NeuronId),
  });
  const CfInvestment = IDL.Record({
    'hotkey_principal' : IDL.Text,
    'nns_neuron_id' : IDL.Nat64,
  });
  const DirectInvestment = IDL.Record({ 'buyer_principal' : IDL.Text });
  const Investor = IDL.Variant({
    'CommunityFund' : CfInvestment,
    'Direct' : DirectInvestment,
  });
  const SnsNeuronRecipe = IDL.Record({
    'sns' : IDL.Opt(TransferableAmount),
    'claimed_status' : IDL.Opt(IDL.Int32),
    'neuron_attributes' : IDL.Opt(NeuronAttributes),
    'investor' : IDL.Opt(Investor),
  });
  const CfNeuron = IDL.Record({
    'nns_neuron_id' : IDL.Nat64,
    'amount_icp_e8s' : IDL.Nat64,
  });
  const CfParticipant = IDL.Record({
    'hotkey_principal' : IDL.Text,
    'cf_neurons' : IDL.Vec(CfNeuron),
  });
  const Swap = IDL.Record({
    'neuron_recipes' : IDL.Vec(SnsNeuronRecipe),
    'decentralization_sale_open_timestamp_seconds' : IDL.Opt(IDL.Nat64),
    'finalize_swap_in_progress' : IDL.Opt(IDL.Bool),
    'cf_participants' : IDL.Vec(CfParticipant),
    'init' : IDL.Opt(Init),
    'lifecycle' : IDL.Int32,
    'buyers' : IDL.Vec(IDL.Tuple(IDL.Text, BuyerState)),
    'params' : IDL.Opt(Params),
    'open_sns_token_swap_proposal_id' : IDL.Opt(IDL.Nat64),
  });
  const DerivedState = IDL.Record({
    'sns_tokens_per_icp' : IDL.Float32,
    'buyer_total_icp_e8s' : IDL.Nat64,
  });
  const GetStateResponse = IDL.Record({
    'swap' : IDL.Opt(Swap),
    'derived' : IDL.Opt(DerivedState),
  });
  const ListCommunityFundParticipantsRequest = IDL.Record({
    'offset' : IDL.Opt(IDL.Nat64),
    'limit' : IDL.Opt(IDL.Nat32),
  });
  const ListCommunityFundParticipantsResponse = IDL.Record({
    'cf_participants' : IDL.Vec(CfParticipant),
  });
  const ListDirectParticipantsRequest = IDL.Record({
    'offset' : IDL.Opt(IDL.Nat32),
    'limit' : IDL.Opt(IDL.Nat32),
  });
  const Participant = IDL.Record({
    'participation' : IDL.Opt(BuyerState),
    'participant_id' : IDL.Opt(IDL.Principal),
  });
  const ListDirectParticipantsResponse = IDL.Record({
    'participants' : IDL.Vec(Participant),
  });
  const ListSnsNeuronRecipesRequest = IDL.Record({
    'offset' : IDL.Opt(IDL.Nat64),
    'limit' : IDL.Opt(IDL.Nat32),
  });
  const ListSnsNeuronRecipesResponse = IDL.Record({
    'sns_neuron_recipes' : IDL.Vec(SnsNeuronRecipe),
  });
  const NewSaleTicketRequest = IDL.Record({
    'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'amount_icp_e8s' : IDL.Nat64,
  });
  const InvalidUserAmount = IDL.Record({
    'min_amount_icp_e8s_included' : IDL.Nat64,
    'max_amount_icp_e8s_included' : IDL.Nat64,
  });
  const Err_2 = IDL.Record({
    'invalid_user_amount' : IDL.Opt(InvalidUserAmount),
    'existing_ticket' : IDL.Opt(Ticket),
    'error_type' : IDL.Int32,
  });
  const Result_2 = IDL.Variant({ 'Ok' : Ok_1, 'Err' : Err_2 });
  const NewSaleTicketResponse = IDL.Record({ 'result' : IDL.Opt(Result_2) });
  const OpenRequest = IDL.Record({
    'cf_participants' : IDL.Vec(CfParticipant),
    'params' : IDL.Opt(Params),
    'open_sns_token_swap_proposal_id' : IDL.Opt(IDL.Nat64),
  });
  const RefreshBuyerTokensRequest = IDL.Record({ 'buyer' : IDL.Text });
  const RefreshBuyerTokensResponse = IDL.Record({
    'icp_accepted_participation_e8s' : IDL.Nat64,
    'icp_ledger_account_balance_e8s' : IDL.Nat64,
  });
  return IDL.Service({
    'error_refund_icp' : IDL.Func(
        [ErrorRefundIcpRequest],
        [ErrorRefundIcpResponse],
        [],
      ),
    'finalize_swap' : IDL.Func([IDL.Record({})], [FinalizeSwapResponse], []),
    'get_buyer_state' : IDL.Func(
        [GetBuyerStateRequest],
        [GetBuyerStateResponse],
        [],
      ),
    'get_buyers_total' : IDL.Func(
        [IDL.Record({})],
        [GetBuyersTotalResponse],
        [],
      ),
    'get_canister_status' : IDL.Func(
        [IDL.Record({})],
        [CanisterStatusResultV2],
        [],
      ),
    'get_derived_state' : IDL.Func(
        [IDL.Record({})],
        [GetDerivedStateResponse],
        [],
      ),
    'get_init' : IDL.Func([IDL.Record({})], [GetInitResponse], []),
    'get_lifecycle' : IDL.Func([IDL.Record({})], [GetLifecycleResponse], []),
    'get_open_ticket' : IDL.Func([IDL.Record({})], [GetOpenTicketResponse], []),
    'get_sale_parameters' : IDL.Func(
        [IDL.Record({})],
        [GetSaleParametersResponse],
        [],
      ),
    'get_state' : IDL.Func([IDL.Record({})], [GetStateResponse], []),
    'list_community_fund_participants' : IDL.Func(
        [ListCommunityFundParticipantsRequest],
        [ListCommunityFundParticipantsResponse],
        [],
      ),
    'list_direct_participants' : IDL.Func(
        [ListDirectParticipantsRequest],
        [ListDirectParticipantsResponse],
        [],
      ),
    'list_sns_neuron_recipes' : IDL.Func(
        [ListSnsNeuronRecipesRequest],
        [ListSnsNeuronRecipesResponse],
        [],
      ),
    'new_sale_ticket' : IDL.Func(
        [NewSaleTicketRequest],
        [NewSaleTicketResponse],
        [],
      ),
    'open' : IDL.Func([OpenRequest], [IDL.Record({})], []),
    'refresh_buyer_tokens' : IDL.Func(
        [RefreshBuyerTokensRequest],
        [RefreshBuyerTokensResponse],
        [],
      ),
    'restore_dapp_controllers' : IDL.Func(
        [IDL.Record({})],
        [SetDappControllersCallResult],
        [],
      ),
  });
};
export const init = ({ IDL }) => {
  const Init = IDL.Record({
    'sns_root_canister_id' : IDL.Text,
    'fallback_controller_principal_ids' : IDL.Vec(IDL.Text),
    'neuron_minimum_stake_e8s' : IDL.Opt(IDL.Nat64),
    'nns_governance_canister_id' : IDL.Text,
    'transaction_fee_e8s' : IDL.Opt(IDL.Nat64),
    'icp_ledger_canister_id' : IDL.Text,
    'sns_ledger_canister_id' : IDL.Text,
    'sns_governance_canister_id' : IDL.Text,
  });
  return [Init];
};
