import { nonNullish, toNullable, type QueryParams } from "@dfinity/utils";
import type { get_utxos_request } from "../../candid/bitcoin";

export type BitcoinNetwork = "testnet" | "mainnet";

export type GetUtxosParams = Omit<get_utxos_request, "network" | "filter"> & {
  network: BitcoinNetwork;
  filter?: { page: Uint8Array | number[] } | { minConfirmations: number };
} & QueryParams;

export const toGetUtxosParams = ({
  network,
  filter,
  ...rest
}: GetUtxosParams): get_utxos_request => ({
  filter: nonNullish(filter)
    ? toNullable(
        "minConfirmations" in filter
          ? { min_confirmations: filter.minConfirmations }
          : { page: filter.page },
      )
    : toNullable(),
  network: network === "testnet" ? { testnet: null } : { mainnet: null },
  ...rest,
});
