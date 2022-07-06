import type { Principal } from "@dfinity/principal";
import type {
  CanisterStatusResultV2,
  _SERVICE as SnsRootCanister,
} from "../candid/sns_root";
import { idlFactory as certifiedIdlFactory } from "../candid/sns_root.certified.idl";
import { idlFactory } from "../candid/sns_root.idl";
import type { CanisterOptions } from "./types/canister.options";
import { createServices } from "./utils/actor.utils";

export class RootCanister {
  private constructor(
    private readonly service: SnsRootCanister,
    private readonly certifiedService: SnsRootCanister
  ) {}

  public static create(options: CanisterOptions<SnsRootCanister>) {
    const { service, certifiedService } = createServices<SnsRootCanister>({
      options,
      idlFactory,
      certifiedIdlFactory,
    });

    return new RootCanister(service, certifiedService);
  }

  // Source code: https://github.com/dfinity/ic/blob/master/rs/sns/root/src/lib.rs

  /**
   * List and get a summary of the canisters that are part of the Sns.
   *
   * Source code: https://github.com/dfinity/ic/blob/master/rs/sns/root/src/lib.rs
   *
   * @param {boolean} [certified=true] - Query or update calls
   * @param {Principal[]} additionalCanisterIds - An optional list of additional canister ids whose status would also have to be requested and added to the returned list
   *
   * @returns {Array<[string, Principal, CanisterStatusResultV2]>} - A list of canisters with type ('root' | 'governance' | 'ledger' | 'dapp' | 'sale'), id and status
   */
  public canistersSummary = async ({
    certified = true,
    additionalCanisterIds,
  }: {
    certified?: boolean;
    additionalCanisterIds?: Principal[];
  }): Promise<Array<[string, Principal, CanisterStatusResultV2]>> => {
    // TODO(NNS1-1519): Currently support only certified calls - we need query calls for nns-dapp too (as we used both to offer best user experience)
    const service = certified ? this.certifiedService : this.service;

    // TODO(NNS1-1487): Sale canister ID is currently not fetched and listed among the results
    return service.get_sns_canisters_summary(additionalCanisterIds ?? []);
  };
}
