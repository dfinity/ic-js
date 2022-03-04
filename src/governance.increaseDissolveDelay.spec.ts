import { mock } from "jest-mock-extended";
import { GovernanceService } from "../candid/governance.idl";
import { ManageNeuronResponse } from "../candid/governanceTypes";
import { GovernanceCanister } from "./governance";

describe("GovernanceCanister.increaseDissolveDelay", () => {
  it("increases dissolve delay of the neuron successfully", async () => {
    const serviceResponse: ManageNeuronResponse = {
      command: [{ Configure: {} }],
    };
    const service = mock<GovernanceService>();
    service.manage_neuron.mockResolvedValue(serviceResponse);

    const governance = GovernanceCanister.create({
      certifiedServiceOverride: service,
    });
    const response = await governance.increaseDissolveDelay({
      neuronId: BigInt(1),
      additionalDissolveDelaySeconds: 100000,
    });
    expect(service.manage_neuron).toBeCalled();
    expect("Ok" in response).toBeTruthy();
    expect("Err" in response).toBeFalsy();
  });

  it("returns error when increaseDissolveDelay fails with error", async () => {
    const serviceResponse: ManageNeuronResponse = {
      command: [{ Error: { error_message: "Some error", error_type: 1 } }],
    };
    const service = mock<GovernanceService>();
    service.manage_neuron.mockResolvedValue(serviceResponse);

    const governance = GovernanceCanister.create({
      certifiedServiceOverride: service,
    });
    const response = await governance.increaseDissolveDelay({
      neuronId: BigInt(1),
      additionalDissolveDelaySeconds: 100000,
    });
    expect(service.manage_neuron).toBeCalled();
    expect("Ok" in response).toBeFalsy();
    expect("Err" in response).toBeTruthy();
  });

  it("returns error when increaseDissolveDelay fails unexpectetdly", async () => {
    const serviceResponse: ManageNeuronResponse = {
      command: [],
    };
    const service = mock<GovernanceService>();
    service.manage_neuron.mockResolvedValue(serviceResponse);

    const governance = GovernanceCanister.create({
      certifiedServiceOverride: service,
    });
    const response = await governance.increaseDissolveDelay({
      neuronId: BigInt(1),
      additionalDissolveDelaySeconds: 100000,
    });
    expect(service.manage_neuron).toBeCalled();
    expect("Ok" in response).toBeFalsy();
    expect("Err" in response).toBeTruthy();
  });
});
