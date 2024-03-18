/* Do not edit.  Compiled with ./scripts/compile-idl-js from packages/ledger-icp/candid/index.did */
export const idlFactory = ({ IDL }) => {
  const InitArg = IDL.Record({ 'ledger_id' : IDL.Principal });
  const GetAccountIdentifierTransactionsArgs = IDL.Record({
    'max_results' : IDL.Nat64,
    'start' : IDL.Opt(IDL.Nat64),
    'account_identifier' : IDL.Text,
  });
  const Tokens = IDL.Record({ 'e8s' : IDL.Nat64 });
  const TimeStamp = IDL.Record({ 'timestamp_nanos' : IDL.Nat64 });
  const Operation = IDL.Variant({
    'Approve' : IDL.Record({
      'fee' : Tokens,
      'from' : IDL.Text,
      'allowance' : Tokens,
      'expected_allowance' : IDL.Opt(Tokens),
      'expires_at' : IDL.Opt(TimeStamp),
      'spender' : IDL.Text,
    }),
    'Burn' : IDL.Record({
      'from' : IDL.Text,
      'amount' : Tokens,
      'spender' : IDL.Opt(IDL.Text),
    }),
    'Mint' : IDL.Record({ 'to' : IDL.Text, 'amount' : Tokens }),
    'Transfer' : IDL.Record({
      'to' : IDL.Text,
      'fee' : Tokens,
      'from' : IDL.Text,
      'amount' : Tokens,
      'spender' : IDL.Opt(IDL.Text),
    }),
  });
  const SettledTransaction = IDL.Record({
    'memo' : IDL.Nat64,
    'icrc1_memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'operation' : Operation,
    'timestamp' : TimeStamp,
    'created_at_time' : IDL.Opt(TimeStamp),
  });
  const SettledTransactionWithId = IDL.Record({
    'id' : IDL.Nat64,
    'transaction' : SettledTransaction,
  });
  const GetAccountIdentifierTransactionsResponse = IDL.Record({
    'balance' : IDL.Nat64,
    'transactions' : IDL.Vec(SettledTransactionWithId),
    'oldest_tx_id' : IDL.Opt(IDL.Nat64),
  });
  const GetAccountIdentifierTransactionsError = IDL.Record({
    'message' : IDL.Text,
  });
  const GetAccountIdentifierTransactionsResult = IDL.Variant({
    'Ok' : GetAccountIdentifierTransactionsResponse,
    'Err' : GetAccountIdentifierTransactionsError,
  });
  const Account = IDL.Record({
    'owner' : IDL.Principal,
    'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const GetAccountTransactionsArgs = IDL.Record({
    'max_results' : IDL.Nat,
    'start' : IDL.Opt(IDL.Nat),
    'account' : Account,
  });
  const GetBlocksRequest = IDL.Record({
    'start' : IDL.Nat,
    'length' : IDL.Nat,
  });
  const GetBlocksResponse = IDL.Record({
    'blocks' : IDL.Vec(IDL.Vec(IDL.Nat8)),
    'chain_length' : IDL.Nat64,
  });
  const HttpRequest = IDL.Record({
    'url' : IDL.Text,
    'method' : IDL.Text,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
  });
  const HttpResponse = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
    'status_code' : IDL.Nat16,
  });
  const Status = IDL.Record({ 'num_blocks_synced' : IDL.Nat64 });
  return IDL.Service({
    'get_account_identifier_balance' : IDL.Func([IDL.Text], [IDL.Nat64], []),
    'get_account_identifier_transactions' : IDL.Func(
        [GetAccountIdentifierTransactionsArgs],
        [GetAccountIdentifierTransactionsResult],
        [],
      ),
    'get_account_transactions' : IDL.Func(
        [GetAccountTransactionsArgs],
        [GetAccountIdentifierTransactionsResult],
        [],
      ),
    'get_blocks' : IDL.Func([GetBlocksRequest], [GetBlocksResponse], []),
    'http_request' : IDL.Func([HttpRequest], [HttpResponse], []),
    'icrc1_balance_of' : IDL.Func([Account], [IDL.Nat64], []),
    'ledger_id' : IDL.Func([], [IDL.Principal], []),
    'status' : IDL.Func([], [Status], []),
  });
};
export const init = ({ IDL }) => {
  const InitArg = IDL.Record({ 'ledger_id' : IDL.Principal });
  return [InitArg];
};
