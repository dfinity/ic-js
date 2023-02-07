import type { QueryParams } from "@dfinity/utils";
import { Canister, createServices, fromNullable } from "@dfinity/utils";
import type {
  BuyerState,
  GetBuyerStateRequest,
  GetLifecycleResponse,
  GetStateResponse,
  RefreshBuyerTokensRequest,
  _SERVICE as SnsSwapService,
} from "../candid/sns_swap";
import { idlFactory as certifiedIdlFactory } from "../candid/sns_swap.certified.idl";
import { idlFactory } from "../candid/sns_swap.idl";
import type { SnsCanisterOptions } from "./types/canister.options";

export class SnsSwapCanister extends Canister<SnsSwapService> {
  static create(options: SnsCanisterOptions<SnsSwapService>) {
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

  /**
   * Get user commitment
   */
  getUserCommitment = async (
    params: GetBuyerStateRequest & QueryParams
  ): Promise<BuyerState | undefined> => {
    const { buyer_state } = await this.caller({
      certified: params.certified,
    }).get_buyer_state({ principal_id: params.principal_id });
    return fromNullable(buyer_state);
  };

  /**
   * Get sale lifecycle state
   */
  getLifecycle = async (params: QueryParams): Promise<GetLifecycleResponse> => {
    return this.caller(params).get_lifecycle({});
  };
}
