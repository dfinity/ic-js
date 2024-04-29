/* Do not edit.  Compiled with ./scripts/compile-idl-js from packages/cketh/candid/minter.did */
export const idlFactory = ({ IDL }) => {
  const BlockTag = IDL.Variant({
    'Safe' : IDL.Null,
    'Finalized' : IDL.Null,
    'Latest' : IDL.Null,
  });
  const UpgradeArg = IDL.Record({
    'next_transaction_nonce' : IDL.Opt(IDL.Nat),
    'ledger_suite_orchestrator_id' : IDL.Opt(IDL.Principal),
    'erc20_helper_contract_address' : IDL.Opt(IDL.Text),
    'last_erc20_scraped_block_number' : IDL.Opt(IDL.Nat),
    'ethereum_contract_address' : IDL.Opt(IDL.Text),
    'minimum_withdrawal_amount' : IDL.Opt(IDL.Nat),
    'ethereum_block_height' : IDL.Opt(BlockTag),
  });
  const EthereumNetwork = IDL.Variant({
    'Mainnet' : IDL.Null,
    'Sepolia' : IDL.Null,
  });
  const InitArg = IDL.Record({
    'ethereum_network' : EthereumNetwork,
    'last_scraped_block_number' : IDL.Nat,
    'ecdsa_key_name' : IDL.Text,
    'next_transaction_nonce' : IDL.Nat,
    'ledger_id' : IDL.Principal,
    'ethereum_contract_address' : IDL.Opt(IDL.Text),
    'minimum_withdrawal_amount' : IDL.Nat,
    'ethereum_block_height' : BlockTag,
  });
  const MinterArg = IDL.Variant({
    'UpgradeArg' : UpgradeArg,
    'InitArg' : InitArg,
  });
  const AddCkErc20Token = IDL.Record({
    'ckerc20_ledger_id' : IDL.Principal,
    'chain_id' : IDL.Nat,
    'address' : IDL.Text,
    'ckerc20_token_symbol' : IDL.Text,
  });
  const Eip1559TransactionPrice = IDL.Record({
    'max_priority_fee_per_gas' : IDL.Nat,
    'max_fee_per_gas' : IDL.Nat,
    'max_transaction_fee' : IDL.Nat,
    'timestamp' : IDL.Opt(IDL.Nat64),
    'gas_limit' : IDL.Nat,
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
  const EventSource = IDL.Record({
    'transaction_hash' : IDL.Text,
    'log_index' : IDL.Nat,
  });
  const UnsignedTransaction = IDL.Record({
    'destination' : IDL.Text,
    'value' : IDL.Nat,
    'max_priority_fee_per_gas' : IDL.Nat,
    'data' : IDL.Vec(IDL.Nat8),
    'max_fee_per_gas' : IDL.Nat,
    'chain_id' : IDL.Nat,
    'nonce' : IDL.Nat,
    'gas_limit' : IDL.Nat,
    'access_list' : IDL.Vec(
      IDL.Record({
        'storage_keys' : IDL.Vec(IDL.Vec(IDL.Nat8)),
        'address' : IDL.Text,
      })
    ),
  });
  const ReimbursementIndex = IDL.Variant({
    'CkErc20' : IDL.Record({
      'cketh_ledger_burn_index' : IDL.Nat,
      'ledger_id' : IDL.Principal,
      'ckerc20_ledger_burn_index' : IDL.Nat,
    }),
    'CkEth' : IDL.Record({ 'ledger_burn_index' : IDL.Nat }),
  });
  const TransactionReceipt = IDL.Record({
    'effective_gas_price' : IDL.Nat,
    'status' : IDL.Variant({ 'Success' : IDL.Null, 'Failure' : IDL.Null }),
    'transaction_hash' : IDL.Text,
    'block_hash' : IDL.Text,
    'block_number' : IDL.Nat,
    'gas_used' : IDL.Nat,
  });
  const Event = IDL.Record({
    'timestamp' : IDL.Nat64,
    'payload' : IDL.Variant({
      'SkippedBlock' : IDL.Record({ 'block_number' : IDL.Nat }),
      'AcceptedErc20Deposit' : IDL.Record({
        'principal' : IDL.Principal,
        'transaction_hash' : IDL.Text,
        'value' : IDL.Nat,
        'log_index' : IDL.Nat,
        'block_number' : IDL.Nat,
        'erc20_contract_address' : IDL.Text,
        'from_address' : IDL.Text,
      }),
      'SignedTransaction' : IDL.Record({
        'raw_transaction' : IDL.Text,
        'withdrawal_id' : IDL.Nat,
      }),
      'Upgrade' : UpgradeArg,
      'Init' : InitArg,
      'AddedCkErc20Token' : IDL.Record({
        'ckerc20_ledger_id' : IDL.Principal,
        'chain_id' : IDL.Nat,
        'address' : IDL.Text,
        'ckerc20_token_symbol' : IDL.Text,
      }),
      'QuarantinedDeposit' : IDL.Record({ 'event_source' : EventSource }),
      'SyncedToBlock' : IDL.Record({ 'block_number' : IDL.Nat }),
      'AcceptedDeposit' : IDL.Record({
        'principal' : IDL.Principal,
        'transaction_hash' : IDL.Text,
        'value' : IDL.Nat,
        'log_index' : IDL.Nat,
        'block_number' : IDL.Nat,
        'from_address' : IDL.Text,
      }),
      'ReplacedTransaction' : IDL.Record({
        'withdrawal_id' : IDL.Nat,
        'transaction' : UnsignedTransaction,
      }),
      'QuarantinedReimbursement' : IDL.Record({ 'index' : ReimbursementIndex }),
      'MintedCkEth' : IDL.Record({
        'event_source' : EventSource,
        'mint_block_index' : IDL.Nat,
      }),
      'ReimbursedEthWithdrawal' : IDL.Record({
        'transaction_hash' : IDL.Opt(IDL.Text),
        'withdrawal_id' : IDL.Nat,
        'reimbursed_amount' : IDL.Nat,
        'reimbursed_in_block' : IDL.Nat,
      }),
      'FailedErc20WithdrawalRequest' : IDL.Record({
        'to' : IDL.Principal,
        'withdrawal_id' : IDL.Nat,
        'reimbursed_amount' : IDL.Nat,
        'to_subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
      }),
      'ReimbursedErc20Withdrawal' : IDL.Record({
        'burn_in_block' : IDL.Nat,
        'transaction_hash' : IDL.Opt(IDL.Text),
        'withdrawal_id' : IDL.Nat,
        'reimbursed_amount' : IDL.Nat,
        'ledger_id' : IDL.Principal,
        'reimbursed_in_block' : IDL.Nat,
      }),
      'MintedCkErc20' : IDL.Record({
        'event_source' : EventSource,
        'erc20_contract_address' : IDL.Text,
        'mint_block_index' : IDL.Nat,
        'ckerc20_token_symbol' : IDL.Text,
      }),
      'CreatedTransaction' : IDL.Record({
        'withdrawal_id' : IDL.Nat,
        'transaction' : UnsignedTransaction,
      }),
      'InvalidDeposit' : IDL.Record({
        'event_source' : EventSource,
        'reason' : IDL.Text,
      }),
      'SyncedErc20ToBlock' : IDL.Record({ 'block_number' : IDL.Nat }),
      'AcceptedErc20WithdrawalRequest' : IDL.Record({
        'cketh_ledger_burn_index' : IDL.Nat,
        'destination' : IDL.Text,
        'ckerc20_ledger_id' : IDL.Principal,
        'withdrawal_amount' : IDL.Nat,
        'from' : IDL.Principal,
        'created_at' : IDL.Nat64,
        'from_subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
        'erc20_contract_address' : IDL.Text,
        'ckerc20_ledger_burn_index' : IDL.Nat,
        'max_transaction_fee' : IDL.Nat,
      }),
      'AcceptedEthWithdrawalRequest' : IDL.Record({
        'ledger_burn_index' : IDL.Nat,
        'destination' : IDL.Text,
        'withdrawal_amount' : IDL.Nat,
        'from' : IDL.Principal,
        'created_at' : IDL.Opt(IDL.Nat64),
        'from_subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
      }),
      'FinalizedTransaction' : IDL.Record({
        'withdrawal_id' : IDL.Nat,
        'transaction_receipt' : TransactionReceipt,
      }),
    }),
  });
  const CkErc20Token = IDL.Record({
    'erc20_contract_address' : IDL.Text,
    'ledger_canister_id' : IDL.Principal,
    'ckerc20_token_symbol' : IDL.Text,
  });
  const GasFeeEstimate = IDL.Record({
    'max_priority_fee_per_gas' : IDL.Nat,
    'max_fee_per_gas' : IDL.Nat,
    'timestamp' : IDL.Nat64,
  });
  const MinterInfo = IDL.Record({
    'eth_balance' : IDL.Opt(IDL.Nat),
    'eth_helper_contract_address' : IDL.Opt(IDL.Text),
    'last_observed_block_number' : IDL.Opt(IDL.Nat),
    'erc20_helper_contract_address' : IDL.Opt(IDL.Text),
    'supported_ckerc20_tokens' : IDL.Opt(IDL.Vec(CkErc20Token)),
    'last_gas_fee_estimate' : IDL.Opt(GasFeeEstimate),
    'smart_contract_address' : IDL.Opt(IDL.Text),
    'minimum_withdrawal_amount' : IDL.Opt(IDL.Nat),
    'erc20_balances' : IDL.Opt(
      IDL.Vec(
        IDL.Record({ 'balance' : IDL.Nat, 'erc20_contract_address' : IDL.Text })
      )
    ),
    'minter_address' : IDL.Opt(IDL.Text),
    'ethereum_block_height' : IDL.Opt(BlockTag),
  });
  const EthTransaction = IDL.Record({ 'transaction_hash' : IDL.Text });
  const TxFinalizedStatus = IDL.Variant({
    'Success' : EthTransaction,
    'Reimbursed' : IDL.Record({
      'transaction_hash' : IDL.Text,
      'reimbursed_amount' : IDL.Nat,
      'reimbursed_in_block' : IDL.Nat,
    }),
    'PendingReimbursement' : EthTransaction,
  });
  const RetrieveEthStatus = IDL.Variant({
    'NotFound' : IDL.Null,
    'TxFinalized' : TxFinalizedStatus,
    'TxSent' : EthTransaction,
    'TxCreated' : IDL.Null,
    'Pending' : IDL.Null,
  });
  const WithdrawErc20Arg = IDL.Record({
    'ckerc20_ledger_id' : IDL.Principal,
    'recipient' : IDL.Text,
    'amount' : IDL.Nat,
  });
  const RetrieveErc20Request = IDL.Record({
    'ckerc20_block_index' : IDL.Nat,
    'cketh_block_index' : IDL.Nat,
  });
  const LedgerError = IDL.Variant({
    'TemporarilyUnavailable' : IDL.Text,
    'InsufficientAllowance' : IDL.Record({
      'token_symbol' : IDL.Text,
      'ledger_id' : IDL.Principal,
      'allowance' : IDL.Nat,
      'failed_burn_amount' : IDL.Nat,
    }),
    'AmountTooLow' : IDL.Record({
      'minimum_burn_amount' : IDL.Nat,
      'token_symbol' : IDL.Text,
      'ledger_id' : IDL.Principal,
      'failed_burn_amount' : IDL.Nat,
    }),
    'InsufficientFunds' : IDL.Record({
      'balance' : IDL.Nat,
      'token_symbol' : IDL.Text,
      'ledger_id' : IDL.Principal,
      'failed_burn_amount' : IDL.Nat,
    }),
  });
  const WithdrawErc20Error = IDL.Variant({
    'TokenNotSupported' : IDL.Record({
      'supported_tokens' : IDL.Vec(CkErc20Token),
    }),
    'TemporarilyUnavailable' : IDL.Text,
    'CkErc20LedgerError' : IDL.Record({
      'error' : LedgerError,
      'cketh_block_index' : IDL.Nat,
    }),
    'CkEthLedgerError' : IDL.Record({ 'error' : LedgerError }),
    'RecipientAddressBlocked' : IDL.Record({ 'address' : IDL.Text }),
  });
  const WithdrawalArg = IDL.Record({
    'recipient' : IDL.Text,
    'amount' : IDL.Nat,
  });
  const RetrieveEthRequest = IDL.Record({ 'block_index' : IDL.Nat });
  const WithdrawalError = IDL.Variant({
    'TemporarilyUnavailable' : IDL.Text,
    'InsufficientAllowance' : IDL.Record({ 'allowance' : IDL.Nat }),
    'AmountTooLow' : IDL.Record({ 'min_withdrawal_amount' : IDL.Nat }),
    'RecipientAddressBlocked' : IDL.Record({ 'address' : IDL.Text }),
    'InsufficientFunds' : IDL.Record({ 'balance' : IDL.Nat }),
  });
  return IDL.Service({
    'add_ckerc20_token' : IDL.Func([AddCkErc20Token], [], []),
    'eip_1559_transaction_price' : IDL.Func(
        [],
        [Eip1559TransactionPrice],
        ['query'],
      ),
    'get_canister_status' : IDL.Func([], [CanisterStatusResponse], []),
    'get_events' : IDL.Func(
        [IDL.Record({ 'start' : IDL.Nat64, 'length' : IDL.Nat64 })],
        [
          IDL.Record({
            'total_event_count' : IDL.Nat64,
            'events' : IDL.Vec(Event),
          }),
        ],
        ['query'],
      ),
    'get_minter_info' : IDL.Func([], [MinterInfo], ['query']),
    'is_address_blocked' : IDL.Func([IDL.Text], [IDL.Bool], ['query']),
    'minter_address' : IDL.Func([], [IDL.Text], []),
    'retrieve_eth_status' : IDL.Func([IDL.Nat64], [RetrieveEthStatus], []),
    'smart_contract_address' : IDL.Func([], [IDL.Text], ['query']),
    'withdraw_erc20' : IDL.Func(
        [WithdrawErc20Arg],
        [
          IDL.Variant({
            'Ok' : RetrieveErc20Request,
            'Err' : WithdrawErc20Error,
          }),
        ],
        [],
      ),
    'withdraw_eth' : IDL.Func(
        [WithdrawalArg],
        [IDL.Variant({ 'Ok' : RetrieveEthRequest, 'Err' : WithdrawalError })],
        [],
      ),
  });
};
export const init = ({ IDL }) => {
  const BlockTag = IDL.Variant({
    'Safe' : IDL.Null,
    'Finalized' : IDL.Null,
    'Latest' : IDL.Null,
  });
  const UpgradeArg = IDL.Record({
    'next_transaction_nonce' : IDL.Opt(IDL.Nat),
    'ledger_suite_orchestrator_id' : IDL.Opt(IDL.Principal),
    'erc20_helper_contract_address' : IDL.Opt(IDL.Text),
    'last_erc20_scraped_block_number' : IDL.Opt(IDL.Nat),
    'ethereum_contract_address' : IDL.Opt(IDL.Text),
    'minimum_withdrawal_amount' : IDL.Opt(IDL.Nat),
    'ethereum_block_height' : IDL.Opt(BlockTag),
  });
  const EthereumNetwork = IDL.Variant({
    'Mainnet' : IDL.Null,
    'Sepolia' : IDL.Null,
  });
  const InitArg = IDL.Record({
    'ethereum_network' : EthereumNetwork,
    'last_scraped_block_number' : IDL.Nat,
    'ecdsa_key_name' : IDL.Text,
    'next_transaction_nonce' : IDL.Nat,
    'ledger_id' : IDL.Principal,
    'ethereum_contract_address' : IDL.Opt(IDL.Text),
    'minimum_withdrawal_amount' : IDL.Nat,
    'ethereum_block_height' : BlockTag,
  });
  const MinterArg = IDL.Variant({
    'UpgradeArg' : UpgradeArg,
    'InitArg' : InitArg,
  });
  return [MinterArg];
};
