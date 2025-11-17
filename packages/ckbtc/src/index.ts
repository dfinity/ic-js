/**
 * @module ckbtc/api
 */

export { BitcoinCanister } from "./bitcoin.canister";
export type {
  block_hash,
  block_height,
  get_utxos_response,
  outpoint,
  satoshi,
  utxo,
} from "./candid/bitcoin";
export type {
  Account,
  MinterInfo,
  PendingUtxo,
  ReimbursedDeposit,
  ReimbursementRequest,
  RetrieveBtcOk,
  RetrieveBtcStatus,
  RetrieveBtcStatusV2,
  Utxo,
  UtxoStatus,
  Account as WithdrawalAccount,
} from "./candid/minter";
export * from "./enums/btc.enums";
export * from "./errors/btc.errors";
export * from "./errors/minter.errors";
export { CkBTCMinterCanister } from "./minter.canister";
export * from "./types/bitcoin.params";
export * from "./types/btc";
export * from "./types/minter.params";
export * from "./types/minter.responses";
export * from "./utils/btc.utils";
