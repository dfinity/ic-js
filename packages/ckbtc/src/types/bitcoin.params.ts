import { toNullable, type QueryParams } from "@dfinity/utils";
import type {
  get_balance_request,
  get_utxos_request,
} from "../../candid/bitcoin";
import { parseBitcoinNetwork } from "../utils/btc.utils";

export type BitcoinNetwork = "testnet" | "mainnet";

export type GetUtxosParams = Omit<get_utxos_request, "network" | "filter"> & {
  network: BitcoinNetwork;
  filter?: { page: Uint8Array | number[] } | { min_confirmations: number };
} & QueryParams;

export const toGetUtxosParams = ({
  network,
  filter,
  ...rest
}: GetUtxosParams): get_utxos_request => ({
  filter: toNullable(filter),
  network: parseBitcoinNetwork(network),
  ...rest,
});

export type GetBalanceParams = Omit<
  get_balance_request,
  "network" | "min_confirmations"
> & {
  network: BitcoinNetwork;
  minConfirmations?: number;
} & QueryParams;

export const toGetBalanceParams = ({
  network,
  minConfirmations,
  ...rest
}: GetBalanceParams): get_balance_request => ({
  min_confirmations: toNullable(minConfirmations),
  network: parseBitcoinNetwork(network),
  ...rest,
});
