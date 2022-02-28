import { mock } from "jest-mock-extended";
import { GovernanceService } from "../candid/governance.idl";
import { ListKnownNeuronsResponse, ProposalInfo as RawProposalInfo } from "../candid/governanceTypes";
import { GovernanceCanister } from "./governance";

describe("GovernanceCanister.listKnownNeurons", () => {
  it("populates all KnownNeuron fields correctly", async () => {
    const response: ListKnownNeuronsResponse = {
      known_neurons: [
        {
          id: [{ id: BigInt(100) }],
          known_neuron_data: [{ name: "aaa", description: ["xyz"] }],
        },
      ],
    };
    const service = mock<GovernanceService>();
    service.list_known_neurons.mockResolvedValue(response);

    const governance = GovernanceCanister.create({ serviceOverride: service });
    const res = await governance.listKnownNeurons(false);

    expect(res).toContainEqual({
      id: BigInt(100),
      name: "aaa",
      description: "xyz",
    });
  });

  it("handles description being undefined", async () => {
    const response: ListKnownNeuronsResponse = {
      known_neurons: [
        {
          id: [{ id: BigInt(100) }],
          known_neuron_data: [{ name: "aaa", description: [] }],
        },
      ],
    };
    const service = mock<GovernanceService>();
    service.list_known_neurons.mockResolvedValue(response);

    const governance = GovernanceCanister.create({ serviceOverride: service });
    const res = await governance.listKnownNeurons(false);

    expect(res).toContainEqual({
      id: BigInt(100),
      name: "aaa",
      description: undefined,
    });
  });

  it("returns all KnownNeurons returned by the Governance canister", async () => {
    const response: ListKnownNeuronsResponse = {
      known_neurons: [
        {
          id: [{ id: BigInt(100) }],
          known_neuron_data: [{ name: "aaa", description: [] }],
        },
        {
          id: [{ id: BigInt(200) }],
          known_neuron_data: [{ name: "bbb", description: [] }],
        },
        {
          id: [{ id: BigInt(300) }],
          known_neuron_data: [{ name: "ccc", description: [] }],
        },
        {
          id: [{ id: BigInt(400) }],
          known_neuron_data: [{ name: "ddd", description: [] }],
        },
      ],
    };
    const service = mock<GovernanceService>();
    service.list_known_neurons.mockResolvedValue(response);

    const governance = GovernanceCanister.create({ serviceOverride: service });
    const res = await governance.listKnownNeurons(false);

    expect(res.map((n) => Number(n.id))).toEqual([100, 200, 300, 400]);
  });

  describe("getProposalInfo", () => {
    it("should fetch and convert single ProposalInfo", async () => {
      const service = mock<GovernanceService>();
      const governance = GovernanceCanister.create({ certifiedServiceOverride: service, serviceOverride: service });
      const rawProposal = {
        id: [{ id: 1n }],
        ballots: [],
        proposal: [],
        proposer: [],
        latest_tally: [],
      } as unknown as RawProposalInfo;
      service.get_proposal_info.mockResolvedValue(Promise.resolve([rawProposal]));
      const response = await governance.getProposalInfo({
        proposalId: BigInt(1),
      });

      expect(service.get_proposal_info).toBeCalled();
      expect(response).not.toBeUndefined();
      expect(response).toHaveProperty('id', 1n);
    });
  })
});
