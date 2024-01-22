/* Do not edit.  Compiled with ./scripts/compile-idl-js from packages/cketh/candid/minter.did */
export const idlFactory = ({ IDL }) => {
  const BlockTag = IDL.Variant({
    'Safe' : IDL.Null,
    'Finalized' : IDL.Null,
    'Latest' : IDL.Null,
  });
  const UpgradeArg = IDL.Record({
    'next_transaction_nonce' : IDL.Opt(IDL.Nat),
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
  const Eip1559TransactionPrice = IDL.Record({
    'max_priority_fee_per_gas' : IDL.Nat,
    'max_fee_per_gas' : IDL.Nat,
    'max_transaction_fee' : IDL.Nat,
    'gas_limit' : IDL.Nat,
  });
  const CanisterStatusType = IDL.Variant({
    'stopped' : IDL.Null,
    'stopping' : IDL.Null,
    'running' : IDL.Null,
  });
  const QueryStats = IDL.Record({
    'response_payload_bytes_total' : IDL.Nat,
    'num_instructions_total' : IDL.Nat,
    'num_calls_total' : IDL.Nat,
    'request_payload_bytes_total' : IDL.Nat,
  });
  const DefiniteCanisterSettings = IDL.Record({
    'freezing_threshold' : IDL.Nat,
    'controllers' : IDL.Vec(IDL.Principal),
    'memory_allocation' : IDL.Nat,
    'compute_allocation' : IDL.Nat,
  });
  const CanisterStatusResponse = IDL.Record({
    'status' : CanisterStatusType,
    'memory_size' : IDL.Nat,
    '_stats' : QueryStats,
    'cycles' : IDL.Nat,
    'settings' : DefiniteCanisterSettings,
    'idle_cycles_burned_per_day' : IDL.Nat,
    'module_hash' : IDL.Opt(IDL.Vec(IDL.Nat8)),
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
  const EventSource = IDL.Record({
    'transaction_hash' : IDL.Text,
    'log_index' : IDL.Nat,
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
      'SignedTransaction' : IDL.Record({
        'raw_transaction' : IDL.Text,
        'withdrawal_id' : IDL.Nat,
      }),
      'Upgrade' : UpgradeArg,
      'Init' : InitArg,
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
      'CreatedTransaction' : IDL.Record({
        'withdrawal_id' : IDL.Nat,
        'transaction' : UnsignedTransaction,
      }),
      'InvalidDeposit' : IDL.Record({
        'event_source' : EventSource,
        'reason' : IDL.Text,
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
    'eip_1559_transaction_price' : IDL.Func([], [Eip1559TransactionPrice], []),
    'get_canister_status' : IDL.Func([], [CanisterStatusResponse], []),
    'get_events' : IDL.Func(
        [IDL.Record({ 'start' : IDL.Nat64, 'length' : IDL.Nat64 })],
        [
          IDL.Record({
            'total_event_count' : IDL.Nat64,
            'events' : IDL.Vec(Event),
          }),
        ],
        [],
      ),
    'is_address_blocked' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'minter_address' : IDL.Func([], [IDL.Text], []),
    'retrieve_eth_status' : IDL.Func([IDL.Nat64], [RetrieveEthStatus], []),
    'smart_contract_address' : IDL.Func([], [IDL.Text], []),
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
