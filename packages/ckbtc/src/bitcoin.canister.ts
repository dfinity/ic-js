import { Canister, createServices } from "@dfinity/utils";
import type {
  _SERVICE as BitcoinService,
  get_utxos_response,
  satoshi,
} from "../candid/bitcoin";
import { idlFactory as certifiedIdlFactory } from "../candid/bitcoin.certified.idl";
import { idlFactory } from "../candid/bitcoin.idl";
import {
  toGetBalanceParams,
  toGetUtxosParams,
  type GetBalanceParams,
  type GetUtxosParams,
} from "./types/bitcoin.params";
import type { CkBTCCanisterOptions } from "./types/canister.options";

export class BitcoinCanister extends Canister<BitcoinService> {
  static create(options: CkBTCCanisterOptions<BitcoinService>) {
    const { service, certifiedService, canisterId } =
      createServices<BitcoinService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new BitcoinCanister(canisterId, service, certifiedService);
  }

  /**
   * Given a `get_utxos_request`, which must specify a Bitcoin address and a Bitcoin network (`mainnet` or `testnet`), the function returns all unspent transaction outputs (UTXOs) associated with the provided address in the specified Bitcoin network based on the current view of the Bitcoin blockchain available to the Bitcoin component.
   *
   * @link https://internetcomputer.org/docs/current/references/ic-interface-spec#ic-bitcoin_get_utxos
   *
   * @param {Object} params
   * @param {BitcoinNetwork} params.network Tesnet or mainnet.
   * @param {Object} params.filter The optional filter parameter can be used to restrict the set of returned UTXOs, either providing a minimum number of confirmations or a page reference when pagination is used for addresses with many UTXOs.
   * @param {string} params.address A Bitcoin address.
   * @param {boolean} params.certified query or update call
   * @returns {Promise<bitcoin_get_utxos_result>} The UTXOs are returned sorted by block height in descending order.
   */
  getUtxos = ({
    certified = true,
    ...params
  }: GetUtxosParams): Promise<get_utxos_response> => {
    const { bitcoin_get_utxos, bitcoin_get_utxos_query } = this.caller({
      certified,
    });
    const fn = certified ? bitcoin_get_utxos : bitcoin_get_utxos_query;
    return fn(toGetUtxosParams(params));
  };

  /**
   * Given a `get_utxos_request`, which must specify a Bitcoin address and a Bitcoin network (`mainnet` or `testnet`), the function returns the current balance of this address in `Satoshi` (10^8 Satoshi = 1 Bitcoin) in the specified Bitcoin network.
   *
   * @link https://internetcomputer.org/docs/current/references/ic-interface-spec#ic-bitcoin_get_utxos
   *
   * @param {Object} params
   * @param {BitcoinNetwork} params.network Tesnet or mainnet.
   * @param {Object} params.minConfirmations The optional filter parameter can be used to limit the set of considered UTXOs for the calculation of the balance to those with at least the provided number of confirmations in the same manner as for the `bitcoin_get_utxos` call.
   * @param {string} params.address A Bitcoin address.
   * @param {boolean} params.certified query or update call
   * @returns {Promise<satoshi>} The balance is returned in `Satoshi` (10^8 Satoshi = 1 Bitcoin).
   */
  getBalance = ({
    certified = true,
    ...params
  }: GetBalanceParams): Promise<satoshi> => {
    const { bitcoin_get_balance, bitcoin_get_balance_query } = this.caller({
      certified,
    });
    const fn = certified ? bitcoin_get_balance : bitcoin_get_balance_query;
    return fn(toGetBalanceParams(params));
  };
}
