import type {
  GetStateResponse,
  RefreshBuyerTokensRequest,
  _SERVICE as SnsSwapService,
} from "../candid/sns_swap";
import { idlFactory as certifiedIdlFactory } from "../candid/sns_swap.certified.idl";
import { idlFactory } from "../candid/sns_swap.idl";
import { Canister } from "./services/canister";
import type { CanisterOptions } from "./types/canister.options";
import type { QueryParams } from "./types/query.params";
import { createServices } from "./utils/actor.utils";

export class SnsSwapCanister extends Canister<SnsSwapService> {
  static create(options: CanisterOptions<SnsSwapService>) {
    const { service, certifiedService, canisterId } =
      createServices<SnsSwapService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new SnsSwapCanister(canisterId, service, certifiedService);
  }

  /**
   * Get the state of the swap
   */
  state = (params: QueryParams): Promise<GetStateResponse> =>
    this.caller(params).get_state({});

  /**
   * Notify of the user participating in the swap
   */
  notifyParticipation = async (
    params: RefreshBuyerTokensRequest
  ): Promise<void> => {
    await this.caller({ certified: true }).refresh_buyer_tokens(params);
  };
}
