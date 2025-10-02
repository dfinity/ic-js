import type { ActorMethod } from "@dfinity/agent";
import type { IDL } from "@dfinity/candid";
import type { Principal } from "@dfinity/principal";

export interface AddErc20Arg {
  contract: Erc20Contract;
  ledger_init_arg: LedgerInitArg;
}
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
export interface CyclesManagement {
  /**
   * Number of cycles to add to a canister managed by the orchestrator whose cycles balance is running low.
   */
  cycles_top_up_increment: bigint;
  /**
   * Number of cycles when creating a new ICRC1 ledger canister.
   */
  cycles_for_ledger_creation: bigint;
  /**
   * Number of cycles when creating a new ICRC1 archive canister.
   */
  cycles_for_archive_creation: bigint;
  /**
   * Number of cycles when creating a new ICRC1 index canister.
   */
  cycles_for_index_creation: bigint;
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
export interface Erc20Contract {
  chain_id: bigint;
  address: string;
}
export interface InitArg {
  /**
   * Controls the cycles management of the canisters managed by the orchestrator.
   */
  cycles_management: [] | [CyclesManagement];
  /**
   * All canisters that will be spawned off by the orchestrator will be controlled by the orchestrator
   * and *additionally* by the following controllers.
   */
  more_controller_ids: Array<Principal>;
  /**
   * Canister ID of the minter that will be notified when new ERC-20 tokens are added.
   */
  minter_id: [] | [Principal];
}
export interface InstalledCanister {
  canister_id: Principal;
  installed_wasm_hash: string;
}
export interface InstalledLedgerSuite {
  /**
   * Token symbol on the ledger
   */
  token_symbol: string;
  /**
   * Ledger canister
   */
  ledger: InstalledCanister;
  /**
   * Index canister
   */
  index: InstalledCanister;
  /**
   * List of archive canister ids
   */
  archives: [] | [Array<Principal>];
}
/**
 * ICRC1 ledger initialization argument that will be used when the orchestrator spawns a new ledger canister.
 * Other fields, such as `archive_options`, needed to initialize a new ledger will be set by the orchestrator.
 */
export interface LedgerInitArg {
  decimals: number;
  token_symbol: string;
  transfer_fee: bigint;
  token_logo: string;
  token_name: string;
}
export interface LedgerSuiteVersion {
  /**
   * Hexadecimal encoding of the SHA2-256 archive compressed wasm hash, e.g.,
   * "e59ec306ef67d0ec2e8919e8f6366aff31c666346e238d07d52f616bef61ccab".
   */
  archive_compressed_wasm_hash: string;
  /**
   * Hexadecimal encoding of the SHA2-256 ledger compressed wasm hash, e.g.,
   * "3148f7a9f1b0ee39262c8abe3b08813480cf78551eee5a60ab1cf38433b5d9b0".
   * This exact version will be used to spawn off a new ledger canister when an ERC-20 token is added.
   */
  ledger_compressed_wasm_hash: string;
  /**
   * Hexadecimal encoding of the SHA2-256 index compressed wasm hash, e.g.,
   * "3a6d39b5e94cdef5203bca62720e75a28cd071ff434d22b9746403ac7ae59614".
   * This exact version will be used to spawn off a new index canister when an ERC-20 token is added.
   */
  index_compressed_wasm_hash: string;
}
export type LogVisibility =
  | { controllers: null }
  | { public: null }
  | { allowed_viewers: Array<Principal> };
export interface ManagedCanisterIds {
  ledger: [] | [Principal];
  index: [] | [Principal];
  archives: Array<Principal>;
}
export type ManagedCanisterStatus =
  | {
      /**
       * Canister created with the given principal but wasm module is not yet installed.
       */
      Created: { canister_id: Principal };
    }
  | {
      /**
       * Canister created and wasm module installed.
       * The wasm_hash reflects the installed wasm module by the orchestrator
       * but *may differ* from the one being currently deployed (if another controller did an upgrade)
       */
      Installed: { canister_id: Principal; installed_wasm_hash: string };
    };
export interface ManagedCanisters {
  /**
   * Corresponding ERC20 contract
   */
  erc20_contract: Erc20Contract;
  /**
   * Status of the ledger canister
   */
  ledger: [] | [ManagedCanisterStatus];
  /**
   * Status of the index canister
   */
  index: [] | [ManagedCanisterStatus];
  /**
   * List of archive canister ids
   */
  archives: Array<Principal>;
  /**
   * ckERC20 Token symbol
   */
  ckerc20_token_symbol: string;
}
export interface ManagedLedgerSuite {
  /**
   * Token symbol
   */
  token_symbol: string;
  /**
   * Status of the ledger canister
   */
  ledger: [] | [ManagedCanisterStatus];
  /**
   * Status of the index canister
   */
  index: [] | [ManagedCanisterStatus];
  /**
   * List of archive canister ids
   */
  archives: Array<Principal>;
}
/**
 * Generated from IC repo commit 206b61a (2025-09-25 tags: release-2025-09-25_09-52-base) 'rs/ethereum/ledger-suite-orchestrator/ledger_suite_orchestrator.did' by import-candid
 */
export type OrchestratorArg =
  | { UpgradeArg: UpgradeArg }
  | { InitArg: InitArg }
  | { AddErc20Arg: AddErc20Arg };
export interface OrchestratorInfo {
  /**
   * Cycle management parameters.
   */
  cycles_management: CyclesManagement;
  /**
   * List of managed canisters data for each ERC20 contract.
   */
  managed_canisters: Array<ManagedCanisters>;
  /**
   * List of managed ledger suites that were not initially installed by the orchestrator.
   * Those ledger suites are *NOT* necessarily ckERC20 tokens.
   */
  managed_pre_existing_ledger_suites: [] | [Array<ManagedLedgerSuite>];
  /**
   * Additional controllers that new canisters will be spawned with.
   */
  more_controller_ids: Array<Principal>;
  /**
   * Ledger suite version that will be used to spawn off a new ledger suite (ledger and index canisters) when an ERC-20 token is added.
   */
  ledger_suite_version: [] | [LedgerSuiteVersion];
  /**
   * ckETH minter canister id.
   */
  minter_id: [] | [Principal];
}
export interface QueryStats {
  response_payload_bytes_total: bigint;
  num_instructions_total: bigint;
  num_calls_total: bigint;
  request_payload_bytes_total: bigint;
}
export interface UpdateCyclesManagement {
  /**
   * Change the number of cycles to add to a canister managed by the orchestrator whose cycles balance is running low.
   */
  cycles_top_up_increment: [] | [bigint];
  /**
   * Change the number of cycles when creating a new ICRC1 ledger canister.
   * Previously created canisters are not affected.
   */
  cycles_for_ledger_creation: [] | [bigint];
  /**
   * Change the number of cycles when creating a new ICRC1 archive canister.
   * Previously created canisters are not affected.
   */
  cycles_for_archive_creation: [] | [bigint];
  /**
   * Change the number of cycles when creating a new ICRC1 index canister.
   * Previously created canisters are not affected.
   */
  cycles_for_index_creation: [] | [bigint];
}
export interface UpgradeArg {
  /**
   * Add already installed ledger suites to the canisters managed by the orchestrator.
   * Those ledger suites are *NOT* necessarily ckERC20 tokens.
   * This assumes that the orchestrator is a controller of all the canisters in the list.
   */
  manage_ledger_suites: [] | [Array<InstalledLedgerSuite>];
  /**
   * Update the cycles management of the canisters managed by the orchestrator.
   */
  cycles_management: [] | [UpdateCyclesManagement];
  /**
   * Hexadecimal encoding of the SHA2-256 archive compressed wasm hash, e.g.,
   * "b24812976b2cc64f12faf813cf592631f3062bfda837334f77ab807361d64e82".
   * This exact version will be used for upgrading all existing archive canisters managed by the orchestrator.
   * Leaving this field empty will not upgrade the archive canisters.
   */
  archive_compressed_wasm_hash: [] | [string];
  /**
   * Hexadecimal encoding of the SHA-1 git commit hash used for this upgrade, e.g.,
   * "51d01d3936498d4010de54505d6433e9ad5cc62b", corresponding to a git revision in the
   * [IC repository](https://github.com/dfinity/ic).
   * If this field is present, the orchestrator will register all embedded wasms (ledger, index, and archive) in its stable memory,
   * so that those exact wasms can be used to upgrade managed canisters as specified below.
   */
  git_commit_hash: [] | [string];
  /**
   * Hexadecimal encoding of the SHA2-256 ledger compressed wasm hash, e.g.,
   * "3148f7a9f1b0ee39262c8abe3b08813480cf78551eee5a60ab1cf38433b5d9b0".
   * This exact version will be used for upgrading all existing ledger canisters managed by the orchestrator.
   * Leaving this field empty will not upgrade the ledger canisters.
   */
  ledger_compressed_wasm_hash: [] | [string];
  /**
   * Hexadecimal encoding of the SHA2-256 index compressed wasm hash, e.g.,
   * "3a6d39b5e94cdef5203bca62720e75a28cd071ff434d22b9746403ac7ae59614".
   * This exact version will be used for upgrading all existing index canisters managed by the orchestrator.
   * Leaving this field empty will not upgrade the index canisters.
   */
  index_compressed_wasm_hash: [] | [string];
}
export interface _SERVICE {
  /**
   * Managed canister IDs for a given ERC20 contract
   */
  canister_ids: ActorMethod<[Erc20Contract], [] | [ManagedCanisterIds]>;
  /**
   * Retrieve the status of the canister.
   */
  get_canister_status: ActorMethod<[], CanisterStatusResponse>;
  /**
   * Return internal orchestrator parameters
   */
  get_orchestrator_info: ActorMethod<[], OrchestratorInfo>;
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
