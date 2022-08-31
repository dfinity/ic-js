import type { Principal } from "@dfinity/principal";
export interface Account {
  owner: Principal;
  subaccount: [] | [Subaccount];
}
export type BlockIndex = bigint;
export type Duration = bigint;
export interface InitArgs {
  token_symbol: string;
  transfer_fee: bigint;
  metadata: Array<[string, Value]>;
  minting_account: Account;
  initial_balances: Array<[Account, bigint]>;
  archive_options: {
    num_blocks_to_archive: bigint;
    trigger_threshold: bigint;
    max_message_size_bytes: [] | [bigint];
    cycles_for_archive_creation: [] | [bigint];
    node_max_memory_size_bytes: [] | [bigint];
    controller_id: Principal;
  };
  token_name: string;
}
export type Subaccount = Array<number>;
export type Timestamp = bigint;
export type Tokens = bigint;
export interface TransferArg {
  to: Account;
  fee: [] | [Tokens];
  memo: [] | [Array<number>];
  from_subaccount: [] | [Subaccount];
  created_at_time: [] | [Timestamp];
  amount: Tokens;
}
export type TransferError =
  | {
      GenericError: { message: string; error_code: bigint };
    }
  | { TemporarilyUnavailable: null }
  | { BadBurn: { min_burn_amount: Tokens } }
  | { Duplicate: { duplicate_of: BlockIndex } }
  | { BadFee: { expected_fee: Tokens } }
  | { CreatedInFuture: { ledger_time: bigint } }
  | { TooOld: null }
  | { InsufficientFunds: { balance: Tokens } };
export type TransferResult = { Ok: BlockIndex } | { Err: TransferError };
export type Value =
  | { Int: bigint }
  | { Nat: bigint }
  | { Blob: Array<number> }
  | { Text: string };
export interface _SERVICE {
  icrc1_balance_of: (arg_0: Account) => Promise<Tokens>;
  icrc1_decimals: () => Promise<number>;
  icrc1_fee: () => Promise<Tokens>;
  icrc1_metadata: () => Promise<Array<[string, Value]>>;
  icrc1_minting_account: () => Promise<[] | [Account]>;
  icrc1_name: () => Promise<string>;
  icrc1_supported_standards: () => Promise<
    Array<{ url: string; name: string }>
  >;
  icrc1_symbol: () => Promise<string>;
  icrc1_total_supply: () => Promise<Tokens>;
  icrc1_transfer: (arg_0: TransferArg) => Promise<TransferResult>;
}
