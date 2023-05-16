/* Do not edit.  Compiled with ./scripts/compile-idl-js from packages/sns/candid/sns_root.did */
export const idlFactory = ({ IDL }) => {
  const SnsRootCanister = IDL.Record({
    'dapp_canister_ids' : IDL.Vec(IDL.Principal),
    'testflight' : IDL.Bool,
    'latest_ledger_archive_poll_timestamp_seconds' : IDL.Opt(IDL.Nat64),
    'archive_canister_ids' : IDL.Vec(IDL.Principal),
    'governance_canister_id' : IDL.Opt(IDL.Principal),
    'index_canister_id' : IDL.Opt(IDL.Principal),
    'swap_canister_id' : IDL.Opt(IDL.Principal),
    'ledger_canister_id' : IDL.Opt(IDL.Principal),
  });
  const CanisterIdRecord = IDL.Record({ 'canister_id' : IDL.Principal });
  const CanisterStatusType = IDL.Variant({
    'stopped' : IDL.Null,
    'stopping' : IDL.Null,
    'running' : IDL.Null,
  });
  const DefiniteCanisterSettings = IDL.Record({
    'controllers' : IDL.Vec(IDL.Principal),
  });
  const CanisterStatusResult = IDL.Record({
    'controller' : IDL.Principal,
    'status' : CanisterStatusType,
    'memory_size' : IDL.Nat,
    'settings' : DefiniteCanisterSettings,
    'module_hash' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const GetSnsCanistersSummaryRequest = IDL.Record({
    'update_canister_list' : IDL.Opt(IDL.Bool),
  });
  const DefiniteCanisterSettingsArgs = IDL.Record({
    'freezing_threshold' : IDL.Nat,
    'controllers' : IDL.Vec(IDL.Principal),
    'memory_allocation' : IDL.Nat,
    'compute_allocation' : IDL.Nat,
  });
  const CanisterStatusResultV2 = IDL.Record({
    'status' : CanisterStatusType,
    'memory_size' : IDL.Nat,
    'cycles' : IDL.Nat,
    'settings' : DefiniteCanisterSettingsArgs,
    'idle_cycles_burned_per_day' : IDL.Nat,
    'module_hash' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const CanisterSummary = IDL.Record({
    'status' : IDL.Opt(CanisterStatusResultV2),
    'canister_id' : IDL.Opt(IDL.Principal),
  });
  const GetSnsCanistersSummaryResponse = IDL.Record({
    'root' : IDL.Opt(CanisterSummary),
    'swap' : IDL.Opt(CanisterSummary),
    'ledger' : IDL.Opt(CanisterSummary),
    'index' : IDL.Opt(CanisterSummary),
    'governance' : IDL.Opt(CanisterSummary),
    'dapps' : IDL.Vec(CanisterSummary),
    'archives' : IDL.Vec(CanisterSummary),
  });
  const ListSnsCanistersResponse = IDL.Record({
    'root' : IDL.Opt(IDL.Principal),
    'swap' : IDL.Opt(IDL.Principal),
    'ledger' : IDL.Opt(IDL.Principal),
    'index' : IDL.Opt(IDL.Principal),
    'governance' : IDL.Opt(IDL.Principal),
    'dapps' : IDL.Vec(IDL.Principal),
    'archives' : IDL.Vec(IDL.Principal),
  });
  const RegisterDappCanisterRequest = IDL.Record({
    'canister_id' : IDL.Opt(IDL.Principal),
  });
  const RegisterDappCanistersRequest = IDL.Record({
    'canister_ids' : IDL.Vec(IDL.Principal),
  });
  const SetDappControllersRequest = IDL.Record({
    'canister_ids' : IDL.Opt(RegisterDappCanistersRequest),
    'controller_principal_ids' : IDL.Vec(IDL.Principal),
  });
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
  return IDL.Service({
    'canister_status' : IDL.Func(
        [CanisterIdRecord],
        [CanisterStatusResult],
        [],
      ),
    'get_build_metadata' : IDL.Func([], [IDL.Text], []),
    'get_sns_canisters_summary' : IDL.Func(
        [GetSnsCanistersSummaryRequest],
        [GetSnsCanistersSummaryResponse],
        [],
      ),
    'list_sns_canisters' : IDL.Func(
        [IDL.Record({})],
        [ListSnsCanistersResponse],
        [],
      ),
    'register_dapp_canister' : IDL.Func(
        [RegisterDappCanisterRequest],
        [IDL.Record({})],
        [],
      ),
    'register_dapp_canisters' : IDL.Func(
        [RegisterDappCanistersRequest],
        [IDL.Record({})],
        [],
      ),
    'set_dapp_controllers' : IDL.Func(
        [SetDappControllersRequest],
        [SetDappControllersResponse],
        [],
      ),
  });
};
export const init = ({ IDL }) => {
  const SnsRootCanister = IDL.Record({
    'dapp_canister_ids' : IDL.Vec(IDL.Principal),
    'testflight' : IDL.Bool,
    'latest_ledger_archive_poll_timestamp_seconds' : IDL.Opt(IDL.Nat64),
    'archive_canister_ids' : IDL.Vec(IDL.Principal),
    'governance_canister_id' : IDL.Opt(IDL.Principal),
    'index_canister_id' : IDL.Opt(IDL.Principal),
    'swap_canister_id' : IDL.Opt(IDL.Principal),
    'ledger_canister_id' : IDL.Opt(IDL.Principal),
  });
  return [SnsRootCanister];
};
