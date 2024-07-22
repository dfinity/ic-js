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
  cycles_top_up_increment: bigint;
  cycles_for_ledger_creation: bigint;
  cycles_for_archive_creation: bigint;
  cycles_for_index_creation: bigint;
}
export interface DefiniteCanisterSettings {
  freezing_threshold: bigint;
  controllers: Array<Principal>;
  reserved_cycles_limit: bigint;
  memory_allocation: bigint;
  compute_allocation: bigint;
}
export interface Erc20Contract {
  chain_id: bigint;
  address: string;
}
export interface InitArg {
  cycles_management: [] | [CyclesManagement];
  more_controller_ids: Array<Principal>;
  minter_id: [] | [Principal];
}
export interface LedgerInitArg {
  decimals: number;
  token_symbol: string;
  transfer_fee: bigint;
  token_logo: string;
  token_name: string;
}
export interface LedgerSuiteVersion {
  archive_compressed_wasm_hash: string;
  ledger_compressed_wasm_hash: string;
  index_compressed_wasm_hash: string;
}
export interface ManagedCanisterIds {
  ledger: [] | [Principal];
  index: [] | [Principal];
  archives: Array<Principal>;
}
export type ManagedCanisterStatus =
  | {
      Created: { canister_id: Principal };
    }
  | {
      Installed: { canister_id: Principal; installed_wasm_hash: string };
    };
export interface ManagedCanisters {
  erc20_contract: Erc20Contract;
  ledger: [] | [ManagedCanisterStatus];
  index: [] | [ManagedCanisterStatus];
  archives: Array<Principal>;
  ckerc20_token_symbol: string;
}
export type OrchestratorArg =
  | { UpgradeArg: UpgradeArg }
  | { InitArg: InitArg }
  | { AddErc20Arg: AddErc20Arg };
export interface OrchestratorInfo {
  cycles_management: CyclesManagement;
  managed_canisters: Array<ManagedCanisters>;
  more_controller_ids: Array<Principal>;
  ledger_suite_version: [] | [LedgerSuiteVersion];
  minter_id: [] | [Principal];
}
export interface QueryStats {
  response_payload_bytes_total: bigint;
  num_instructions_total: bigint;
  num_calls_total: bigint;
  request_payload_bytes_total: bigint;
}
export interface UpdateCyclesManagement {
  cycles_top_up_increment: [] | [bigint];
  cycles_for_ledger_creation: [] | [bigint];
  cycles_for_archive_creation: [] | [bigint];
  cycles_for_index_creation: [] | [bigint];
}
export interface UpgradeArg {
  cycles_management: [] | [UpdateCyclesManagement];
  archive_compressed_wasm_hash: [] | [string];
  git_commit_hash: [] | [string];
  ledger_compressed_wasm_hash: [] | [string];
  index_compressed_wasm_hash: [] | [string];
}
export interface _SERVICE {
  canister_ids: ActorMethod<[Erc20Contract], [] | [ManagedCanisterIds]>;
  get_canister_status: ActorMethod<[], CanisterStatusResponse>;
  get_orchestrator_info: ActorMethod<[], OrchestratorInfo>;
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
