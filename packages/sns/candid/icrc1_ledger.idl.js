/* Do not edit.  Compiled with ./scripts/compile-idl-js from packages/sns/candid/icrc1_ledger.did */
export const idlFactory = ({ IDL }) => {
  const Value = IDL.Variant({
    'Int' : IDL.Int,
    'Nat' : IDL.Nat,
    'Blob' : IDL.Vec(IDL.Nat8),
    'Text' : IDL.Text,
  });
  const Subaccount = IDL.Vec(IDL.Nat8);
  const Account = IDL.Record({
    'of' : IDL.Principal,
    'subaccount' : IDL.Opt(Subaccount),
  });
  const InitArgs = IDL.Record({
    'token_symbol' : IDL.Text,
    'transfer_fee' : IDL.Nat64,
    'metadata' : IDL.Vec(IDL.Tuple(IDL.Text, Value)),
    'minting_account' : Account,
    'initial_balances' : IDL.Vec(IDL.Tuple(Account, IDL.Nat64)),
    'archive_options' : IDL.Record({
      'num_blocks_to_archive' : IDL.Nat64,
      'trigger_threshold' : IDL.Nat64,
      'max_message_size_bytes' : IDL.Opt(IDL.Nat64),
      'cycles_for_archive_creation' : IDL.Opt(IDL.Nat64),
      'node_max_memory_size_bytes' : IDL.Opt(IDL.Nat64),
      'controller_id' : IDL.Principal,
    }),
    'token_name' : IDL.Text,
  });
  const Tokens = IDL.Nat;
  const Timestamp = IDL.Nat64;
  const TransferArg = IDL.Record({
    'fee' : IDL.Opt(Tokens),
    'to_principal' : IDL.Principal,
    'to_subaccount' : IDL.Opt(Subaccount),
    'memo' : IDL.Opt(IDL.Nat64),
    'from_subaccount' : IDL.Opt(Subaccount),
    'created_at_time' : IDL.Opt(Timestamp),
    'amount' : Tokens,
  });
  const BlockIndex = IDL.Nat;
  const Duration = IDL.Nat64;
  const TransferError = IDL.Variant({
    'GenericError' : IDL.Record({
      'message' : IDL.Text,
      'error_code' : IDL.Nat,
    }),
    'BadBurn' : IDL.Record({ 'min_burn_amount' : Tokens }),
    'Duplicate' : IDL.Record({ 'duplicate_of' : BlockIndex }),
    'Throttled' : IDL.Null,
    'BadFee' : IDL.Record({ 'expected_fee' : Tokens }),
    'CreatedInFuture' : IDL.Null,
    'TooOld' : IDL.Record({ 'allowed_window_nanos' : Duration }),
    'InsufficientFunds' : IDL.Record({ 'balance' : Tokens }),
  });
  const TransferResult = IDL.Variant({
    'Ok' : BlockIndex,
    'Err' : TransferError,
  });
  return IDL.Service({
    'icrc1_balance_of' : IDL.Func([Account], [Tokens], ['query']),
    'icrc1_decimals' : IDL.Func([], [IDL.Nat8], ['query']),
    'icrc1_metadata' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, Value))],
        ['query'],
      ),
    'icrc1_name' : IDL.Func([], [IDL.Text], ['query']),
    'icrc1_supported_standards' : IDL.Func(
        [],
        [IDL.Vec(IDL.Record({ 'url' : IDL.Text, 'name' : IDL.Text }))],
        ['query'],
      ),
    'icrc1_symbol' : IDL.Func([], [IDL.Text], ['query']),
    'icrc1_total_supply' : IDL.Func([], [Tokens], ['query']),
    'icrc1_transfer' : IDL.Func([TransferArg], [TransferResult], []),
  });
};
export const init = ({ IDL }) => {
  const Value = IDL.Variant({
    'Int' : IDL.Int,
    'Nat' : IDL.Nat,
    'Blob' : IDL.Vec(IDL.Nat8),
    'Text' : IDL.Text,
  });
  const Subaccount = IDL.Vec(IDL.Nat8);
  const Account = IDL.Record({
    'of' : IDL.Principal,
    'subaccount' : IDL.Opt(Subaccount),
  });
  const InitArgs = IDL.Record({
    'token_symbol' : IDL.Text,
    'transfer_fee' : IDL.Nat64,
    'metadata' : IDL.Vec(IDL.Tuple(IDL.Text, Value)),
    'minting_account' : Account,
    'initial_balances' : IDL.Vec(IDL.Tuple(Account, IDL.Nat64)),
    'archive_options' : IDL.Record({
      'num_blocks_to_archive' : IDL.Nat64,
      'trigger_threshold' : IDL.Nat64,
      'max_message_size_bytes' : IDL.Opt(IDL.Nat64),
      'cycles_for_archive_creation' : IDL.Opt(IDL.Nat64),
      'node_max_memory_size_bytes' : IDL.Opt(IDL.Nat64),
      'controller_id' : IDL.Principal,
    }),
    'token_name' : IDL.Text,
  });
  return [InitArgs];
};
