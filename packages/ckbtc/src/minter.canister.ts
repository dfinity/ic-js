import { Canister, createServices, toNullable } from "@dfinity/utils";
import type { _SERVICE as CkBTCMinterService } from "../candid/minter";
import { UpdateBalanceResult } from "../candid/minter";
import { idlFactory as certifiedIdlFactory } from "../candid/minter.certified.idl";
import { idlFactory } from "../candid/minter.idl";
import { createUpdateBalanceError } from "./errors/minter.errors";
import type { CkBTCMinterCanisterOptions } from "./types/canister.options";
import type {
  GetBTCAddressParams,
  UpdateBalanceParams,
} from "./types/minter.params";
import type { UpdateBalanceResponse } from "./types/minter.responses";

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
  getBtcAddress = ({
    owner,
    subaccount,
  }: GetBTCAddressParams): Promise<string> =>
    this.caller({ certified: true }).get_btc_address({
      owner: toNullable(owner),
      subaccount: toNullable(subaccount),
    });

  /**
   * Notify the minter about the bitcoin transfer.
   *
   * Upon successful notification, new ckBTC should be available on the targeted address.
   *
   * @param {UpdateBalanceParams} params The parameters are the address to which bitcoin where transferred.
   * @param {Principal} params.owner The owner of the address. If not provided, the `caller` will be use instead.
   * @param {Principal} params.subaccount An optional subaccount of the address.
   * @returns {Promise<UpdateBalanceParams>} The result (Ok or Error) of the balance update.
   */
  updateBalance = async ({
    owner,
    subaccount,
  }: UpdateBalanceParams): Promise<UpdateBalanceResult> => {
    const response: UpdateBalanceResponse = await this.caller({
      certified: true,
    }).update_balance({
      owner: toNullable(owner),
      subaccount: toNullable(subaccount),
    });

    if ("Err" in response) {
      throw createUpdateBalanceError(response.Err);
    }

    return response.Ok;
  };
}
