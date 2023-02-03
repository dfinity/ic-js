import { Principal } from "@dfinity/principal";
import type { QueryParams } from "@dfinity/utils";
import { Canister, createServices, fromNullable } from "@dfinity/utils";
import type {
  BuyerState,
  GetBuyerStateRequest,
  GetOpenTicketResponse,
  GetStateResponse,
  NewSaleTicketResponse,
  RefreshBuyerTokensRequest,
  Ticket,
  _SERVICE as SnsSwapService,
} from "../candid/sns_swap";
import { idlFactory as certifiedIdlFactory } from "../candid/sns_swap.certified.idl";
import { idlFactory } from "../candid/sns_swap.idl";
import type { SnsCanisterOptions } from "./types/canister.options";
import type { NewSaleTicketParams } from "./types/swap.params";

const mockPrincipal = Principal.fromText(
  "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe"
);
const mockSubaccount = Uint8Array.from([
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1,
]);
const createTicket = (): Ticket => ({
  creation_time: BigInt(Date.now()),
  ticket_id: 123n,
  account: [
    {
      owner: [mockPrincipal],
      subaccount: [mockSubaccount],
    },
  ],
  amount_icp_e8s: 1234567890n,
});

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
   * Return a sale ticket if created and not yet removed (payment flow)
   */
  getOpenTicket = async (
    params: { withTicket: boolean } & QueryParams
  ): Promise<GetOpenTicketResponse> => {
    // const response = await this.caller({ certified: params.certified }).get_open_ticket({});

    await new Promise((f) => setTimeout(f, 500));

    return {
      result: [
        {
          Ok: {
            ticket: params.withTicket ? [createTicket()] : [],
          },
        },
      ],
    };
  };

  /**
   * Create a sale ticket (payment flow)
   */
  newSaleTicket = async (
    params: NewSaleTicketParams
  ): Promise<NewSaleTicketResponse> => {
    // const request = toNewSaleTicketRequest(params);
    // return await this.caller({ certified: true }).new_sale_ticket(request);

    await new Promise((f) => setTimeout(f, 500));

    return {
      result: [
        {
          Ok: {
            ticket: [createTicket()],
          },
        },
      ],
    };
  };
}
