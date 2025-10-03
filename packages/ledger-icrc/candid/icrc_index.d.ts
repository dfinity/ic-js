import type { ActorMethod } from "@dfinity/agent";
import type { IDL } from "@dfinity/candid";
import type { Principal } from "@dfinity/principal";

export interface Account {
  owner: Principal;
  subaccount: [] | [Uint8Array | number[]];
}
export interface Approve {
  fee: [] | [bigint];
  from: Account;
  memo: [] | [Uint8Array | number[]];
  created_at_time: [] | [bigint];
  amount: bigint;
  expected_allowance: [] | [bigint];
  expires_at: [] | [bigint];
  spender: Account;
}
export interface Burn {
  from: Account;
  memo: [] | [Uint8Array | number[]];
  created_at_time: [] | [bigint];
  amount: bigint;
  spender: [] | [Account];
}
export interface GetAccountTransactionsArgs {
  /**
   * Maximum number of transactions to fetch.
   */
  max_results: bigint;
  /**
   * The txid of the last transaction seen by the client.
   * If None then the results will start from the most recent
   * txid.
   */
  start: [] | [TxId];
  account: Account;
}
export interface GetTransactions {
  transactions: Array<TransactionWithId>;
  /**
   * The txid of the oldest transaction the account has
   */
  oldest_tx_id: [] | [TxId];
}
export interface GetTransactionsErr {
  message: string;
}
export type GetTransactionsResult =
  | { Ok: GetTransactions }
  | { Err: GetTransactionsErr };
/**
 * The initialization parameters of the Index canister.
 */
export interface InitArgs {
  ledger_id: Principal;
}
export interface ListSubaccountsArgs {
  owner: Principal;
  start: [] | [SubAccount];
}
export interface Mint {
  to: Account;
  memo: [] | [Uint8Array | number[]];
  created_at_time: [] | [bigint];
  amount: bigint;
}
export type SubAccount = Uint8Array | number[];
export interface Transaction {
  burn: [] | [Burn];
  kind: string;
  mint: [] | [Mint];
  approve: [] | [Approve];
  timestamp: bigint;
  transfer: [] | [Transfer];
}
export interface TransactionWithId {
  id: TxId;
  transaction: Transaction;
}
export interface Transfer {
  to: Account;
  fee: [] | [bigint];
  from: Account;
  memo: [] | [Uint8Array | number[]];
  created_at_time: [] | [bigint];
  amount: bigint;
  spender: [] | [Account];
}
export type TxId = bigint;
export interface _SERVICE {
  get_account_transactions: ActorMethod<
    [GetAccountTransactionsArgs],
    GetTransactionsResult
  >;
  ledger_id: ActorMethod<[], Principal>;
  list_subaccounts: ActorMethod<[ListSubaccountsArgs], Array<SubAccount>>;
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
