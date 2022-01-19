import { mock } from "jest-mock-extended";
import { CandidKnownNeuronsResponse, GovernanceService } from "../candid/governance.idl";
import { GovernanceCanister } from "./governance";

describe("GovernanceCanister.listKnownNeurons", () => {
  it("populates all KnownNeuron fields correctly", async () => {
    const response: CandidKnownNeuronsResponse = {
      known_neurons: [{
        id: [{ id: BigInt(100) }],
        known_neuron_data:[{name: "aaa", description: ["xyz"]}]
      }]
    };
    const service = mock<GovernanceService>();
    service.list_known_neurons.mockResolvedValue(response);

    const governance = GovernanceCanister.create({ serviceOverride: service });
    const res = await governance.listKnownNeurons(false);

    expect(res).toContainEqual({
      id: BigInt(100),
      name: "aaa",
      description: "xyz"
    });
  });

  it("handles description being undefined", async () => {
    const response: CandidKnownNeuronsResponse = {
      known_neurons: [{
        id: [{ id: BigInt(100) }],
        known_neuron_data:[{name: "aaa", description: []}]
      }]
    };
    const service = mock<GovernanceService>();
    service.list_known_neurons.mockResolvedValue(response);

    const governance = GovernanceCanister.create({ serviceOverride: service });
    const res = await governance.listKnownNeurons(false);

    expect(res).toContainEqual({
      id: BigInt(100),
      name: "aaa",
      description: undefined
    });
  });

  it("returns all KnownNeurons returned by the Governance canister", async () => {
    const response: CandidKnownNeuronsResponse = {
      known_neurons: [{
        id: [{ id: BigInt(100) }],
        known_neuron_data: [{ name: "aaa", description: [] }]
      }, {
        id: [{ id: BigInt(200) }],
        known_neuron_data: [{ name: "bbb", description: [] }]
      }, {
        id: [{ id: BigInt(300) }],
        known_neuron_data: [{ name: "ccc", description: [] }]
      }, {
        id: [{ id: BigInt(400) }],
        known_neuron_data: [{ name: "ddd", description: [] }]
      }]
    };
    const service = mock<GovernanceService>();
    service.list_known_neurons.mockResolvedValue(response);

    const governance = GovernanceCanister.create({ serviceOverride: service });
    const res = await governance.listKnownNeurons(false);

    expect(res.map(n => Number(n.id))).toEqual([100, 200, 300, 400]);
  });
});
