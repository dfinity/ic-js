/* Do not edit.  Compiled with ./scripts/compile-idl-js from packages/ckbtc/candid/minter.did */
export const idlFactory = ({ IDL }) => {
  const Mode = IDL.Variant({
    'RestrictedTo' : IDL.Vec(IDL.Principal),
    'DepositsRestrictedTo' : IDL.Vec(IDL.Principal),
    'ReadOnly' : IDL.Null,
    'GeneralAvailability' : IDL.Null,
  });
  const UpgradeArgs = IDL.Record({
    'kyt_principal' : IDL.Opt(IDL.Principal),
    'mode' : IDL.Opt(Mode),
    'retrieve_btc_min_amount' : IDL.Opt(IDL.Nat64),
    'max_time_in_queue_nanos' : IDL.Opt(IDL.Nat64),
    'check_fee' : IDL.Opt(IDL.Nat64),
    'btc_checker_principal' : IDL.Opt(IDL.Principal),
    'min_confirmations' : IDL.Opt(IDL.Nat32),
    'kyt_fee' : IDL.Opt(IDL.Nat64),
  });
  const BtcNetwork = IDL.Variant({
    'Mainnet' : IDL.Null,
    'Regtest' : IDL.Null,
    'Testnet' : IDL.Null,
  });
  const InitArgs = IDL.Record({
    'kyt_principal' : IDL.Opt(IDL.Principal),
    'ecdsa_key_name' : IDL.Text,
    'mode' : Mode,
    'retrieve_btc_min_amount' : IDL.Nat64,
    'ledger_id' : IDL.Principal,
    'max_time_in_queue_nanos' : IDL.Nat64,
    'btc_network' : BtcNetwork,
    'check_fee' : IDL.Opt(IDL.Nat64),
    'btc_checker_principal' : IDL.Opt(IDL.Principal),
    'min_confirmations' : IDL.Opt(IDL.Nat32),
    'kyt_fee' : IDL.Opt(IDL.Nat64),
  });
  const MinterArg = IDL.Variant({
    'Upgrade' : IDL.Opt(UpgradeArgs),
    'Init' : InitArgs,
  });
  const CanisterStatusType = IDL.Variant({
    'stopped' : IDL.Null,
    'stopping' : IDL.Null,
    'running' : IDL.Null,
  });
  const LogVisibility = IDL.Variant({
    'controllers' : IDL.Null,
    'public' : IDL.Null,
  });
  const DefiniteCanisterSettings = IDL.Record({
    'freezing_threshold' : IDL.Nat,
    'controllers' : IDL.Vec(IDL.Principal),
    'reserved_cycles_limit' : IDL.Nat,
    'log_visibility' : LogVisibility,
    'wasm_memory_limit' : IDL.Nat,
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
  const Account = IDL.Record({
    'owner' : IDL.Principal,
    'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const Utxo = IDL.Record({
    'height' : IDL.Nat32,
    'value' : IDL.Nat64,
    'outpoint' : IDL.Record({ 'txid' : IDL.Vec(IDL.Nat8), 'vout' : IDL.Nat32 }),
  });
  const ReimbursementReason = IDL.Variant({
    'CallFailed' : IDL.Null,
    'TaintedDestination' : IDL.Record({
      'kyt_fee' : IDL.Nat64,
      'kyt_provider' : IDL.Principal,
    }),
  });
  const SuspendedReason = IDL.Variant({
    'ValueTooSmall' : IDL.Null,
    'Quarantined' : IDL.Null,
  });
  const BitcoinAddress = IDL.Variant({
    'p2wsh_v0' : IDL.Vec(IDL.Nat8),
    'p2tr_v1' : IDL.Vec(IDL.Nat8),
    'p2sh' : IDL.Vec(IDL.Nat8),
    'p2wpkh_v0' : IDL.Vec(IDL.Nat8),
    'p2pkh' : IDL.Vec(IDL.Nat8),
  });
  const EventType = IDL.Variant({
    'received_utxos' : IDL.Record({
      'to_account' : Account,
      'mint_txid' : IDL.Opt(IDL.Nat64),
      'utxos' : IDL.Vec(Utxo),
    }),
    'schedule_deposit_reimbursement' : IDL.Record({
      'burn_block_index' : IDL.Nat64,
      'account' : Account,
      'amount' : IDL.Nat64,
      'reason' : ReimbursementReason,
    }),
    'sent_transaction' : IDL.Record({
      'fee' : IDL.Opt(IDL.Nat64),
      'change_output' : IDL.Opt(
        IDL.Record({ 'value' : IDL.Nat64, 'vout' : IDL.Nat32 })
      ),
      'txid' : IDL.Vec(IDL.Nat8),
      'utxos' : IDL.Vec(Utxo),
      'requests' : IDL.Vec(IDL.Nat64),
      'submitted_at' : IDL.Nat64,
    }),
    'distributed_kyt_fee' : IDL.Record({
      'block_index' : IDL.Nat64,
      'amount' : IDL.Nat64,
      'kyt_provider' : IDL.Principal,
    }),
    'init' : InitArgs,
    'upgrade' : UpgradeArgs,
    'retrieve_btc_kyt_failed' : IDL.Record({
      'block_index' : IDL.Nat64,
      'owner' : IDL.Principal,
      'uuid' : IDL.Text,
      'address' : IDL.Text,
      'amount' : IDL.Nat64,
      'kyt_provider' : IDL.Principal,
    }),
    'suspended_utxo' : IDL.Record({
      'utxo' : Utxo,
      'account' : Account,
      'reason' : SuspendedReason,
    }),
    'accepted_retrieve_btc_request' : IDL.Record({
      'received_at' : IDL.Nat64,
      'block_index' : IDL.Nat64,
      'address' : BitcoinAddress,
      'reimbursement_account' : IDL.Opt(Account),
      'amount' : IDL.Nat64,
      'kyt_provider' : IDL.Opt(IDL.Principal),
    }),
    'checked_utxo' : IDL.Record({
      'clean' : IDL.Bool,
      'utxo' : Utxo,
      'uuid' : IDL.Text,
      'kyt_provider' : IDL.Opt(IDL.Principal),
    }),
    'removed_retrieve_btc_request' : IDL.Record({ 'block_index' : IDL.Nat64 }),
    'confirmed_transaction' : IDL.Record({ 'txid' : IDL.Vec(IDL.Nat8) }),
    'replaced_transaction' : IDL.Record({
      'fee' : IDL.Nat64,
      'change_output' : IDL.Record({ 'value' : IDL.Nat64, 'vout' : IDL.Nat32 }),
      'old_txid' : IDL.Vec(IDL.Nat8),
      'new_txid' : IDL.Vec(IDL.Nat8),
      'submitted_at' : IDL.Nat64,
    }),
    'checked_utxo_v2' : IDL.Record({ 'utxo' : Utxo, 'account' : Account }),
    'ignored_utxo' : IDL.Record({ 'utxo' : Utxo }),
    'reimbursed_failed_deposit' : IDL.Record({
      'burn_block_index' : IDL.Nat64,
      'mint_block_index' : IDL.Nat64,
    }),
  });
  const Event = IDL.Record({
    'timestamp' : IDL.Opt(IDL.Nat64),
    'payload' : EventType,
  });
  const MinterInfo = IDL.Record({
    'retrieve_btc_min_amount' : IDL.Nat64,
    'min_confirmations' : IDL.Nat32,
    'kyt_fee' : IDL.Nat64,
  });
  const RetrieveBtcArgs = IDL.Record({
    'address' : IDL.Text,
    'amount' : IDL.Nat64,
  });
  const RetrieveBtcOk = IDL.Record({ 'block_index' : IDL.Nat64 });
  const RetrieveBtcError = IDL.Variant({
    'MalformedAddress' : IDL.Text,
    'GenericError' : IDL.Record({
      'error_message' : IDL.Text,
      'error_code' : IDL.Nat64,
    }),
    'TemporarilyUnavailable' : IDL.Text,
    'AlreadyProcessing' : IDL.Null,
    'AmountTooLow' : IDL.Nat64,
    'InsufficientFunds' : IDL.Record({ 'balance' : IDL.Nat64 }),
  });
  const RetrieveBtcStatus = IDL.Variant({
    'Signing' : IDL.Null,
    'Confirmed' : IDL.Record({ 'txid' : IDL.Vec(IDL.Nat8) }),
    'Sending' : IDL.Record({ 'txid' : IDL.Vec(IDL.Nat8) }),
    'AmountTooLow' : IDL.Null,
    'Unknown' : IDL.Null,
    'Submitted' : IDL.Record({ 'txid' : IDL.Vec(IDL.Nat8) }),
    'Pending' : IDL.Null,
  });
  const ReimbursementRequest = IDL.Record({
    'account' : Account,
    'amount' : IDL.Nat64,
    'reason' : ReimbursementReason,
  });
  const ReimbursedDeposit = IDL.Record({
    'account' : Account,
    'mint_block_index' : IDL.Nat64,
    'amount' : IDL.Nat64,
    'reason' : ReimbursementReason,
  });
  const RetrieveBtcStatusV2 = IDL.Variant({
    'Signing' : IDL.Null,
    'Confirmed' : IDL.Record({ 'txid' : IDL.Vec(IDL.Nat8) }),
    'Sending' : IDL.Record({ 'txid' : IDL.Vec(IDL.Nat8) }),
    'AmountTooLow' : IDL.Null,
    'WillReimburse' : ReimbursementRequest,
    'Unknown' : IDL.Null,
    'Submitted' : IDL.Record({ 'txid' : IDL.Vec(IDL.Nat8) }),
    'Reimbursed' : ReimbursedDeposit,
    'Pending' : IDL.Null,
  });
  const RetrieveBtcWithApprovalArgs = IDL.Record({
    'from_subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'address' : IDL.Text,
    'amount' : IDL.Nat64,
  });
  const RetrieveBtcWithApprovalError = IDL.Variant({
    'MalformedAddress' : IDL.Text,
    'GenericError' : IDL.Record({
      'error_message' : IDL.Text,
      'error_code' : IDL.Nat64,
    }),
    'TemporarilyUnavailable' : IDL.Text,
    'InsufficientAllowance' : IDL.Record({ 'allowance' : IDL.Nat64 }),
    'AlreadyProcessing' : IDL.Null,
    'AmountTooLow' : IDL.Nat64,
    'InsufficientFunds' : IDL.Record({ 'balance' : IDL.Nat64 }),
  });
  const UtxoStatus = IDL.Variant({
    'ValueTooSmall' : Utxo,
    'Tainted' : Utxo,
    'Minted' : IDL.Record({
      'minted_amount' : IDL.Nat64,
      'block_index' : IDL.Nat64,
      'utxo' : Utxo,
    }),
    'Checked' : Utxo,
  });
  const Timestamp = IDL.Nat64;
  const SuspendedUtxo = IDL.Record({
    'utxo' : Utxo,
    'earliest_retry' : Timestamp,
    'reason' : SuspendedReason,
  });
  const PendingUtxo = IDL.Record({
    'confirmations' : IDL.Nat32,
    'value' : IDL.Nat64,
    'outpoint' : IDL.Record({ 'txid' : IDL.Vec(IDL.Nat8), 'vout' : IDL.Nat32 }),
  });
  const UpdateBalanceError = IDL.Variant({
    'GenericError' : IDL.Record({
      'error_message' : IDL.Text,
      'error_code' : IDL.Nat64,
    }),
    'TemporarilyUnavailable' : IDL.Text,
    'AlreadyProcessing' : IDL.Null,
    'NoNewUtxos' : IDL.Record({
      'suspended_utxos' : IDL.Opt(IDL.Vec(SuspendedUtxo)),
      'required_confirmations' : IDL.Nat32,
      'pending_utxos' : IDL.Opt(IDL.Vec(PendingUtxo)),
      'current_confirmations' : IDL.Opt(IDL.Nat32),
    }),
  });
  return IDL.Service({
    'estimate_withdrawal_fee' : IDL.Func(
        [IDL.Record({ 'amount' : IDL.Opt(IDL.Nat64) })],
        [IDL.Record({ 'minter_fee' : IDL.Nat64, 'bitcoin_fee' : IDL.Nat64 })],
        ['query'],
      ),
    'get_btc_address' : IDL.Func(
        [
          IDL.Record({
            'owner' : IDL.Opt(IDL.Principal),
            'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
          }),
        ],
        [IDL.Text],
        [],
      ),
    'get_canister_status' : IDL.Func([], [CanisterStatusResponse], []),
    'get_deposit_fee' : IDL.Func([], [IDL.Nat64], ['query']),
    'get_events' : IDL.Func(
        [IDL.Record({ 'start' : IDL.Nat64, 'length' : IDL.Nat64 })],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'get_known_utxos' : IDL.Func(
        [
          IDL.Record({
            'owner' : IDL.Opt(IDL.Principal),
            'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
          }),
        ],
        [IDL.Vec(Utxo)],
        ['query'],
      ),
    'get_minter_info' : IDL.Func([], [MinterInfo], ['query']),
    'get_withdrawal_account' : IDL.Func([], [Account], []),
    'retrieve_btc' : IDL.Func(
        [RetrieveBtcArgs],
        [IDL.Variant({ 'Ok' : RetrieveBtcOk, 'Err' : RetrieveBtcError })],
        [],
      ),
    'retrieve_btc_status' : IDL.Func(
        [IDL.Record({ 'block_index' : IDL.Nat64 })],
        [RetrieveBtcStatus],
        ['query'],
      ),
    'retrieve_btc_status_v2' : IDL.Func(
        [IDL.Record({ 'block_index' : IDL.Nat64 })],
        [RetrieveBtcStatusV2],
        ['query'],
      ),
    'retrieve_btc_status_v2_by_account' : IDL.Func(
        [IDL.Opt(Account)],
        [
          IDL.Vec(
            IDL.Record({
              'block_index' : IDL.Nat64,
              'status_v2' : IDL.Opt(RetrieveBtcStatusV2),
            })
          ),
        ],
        ['query'],
      ),
    'retrieve_btc_with_approval' : IDL.Func(
        [RetrieveBtcWithApprovalArgs],
        [
          IDL.Variant({
            'Ok' : RetrieveBtcOk,
            'Err' : RetrieveBtcWithApprovalError,
          }),
        ],
        [],
      ),
    'update_balance' : IDL.Func(
        [
          IDL.Record({
            'owner' : IDL.Opt(IDL.Principal),
            'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
          }),
        ],
        [
          IDL.Variant({
            'Ok' : IDL.Vec(UtxoStatus),
            'Err' : UpdateBalanceError,
          }),
        ],
        [],
      ),
  });
};
export const init = ({ IDL }) => {
  const Mode = IDL.Variant({
    'RestrictedTo' : IDL.Vec(IDL.Principal),
    'DepositsRestrictedTo' : IDL.Vec(IDL.Principal),
    'ReadOnly' : IDL.Null,
    'GeneralAvailability' : IDL.Null,
  });
  const UpgradeArgs = IDL.Record({
    'kyt_principal' : IDL.Opt(IDL.Principal),
    'mode' : IDL.Opt(Mode),
    'retrieve_btc_min_amount' : IDL.Opt(IDL.Nat64),
    'max_time_in_queue_nanos' : IDL.Opt(IDL.Nat64),
    'check_fee' : IDL.Opt(IDL.Nat64),
    'btc_checker_principal' : IDL.Opt(IDL.Principal),
    'min_confirmations' : IDL.Opt(IDL.Nat32),
    'kyt_fee' : IDL.Opt(IDL.Nat64),
  });
  const BtcNetwork = IDL.Variant({
    'Mainnet' : IDL.Null,
    'Regtest' : IDL.Null,
    'Testnet' : IDL.Null,
  });
  const InitArgs = IDL.Record({
    'kyt_principal' : IDL.Opt(IDL.Principal),
    'ecdsa_key_name' : IDL.Text,
    'mode' : Mode,
    'retrieve_btc_min_amount' : IDL.Nat64,
    'ledger_id' : IDL.Principal,
    'max_time_in_queue_nanos' : IDL.Nat64,
    'btc_network' : BtcNetwork,
    'check_fee' : IDL.Opt(IDL.Nat64),
    'btc_checker_principal' : IDL.Opt(IDL.Principal),
    'min_confirmations' : IDL.Opt(IDL.Nat32),
    'kyt_fee' : IDL.Opt(IDL.Nat64),
  });
  const MinterArg = IDL.Variant({
    'Upgrade' : IDL.Opt(UpgradeArgs),
    'Init' : InitArgs,
  });
  return [MinterArg];
};
