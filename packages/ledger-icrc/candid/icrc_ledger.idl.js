/* Do not edit.  Compiled with ./scripts/compile-idl-js from packages/ledger-icrc/candid/icrc_ledger.did */
export const idlFactory = ({ IDL }) => {
  const GetBlocksResult = IDL.Rec();
  const ICRC3Value = IDL.Rec();
  const Value = IDL.Rec();
  const ChangeArchiveOptions = IDL.Record({
    'num_blocks_to_archive' : IDL.Opt(IDL.Nat64),
    'max_transactions_per_response' : IDL.Opt(IDL.Nat64),
    'trigger_threshold' : IDL.Opt(IDL.Nat64),
    'more_controller_ids' : IDL.Opt(IDL.Vec(IDL.Principal)),
    'max_message_size_bytes' : IDL.Opt(IDL.Nat64),
    'cycles_for_archive_creation' : IDL.Opt(IDL.Nat64),
    'node_max_memory_size_bytes' : IDL.Opt(IDL.Nat64),
    'controller_id' : IDL.Opt(IDL.Principal),
  });
  const MetadataValue = IDL.Variant({
    'Int' : IDL.Int,
    'Nat' : IDL.Nat,
    'Blob' : IDL.Vec(IDL.Nat8),
    'Text' : IDL.Text,
  });
  const Subaccount = IDL.Vec(IDL.Nat8);
  const Account = IDL.Record({
    'owner' : IDL.Principal,
    'subaccount' : IDL.Opt(Subaccount),
  });
  const ChangeFeeCollector = IDL.Variant({
    'SetTo' : Account,
    'Unset' : IDL.Null,
  });
  const FeatureFlags = IDL.Record({ 'icrc2' : IDL.Bool });
  const UpgradeArgs = IDL.Record({
    'change_archive_options' : IDL.Opt(ChangeArchiveOptions),
    'token_symbol' : IDL.Opt(IDL.Text),
    'transfer_fee' : IDL.Opt(IDL.Nat),
    'metadata' : IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, MetadataValue))),
    'accounts_overflow_trim_quantity' : IDL.Opt(IDL.Nat64),
    'change_fee_collector' : IDL.Opt(ChangeFeeCollector),
    'max_memo_length' : IDL.Opt(IDL.Nat16),
    'token_name' : IDL.Opt(IDL.Text),
    'feature_flags' : IDL.Opt(FeatureFlags),
  });
  const InitArgs = IDL.Record({
    'decimals' : IDL.Opt(IDL.Nat8),
    'token_symbol' : IDL.Text,
    'transfer_fee' : IDL.Nat,
    'metadata' : IDL.Vec(IDL.Tuple(IDL.Text, MetadataValue)),
    'minting_account' : Account,
    'initial_balances' : IDL.Vec(IDL.Tuple(Account, IDL.Nat)),
    'maximum_number_of_accounts' : IDL.Opt(IDL.Nat64),
    'accounts_overflow_trim_quantity' : IDL.Opt(IDL.Nat64),
    'fee_collector_account' : IDL.Opt(Account),
    'archive_options' : IDL.Record({
      'num_blocks_to_archive' : IDL.Nat64,
      'max_transactions_per_response' : IDL.Opt(IDL.Nat64),
      'trigger_threshold' : IDL.Nat64,
      'more_controller_ids' : IDL.Opt(IDL.Vec(IDL.Principal)),
      'max_message_size_bytes' : IDL.Opt(IDL.Nat64),
      'cycles_for_archive_creation' : IDL.Opt(IDL.Nat64),
      'node_max_memory_size_bytes' : IDL.Opt(IDL.Nat64),
      'controller_id' : IDL.Principal,
    }),
    'max_memo_length' : IDL.Opt(IDL.Nat16),
    'token_name' : IDL.Text,
    'feature_flags' : IDL.Opt(FeatureFlags),
  });
  const LedgerArg = IDL.Variant({
    'Upgrade' : IDL.Opt(UpgradeArgs),
    'Init' : InitArgs,
  });
  const BlockIndex = IDL.Nat;
  const ArchiveInfo = IDL.Record({
    'block_range_end' : BlockIndex,
    'canister_id' : IDL.Principal,
    'block_range_start' : BlockIndex,
  });
  const GetBlocksArgs = IDL.Record({
    'start' : BlockIndex,
    'length' : IDL.Nat,
  });
  const Map = IDL.Vec(IDL.Tuple(IDL.Text, Value));
  Value.fill(
    IDL.Variant({
      'Int' : IDL.Int,
      'Map' : Map,
      'Nat' : IDL.Nat,
      'Nat64' : IDL.Nat64,
      'Blob' : IDL.Vec(IDL.Nat8),
      'Text' : IDL.Text,
      'Array' : IDL.Vec(Value),
    })
  );
  const Block = Value;
  const BlockRange = IDL.Record({ 'blocks' : IDL.Vec(Block) });
  const QueryBlockArchiveFn = IDL.Func(
      [GetBlocksArgs],
      [BlockRange],
      ['query'],
    );
  const GetBlocksResponse = IDL.Record({
    'certificate' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'first_index' : BlockIndex,
    'blocks' : IDL.Vec(Block),
    'chain_length' : IDL.Nat64,
    'archived_blocks' : IDL.Vec(
      IDL.Record({
        'callback' : QueryBlockArchiveFn,
        'start' : BlockIndex,
        'length' : IDL.Nat,
      })
    ),
  });
  const DataCertificate = IDL.Record({
    'certificate' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'hash_tree' : IDL.Vec(IDL.Nat8),
  });
  const TxIndex = IDL.Nat;
  const GetTransactionsRequest = IDL.Record({
    'start' : TxIndex,
    'length' : IDL.Nat,
  });
  const Timestamp = IDL.Nat64;
  const Burn = IDL.Record({
    'from' : Account,
    'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'created_at_time' : IDL.Opt(Timestamp),
    'amount' : IDL.Nat,
    'spender' : IDL.Opt(Account),
  });
  const Mint = IDL.Record({
    'to' : Account,
    'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'created_at_time' : IDL.Opt(Timestamp),
    'amount' : IDL.Nat,
  });
  const Approve = IDL.Record({
    'fee' : IDL.Opt(IDL.Nat),
    'from' : Account,
    'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'created_at_time' : IDL.Opt(Timestamp),
    'amount' : IDL.Nat,
    'expected_allowance' : IDL.Opt(IDL.Nat),
    'expires_at' : IDL.Opt(Timestamp),
    'spender' : Account,
  });
  const Transfer = IDL.Record({
    'to' : Account,
    'fee' : IDL.Opt(IDL.Nat),
    'from' : Account,
    'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'created_at_time' : IDL.Opt(Timestamp),
    'amount' : IDL.Nat,
    'spender' : IDL.Opt(Account),
  });
  const Transaction = IDL.Record({
    'burn' : IDL.Opt(Burn),
    'kind' : IDL.Text,
    'mint' : IDL.Opt(Mint),
    'approve' : IDL.Opt(Approve),
    'timestamp' : Timestamp,
    'transfer' : IDL.Opt(Transfer),
  });
  const TransactionRange = IDL.Record({
    'transactions' : IDL.Vec(Transaction),
  });
  const QueryArchiveFn = IDL.Func(
      [GetTransactionsRequest],
      [TransactionRange],
      ['query'],
    );
  const GetTransactionsResponse = IDL.Record({
    'first_index' : TxIndex,
    'log_length' : IDL.Nat,
    'transactions' : IDL.Vec(Transaction),
    'archived_transactions' : IDL.Vec(
      IDL.Record({
        'callback' : QueryArchiveFn,
        'start' : TxIndex,
        'length' : IDL.Nat,
      })
    ),
  });
  const Tokens = IDL.Nat;
  const StandardRecord = IDL.Record({ 'url' : IDL.Text, 'name' : IDL.Text });
  const TransferArg = IDL.Record({
    'to' : Account,
    'fee' : IDL.Opt(Tokens),
    'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'from_subaccount' : IDL.Opt(Subaccount),
    'created_at_time' : IDL.Opt(Timestamp),
    'amount' : Tokens,
  });
  const TransferError = IDL.Variant({
    'GenericError' : IDL.Record({
      'message' : IDL.Text,
      'error_code' : IDL.Nat,
    }),
    'TemporarilyUnavailable' : IDL.Null,
    'BadBurn' : IDL.Record({ 'min_burn_amount' : Tokens }),
    'Duplicate' : IDL.Record({ 'duplicate_of' : BlockIndex }),
    'BadFee' : IDL.Record({ 'expected_fee' : Tokens }),
    'CreatedInFuture' : IDL.Record({ 'ledger_time' : Timestamp }),
    'TooOld' : IDL.Null,
    'InsufficientFunds' : IDL.Record({ 'balance' : Tokens }),
  });
  const TransferResult = IDL.Variant({
    'Ok' : BlockIndex,
    'Err' : TransferError,
  });
  const icrc21_consent_message_metadata = IDL.Record({
    'utc_offset_minutes' : IDL.Opt(IDL.Int16),
    'language' : IDL.Text,
  });
  const icrc21_consent_message_spec = IDL.Record({
    'metadata' : icrc21_consent_message_metadata,
    'device_spec' : IDL.Opt(
      IDL.Variant({
        'GenericDisplay' : IDL.Null,
        'LineDisplay' : IDL.Record({
          'characters_per_line' : IDL.Nat16,
          'lines_per_page' : IDL.Nat16,
        }),
      })
    ),
  });
  const icrc21_consent_message_request = IDL.Record({
    'arg' : IDL.Vec(IDL.Nat8),
    'method' : IDL.Text,
    'user_preferences' : icrc21_consent_message_spec,
  });
  const icrc21_consent_message = IDL.Variant({
    'LineDisplayMessage' : IDL.Record({
      'pages' : IDL.Vec(IDL.Record({ 'lines' : IDL.Vec(IDL.Text) })),
    }),
    'GenericDisplayMessage' : IDL.Text,
  });
  const icrc21_consent_info = IDL.Record({
    'metadata' : icrc21_consent_message_metadata,
    'consent_message' : icrc21_consent_message,
  });
  const icrc21_error_info = IDL.Record({ 'description' : IDL.Text });
  const icrc21_error = IDL.Variant({
    'GenericError' : IDL.Record({
      'description' : IDL.Text,
      'error_code' : IDL.Nat,
    }),
    'InsufficientPayment' : icrc21_error_info,
    'UnsupportedCanisterCall' : icrc21_error_info,
    'ConsentMessageUnavailable' : icrc21_error_info,
  });
  const icrc21_consent_message_response = IDL.Variant({
    'Ok' : icrc21_consent_info,
    'Err' : icrc21_error,
  });
  const AllowanceArgs = IDL.Record({
    'account' : Account,
    'spender' : Account,
  });
  const Allowance = IDL.Record({
    'allowance' : IDL.Nat,
    'expires_at' : IDL.Opt(Timestamp),
  });
  const ApproveArgs = IDL.Record({
    'fee' : IDL.Opt(IDL.Nat),
    'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'from_subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'created_at_time' : IDL.Opt(Timestamp),
    'amount' : IDL.Nat,
    'expected_allowance' : IDL.Opt(IDL.Nat),
    'expires_at' : IDL.Opt(Timestamp),
    'spender' : Account,
  });
  const ApproveError = IDL.Variant({
    'GenericError' : IDL.Record({
      'message' : IDL.Text,
      'error_code' : IDL.Nat,
    }),
    'TemporarilyUnavailable' : IDL.Null,
    'Duplicate' : IDL.Record({ 'duplicate_of' : BlockIndex }),
    'BadFee' : IDL.Record({ 'expected_fee' : IDL.Nat }),
    'AllowanceChanged' : IDL.Record({ 'current_allowance' : IDL.Nat }),
    'CreatedInFuture' : IDL.Record({ 'ledger_time' : Timestamp }),
    'TooOld' : IDL.Null,
    'Expired' : IDL.Record({ 'ledger_time' : Timestamp }),
    'InsufficientFunds' : IDL.Record({ 'balance' : IDL.Nat }),
  });
  const ApproveResult = IDL.Variant({
    'Ok' : BlockIndex,
    'Err' : ApproveError,
  });
  const TransferFromArgs = IDL.Record({
    'to' : Account,
    'fee' : IDL.Opt(Tokens),
    'spender_subaccount' : IDL.Opt(Subaccount),
    'from' : Account,
    'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'created_at_time' : IDL.Opt(Timestamp),
    'amount' : Tokens,
  });
  const TransferFromError = IDL.Variant({
    'GenericError' : IDL.Record({
      'message' : IDL.Text,
      'error_code' : IDL.Nat,
    }),
    'TemporarilyUnavailable' : IDL.Null,
    'InsufficientAllowance' : IDL.Record({ 'allowance' : Tokens }),
    'BadBurn' : IDL.Record({ 'min_burn_amount' : Tokens }),
    'Duplicate' : IDL.Record({ 'duplicate_of' : BlockIndex }),
    'BadFee' : IDL.Record({ 'expected_fee' : Tokens }),
    'CreatedInFuture' : IDL.Record({ 'ledger_time' : Timestamp }),
    'TooOld' : IDL.Null,
    'InsufficientFunds' : IDL.Record({ 'balance' : Tokens }),
  });
  const TransferFromResult = IDL.Variant({
    'Ok' : BlockIndex,
    'Err' : TransferFromError,
  });
  const GetArchivesArgs = IDL.Record({ 'from' : IDL.Opt(IDL.Principal) });
  const GetArchivesResult = IDL.Vec(
    IDL.Record({
      'end' : IDL.Nat,
      'canister_id' : IDL.Principal,
      'start' : IDL.Nat,
    })
  );
  ICRC3Value.fill(
    IDL.Variant({
      'Int' : IDL.Int,
      'Map' : IDL.Vec(IDL.Tuple(IDL.Text, ICRC3Value)),
      'Nat' : IDL.Nat,
      'Blob' : IDL.Vec(IDL.Nat8),
      'Text' : IDL.Text,
      'Array' : IDL.Vec(ICRC3Value),
    })
  );
  GetBlocksResult.fill(
    IDL.Record({
      'log_length' : IDL.Nat,
      'blocks' : IDL.Vec(IDL.Record({ 'id' : IDL.Nat, 'block' : ICRC3Value })),
      'archived_blocks' : IDL.Vec(
        IDL.Record({
          'args' : IDL.Vec(GetBlocksArgs),
          'callback' : IDL.Func(
              [IDL.Vec(GetBlocksArgs)],
              [GetBlocksResult],
              ['query'],
            ),
        })
      ),
    })
  );
  const ICRC3DataCertificate = IDL.Record({
    'certificate' : IDL.Vec(IDL.Nat8),
    'hash_tree' : IDL.Vec(IDL.Nat8),
  });
  return IDL.Service({
    'archives' : IDL.Func([], [IDL.Vec(ArchiveInfo)], ['query']),
    'get_blocks' : IDL.Func([GetBlocksArgs], [GetBlocksResponse], ['query']),
    'get_data_certificate' : IDL.Func([], [DataCertificate], ['query']),
    'get_transactions' : IDL.Func(
        [GetTransactionsRequest],
        [GetTransactionsResponse],
        ['query'],
      ),
    'icrc10_supported_standards' : IDL.Func(
        [],
        [IDL.Vec(IDL.Record({ 'url' : IDL.Text, 'name' : IDL.Text }))],
        ['query'],
      ),
    'icrc1_balance_of' : IDL.Func([Account], [Tokens], ['query']),
    'icrc1_decimals' : IDL.Func([], [IDL.Nat8], ['query']),
    'icrc1_fee' : IDL.Func([], [Tokens], ['query']),
    'icrc1_metadata' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, MetadataValue))],
        ['query'],
      ),
    'icrc1_minting_account' : IDL.Func([], [IDL.Opt(Account)], ['query']),
    'icrc1_name' : IDL.Func([], [IDL.Text], ['query']),
    'icrc1_supported_standards' : IDL.Func(
        [],
        [IDL.Vec(StandardRecord)],
        ['query'],
      ),
    'icrc1_symbol' : IDL.Func([], [IDL.Text], ['query']),
    'icrc1_total_supply' : IDL.Func([], [Tokens], ['query']),
    'icrc1_transfer' : IDL.Func([TransferArg], [TransferResult], []),
    'icrc21_canister_call_consent_message' : IDL.Func(
        [icrc21_consent_message_request],
        [icrc21_consent_message_response],
        [],
      ),
    'icrc2_allowance' : IDL.Func([AllowanceArgs], [Allowance], ['query']),
    'icrc2_approve' : IDL.Func([ApproveArgs], [ApproveResult], []),
    'icrc2_transfer_from' : IDL.Func(
        [TransferFromArgs],
        [TransferFromResult],
        [],
      ),
    'icrc3_get_archives' : IDL.Func(
        [GetArchivesArgs],
        [GetArchivesResult],
        ['query'],
      ),
    'icrc3_get_blocks' : IDL.Func(
        [IDL.Vec(GetBlocksArgs)],
        [GetBlocksResult],
        ['query'],
      ),
    'icrc3_get_tip_certificate' : IDL.Func(
        [],
        [IDL.Opt(ICRC3DataCertificate)],
        ['query'],
      ),
    'icrc3_supported_block_types' : IDL.Func(
        [],
        [IDL.Vec(IDL.Record({ 'url' : IDL.Text, 'block_type' : IDL.Text }))],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => {
  const ChangeArchiveOptions = IDL.Record({
    'num_blocks_to_archive' : IDL.Opt(IDL.Nat64),
    'max_transactions_per_response' : IDL.Opt(IDL.Nat64),
    'trigger_threshold' : IDL.Opt(IDL.Nat64),
    'more_controller_ids' : IDL.Opt(IDL.Vec(IDL.Principal)),
    'max_message_size_bytes' : IDL.Opt(IDL.Nat64),
    'cycles_for_archive_creation' : IDL.Opt(IDL.Nat64),
    'node_max_memory_size_bytes' : IDL.Opt(IDL.Nat64),
    'controller_id' : IDL.Opt(IDL.Principal),
  });
  const MetadataValue = IDL.Variant({
    'Int' : IDL.Int,
    'Nat' : IDL.Nat,
    'Blob' : IDL.Vec(IDL.Nat8),
    'Text' : IDL.Text,
  });
  const Subaccount = IDL.Vec(IDL.Nat8);
  const Account = IDL.Record({
    'owner' : IDL.Principal,
    'subaccount' : IDL.Opt(Subaccount),
  });
  const ChangeFeeCollector = IDL.Variant({
    'SetTo' : Account,
    'Unset' : IDL.Null,
  });
  const FeatureFlags = IDL.Record({ 'icrc2' : IDL.Bool });
  const UpgradeArgs = IDL.Record({
    'change_archive_options' : IDL.Opt(ChangeArchiveOptions),
    'token_symbol' : IDL.Opt(IDL.Text),
    'transfer_fee' : IDL.Opt(IDL.Nat),
    'metadata' : IDL.Opt(IDL.Vec(IDL.Tuple(IDL.Text, MetadataValue))),
    'accounts_overflow_trim_quantity' : IDL.Opt(IDL.Nat64),
    'change_fee_collector' : IDL.Opt(ChangeFeeCollector),
    'max_memo_length' : IDL.Opt(IDL.Nat16),
    'token_name' : IDL.Opt(IDL.Text),
    'feature_flags' : IDL.Opt(FeatureFlags),
  });
  const InitArgs = IDL.Record({
    'decimals' : IDL.Opt(IDL.Nat8),
    'token_symbol' : IDL.Text,
    'transfer_fee' : IDL.Nat,
    'metadata' : IDL.Vec(IDL.Tuple(IDL.Text, MetadataValue)),
    'minting_account' : Account,
    'initial_balances' : IDL.Vec(IDL.Tuple(Account, IDL.Nat)),
    'maximum_number_of_accounts' : IDL.Opt(IDL.Nat64),
    'accounts_overflow_trim_quantity' : IDL.Opt(IDL.Nat64),
    'fee_collector_account' : IDL.Opt(Account),
    'archive_options' : IDL.Record({
      'num_blocks_to_archive' : IDL.Nat64,
      'max_transactions_per_response' : IDL.Opt(IDL.Nat64),
      'trigger_threshold' : IDL.Nat64,
      'more_controller_ids' : IDL.Opt(IDL.Vec(IDL.Principal)),
      'max_message_size_bytes' : IDL.Opt(IDL.Nat64),
      'cycles_for_archive_creation' : IDL.Opt(IDL.Nat64),
      'node_max_memory_size_bytes' : IDL.Opt(IDL.Nat64),
      'controller_id' : IDL.Principal,
    }),
    'max_memo_length' : IDL.Opt(IDL.Nat16),
    'token_name' : IDL.Text,
    'feature_flags' : IDL.Opt(FeatureFlags),
  });
  const LedgerArg = IDL.Variant({
    'Upgrade' : IDL.Opt(UpgradeArgs),
    'Init' : InitArgs,
  });
  return [LedgerArg];
};
