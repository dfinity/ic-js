import type {
  Command_1,
  _SERVICE as GovernanceService,
  ManageNeuron,
  ManageNeuronResponse,
} from "../../../candid/governance";
import { GovernanceError } from "../../errors/governance.errors";

/**
 * Checks a Manage Neuron Response for error and returns successful response data.
 *
 * @throws {@link GovernanceError}
 */
export const getSuccessfulCommandFromResponse = (
  response: ManageNeuronResponse,
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

/**
 * @throws {@link GovernanceError}
 */
export const simulateManageNeuron = async ({
  request,
  service,
}: {
  request: ManageNeuron;
  service: GovernanceService;
}): Promise<Command_1> => {
  const response = await service.simulate_manage_neuron(request);
  return getSuccessfulCommandFromResponse(response);
};
