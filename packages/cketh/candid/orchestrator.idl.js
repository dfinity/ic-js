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
  const LedgerSubaccount = IDL.Vec(IDL.Nat8);
  const LedgerAccount = IDL.Record({
    'owner' : IDL.Principal,
    'subaccount' : IDL.Opt(LedgerSubaccount),
  });
  const LedgerFeatureFlags = IDL.Record({ 'icrc2' : IDL.Bool });
  const LedgerInitArg = IDL.Record({
    'decimals' : IDL.Opt(IDL.Nat8),
    'token_symbol' : IDL.Text,
    'transfer_fee' : IDL.Nat,
    'minting_account' : LedgerAccount,
    'initial_balances' : IDL.Vec(IDL.Tuple(LedgerAccount, IDL.Nat)),
    'maximum_number_of_accounts' : IDL.Opt(IDL.Nat64),
    'accounts_overflow_trim_quantity' : IDL.Opt(IDL.Nat64),
    'fee_collector_account' : IDL.Opt(LedgerAccount),
    'max_memo_length' : IDL.Opt(IDL.Nat16),
    'token_logo' : IDL.Text,
    'token_name' : IDL.Text,
    'feature_flags' : IDL.Opt(LedgerFeatureFlags),
  });
  const AddErc20Arg = IDL.Record({
    'contract' : Erc20Contract,
    'ledger_init_arg' : LedgerInitArg,
    'git_commit_hash' : IDL.Text,
    'ledger_compressed_wasm_hash' : IDL.Text,
    'index_compressed_wasm_hash' : IDL.Text,
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
  const OrchestratorInfo = IDL.Record({
    'cycles_management' : CyclesManagement,
    'managed_canisters' : IDL.Vec(ManagedCanisters),
    'more_controller_ids' : IDL.Vec(IDL.Principal),
    'minter_id' : IDL.Opt(IDL.Principal),
  });
  return IDL.Service({
    'canister_ids' : IDL.Func(
        [Erc20Contract],
        [IDL.Opt(ManagedCanisterIds)],
        ['query'],
      ),
    'get_orchestrator_info' : IDL.Func([], [OrchestratorInfo], ['query']),
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
  const LedgerSubaccount = IDL.Vec(IDL.Nat8);
  const LedgerAccount = IDL.Record({
    'owner' : IDL.Principal,
    'subaccount' : IDL.Opt(LedgerSubaccount),
  });
  const LedgerFeatureFlags = IDL.Record({ 'icrc2' : IDL.Bool });
  const LedgerInitArg = IDL.Record({
    'decimals' : IDL.Opt(IDL.Nat8),
    'token_symbol' : IDL.Text,
    'transfer_fee' : IDL.Nat,
    'minting_account' : LedgerAccount,
    'initial_balances' : IDL.Vec(IDL.Tuple(LedgerAccount, IDL.Nat)),
    'maximum_number_of_accounts' : IDL.Opt(IDL.Nat64),
    'accounts_overflow_trim_quantity' : IDL.Opt(IDL.Nat64),
    'fee_collector_account' : IDL.Opt(LedgerAccount),
    'max_memo_length' : IDL.Opt(IDL.Nat16),
    'token_logo' : IDL.Text,
    'token_name' : IDL.Text,
    'feature_flags' : IDL.Opt(LedgerFeatureFlags),
  });
  const AddErc20Arg = IDL.Record({
    'contract' : Erc20Contract,
    'ledger_init_arg' : LedgerInitArg,
    'git_commit_hash' : IDL.Text,
    'ledger_compressed_wasm_hash' : IDL.Text,
    'index_compressed_wasm_hash' : IDL.Text,
  });
  const OrchestratorArg = IDL.Variant({
    'UpgradeArg' : UpgradeArg,
    'InitArg' : InitArg,
    'AddErc20Arg' : AddErc20Arg,
  });
  return [OrchestratorArg];
};
