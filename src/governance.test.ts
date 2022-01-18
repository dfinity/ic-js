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

  it("returns the DF and ICA neurons", async () => {
    const response: CandidKnownNeuronsResponse = { known_neurons: [] };
    const service = mock<GovernanceService>();
    service.list_known_neurons.mockResolvedValue(response);

    const governance = GovernanceCanister.create({ serviceOverride: service });
    const res = await governance.listKnownNeurons(false);

    expect(res).toHaveLength(2);
    expect(res[0]).toEqual({
      id: BigInt(27),
      name: "DFINITY Foundation",
      description: undefined
    });
    expect(res[1]).toEqual({
      id: BigInt(28),
      name: "Internet Computer Association",
      description: undefined
    })
  });

  it("returns neurons in ascending order of Id", async () => {
    const response: CandidKnownNeuronsResponse = {
      known_neurons: [{
        id: [{ id: BigInt(200) }],
        known_neuron_data:[{name: "aaa", description: []}]
      }, {
        id: [{ id: BigInt(100) }],
        known_neuron_data:[{name: "bbb", description: []}]
      }]
    };
    const service = mock<GovernanceService>();
    service.list_known_neurons.mockResolvedValue(response);

    const governance = GovernanceCanister.create({ serviceOverride: service });
    const res = await governance.listKnownNeurons(false);

    expect(res.map(n => Number(n.id))).toEqual([27, 28, 100, 200]);
  });

  it("only adds the DF and ICA neurons if they are not already in the response", async () => {
    const response: CandidKnownNeuronsResponse = {
      known_neurons: [{
        id: [{ id: BigInt(27) }],
        known_neuron_data:[{name: "DFINITY Foundation", description: []}]
      }, {
        id: [{ id: BigInt(28) }],
        known_neuron_data:[{name: "Internet Computer Association", description: []}]
      }, {
        id: [{ id: BigInt(200) }],
        known_neuron_data:[{name: "aaa", description: []}]
      }, {
        id: [{ id: BigInt(100) }],
        known_neuron_data:[{name: "bbb", description: []}]
      }]
    };
    const service = mock<GovernanceService>();
    service.list_known_neurons.mockResolvedValue(response);

    const governance = GovernanceCanister.create({ serviceOverride: service });
    const res = await governance.listKnownNeurons(false);

    expect(res.map(n => Number(n.id))).toEqual([27, 28, 100, 200]);
  });
});
