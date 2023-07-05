import type { ActorMethod } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export interface Account {
  owner: Principal;
  subaccount: [] | [SubAccount];
}
export type Block = Value;
export type BlockIndex = bigint;
export interface FeeCollectorRanges {
  ranges: Array<[Account, Array<[BlockIndex, BlockIndex]>]>;
}
export interface GetAccountTransactionsArgs {
  max_results: bigint;
  start: [] | [BlockIndex];
  account: Account;
}
export interface GetBlocksRequest {
  start: bigint;
  length: bigint;
}
export interface GetBlocksResponse {
  blocks: Array<Block>;
  chain_length: bigint;
}
export interface GetTransactions {
  balance: Tokens;
  transactions: Array<TransactionWithId>;
  oldest_tx_id: [] | [BlockIndex];
}
export interface GetTransactionsErr {
  message: string;
}
export type GetTransactionsResult =
  | { Ok: GetTransactions }
  | { Err: GetTransactionsErr };
export type IndexArg = { Init: InitArg };
export interface InitArg {
  ledger_id: Principal;
}
export interface ListSubaccountsArgs {
  owner: Principal;
  start: [] | [SubAccount];
}
export type Map = Array<[string, Value]>;
export interface Status {
  num_blocks_synced: BlockIndex;
}
export type SubAccount = Uint8Array;
export type Tokens = bigint;
export interface Transaction {
  burn:
    | []
    | [
        {
          from: Account;
          memo: [] | [Uint8Array];
          created_at_time: [] | [bigint];
          amount: bigint;
        }
      ];
  kind: string;
  mint:
    | []
    | [
        {
          to: Account;
          memo: [] | [Uint8Array];
          created_at_time: [] | [bigint];
          amount: bigint;
        }
      ];
  timestamp: bigint;
  transfer:
    | []
    | [
        {
          to: Account;
          fee: [] | [bigint];
          from: Account;
          memo: [] | [Uint8Array];
          created_at_time: [] | [bigint];
          amount: bigint;
        }
      ];
}
export interface TransactionWithId {
  id: BlockIndex;
  transaction: Transaction;
}
export type Value =
  | { Int: bigint }
  | { Map: Map }
  | { Nat: bigint }
  | { Nat64: bigint }
  | { Blob: Uint8Array }
  | { Text: string }
  | { Array: Array<Value> };
export interface _SERVICE {
  get_account_transactions: ActorMethod<
    [GetAccountTransactionsArgs],
    GetTransactionsResult
  >;
  get_blocks: ActorMethod<[GetBlocksRequest], GetBlocksResponse>;
  get_fee_collectors_ranges: ActorMethod<[], FeeCollectorRanges>;
  icrc1_balance_of: ActorMethod<[Account], Tokens>;
  ledger_id: ActorMethod<[], Principal>;
  list_subaccounts: ActorMethod<[ListSubaccountsArgs], Array<SubAccount>>;
  status: ActorMethod<[], Status>;
}
