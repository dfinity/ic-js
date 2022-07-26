import type {
  BuyerState,
  GetBuyerStateRequest,
  GetStateResponse,
  RefreshBuyerTokensRequest,
  _SERVICE as SnsSwapCanister,
} from "../candid/sns_swap";
import { idlFactory as certifiedIdlFactory } from "../candid/sns_swap.certified.idl";
import { idlFactory } from "../candid/sns_swap.idl";
import { Canister } from "./services/canister";
import type { CanisterOptions } from "./types/canister.options";
import type { QueryParams } from "./types/query.params";
import { createServices } from "./utils/actor.utils";

export class SwapCanister extends Canister<SnsSwapCanister> {
  static create(options: CanisterOptions<SnsSwapCanister>) {
    const { service, certifiedService, canisterId } =
      createServices<SnsSwapCanister>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new SwapCanister(canisterId, service, certifiedService);
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

  /**
   * Get user commitment
   */
  getUserCommitment = async (
    params: GetBuyerStateRequest & QueryParams
  ): Promise<BuyerState | undefined> => {
    const response = await this.caller({
      certified: params.certified,
    }).get_buyer_state({ principal_id: params.principal_id });
    return response.buyer_state[0];
  };
}
