import type { ActorMethod } from "@dfinity/agent";
import type { IDL } from "@dfinity/candid";
import type { Principal } from "@dfinity/principal";

export interface AddCkErc20Token {
  ckerc20_ledger_id: Principal;
  chain_id: bigint;
  address: string;
  ckerc20_token_symbol: string;
}
export type BlockTag = { Safe: null } | { Finalized: null } | { Latest: null };
export interface CanisterStatusResponse {
  status: CanisterStatusType;
  memory_size: bigint;
  cycles: bigint;
  settings: DefiniteCanisterSettings;
  query_stats: QueryStats;
  idle_cycles_burned_per_day: bigint;
  module_hash: [] | [Uint8Array | number[]];
  reserved_cycles: bigint;
}
export type CanisterStatusType =
  | { stopped: null }
  | { stopping: null }
  | { running: null };
export interface CkErc20Token {
  erc20_contract_address: string;
  ledger_canister_id: Principal;
  ckerc20_token_symbol: string;
}
export interface DefiniteCanisterSettings {
  freezing_threshold: bigint;
  controllers: Array<Principal>;
  reserved_cycles_limit: bigint;
  memory_allocation: bigint;
  compute_allocation: bigint;
}
export interface Eip1559TransactionPrice {
  max_priority_fee_per_gas: bigint;
  max_fee_per_gas: bigint;
  max_transaction_fee: bigint;
  timestamp: [] | [bigint];
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
        AcceptedErc20Deposit: {
          principal: Principal;
          transaction_hash: string;
          value: bigint;
          log_index: bigint;
          block_number: bigint;
          erc20_contract_address: string;
          from_address: string;
        };
      }
    | {
        SignedTransaction: {
          raw_transaction: string;
          withdrawal_id: bigint;
        };
      }
    | { Upgrade: UpgradeArg }
    | { Init: InitArg }
    | {
        AddedCkErc20Token: {
          ckerc20_ledger_id: Principal;
          chain_id: bigint;
          address: string;
          ckerc20_token_symbol: string;
        };
      }
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
        MintedCkErc20: {
          event_source: EventSource;
          erc20_contract_address: string;
          mint_block_index: bigint;
          ckerc20_token_symbol: string;
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
        AcceptedErc20WithdrawalRequest: {
          cketh_ledger_burn_index: bigint;
          destination: string;
          withdrawal_amount: bigint;
          from: Principal;
          created_at: bigint;
          from_subaccount: [] | [Uint8Array | number[]];
          ckerc20_ledger_burn_index: bigint;
          max_transaction_fee: bigint;
          ckerc20_token_symbol: string;
        };
      }
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
export interface GasFeeEstimate {
  max_priority_fee_per_gas: bigint;
  max_fee_per_gas: bigint;
  timestamp: bigint;
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
export interface MinterInfo {
  eth_balance: [] | [bigint];
  eth_helper_contract_address: [] | [string];
  last_observed_block_number: [] | [bigint];
  erc20_helper_contract_address: [] | [string];
  supported_ckerc20_tokens: Array<CkErc20Token>;
  last_gas_fee_estimate: [] | [GasFeeEstimate];
  minimum_withdrawal_amount: [] | [bigint];
  minter_address: [] | [string];
  ethereum_block_height: [] | [BlockTag];
}
export interface QueryStats {
  response_payload_bytes_total: bigint;
  num_instructions_total: bigint;
  num_calls_total: bigint;
  request_payload_bytes_total: bigint;
}
export interface RetrieveErc20Request {
  ckerc20_block_index: bigint;
  cketh_block_index: bigint;
}
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
  ledger_suite_orchestrator_id: [] | [Principal];
  erc20_helper_contract_address: [] | [string];
  last_erc20_scraped_block_number: [] | [bigint];
  ethereum_contract_address: [] | [string];
  minimum_withdrawal_amount: [] | [bigint];
  ethereum_block_height: [] | [BlockTag];
}
export interface WithdrawErc20Arg {
  recipient: string;
  amount: bigint;
  ckerc20_token_symbol: string;
}
export type WithdrawErc20Error =
  | {
      TokenNotSupported: { supported_tokens: Array<string> };
    }
  | { TemporarilyUnavailable: string }
  | {
      InsufficientAllowance: {
        token_symbol: string;
        ledger_id: Principal;
        allowance: bigint;
        failed_burn_amount: bigint;
      };
    }
  | { RecipientAddressBlocked: { address: string } }
  | {
      InsufficientFunds: {
        balance: bigint;
        token_symbol: string;
        ledger_id: Principal;
        failed_burn_amount: bigint;
      };
    };
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
  add_ckerc20_token: ActorMethod<[AddCkErc20Token], undefined>;
  eip_1559_transaction_price: ActorMethod<[], Eip1559TransactionPrice>;
  get_canister_status: ActorMethod<[], CanisterStatusResponse>;
  get_events: ActorMethod<
    [{ start: bigint; length: bigint }],
    { total_event_count: bigint; events: Array<Event> }
  >;
  get_minter_info: ActorMethod<[], MinterInfo>;
  is_address_blocked: ActorMethod<[string], boolean>;
  minter_address: ActorMethod<[], string>;
  retrieve_eth_status: ActorMethod<[bigint], RetrieveEthStatus>;
  smart_contract_address: ActorMethod<[], string>;
  withdraw_erc20: ActorMethod<
    [WithdrawErc20Arg],
    { Ok: RetrieveErc20Request } | { Err: WithdrawErc20Error }
  >;
  withdraw_eth: ActorMethod<
    [WithdrawalArg],
    { Ok: RetrieveEthRequest } | { Err: WithdrawalError }
  >;
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
