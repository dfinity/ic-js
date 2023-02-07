/* Do not edit.  Compiled with ./scripts/compile-idl-js from packages/ckbtc/candid/minter.did */
export const idlFactory = ({ IDL }) => {
  const Mode = IDL.Variant({
    'RestrictedTo' : IDL.Vec(IDL.Principal),
    'ReadOnly' : IDL.Null,
    'GeneralAvailability' : IDL.Null,
  });
  const BtcNetwork = IDL.Variant({
    'Mainnet' : IDL.Null,
    'Regtest' : IDL.Null,
    'Testnet' : IDL.Null,
  });
  const InitArgs = IDL.Record({
    'ecdsa_key_name' : IDL.Text,
    'mode' : Mode,
    'retrieve_btc_min_amount' : IDL.Nat64,
    'ledger_id' : IDL.Principal,
    'max_time_in_queue_nanos' : IDL.Nat64,
    'btc_network' : BtcNetwork,
    'min_confirmations' : IDL.Opt(IDL.Nat32),
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
  const UpgradeArgs = IDL.Record({
    'mode' : IDL.Opt(Mode),
    'retrieve_btc_min_amount' : IDL.Opt(IDL.Nat64),
    'max_time_in_queue_nanos' : IDL.Opt(IDL.Nat64),
    'min_confirmations' : IDL.Opt(IDL.Nat32),
  });
  const BitcoinAddress = IDL.Variant({
    'p2sh' : IDL.Vec(IDL.Nat8),
    'p2wpkh_v0' : IDL.Vec(IDL.Nat8),
    'p2pkh' : IDL.Vec(IDL.Nat8),
  });
  const Event = IDL.Variant({
    'received_utxos' : IDL.Record({
      'to_account' : Account,
      'utxos' : IDL.Vec(Utxo),
    }),
    'sent_transaction' : IDL.Record({
      'change_output' : IDL.Opt(
        IDL.Record({ 'value' : IDL.Nat64, 'vout' : IDL.Nat32 })
      ),
      'txid' : IDL.Vec(IDL.Nat8),
      'utxos' : IDL.Vec(Utxo),
      'requests' : IDL.Vec(IDL.Nat64),
      'submitted_at' : IDL.Nat64,
    }),
    'init' : InitArgs,
    'upgrade' : UpgradeArgs,
    'accepted_retrieve_btc_request' : IDL.Record({
      'received_at' : IDL.Nat64,
      'block_index' : IDL.Nat64,
      'address' : BitcoinAddress,
      'amount' : IDL.Nat64,
    }),
    'removed_retrieve_btc_request' : IDL.Record({ 'block_index' : IDL.Nat64 }),
    'confirmed_transaction' : IDL.Record({ 'txid' : IDL.Vec(IDL.Nat8) }),
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
  const UpdateBalanceResult = IDL.Record({
    'block_index' : IDL.Nat64,
    'amount' : IDL.Nat64,
  });
  const UpdateBalanceError = IDL.Variant({
    'GenericError' : IDL.Record({
      'error_message' : IDL.Text,
      'error_code' : IDL.Nat64,
    }),
    'TemporarilyUnavailable' : IDL.Text,
    'AlreadyProcessing' : IDL.Null,
    'NoNewUtxos' : IDL.Null,
  });
  return IDL.Service({
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
    'get_events' : IDL.Func(
        [IDL.Record({ 'start' : IDL.Nat64, 'length' : IDL.Nat64 })],
        [IDL.Vec(Event)],
        ['query'],
      ),
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
    'update_balance' : IDL.Func(
        [
          IDL.Record({
            'owner' : IDL.Opt(IDL.Principal),
            'subaccount' : IDL.Opt(IDL.Vec(IDL.Nat8)),
          }),
        ],
        [
          IDL.Variant({
            'Ok' : UpdateBalanceResult,
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
    'ReadOnly' : IDL.Null,
    'GeneralAvailability' : IDL.Null,
  });
  const BtcNetwork = IDL.Variant({
    'Mainnet' : IDL.Null,
    'Regtest' : IDL.Null,
    'Testnet' : IDL.Null,
  });
  const InitArgs = IDL.Record({
    'ecdsa_key_name' : IDL.Text,
    'mode' : Mode,
    'retrieve_btc_min_amount' : IDL.Nat64,
    'ledger_id' : IDL.Principal,
    'max_time_in_queue_nanos' : IDL.Nat64,
    'btc_network' : BtcNetwork,
    'min_confirmations' : IDL.Opt(IDL.Nat32),
  });
  return [InitArgs];
};
