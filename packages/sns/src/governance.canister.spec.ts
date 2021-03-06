import type { ActorSubclass } from "@dfinity/agent";
import { mock } from "jest-mock-extended";
import type { _SERVICE as SnsGovernanceService } from "../candid/sns_governance";
import { MAX_LIST_NEURONS_RESULTS } from "./constants/governance.constants";
import { SnsGovernanceCanister } from "./governance.canister";
import { neuronsMock } from "./mocks/governance.mock";
import { rootCanisterIdMock } from "./mocks/sns.mock";

describe("Governance canister", () => {
  it("should return the list of neurons of the sns", async () => {
    const service = mock<ActorSubclass<SnsGovernanceService>>();
    service.list_neurons.mockResolvedValue({ neurons: neuronsMock });

    const canister = SnsGovernanceCanister.create({
      canisterId: rootCanisterIdMock,
      certifiedServiceOverride: service,
    });
    const res = await canister.listNeurons({});
    expect(res).toEqual(neuronsMock);
  });

  it("should call list of neurons with default param", async () => {
    const service = mock<ActorSubclass<SnsGovernanceService>>();
    const mockListNeurons = service.list_neurons.mockResolvedValue({
      neurons: neuronsMock,
    });

    const canister = SnsGovernanceCanister.create({
      canisterId: rootCanisterIdMock,
      certifiedServiceOverride: service,
    });
    await canister.listNeurons({});
    expect(mockListNeurons).toHaveBeenCalledWith({
      limit: MAX_LIST_NEURONS_RESULTS,
      of_principal: [],
      start_page_at: [],
    });
  });
});
