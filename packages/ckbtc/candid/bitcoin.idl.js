/* Do not edit.  Compiled with ./scripts/compile-idl-js from packages/ckbtc/candid/bitcoin.did */
export const idlFactory = ({ IDL }) => {
  const flag = IDL.Variant({ 'disabled' : IDL.Null, 'enabled' : IDL.Null });
  const fees = IDL.Record({
    'get_current_fee_percentiles' : IDL.Nat,
    'get_utxos_maximum' : IDL.Nat,
    'get_block_headers_cycles_per_ten_instructions' : IDL.Nat,
    'get_current_fee_percentiles_maximum' : IDL.Nat,
    'send_transaction_per_byte' : IDL.Nat,
    'get_balance' : IDL.Nat,
    'get_utxos_cycles_per_ten_instructions' : IDL.Nat,
    'get_block_headers_base' : IDL.Nat,
    'get_utxos_base' : IDL.Nat,
    'get_balance_maximum' : IDL.Nat,
    'send_transaction_base' : IDL.Nat,
    'get_block_headers_maximum' : IDL.Nat,
  });
  const network = IDL.Variant({
    'mainnet' : IDL.Null,
    'regtest' : IDL.Null,
    'testnet' : IDL.Null,
  });
  const init_config = IDL.Record({
    'api_access' : IDL.Opt(flag),
    'lazily_evaluate_fee_percentiles' : IDL.Opt(flag),
    'blocks_source' : IDL.Opt(IDL.Principal),
    'fees' : IDL.Opt(fees),
    'watchdog_canister' : IDL.Opt(IDL.Opt(IDL.Principal)),
    'network' : IDL.Opt(network),
    'stability_threshold' : IDL.Opt(IDL.Nat),
    'syncing' : IDL.Opt(flag),
    'burn_cycles' : IDL.Opt(flag),
    'disable_api_if_not_fully_synced' : IDL.Opt(flag),
  });
  const address = IDL.Text;
  const get_balance_request = IDL.Record({
    'network' : network,
    'address' : address,
    'min_confirmations' : IDL.Opt(IDL.Nat32),
  });
  const satoshi = IDL.Nat64;
  const block_height = IDL.Nat32;
  const get_block_headers_request = IDL.Record({
    'start_height' : block_height,
    'end_height' : IDL.Opt(block_height),
    'network' : network,
  });
  const block_header = IDL.Vec(IDL.Nat8);
  const get_block_headers_response = IDL.Record({
    'tip_height' : block_height,
    'block_headers' : IDL.Vec(block_header),
  });
  const get_current_fee_percentiles_request = IDL.Record({
    'network' : network,
  });
  const millisatoshi_per_byte = IDL.Nat64;
  const get_utxos_request = IDL.Record({
    'network' : network,
    'filter' : IDL.Opt(
      IDL.Variant({
        'page' : IDL.Vec(IDL.Nat8),
        'min_confirmations' : IDL.Nat32,
      })
    ),
    'address' : address,
  });
  const block_hash = IDL.Vec(IDL.Nat8);
  const outpoint = IDL.Record({
    'txid' : IDL.Vec(IDL.Nat8),
    'vout' : IDL.Nat32,
  });
  const utxo = IDL.Record({
    'height' : block_height,
    'value' : satoshi,
    'outpoint' : outpoint,
  });
  const get_utxos_response = IDL.Record({
    'next_page' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'tip_height' : block_height,
    'tip_block_hash' : block_hash,
    'utxos' : IDL.Vec(utxo),
  });
  const send_transaction_request = IDL.Record({
    'transaction' : IDL.Vec(IDL.Nat8),
    'network' : network,
  });
  const config = IDL.Record({
    'api_access' : flag,
    'lazily_evaluate_fee_percentiles' : flag,
    'blocks_source' : IDL.Principal,
    'fees' : fees,
    'watchdog_canister' : IDL.Opt(IDL.Principal),
    'network' : network,
    'stability_threshold' : IDL.Nat,
    'syncing' : flag,
    'burn_cycles' : flag,
    'disable_api_if_not_fully_synced' : flag,
  });
  const set_config_request = IDL.Record({
    'api_access' : IDL.Opt(flag),
    'lazily_evaluate_fee_percentiles' : IDL.Opt(flag),
    'fees' : IDL.Opt(fees),
    'watchdog_canister' : IDL.Opt(IDL.Opt(IDL.Principal)),
    'stability_threshold' : IDL.Opt(IDL.Nat),
    'syncing' : IDL.Opt(flag),
    'burn_cycles' : IDL.Opt(flag),
    'disable_api_if_not_fully_synced' : IDL.Opt(flag),
  });
  return IDL.Service({
    'bitcoin_get_balance' : IDL.Func([get_balance_request], [satoshi], []),
    'bitcoin_get_balance_query' : IDL.Func(
        [get_balance_request],
        [satoshi],
        ['query'],
      ),
    'bitcoin_get_block_headers' : IDL.Func(
        [get_block_headers_request],
        [get_block_headers_response],
        [],
      ),
    'bitcoin_get_current_fee_percentiles' : IDL.Func(
        [get_current_fee_percentiles_request],
        [IDL.Vec(millisatoshi_per_byte)],
        [],
      ),
    'bitcoin_get_utxos' : IDL.Func(
        [get_utxos_request],
        [get_utxos_response],
        [],
      ),
    'bitcoin_get_utxos_query' : IDL.Func(
        [get_utxos_request],
        [get_utxos_response],
        ['query'],
      ),
    'bitcoin_send_transaction' : IDL.Func([send_transaction_request], [], []),
    'get_config' : IDL.Func([], [config], ['query']),
    'set_config' : IDL.Func([set_config_request], [], []),
  });
};
export const init = ({ IDL }) => {
  const flag = IDL.Variant({ 'disabled' : IDL.Null, 'enabled' : IDL.Null });
  const fees = IDL.Record({
    'get_current_fee_percentiles' : IDL.Nat,
    'get_utxos_maximum' : IDL.Nat,
    'get_block_headers_cycles_per_ten_instructions' : IDL.Nat,
    'get_current_fee_percentiles_maximum' : IDL.Nat,
    'send_transaction_per_byte' : IDL.Nat,
    'get_balance' : IDL.Nat,
    'get_utxos_cycles_per_ten_instructions' : IDL.Nat,
    'get_block_headers_base' : IDL.Nat,
    'get_utxos_base' : IDL.Nat,
    'get_balance_maximum' : IDL.Nat,
    'send_transaction_base' : IDL.Nat,
    'get_block_headers_maximum' : IDL.Nat,
  });
  const network = IDL.Variant({
    'mainnet' : IDL.Null,
    'regtest' : IDL.Null,
    'testnet' : IDL.Null,
  });
  const init_config = IDL.Record({
    'api_access' : IDL.Opt(flag),
    'lazily_evaluate_fee_percentiles' : IDL.Opt(flag),
    'blocks_source' : IDL.Opt(IDL.Principal),
    'fees' : IDL.Opt(fees),
    'watchdog_canister' : IDL.Opt(IDL.Opt(IDL.Principal)),
    'network' : IDL.Opt(network),
    'stability_threshold' : IDL.Opt(IDL.Nat),
    'syncing' : IDL.Opt(flag),
    'burn_cycles' : IDL.Opt(flag),
    'disable_api_if_not_fully_synced' : IDL.Opt(flag),
  });
  return [init_config];
};
