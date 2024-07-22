/* Do not edit.  Compiled with ./scripts/compile-idl-js from packages/cketh/candid/orchestrator.did */
export const idlFactory = ({ IDL }) => {
  const UpdateCyclesManagement = IDL.Record({
    'cycles_top_up_increment' : IDL.Opt(IDL.Nat),
    'cycles_for_ledger_creation' : IDL.Opt(IDL.Nat),
    'cycles_for_archive_creation' : IDL.Opt(IDL.Nat),
    'cycles_for_index_creation' : IDL.Opt(IDL.Nat),
  });
  const UpgradeArg = IDL.Record({
    'cycles_management' : IDL.Opt(UpdateCyclesManagement),
    'archive_compressed_wasm_hash' : IDL.Opt(IDL.Text),
    'git_commit_hash' : IDL.Opt(IDL.Text),
    'ledger_compressed_wasm_hash' : IDL.Opt(IDL.Text),
    'index_compressed_wasm_hash' : IDL.Opt(IDL.Text),
  });
  const CyclesManagement = IDL.Record({
    'cycles_top_up_increment' : IDL.Nat,
    'cycles_for_ledger_creation' : IDL.Nat,
    'cycles_for_archive_creation' : IDL.Nat,
    'cycles_for_index_creation' : IDL.Nat,
  });
  const InitArg = IDL.Record({
    'cycles_management' : IDL.Opt(CyclesManagement),
    'more_controller_ids' : IDL.Vec(IDL.Principal),
    'minter_id' : IDL.Opt(IDL.Principal),
  });
  const Erc20Contract = IDL.Record({
    'chain_id' : IDL.Nat,
    'address' : IDL.Text,
  });
  const LedgerInitArg = IDL.Record({
    'decimals' : IDL.Nat8,
    'token_symbol' : IDL.Text,
    'transfer_fee' : IDL.Nat,
    'token_logo' : IDL.Text,
    'token_name' : IDL.Text,
  });
  const AddErc20Arg = IDL.Record({
    'contract' : Erc20Contract,
    'ledger_init_arg' : LedgerInitArg,
  });
  const OrchestratorArg = IDL.Variant({
    'UpgradeArg' : UpgradeArg,
    'InitArg' : InitArg,
    'AddErc20Arg' : AddErc20Arg,
  });
  const ManagedCanisterIds = IDL.Record({
    'ledger' : IDL.Opt(IDL.Principal),
    'index' : IDL.Opt(IDL.Principal),
    'archives' : IDL.Vec(IDL.Principal),
  });
  const CanisterStatusType = IDL.Variant({
    'stopped' : IDL.Null,
    'stopping' : IDL.Null,
    'running' : IDL.Null,
  });
  const DefiniteCanisterSettings = IDL.Record({
    'freezing_threshold' : IDL.Nat,
    'controllers' : IDL.Vec(IDL.Principal),
    'reserved_cycles_limit' : IDL.Nat,
    'memory_allocation' : IDL.Nat,
    'compute_allocation' : IDL.Nat,
  });
  const QueryStats = IDL.Record({
    'response_payload_bytes_total' : IDL.Nat,
    'num_instructions_total' : IDL.Nat,
    'num_calls_total' : IDL.Nat,
    'request_payload_bytes_total' : IDL.Nat,
  });
  const CanisterStatusResponse = IDL.Record({
    'status' : CanisterStatusType,
    'memory_size' : IDL.Nat,
    'cycles' : IDL.Nat,
    'settings' : DefiniteCanisterSettings,
    'query_stats' : QueryStats,
    'idle_cycles_burned_per_day' : IDL.Nat,
    'module_hash' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'reserved_cycles' : IDL.Nat,
  });
  const ManagedCanisterStatus = IDL.Variant({
    'Created' : IDL.Record({ 'canister_id' : IDL.Principal }),
    'Installed' : IDL.Record({
      'canister_id' : IDL.Principal,
      'installed_wasm_hash' : IDL.Text,
    }),
  });
  const ManagedCanisters = IDL.Record({
    'erc20_contract' : Erc20Contract,
    'ledger' : IDL.Opt(ManagedCanisterStatus),
    'index' : IDL.Opt(ManagedCanisterStatus),
    'archives' : IDL.Vec(IDL.Principal),
    'ckerc20_token_symbol' : IDL.Text,
  });
  const LedgerSuiteVersion = IDL.Record({
    'archive_compressed_wasm_hash' : IDL.Text,
    'ledger_compressed_wasm_hash' : IDL.Text,
    'index_compressed_wasm_hash' : IDL.Text,
  });
  const OrchestratorInfo = IDL.Record({
    'cycles_management' : CyclesManagement,
    'managed_canisters' : IDL.Vec(ManagedCanisters),
    'more_controller_ids' : IDL.Vec(IDL.Principal),
    'ledger_suite_version' : IDL.Opt(LedgerSuiteVersion),
    'minter_id' : IDL.Opt(IDL.Principal),
  });
  return IDL.Service({
    'canister_ids' : IDL.Func(
        [Erc20Contract],
        [IDL.Opt(ManagedCanisterIds)],
        [],
      ),
    'get_canister_status' : IDL.Func([], [CanisterStatusResponse], []),
    'get_orchestrator_info' : IDL.Func([], [OrchestratorInfo], []),
  });
};
export const init = ({ IDL }) => {
  const UpdateCyclesManagement = IDL.Record({
    'cycles_top_up_increment' : IDL.Opt(IDL.Nat),
    'cycles_for_ledger_creation' : IDL.Opt(IDL.Nat),
    'cycles_for_archive_creation' : IDL.Opt(IDL.Nat),
    'cycles_for_index_creation' : IDL.Opt(IDL.Nat),
  });
  const UpgradeArg = IDL.Record({
    'cycles_management' : IDL.Opt(UpdateCyclesManagement),
    'archive_compressed_wasm_hash' : IDL.Opt(IDL.Text),
    'git_commit_hash' : IDL.Opt(IDL.Text),
    'ledger_compressed_wasm_hash' : IDL.Opt(IDL.Text),
    'index_compressed_wasm_hash' : IDL.Opt(IDL.Text),
  });
  const CyclesManagement = IDL.Record({
    'cycles_top_up_increment' : IDL.Nat,
    'cycles_for_ledger_creation' : IDL.Nat,
    'cycles_for_archive_creation' : IDL.Nat,
    'cycles_for_index_creation' : IDL.Nat,
  });
  const InitArg = IDL.Record({
    'cycles_management' : IDL.Opt(CyclesManagement),
    'more_controller_ids' : IDL.Vec(IDL.Principal),
    'minter_id' : IDL.Opt(IDL.Principal),
  });
  const Erc20Contract = IDL.Record({
    'chain_id' : IDL.Nat,
    'address' : IDL.Text,
  });
  const LedgerInitArg = IDL.Record({
    'decimals' : IDL.Nat8,
    'token_symbol' : IDL.Text,
    'transfer_fee' : IDL.Nat,
    'token_logo' : IDL.Text,
    'token_name' : IDL.Text,
  });
  const AddErc20Arg = IDL.Record({
    'contract' : Erc20Contract,
    'ledger_init_arg' : LedgerInitArg,
  });
  const OrchestratorArg = IDL.Variant({
    'UpgradeArg' : UpgradeArg,
    'InitArg' : InitArg,
    'AddErc20Arg' : AddErc20Arg,
  });
  return [OrchestratorArg];
};
