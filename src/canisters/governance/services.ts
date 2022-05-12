import { GovernanceService } from "../../../candid/governance.idl";
import {
  Command_1,
  ManageNeuron,
  ManageNeuronResponse,
} from "../../../candid/governanceTypes";
import { GovernanceError } from "../../errors/governance.errors";

/**
 * Checks a Manage Neuron Response for error and returns successful response data.
 *
 * @throws {@link GovernanceError}
 */
export const getSuccessfulCommandFromResponse = (
  response: ManageNeuronResponse
): Command_1 => {
  const { command } = response;
  const data = command[0];
  if (!data) {
    throw new GovernanceError({
      error_message: "Error updating neuron",
      error_type: 0,
    });
  }

  if ("Error" in data) {
    throw new GovernanceError(data.Error);
  }
  return data;
};

/**
 * @throws {@link GovernanceError}
 */
export const manageNeuron = async ({
  request,
  service,
}: {
  request: ManageNeuron;
  service: GovernanceService;
}): Promise<void> => {
  const response = await service.manage_neuron(request);
  // We use it only to assert that there are no errors
  getSuccessfulCommandFromResponse(response);
};
