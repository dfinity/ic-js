import { Canister, createServices, toNullable } from "@dfinity/utils";
import type { _SERVICE as CkBTCMinterService } from "../candid/minter";
import { idlFactory as certifiedIdlFactory } from "../candid/minter.certified.idl";
import { idlFactory } from "../candid/minter.idl";
import type { CkBTCMinterCanisterOptions } from "./types/canister.options";
import type { GetBTCAddressParams } from "./types/minter.params";

export class CkBTCMinterCanister extends Canister<CkBTCMinterService> {
  static create(options: CkBTCMinterCanisterOptions<CkBTCMinterService>) {
    const { service, certifiedService, canisterId } =
      createServices<CkBTCMinterService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new CkBTCMinterCanister(canisterId, service, certifiedService);
  }

  /**
   * Returns a BTC address for a given account.
   *
   * Note: an update call is required by the Minter canister.
   *
   * @param {GetBTCAddressParams} params The parameters for which a BTC address should be resolved.
   * @param {Principal} params.owner The owner for which the BTC address should be generated. If not provided, the `caller` will be use instead.
   * @param {Principal} params.subaccount An optional subaccount to compute the address.
   * @returns {Promise<string>} The BTC address of the given account.
   */
  getBtcAddress = (params: GetBTCAddressParams): Promise<string> =>
    this.caller({ certified: true }).get_btc_address({
      owner: toNullable(params.owner),
      subaccount: toNullable(params.subaccount),
    });
}
