import type { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { mock } from "jest-mock-extended";
import type {
  BuyerState,
  GetLifecycleResponse,
  GetOpenTicketResponse,
  GetStateResponse,
  NewSaleTicketResponse,
  Swap,
  _SERVICE as SnsSwapService,
} from "../candid/sns_swap";
import { SnsSwapLifecycle } from "./enums/swap.enums";
import { swapCanisterIdMock } from "./mocks/sns.mock";
import { SnsSwapCanister } from "./swap.canister";

describe("Swap canister", () => {
  afterEach(() => jest.clearAllMocks());

  it("should return the state of the swap canister", async () => {
    const mockSwap: Swap = {
      swap: [
        {
          init: {
            min_participants: 2,
          },
        },
      ],
    } as unknown as Swap;

    const mockResponse: GetStateResponse = {
      swap: [mockSwap],
      derived: [],
    };

    const service = mock<ActorSubclass<SnsSwapService>>();
    service.get_state.mockResolvedValue(mockResponse);

    const canister = SnsSwapCanister.create({
      canisterId: swapCanisterIdMock,
      certifiedServiceOverride: service,
    });
    const res = await canister.state({});
    expect(res).toEqual(mockResponse);
  });

  it("should return open sale ticket", async () => {
    const mockResponse: GetOpenTicketResponse = {
      result: [
        {
          Ok: {
            ticket: [
              {
                creation_time: 1n,
                ticket_id: 2n,
                account: [
                  {
                    owner: [Principal.fromText("aaaaa-aa")],
                    subaccount: [],
                  },
                ],
                amount_icp_e8s: 3n,
              },
            ],
          },
        },
      ],
    };

    const service = mock<ActorSubclass<SnsSwapService>>();
    service.get_open_ticket.mockResolvedValue(mockResponse);

    const canister = SnsSwapCanister.create({
      canisterId: swapCanisterIdMock,
      certifiedServiceOverride: service,
    });
    const res = await canister.getOpenTicket({});
    expect(res).toEqual(mockResponse.result[0]);
  });

  it("should return new sale ticket", async () => {
    const mockResponse: NewSaleTicketResponse = {
      result: [
        {
          Ok: {
            ticket: [
              {
                creation_time: 1n,
                ticket_id: 2n,
                account: [
                  {
                    owner: [Principal.fromText("aaaaa-aa")],
                    subaccount: [],
                  },
                ],
                amount_icp_e8s: 3n,
              },
            ],
          },
        },
      ],
    };

    const service = mock<ActorSubclass<SnsSwapService>>();
    service.new_sale_ticket.mockResolvedValue(mockResponse);

    const canister = SnsSwapCanister.create({
      canisterId: swapCanisterIdMock,
      certifiedServiceOverride: service,
    });
    const res = await canister.newSaleTicket({
      subaccount: Uint8Array.from([]),
      amount_icp_e8s: 3n,
    });
    expect(res).toEqual(mockResponse.result[0]);
  });

  it("should return the lifecycle state of the swap canister", async () => {
    const mockResponse: GetLifecycleResponse = {
      decentralization_sale_open_timestamp_seconds: [BigInt(2)],
      lifecycle: [SnsSwapLifecycle.Adopted],
    };

    const service = mock<ActorSubclass<SnsSwapService>>();
    service.get_lifecycle.mockResolvedValue(mockResponse);

    const canister = SnsSwapCanister.create({
      canisterId: swapCanisterIdMock,
      certifiedServiceOverride: service,
    });
    const res = await canister.getLifecycle({});
    expect(res).toEqual(mockResponse);
  });

  it("should call to notify the buyer tokens", async () => {
    const service = mock<ActorSubclass<SnsSwapService>>();
    service.refresh_buyer_tokens.mockResolvedValue({
      icp_accepted_participation_e8s: BigInt(0),
      icp_ledger_account_balance_e8s: BigInt(0),
    });

    const canister = SnsSwapCanister.create({
      canisterId: swapCanisterIdMock,
      certifiedServiceOverride: service,
    });
    await canister.notifyParticipation({ buyer: "aaaaa-aa" });
    expect(service.refresh_buyer_tokens).toHaveBeenCalledWith({
      buyer: "aaaaa-aa",
    });
  });

  it("should return the user commitment", async () => {
    const buyerState: BuyerState = {
      icp: [
        {
          amount_e8s: BigInt(100000000),
          transfer_start_timestamp_seconds: BigInt(0),
          transfer_success_timestamp_seconds: BigInt(0),
        },
      ],
    };
    const service = mock<ActorSubclass<SnsSwapService>>();
    service.get_buyer_state.mockResolvedValue({
      buyer_state: [buyerState],
    });

    const canister = SnsSwapCanister.create({
      canisterId: swapCanisterIdMock,
      certifiedServiceOverride: service,
    });
    const response = await canister.getUserCommitment({
      principal_id: [Principal.fromText("aaaaa-aa")],
    });
    expect(service.get_buyer_state).toBeCalled();
    expect(response).toEqual(buyerState);
  });
});
