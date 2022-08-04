import type { Principal } from "@dfinity/principal";
export interface Account {
  of: Principal;
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
  fee: [] | [Tokens];
  to_principal: Principal;
  to_subaccount: [] | [Subaccount];
  memo: [] | [bigint];
  from_subaccount: [] | [Subaccount];
  created_at_time: [] | [Timestamp];
  amount: Tokens;
}
export type TransferError =
  | {
      GenericError: { message: string; error_code: bigint };
    }
  | { BadBurn: { min_burn_amount: Tokens } }
  | { Duplicate: { duplicate_of: BlockIndex } }
  | { Throttled: null }
  | { BadFee: { expected_fee: Tokens } }
  | { CreatedInFuture: null }
  | { TooOld: { allowed_window_nanos: Duration } }
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
  icrc1_metadata: () => Promise<Array<[string, Value]>>;
  icrc1_name: () => Promise<string>;
  icrc1_supported_standards: () => Promise<
    Array<{ url: string; name: string }>
  >;
  icrc1_symbol: () => Promise<string>;
  icrc1_total_supply: () => Promise<Tokens>;
  icrc1_transfer: (arg_0: TransferArg) => Promise<TransferResult>;
}
