import type { ActorMethod } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export type BlockTag = { Safe: null } | { Finalized: null } | { Latest: null };
export interface CanisterStatusResponse {
  status: CanisterStatusType;
  memory_size: bigint;
  cycles: bigint;
  settings: DefiniteCanisterSettings;
  idle_cycles_burned_per_day: bigint;
  module_hash: [] | [Uint8Array | number[]];
}
export type CanisterStatusType =
  | { stopped: null }
  | { stopping: null }
  | { running: null };
export interface DefiniteCanisterSettings {
  freezing_threshold: bigint;
  controllers: Array<Principal>;
  memory_allocation: bigint;
  compute_allocation: bigint;
}
export interface Eip1559TransactionPrice {
  max_priority_fee_per_gas: bigint;
  max_fee_per_gas: bigint;
  max_transaction_fee: bigint;
  gas_limit: bigint;
}
export interface EthTransaction {
  transaction_hash: string;
}
export type EthereumNetwork = { Mainnet: null } | { Sepolia: null };
export interface Event {
  timestamp: bigint;
  payload:
    | { SkippedBlock: { block_number: bigint } }
    | {
        SignedTransaction: {
          raw_transaction: string;
          withdrawal_id: bigint;
        };
      }
    | { Upgrade: UpgradeArg }
    | { Init: InitArg }
    | { SyncedToBlock: { block_number: bigint } }
    | {
        AcceptedDeposit: {
          principal: Principal;
          transaction_hash: string;
          value: bigint;
          log_index: bigint;
          block_number: bigint;
          from_address: string;
        };
      }
    | {
        ReplacedTransaction: {
          withdrawal_id: bigint;
          transaction: UnsignedTransaction;
        };
      }
    | {
        MintedCkEth: {
          event_source: EventSource;
          mint_block_index: bigint;
        };
      }
    | {
        ReimbursedEthWithdrawal: {
          transaction_hash: [] | [string];
          withdrawal_id: bigint;
          reimbursed_amount: bigint;
          reimbursed_in_block: bigint;
        };
      }
    | {
        CreatedTransaction: {
          withdrawal_id: bigint;
          transaction: UnsignedTransaction;
        };
      }
    | { InvalidDeposit: { event_source: EventSource; reason: string } }
    | {
        AcceptedEthWithdrawalRequest: {
          ledger_burn_index: bigint;
          destination: string;
          withdrawal_amount: bigint;
          from: Principal;
          created_at: [] | [bigint];
          from_subaccount: [] | [Uint8Array | number[]];
        };
      }
    | {
        FinalizedTransaction: {
          withdrawal_id: bigint;
          transaction_receipt: TransactionReceipt;
        };
      };
}
export interface EventSource {
  transaction_hash: string;
  log_index: bigint;
}
export interface InitArg {
  ethereum_network: EthereumNetwork;
  last_scraped_block_number: bigint;
  ecdsa_key_name: string;
  next_transaction_nonce: bigint;
  ledger_id: Principal;
  ethereum_contract_address: [] | [string];
  minimum_withdrawal_amount: bigint;
  ethereum_block_height: BlockTag;
}
export type MinterArg = { UpgradeArg: UpgradeArg } | { InitArg: InitArg };
export interface RetrieveEthRequest {
  block_index: bigint;
}
export type RetrieveEthStatus =
  | { NotFound: null }
  | { TxFinalized: TxFinalizedStatus }
  | { TxSent: EthTransaction }
  | { TxCreated: null }
  | { Pending: null };
export interface TransactionReceipt {
  effective_gas_price: bigint;
  status: { Success: null } | { Failure: null };
  transaction_hash: string;
  block_hash: string;
  block_number: bigint;
  gas_used: bigint;
}
export type TxFinalizedStatus =
  | { Success: EthTransaction }
  | {
      Reimbursed: {
        transaction_hash: string;
        reimbursed_amount: bigint;
        reimbursed_in_block: bigint;
      };
    }
  | { PendingReimbursement: EthTransaction };
export interface UnsignedTransaction {
  destination: string;
  value: bigint;
  max_priority_fee_per_gas: bigint;
  data: Uint8Array | number[];
  max_fee_per_gas: bigint;
  chain_id: bigint;
  nonce: bigint;
  gas_limit: bigint;
  access_list: Array<{
    storage_keys: Array<Uint8Array | number[]>;
    address: string;
  }>;
}
export interface UpgradeArg {
  next_transaction_nonce: [] | [bigint];
  ethereum_contract_address: [] | [string];
  minimum_withdrawal_amount: [] | [bigint];
  ethereum_block_height: [] | [BlockTag];
}
export interface WithdrawalArg {
  recipient: string;
  amount: bigint;
}
export type WithdrawalError =
  | { TemporarilyUnavailable: string }
  | { InsufficientAllowance: { allowance: bigint } }
  | { AmountTooLow: { min_withdrawal_amount: bigint } }
  | { RecipientAddressBlocked: { address: string } }
  | { InsufficientFunds: { balance: bigint } };
export interface _SERVICE {
  eip_1559_transaction_price: ActorMethod<[], Eip1559TransactionPrice>;
  get_canister_status: ActorMethod<[], CanisterStatusResponse>;
  get_events: ActorMethod<
    [{ start: bigint; length: bigint }],
    { total_event_count: bigint; events: Array<Event> }
  >;
  is_address_blocked: ActorMethod<[string], boolean>;
  minter_address: ActorMethod<[], string>;
  retrieve_eth_status: ActorMethod<[bigint], RetrieveEthStatus>;
  smart_contract_address: ActorMethod<[], string>;
  withdraw_eth: ActorMethod<
    [WithdrawalArg],
    { Ok: RetrieveEthRequest } | { Err: WithdrawalError }
  >;
}
