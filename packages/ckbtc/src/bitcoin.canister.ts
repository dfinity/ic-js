import { Canister, createServices } from "@dfinity/utils";
import type {
  _SERVICE as BitcoinService,
  get_utxos_response,
} from "../candid/bitcoin";
import { idlFactory as certifiedIdlFactory } from "../candid/bitcoin.certified.idl";
import { idlFactory } from "../candid/bitcoin.idl";
import { toGetUtxosParams, type GetUtxosParams } from "./types/bitcoin.params";
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
}
