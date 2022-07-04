/* Do not edit.  Compiled with ./scripts/compile-idl-js from candid/sns_swap.did */
export const idlFactory = ({ IDL }) => {
  const Init = IDL.Record({
    'min_participant_icp_e8s' : IDL.Nat64,
    'fallback_controller_principal_ids' : IDL.Vec(IDL.Text),
    'max_icp_e8s' : IDL.Nat64,
    'min_participants' : IDL.Nat32,
    'nns_governance_canister_id' : IDL.Text,
    'icp_ledger_canister_id' : IDL.Text,
    'sns_ledger_canister_id' : IDL.Text,
    'max_participant_icp_e8s' : IDL.Nat64,
    'sns_governance_canister_id' : IDL.Text,
    'min_icp_e8s' : IDL.Nat64,
  });
  const ErrorRefundIcpRequest = IDL.Record({
    'icp_e8s' : IDL.Nat64,
    'fee_override_e8s' : IDL.Nat64,
  });
  const CanisterCallError = IDL.Record({
    'code' : IDL.Opt(IDL.Int32),
    'description' : IDL.Text,
  });
  const Possibility = IDL.Variant({ 'Err' : CanisterCallError });
  const SetModeCallResult = IDL.Record({
    'possibility' : IDL.Opt(Possibility),
  });
  const SweepResult = IDL.Record({
    'failure' : IDL.Nat32,
    'skipped' : IDL.Nat32,
    'success' : IDL.Nat32,
  });
  const FinalizeSwapResponse = IDL.Record({
    'sns_governance_normal_mode_enabled' : IDL.Opt(SetModeCallResult),
    'sweep_icp' : IDL.Opt(SweepResult),
    'sweep_sns' : IDL.Opt(SweepResult),
    'create_neuron' : IDL.Opt(SweepResult),
  });
  const GetCanisterStatusResponse = IDL.Record({
    'canister_cycle_balance' : IDL.Nat64,
  });
  const TimeWindow = IDL.Record({
    'start_timestamp_seconds' : IDL.Nat64,
    'end_timestamp_seconds' : IDL.Nat64,
  });
  const BuyerState = IDL.Record({
    'icp_disbursing' : IDL.Bool,
    'amount_sns_e8s' : IDL.Nat64,
    'amount_icp_e8s' : IDL.Nat64,
    'sns_disbursing' : IDL.Bool,
  });
  const State = IDL.Record({
    'open_time_window' : IDL.Opt(TimeWindow),
    'sns_token_e8s' : IDL.Nat64,
    'lifecycle' : IDL.Int32,
    'buyers' : IDL.Vec(IDL.Tuple(IDL.Text, BuyerState)),
  });
  const Swap = IDL.Record({ 'init' : IDL.Opt(Init), 'state' : IDL.Opt(State) });
  const DerivedState = IDL.Record({
    'sns_tokens_per_icp' : IDL.Float32,
    'buyer_total_icp_e8s' : IDL.Nat64,
  });
  const GetStateResponse = IDL.Record({
    'swap' : IDL.Opt(Swap),
    'derived' : IDL.Opt(DerivedState),
  });
  const RefreshBuyerTokensRequest = IDL.Record({ 'buyer' : IDL.Text });
  const SetOpenTimeWindowRequest = IDL.Record({
    'open_time_window' : IDL.Opt(TimeWindow),
  });
  return IDL.Service({
    'error_refund_icp' : IDL.Func(
        [ErrorRefundIcpRequest],
        [IDL.Record({})],
        [],
      ),
    'finalize_swap' : IDL.Func([IDL.Record({})], [FinalizeSwapResponse], []),
    'get_canister_status' : IDL.Func(
        [IDL.Record({})],
        [GetCanisterStatusResponse],
        [],
      ),
    'get_state' : IDL.Func([IDL.Record({})], [GetStateResponse], []),
    'refresh_buyer_tokens' : IDL.Func(
        [RefreshBuyerTokensRequest],
        [IDL.Record({})],
        [],
      ),
    'refresh_sns_tokens' : IDL.Func([IDL.Record({})], [IDL.Record({})], []),
    'set_open_time_window' : IDL.Func(
        [SetOpenTimeWindowRequest],
        [IDL.Record({})],
        [],
      ),
  });
};
export const init = ({ IDL }) => {
  const Init = IDL.Record({
    'min_participant_icp_e8s' : IDL.Nat64,
    'fallback_controller_principal_ids' : IDL.Vec(IDL.Text),
    'max_icp_e8s' : IDL.Nat64,
    'min_participants' : IDL.Nat32,
    'nns_governance_canister_id' : IDL.Text,
    'icp_ledger_canister_id' : IDL.Text,
    'sns_ledger_canister_id' : IDL.Text,
    'max_participant_icp_e8s' : IDL.Nat64,
    'sns_governance_canister_id' : IDL.Text,
    'min_icp_e8s' : IDL.Nat64,
  });
  return [Init];
};
