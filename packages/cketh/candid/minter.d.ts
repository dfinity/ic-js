import type { ActorMethod } from "@dfinity/agent";
import type { IDL } from "@dfinity/candid";
import type { Principal } from "@dfinity/principal";

/**
 * ICRC-1 account type.
 */
export interface Account {
  owner: Principal;
  subaccount: [] | [Uint8Array | number[]];
}
export interface AddCkErc20Token {
  /**
   * The ledger ID for that ckERC20 token.
   */
  ckerc20_ledger_id: Principal;
  /**
   * Ethereum chain ID.
   */
  chain_id: bigint;
  /**
   * The Ethereum address of the ERC-20 smart contract.
   */
  address: string;
  /**
   * The ckERC20 token symbol on the ledger.
   */
  ckerc20_token_symbol: string;
}
export type BlockTag =
  | {
      /**
       * / The latest safe head block.
       */
      Safe: null;
    }
  | {
      /**
       * / The latest finalized block.
       */
      Finalized: null;
    }
  | {
      /**
       * / The latest mined block.
       */
      Latest: null;
    };
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
  log_visibility: LogVisibility;
  wasm_memory_limit: bigint;
  memory_allocation: bigint;
  compute_allocation: bigint;
}
/**
 * Estimate price of an EIP-1559 transaction
 * when converting ckETH to ETH or ckERC20 to ERC20, see
 * https://eips.ethereum.org/EIPS/eip-1559
 */
export interface Eip1559TransactionPrice {
  /**
   * Maximum amount of Wei per gas unit that the transaction gives to miners
   * to incentivize them to include their transaction (priority fee).
   */
  max_priority_fee_per_gas: bigint;
  /**
   * Maximum amount of Wei per gas unit that the transaction is willing to pay in total.
   * This covers the base fee determined by the network and the `max_priority_fee_per_gas`.
   */
  max_fee_per_gas: bigint;
  /**
   * Maximum amount of Wei that can be charged for the transaction,
   * computed as `max_fee_per_gas * gas_limit`
   */
  max_transaction_fee: bigint;
  /**
   * Timestamp of when the price was estimated.
   * Nanoseconds since the UNIX epoch.
   */
  timestamp: [] | [bigint];
  /**
   * Maximum amount of gas transaction is authorized to consume.
   */
  gas_limit: bigint;
}
/**
 * Argument to Eip1559TransactionPrice.
 * When specified, it is to lookup transaction price for a ckERC20 token withdrawal.
 * When not specified (null), it is for ETH withdrawal.
 */
export interface Eip1559TransactionPriceArg {
  /**
   * The ledger ID for that ckERC20 token.
   */
  ckerc20_ledger_id: Principal;
}
export interface EthTransaction {
  transaction_hash: string;
}
export type EthereumNetwork =
  | {
      /**
       * The public Ethereum mainnet.
       */
      Mainnet: null;
    }
  | {
      /**
       * The public Ethereum Sepolia testnet.
       */
      Sepolia: null;
    };
