import type { _SERVICE as SnsRootCanister } from "../candid/sns_root";
import type { ListSnsCanistersResponse } from "../candid/sns_root";
import { idlFactory as certifiedIdlFactory } from "../candid/sns_root.certified.idl";
import { idlFactory } from "../candid/sns_root.idl";
import { Canister } from "./services/canister";
import type { CanisterOptions } from "./types/canister.options";
import { createServices } from "./utils/actor.utils";

export class RootCanister extends Canister<SnsRootCanister> {
  static create(options: CanisterOptions<SnsRootCanister>) {
    const { service, certifiedService, canisterId } =
      createServices<SnsRootCanister>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new RootCanister(canisterId, service, certifiedService);
  }

  /**
   * List the canisters that are part of the Sns.
   *
   * Source code: https://github.com/dfinity/ic/blob/master/rs/sns/root/src/lib.rs
   *
   * @param {Object} params
   * @param {boolean} [params.certified=true] - Query or update calls
   *
   * @returns {ListSnsCanistersResponse} - A list of canisters ('root' | 'governance' | 'ledger' | 'dapps' | 'swap' | 'archives')
   */
  listSnsCanisters = async ({
    certified = true,
  }: {
    certified?: boolean;
  }): Promise<ListSnsCanistersResponse> => {
    return this.caller({ certified }).list_sns_canisters({});
  };
}
