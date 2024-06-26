import type { ActorMethod } from "@dfinity/agent";
import type { IDL } from "@dfinity/candid";
import type { Principal } from "@dfinity/principal";

export type address = string;
export type block_hash = Uint8Array | number[];
export type block_header = Uint8Array | number[];
export type block_height = number;
export interface config {
  api_access: flag;
  lazily_evaluate_fee_percentiles: flag;
  blocks_source: Principal;
  fees: fees;
  watchdog_canister: [] | [Principal];
  network: network;
  stability_threshold: bigint;
  syncing: flag;
  burn_cycles: flag;
  disable_api_if_not_fully_synced: flag;
}
export interface fees {
  get_current_fee_percentiles: bigint;
  get_utxos_maximum: bigint;
  get_block_headers_cycles_per_ten_instructions: bigint;
  get_current_fee_percentiles_maximum: bigint;
  send_transaction_per_byte: bigint;
  get_balance: bigint;
  get_utxos_cycles_per_ten_instructions: bigint;
  get_block_headers_base: bigint;
  get_utxos_base: bigint;
  get_balance_maximum: bigint;
  send_transaction_base: bigint;
  get_block_headers_maximum: bigint;
}
export type flag = { disabled: null } | { enabled: null };
export interface get_balance_request {
  network: network;
  address: address;
  min_confirmations: [] | [number];
}
export interface get_block_headers_request {
  start_height: block_height;
  end_height: [] | [block_height];
  network: network;
}
export interface get_block_headers_response {
  tip_height: block_height;
  block_headers: Array<block_header>;
}
export interface get_current_fee_percentiles_request {
  network: network;
}
export interface get_utxos_request {
  network: network;
  filter:
    | []
    | [{ page: Uint8Array | number[] } | { min_confirmations: number }];
  address: address;
}
export interface get_utxos_response {
  next_page: [] | [Uint8Array | number[]];
  tip_height: block_height;
  tip_block_hash: block_hash;
  utxos: Array<utxo>;
}
export interface init_config {
  api_access: [] | [flag];
  lazily_evaluate_fee_percentiles: [] | [flag];
  blocks_source: [] | [Principal];
  fees: [] | [fees];
  watchdog_canister: [] | [[] | [Principal]];
  network: [] | [network];
  stability_threshold: [] | [bigint];
  syncing: [] | [flag];
  burn_cycles: [] | [flag];
  disable_api_if_not_fully_synced: [] | [flag];
}
export type millisatoshi_per_byte = bigint;
export type network = { mainnet: null } | { regtest: null } | { testnet: null };
export interface outpoint {
  txid: Uint8Array | number[];
  vout: number;
}
export type satoshi = bigint;
export interface send_transaction_request {
  transaction: Uint8Array | number[];
  network: network;
}
export interface set_config_request {
  api_access: [] | [flag];
  lazily_evaluate_fee_percentiles: [] | [flag];
  fees: [] | [fees];
  watchdog_canister: [] | [[] | [Principal]];
  stability_threshold: [] | [bigint];
  syncing: [] | [flag];
  burn_cycles: [] | [flag];
  disable_api_if_not_fully_synced: [] | [flag];
}
export interface utxo {
  height: block_height;
  value: satoshi;
  outpoint: outpoint;
}
export interface _SERVICE {
  bitcoin_get_balance: ActorMethod<[get_balance_request], satoshi>;
  bitcoin_get_balance_query: ActorMethod<[get_balance_request], satoshi>;
  bitcoin_get_block_headers: ActorMethod<
    [get_block_headers_request],
    get_block_headers_response
  >;
  bitcoin_get_current_fee_percentiles: ActorMethod<
    [get_current_fee_percentiles_request],
    BigUint64Array | bigint[]
  >;
  bitcoin_get_utxos: ActorMethod<[get_utxos_request], get_utxos_response>;
  bitcoin_get_utxos_query: ActorMethod<[get_utxos_request], get_utxos_response>;
  bitcoin_send_transaction: ActorMethod<[send_transaction_request], undefined>;
  get_config: ActorMethod<[], config>;
  set_config: ActorMethod<[set_config_request], undefined>;
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