export interface Event {
  timestamp: bigint;
  payload:
    | {
        SkippedBlock: {
          block_number: bigint;
          contract_address: [] | [string];
        };
      }
    | {
        AcceptedErc20Deposit: {
          principal: Principal;
          transaction_hash: string;
          value: bigint;
          log_index: bigint;
          subaccount: [] | [Subaccount];
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
    | { SyncedDepositWithSubaccountToBlock: { block_number: bigint } }
    | { QuarantinedDeposit: { event_source: EventSource } }
    | { SyncedToBlock: { block_number: bigint } }
    | {
        AcceptedDeposit: {
          principal: Principal;
          transaction_hash: string;
          value: bigint;
          log_index: bigint;
          subaccount: [] | [Subaccount];
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
    | { QuarantinedReimbursement: { index: ReimbursementIndex } }
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
        FailedErc20WithdrawalRequest: {
          to: Principal;
          withdrawal_id: bigint;
          reimbursed_amount: bigint;
          to_subaccount: [] | [Uint8Array | number[]];
        };
      }
    | {
        ReimbursedErc20Withdrawal: {
          burn_in_block: bigint;
          transaction_hash: [] | [string];
          withdrawal_id: bigint;
          reimbursed_amount: bigint;
          ledger_id: Principal;
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
    | { SyncedErc20ToBlock: { block_number: bigint } }
    | {
        AcceptedErc20WithdrawalRequest: {
          cketh_ledger_burn_index: bigint;
          destination: string;
          ckerc20_ledger_id: Principal;
          withdrawal_amount: bigint;
          from: Principal;
          created_at: bigint;
          from_subaccount: [] | [Uint8Array | number[]];
          erc20_contract_address: string;
          ckerc20_ledger_burn_index: bigint;
          max_transaction_fee: bigint;
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
  /**
   * Maximum amount of Wei per gas unit that the transaction gives to miners
   * to incentivize them to include their transaction (priority fee).
   */
  max_priority_fee_per_gas: bigint;
  /**
   * Maximum amount of Wei per gas unit that the transaction is willing to pay in total.
   * This covers the base fee determined by the network and the `max_priority_fee_per_gas`.
   */
  max_fee_per_gas: bigint;
  /**
   * Timestamp of when the price was estimated.
   * Nanoseconds since the UNIX epoch.
   */
  timestamp: bigint;
}
/**
 * The initialization parameters of the minter canister.
 */
export interface InitArg {
  /**
   * The minter will interact with this Ethereum network.
   */
  ethereum_network: EthereumNetwork;
  /**
   * Block number to start scrapping from on the Ethereum network.
   * Scrapping the logs will resume at `last_scraped_block_number + 1` (inclusive).
   */
  last_scraped_block_number: bigint;
  /**
   * The name of the ECDSA key to use.
   * E.g., "dfx_test_key" on the local replica.
   */
  ecdsa_key_name: string;
  /**
   * Nonce of the next transaction to be sent to the Ethereum network.
   */
  next_transaction_nonce: bigint;
  /**
   * The principal of the EVM RPC canister that handles the communication
   * with the Ethereum blockchain. If not specified, uses the production or
   * staging EVM RPC canister based on the ethereum_network field.
   */
  evm_rpc_id: [] | [Principal];
  /**
   * The principal of the ledger that handles ckETH transfers.
   * The default account of the ckETH minter must be configured as
   * the minting account of the ledger.
   */
  ledger_id: Principal;
  /**
   * Address of the helper smart contract.
   */
  ethereum_contract_address: [] | [string];
  /**
   * Minimum amount in Wei that can be withdrawn.
   */
  minimum_withdrawal_amount: bigint;
  /**
   * Determine ethereum block height observed by minter.
   */
  ethereum_block_height: BlockTag;
}
export type LedgerError =
  | {
      /**
       * The ledger is overloaded, retry the request.
       * The payload contains a human-readable message explaining what caused the unavailability.
       */
      TemporarilyUnavailable: string;
    }
  | {
      /**
       * The allowance given to the minter is too low.
       */
      InsufficientAllowance: {
        token_symbol: string;
        ledger_id: Principal;
        allowance: bigint;
        failed_burn_amount: bigint;
      };
    }
  | {
      /**
       * The withdrawal amount is too low and doesn't cover the ledger transaction fee.
       */
      AmountTooLow: {
        minimum_burn_amount: bigint;
        token_symbol: string;
        ledger_id: Principal;
        failed_burn_amount: bigint;
      };
    }
  | {
      /**
       * The balance of the withdrawal account is too low.
       */
      InsufficientFunds: {
        balance: bigint;
        token_symbol: string;
        ledger_id: Principal;
        failed_burn_amount: bigint;
      };
    };
export type LogVisibility =
  | { controllers: null }
  | { public: null }
  | { allowed_viewers: Array<Principal> };
export type MinterArg = { UpgradeArg: UpgradeArg } | { InitArg: InitArg };
export interface MinterInfo {
  /**
   * Address of the ETH or ERC20 deposit with subaccount helper smart contract.
   */
  deposit_with_subaccount_helper_contract_address: [] | [string];
  /**
   * Amount of ETH in Wei controlled by the minter.
   * This might be less that the actual amount available on the `minter_address()`.
   */
  eth_balance: [] | [bigint];
  /**
   * Address of the ETH helper smart contract.
   */
  eth_helper_contract_address: [] | [string];
  /**
   * Last Ethereum block number observed by the minter.
   */
  last_observed_block_number: [] | [bigint];
  /**
   * Canister ID of the EVM RPC canister that handles the communication
   * with the Ethereum blockchain.
   */
  evm_rpc_id: [] | [Principal];
  /**
   * Address of the ERC20 helper smart contract
   */
  erc20_helper_contract_address: [] | [string];
  /**
   * Last scraped block number for logs of the ERC20 helper contract.
   */
  last_erc20_scraped_block_number: [] | [bigint];
  /**
   * Information of supported ERC20 tokens.
   */
  supported_ckerc20_tokens: [] | [Array<CkErc20Token>];
  /**
   * Last gas fee estimate.
   */
  last_gas_fee_estimate: [] | [GasFeeEstimate];
  /**
   * Canister ID of the ckETH ledger.
   */
  cketh_ledger_id: [] | [Principal];
  /**
   * (Deprecated) Address of the ETH helper smart contract.
   * Use `eth_helper_contract_address`.
   */
  smart_contract_address: [] | [string];
  /**
   * Last scraped block number for logs of the ETH helper contract.
   */
  last_eth_scraped_block_number: [] | [bigint];
  /**
   * Minimum amount in Wei that can be withdrawn when converting ckETH -> ETH.
   */
  minimum_withdrawal_amount: [] | [bigint];
  /**
   * Amount of ETH in Wei controlled by the minter.
   * This might be less that the actual amount available on the `minter_address()`.
   */
  erc20_balances:
    | []
    | [Array<{ balance: bigint; erc20_contract_address: string }>];
  /**
   * Ethereum address controlled by the minter via threshold ECDSA.
   */
  minter_address: [] | [string];
  /**
   * Last scraped block number for logs of the deposit with subaccount helper contract.
   */
  last_deposit_with_subaccount_scraped_block_number: [] | [bigint];
  /**
   * Determine ethereum block height observed by minter.
   */
  ethereum_block_height: [] | [BlockTag];
}
export interface QueryStats {
  response_payload_bytes_total: bigint;
  num_instructions_total: bigint;
  num_calls_total: bigint;
  request_payload_bytes_total: bigint;
}
export type ReimbursementIndex =
  | {
      CkErc20: {
        cketh_ledger_burn_index: bigint;
        ledger_id: Principal;
        ckerc20_ledger_burn_index: bigint;
      };
    }
  | { CkEth: { ledger_burn_index: bigint } };
export interface RetrieveErc20Request {
  /**
   * Burn index on the ledger handling the withdrawn ckERC20 token.
   */
  ckerc20_block_index: bigint;
  /**
   * Burn index on the ckETH ledger.
   * ckETH is needed to pay for the transaction fees.
   */
  cketh_block_index: bigint;
}
export interface RetrieveEthRequest {
  block_index: bigint;
}
/**
 * Retrieve the status of a withdrawal request.
 */
export type RetrieveEthStatus =
  | {
      /**
       * Withdrawal request is not found.
       */
      NotFound: null;
    }
  | {
      /**
       * Ethereum transaction is finalized.
       */
      TxFinalized: TxFinalizedStatus;
    }
  | {
      /**
       * Ethereum transaction was signed and is sent to the network.
       */
      TxSent: EthTransaction;
    }
  | {
      /**
       * Transaction fees were estimated and an Ethereum transaction was created.
       * Transaction is not signed yet.
       */
      TxCreated: null;
    }
  | {
      /**
       * Withdrawal request is waiting to be processed.
       */
      Pending: null;
    };
export type Subaccount = Uint8Array | number[];
export interface TransactionReceipt {
  effective_gas_price: bigint;
  status: { Success: null } | { Failure: null };
  transaction_hash: string;
  block_hash: string;
  block_number: bigint;
  gas_used: bigint;
}
/**
 * Status of a finalized transaction.
 */
export type TxFinalizedStatus =
  | {
      /**
       * Transaction was successful.
       */
      Success: {
        transaction_hash: string;
        effective_transaction_fee: [] | [bigint];
      };
    }
  | {
      /**
       * Transaction failed, user got reimbursed.
       */
      Reimbursed: {
        transaction_hash: string;
        reimbursed_amount: bigint;
        reimbursed_in_block: bigint;
      };
    }
  | {
      /**
       * Transaction failed and will be reimbursed,
       */
      PendingReimbursement: EthTransaction;
    };
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
  /**
   * Change the deposit with subaccount helper smart contract address.
   */
  deposit_with_subaccount_helper_contract_address: [] | [string];
  /**
   * Change the nonce of the next transaction to be sent to the Ethereum network.
   */
  next_transaction_nonce: [] | [bigint];
  /**
   * The principal of the EVM RPC canister that handles the communication
   * with the Ethereum blockchain.
   */
  evm_rpc_id: [] | [Principal];
  /**
   * The principal of the ledger suite orchestrator that handles the ICRC1 ledger suites
   * for all ckERC20 tokens.
   */
  ledger_suite_orchestrator_id: [] | [Principal];
  /**
   * Change the ERC-20 helper smart contract address.
   */
  erc20_helper_contract_address: [] | [string];
  /**
   * Change the last scraped block number of the ERC-20 helper smart contract.
   */
  last_erc20_scraped_block_number: [] | [bigint];
  /**
   * Change the ETH helper smart contract address.
   */
  ethereum_contract_address: [] | [string];
  /**
   * Change the minimum amount in Wei that can be withdrawn.
   */
  minimum_withdrawal_amount: [] | [bigint];
  /**
   * Change the last scraped block number of the deposit with subaccount helper smart contract.
   */
  last_deposit_with_subaccount_scraped_block_number: [] | [bigint];
  /**
   * Change the ethereum block height observed by the minter.
   */
  ethereum_block_height: [] | [BlockTag];
}
export interface WithdrawErc20Arg {
  /**
   * The ledger ID for that ckERC20 token.
   */
  ckerc20_ledger_id: Principal;
  /**
   * Ethereum address to withdraw to.
   */
  recipient: string;
  /**
   * The subaccount to burn ckETH from to pay for the transaction fee.
   */
  from_cketh_subaccount: [] | [Subaccount];
  /**
   * The subaccount to burn ckERC20 from.
   */
  from_ckerc20_subaccount: [] | [Subaccount];
  /**
   * Amount of tokens to withdraw.
   * The amount is in the smallest unit of the token, e.g.,
   * ckUSDC uses 6 decimals and so to withdraw 1 ckUSDC, the amount should be 1_000_000.
   */
  amount: bigint;
}
export type WithdrawErc20Error =
  | {
      /**
       * The user provided ckERC20 token is not supported by the minter.
       */
      TokenNotSupported: { supported_tokens: Array<CkErc20Token> };
    }
  | {
      /**
       * The minter is temporarily unavailable, retry the request.
       * The payload contains a human-readable message explaining what caused the unavailability.
       */
      TemporarilyUnavailable: string;
    }
  | {
      /**
       * The minter could not burn the requested amount of ckERC20 tokens.
       * The `cketh_block_index` identifies the burn that occurred on the ckETH ledger and that will be reimbursed.
       */
      CkErc20LedgerError: {
        error: LedgerError;
        cketh_block_index: bigint;
      };
    }
  | {
      /**
       * The minter could not burn the required amount of ckETH to pay for the transaction fees.
       */
      CkEthLedgerError: { error: LedgerError };
    }
  | {
      /**
       * Recipient's address is blocked.
       * No withdrawal can be made to that address.
       */
      RecipientAddressBlocked: { address: string };
    };
export interface WithdrawalArg {
  /**
   * The address to which the minter should deposit ETH.
   */
  recipient: string;
  /**
   * The subaccount to burn ckETH from.
   */
  from_subaccount: [] | [Subaccount];
  /**
   * The amount of ckETH in Wei that the client wants to withdraw.
   */
  amount: bigint;
}
/**
 * Details of a withdrawal request and its status.
 */
export interface WithdrawalDetail {
  /**
   * Withdrawal status
   */
  status: WithdrawalStatus;
  /**
   * Symbol of the withdrawal token (either ckETH or ckERC20 token symbol).
   */
  token_symbol: string;
  /**
   * Amount of tokens in base unit that was withdrawn.
   */
  withdrawal_amount: bigint;
  /**
   * Withdrawal id (i.e. burn index on the ckETH ledger).
   */
  withdrawal_id: bigint;
  /**
   * Sender's principal.
   */
  from: Principal;
  /**
   * Sender's subaccount (if given).
   */
  from_subaccount: [] | [Uint8Array | number[]];
  /**
   * Max transaction fee in Wei (transaction fee paid by the sender).
   */
  max_transaction_fee: [] | [bigint];
  /**
   * Address to send tokens to.
   */
  recipient_address: string;
}
export type WithdrawalError =
  | {
      /**
       * The minter or the ckETH ledger is temporarily unavailable, retry the request.
       * The payload contains a human-readable message explaining what caused the unavailability.
       */
      TemporarilyUnavailable: string;
    }
  | {
      /**
       * The allowance given to the minter is too low.
       */
      InsufficientAllowance: { allowance: bigint };
    }
  | {
      /**
       * The withdrawal amount is too low.
       * The payload contains the minimal withdrawal amount.
       */
      AmountTooLow: { min_withdrawal_amount: bigint };
    }
  | {
      /**
       * Recipient's address is blocked.
       * No withdrawal can be made to that address.
       */
      RecipientAddressBlocked: { address: string };
    }
  | {
      /**
       * The ckETH balance of the withdrawal account is too low.
       */
      InsufficientFunds: { balance: bigint };
    };
/**
 * Search parameter for withdrawals.
 */
export type WithdrawalSearchParameter =
  | {
      /**
       * Search by recipient's ETH address.
       */
      ByRecipient: string;
    }
  | {
      /**
       * Search by sender's token account.
       */
      BySenderAccount: Account;
    }
  | {
      /**
       * Search by ckETH burn index (which is also used to index ckERC20 withdrawals).
       */
      ByWithdrawalId: bigint;
    };
/**
 * Status of a withdrawal request.
 */
export type WithdrawalStatus =
  | {
      /**
       * Transaction already finalized.
       */
      TxFinalized: TxFinalizedStatus;
    }
  | {
      /**
       * Transaction sent but not yet finalized.
       */
      TxSent: EthTransaction;
    }
  | {
      /**
       * Transaction created byt not yet sent.
       */
      TxCreated: null;
    }
  | {
      /**
       * Request is pending, i.e. transaction is not yet created.
       */
      Pending: null;
    };
export interface _SERVICE {
  /**
   * Add a ckERC-20 token to be supported by the minter.
   * This call is restricted to the orchestrator ID.
   */
  add_ckerc20_token: ActorMethod<[AddCkErc20Token], undefined>;
  /**
   * Estimate the price of a transaction issued by the minter when converting ckETH to ETH.
   */
  eip_1559_transaction_price: ActorMethod<
    [[] | [Eip1559TransactionPriceArg]],
    Eip1559TransactionPrice
  >;
  /**
   * Retrieve the status of the minter canister.
   */
  get_canister_status: ActorMethod<[], CanisterStatusResponse>;
  /**
   * Retrieve events from the minter's audit log.
   * The endpoint can return fewer events than requested to bound the response size.
   * IMPORTANT: this endpoint is meant as a debugging tool and is not guaranteed to be backwards-compatible.
   */
  get_events: ActorMethod<
    [{ start: bigint; length: bigint }],
    { total_event_count: bigint; events: Array<Event> }
  >;
  /**
   * Returns internal minter parameters
   */
  get_minter_info: ActorMethod<[], MinterInfo>;
  /**
   * Check if an address is blocked by the minter.
   */
  is_address_blocked: ActorMethod<[string], boolean>;
  /**
   * Retrieve the Ethereum address controlled by the minter:
   * * Deposits will be transferred from the helper smart contract to this address
   * * Withdrawals will originate from this address
   * IMPORTANT: Do NOT send ETH to this address directly. Use the helper smart contract instead so that the minter
   * knows to which IC principal the funds should be deposited.
   */
  minter_address: ActorMethod<[], string>;
  /**
   * Retrieve the status of a Eth withdrawal request.
   */
  retrieve_eth_status: ActorMethod<[bigint], RetrieveEthStatus>;
  /**
   * Address of the helper smart contract.
   * Returns "N/A" if the helper smart contract is not set.
   * IMPORTANT:
   * * Use this address to send ETH to the minter to convert it to ckETH.
   * * In case the smart contract needs to be updated the returned address will change!
   * Always check the address before making a transfer.
   */
  smart_contract_address: ActorMethod<[], string>;
  /**
   * Withdraw the specified amount of ERC-20 tokens to the given Ethereum address.
   */
  withdraw_erc20: ActorMethod<
    [WithdrawErc20Arg],
    { Ok: RetrieveErc20Request } | { Err: WithdrawErc20Error }
  >;
  /**
   * Withdraw the specified amount in Wei to the given Ethereum address.
   * IMPORTANT: The current gas limit is set to 21,000 for a transaction so withdrawals to smart contract addresses will likely fail.
   */
  withdraw_eth: ActorMethod<
    [WithdrawalArg],
    { Ok: RetrieveEthRequest } | { Err: WithdrawalError }
  >;
  /**
   * Return details of all withdrawals matching the given search parameter.
   */
  withdrawal_status: ActorMethod<
    [WithdrawalSearchParameter],
    Array<WithdrawalDetail>
  >;
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
