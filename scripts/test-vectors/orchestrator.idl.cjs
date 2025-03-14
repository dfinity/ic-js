const idlFactory = ({ IDL }) => {
  const Erc20Contract = IDL.Record({
    chain_id: IDL.Nat64,
    address: IDL.Text,
  });
  const ManagedCanisterIds = IDL.Record({
    ledger: IDL.Opt(IDL.Principal),
    index: IDL.Opt(IDL.Principal),
    archives: IDL.Vec(IDL.Principal),
  });
  const LogVisibility = IDL.Variant({
    controllers: IDL.Null,
    public: IDL.Null,
  });
  const DefiniteCanisterSettings = IDL.Record({
    freezing_threshold: IDL.Nat,
    controllers: IDL.Vec(IDL.Principal),
    reserved_cycles_limit: IDL.Nat,
    log_visibility: LogVisibility,
    wasm_memory_limit: IDL.Nat,
    memory_allocation: IDL.Nat,
    compute_allocation: IDL.Nat,
  });
  const QueryStats = IDL.Record({
    response_payload_bytes_total: IDL.Nat64,
    num_instructions_total: IDL.Nat64,
    num_calls_total: IDL.Nat64,
    request_payload_bytes_total: IDL.Nat64,
  });
  const CanisterStatusType = IDL.Variant({
    stopped: IDL.Null,
    stopping: IDL.Null,
    running: IDL.Null,
  });
  const CanisterStatusResponse = IDL.Record({
    status: CanisterStatusType,
    memory_size: IDL.Nat,
    cycles: IDL.Nat,
    settings: DefiniteCanisterSettings,
    query_stats: QueryStats,
    idle_cycles_burned_per_day: IDL.Nat,
    module_hash: IDL.Opt(IDL.Vec(IDL.Nat8)),
    reserved_cycles: IDL.Nat,
  });
  const ManagedCanisterStatus = IDL.Variant({
    Created: IDL.Record({ canister_id: IDL.Principal }),
    Installed: IDL.Record({
      canister_id: IDL.Principal,
      installed_wasm_hash: IDL.Text,
    }),
  });
  const ManagedCanisters = IDL.Record({
    erc20_contract: Erc20Contract,
    ledger: IDL.Opt(ManagedCanisterStatus),
    index: IDL.Opt(ManagedCanisterStatus),
    archives: IDL.Vec(IDL.Principal),
    ckerc20_token_symbol: IDL.Text,
  });
  const ManagedLedgerSuite = IDL.Record({
    token_symbol: IDL.Text,
    ledger: IDL.Opt(ManagedCanisterStatus),
    index: IDL.Opt(ManagedCanisterStatus),
    archives: IDL.Vec(IDL.Principal),
  });
  const CyclesManagement = IDL.Record({
    cycles_top_up_increment: IDL.Nat,
    cycles_for_ledger_creation: IDL.Nat,
    cycles_for_archive_creation: IDL.Nat,
    cycles_for_index_creation: IDL.Nat,
  });
  const LedgerSuiteVersion = IDL.Record({
    archive_compressed_wasm_hash: IDL.Text,
    ledger_compressed_wasm_hash: IDL.Text,
    index_compressed_wasm_hash: IDL.Text,
  });
  const OrchestratorInfo = IDL.Record({
    cycles_management: CyclesManagement,
    managed_canisters: IDL.Vec(ManagedCanisters),
    managed_pre_existing_ledger_suites: IDL.Opt(IDL.Vec(ManagedLedgerSuite)),
    more_controller_ids: IDL.Vec(IDL.Principal),
    ledger_suite_version: IDL.Opt(LedgerSuiteVersion),
    minter_id: IDL.Opt(IDL.Principal),
  });
  return IDL.Service({
    canister_ids: IDL.Func(
      [Erc20Contract],
      [IDL.Opt(ManagedCanisterIds)],
      ["query"],
    ),
    get_canister_status: IDL.Func([], [CanisterStatusResponse], []),
    get_orchestrator_info: IDL.Func([], [OrchestratorInfo], []),
  });
};

module.exports = { idlFactory };
