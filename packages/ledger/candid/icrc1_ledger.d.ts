import type { ActorMethod } from "@dfinity/agent";
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
export type Subaccount = Uint8Array | number[];
export type Timestamp = bigint;
export type Tokens = bigint;
export interface TransferArg {
  to: Account;
  fee: [] | [Tokens];
  memo: [] | [Uint8Array | number[]];
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
  | { Blob: Uint8Array | number[] }
  | { Text: string };
export interface _SERVICE {
  icrc1_balance_of: ActorMethod<[Account], Tokens>;
  icrc1_decimals: ActorMethod<[], number>;
  icrc1_fee: ActorMethod<[], Tokens>;
  icrc1_metadata: ActorMethod<[], Array<[string, Value]>>;
  icrc1_minting_account: ActorMethod<[], [] | [Account]>;
  icrc1_name: ActorMethod<[], string>;
  icrc1_supported_standards: ActorMethod<
    [],
    Array<{ url: string; name: string }>
  >;
  icrc1_symbol: ActorMethod<[], string>;
  icrc1_total_supply: ActorMethod<[], Tokens>;
  icrc1_transfer: ActorMethod<[TransferArg], TransferResult>;
}
