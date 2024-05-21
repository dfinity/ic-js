import type { ActorMethod } from "@dfinity/agent";
import type { IDL } from "@dfinity/candid";
import type { Principal } from "@dfinity/principal";

export interface AddErc20Arg {
  contract: Erc20Contract;
  ledger_init_arg: LedgerInitArg;
  git_commit_hash: string;
  ledger_compressed_wasm_hash: string;
  index_compressed_wasm_hash: string;
}
export interface CyclesManagement {
  cycles_top_up_increment: bigint;
  cycles_for_ledger_creation: bigint;
  cycles_for_archive_creation: bigint;
  cycles_for_index_creation: bigint;
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
export interface LedgerAccount {
  owner: Principal;
  subaccount: [] | [LedgerSubaccount];
}
export interface LedgerFeatureFlags {
  icrc2: boolean;
}
export interface LedgerInitArg {
  decimals: [] | [number];
  token_symbol: string;
  transfer_fee: bigint;
  minting_account: LedgerAccount;
  initial_balances: Array<[LedgerAccount, bigint]>;
  maximum_number_of_accounts: [] | [bigint];
  accounts_overflow_trim_quantity: [] | [bigint];
  fee_collector_account: [] | [LedgerAccount];
  max_memo_length: [] | [number];
  token_logo: string;
  token_name: string;
  feature_flags: [] | [LedgerFeatureFlags];
}
export type LedgerSubaccount = Uint8Array | number[];
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
  minter_id: [] | [Principal];
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
  get_orchestrator_info: ActorMethod<[], OrchestratorInfo>;
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
