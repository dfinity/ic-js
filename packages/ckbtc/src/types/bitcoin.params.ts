import { nonNullish, toNullable, type QueryParams } from "@dfinity/utils";
import type {
  get_balance_request,
  get_utxos_request,
  network,
} from "../../candid/bitcoin";

export type BitcoinNetwork = "testnet" | "mainnet";

const mapBitcoinNetwork = (network: BitcoinNetwork): network =>
  network === "testnet" ? { testnet: null } : { mainnet: null };

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

export type GetBalanceParams = Omit<
  get_balance_request,
  "network" | "min_confirmations"
> & {
  network: BitcoinNetwork;
  min_confirmations?: number;
} & QueryParams;

export const toGetBalanceParams = ({
  network,
  min_confirmations,
  ...rest
}: GetBalanceParams): get_balance_request => ({
  min_confirmations: toNullable(min_confirmations),
  network: mapBitcoinNetwork(network),
  ...rest,
});
