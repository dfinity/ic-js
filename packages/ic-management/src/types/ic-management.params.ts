import { Principal } from "@dfinity/principal";
import { toNullable } from "@dfinity/utils";
import type {
  bitcoin_get_utxos_args,
  bitcoin_get_utxos_query_args,
  canister_install_mode,
  canister_settings,
  chunk_hash,
  upload_chunk_args,
} from "../../candid/ic-management";

export interface CanisterSettings {
  controllers?: string[];
  freezingThreshold?: bigint;
  memoryAllocation?: bigint;
  computeAllocation?: bigint;
  reservedCyclesLimit?: bigint;
}

export const toCanisterSettings = ({
  controllers,
  freezingThreshold,
  memoryAllocation,
  computeAllocation,
  reservedCyclesLimit,
}: CanisterSettings = {}): canister_settings => {
  return {
    controllers: toNullable(controllers?.map((c) => Principal.fromText(c))),
    freezing_threshold: toNullable(freezingThreshold),
    memory_allocation: toNullable(memoryAllocation),
    compute_allocation: toNullable(computeAllocation),
    reserved_cycles_limit: toNullable(reservedCyclesLimit),
  };
};

export interface CreateCanisterParams {
  settings?: CanisterSettings;
  senderCanisterVersion?: bigint;
}

export interface UpdateSettingsParams {
  canisterId: Principal;
  senderCanisterVersion?: bigint;
  settings: CanisterSettings;
}

export enum InstallMode {
  Install,
  Reinstall,
  Upgrade,
}

export const toInstallMode = (
  installMode: InstallMode,
): canister_install_mode => {
  switch (installMode) {
    case InstallMode.Install:
      return { install: null };
    case InstallMode.Reinstall:
      return { reinstall: null };
    case InstallMode.Upgrade:
      // TODO: Support Upgrade mode skipping pre-upgrade
      // `upgrade` can also have `[{ skip_pre_upgrade: [] | [boolean] }]`
      return { upgrade: [] };
  }
};

export interface InstallCodeParams {
  mode: InstallMode;
  canisterId: Principal;
  wasmModule: Uint8Array;
  arg: Uint8Array;
  senderCanisterVersion?: bigint;
}

export interface UploadChunkParams extends Pick<upload_chunk_args, "chunk"> {
  canisterId: Principal;
}

export interface ClearChunkStoreParams {
  canisterId: Principal;
}

export interface StoredChunksParams {
  canisterId: Principal;
}

export interface InstallChunkedCodeParams
  extends Omit<InstallCodeParams, "canisterId" | "wasmModule"> {
  chunkHashesList: Array<chunk_hash>;
  targetCanisterId: Principal;
  storeCanisterId?: Principal;
  wasmModuleHash: string | Uint8Array | number[];
}

export interface UninstallCodeParams {
  canisterId: Principal;
  senderCanisterVersion?: bigint;
}

export interface CanisterInfoParams {
  canisterId: Principal;
  numRequestChanges?: bigint;
}

export interface ProvisionalCreateCanisterWithCyclesParams {
  amount?: bigint;
  settings?: CanisterSettings;
  canisterId?: Principal;
}

export interface ProvisionalTopUpCanisterParams {
  canisterId: Principal;
  amount: bigint;
}

export type BitcoinNetwork = "testnet" | "mainnet";

export type BitcoinGetUtxosParams = Omit<
  bitcoin_get_utxos_args,
  "network" | "filter"
> & {
  network: BitcoinNetwork;
  filter?: { page: Uint8Array | number[] } | { min_confirmations: number };
};

export type BitcoinGetUtxosQueryParams = Omit<
  bitcoin_get_utxos_query_args,
  "network" | "filter"
> & {
  network: BitcoinNetwork;
  filter?: { page: Uint8Array | number[] } | { min_confirmations: number };
};

export const toBitcoinGetUtxosParams = <
  T extends BitcoinGetUtxosParams | BitcoinGetUtxosQueryParams,
>({
  network,
  filter,
  ...rest
}: T): bitcoin_get_utxos_args | bitcoin_get_utxos_query_args => ({
  filter: toNullable(filter),
  network: network === "testnet" ? { testnet: null } : { mainnet: null },
  ...rest,
});
