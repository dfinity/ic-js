import { GovernanceService } from "../../../candid/governance.idl";
import { Command_1, ManageNeuron } from "../../../candid/governanceTypes";
import { GovernanceError } from "../../types/governance_converters";
import { toGovernanceError } from "./response.converters";

type ManageNeuronResponse = {
  Ok?: Command_1;
  Err?: GovernanceError;
};

export const manageNeuron = async ({
  request,
  service,
}: {
  request: ManageNeuron;
  service: GovernanceService;
}): Promise<ManageNeuronResponse> => {
  const { command } = await service.manage_neuron(request);
  const response = command[0];
  if (!response) {
    return {
      Err: {
        errorMessage: "Error updating neuron",
        errorType: 0,
      },
    };
  }
  if ("Error" in response) {
    return { Err: toGovernanceError(response.Error) };
  }
  return { Ok: response };
};
