import { GovernanceService } from "../../../candid/governance.idl";
import { ManageNeuron } from "../../../candid/governanceTypes";
import { GovernanceError } from "../../errors/governance.errors";

/**
 * @throws {GovernanceError}
 */
export const manageNeuron = async ({
  request,
  service,
}: {
  request: ManageNeuron;
  service: GovernanceService;
}): Promise<void> => {
  const { command } = await service.manage_neuron(request);
  const response = command[0];

  if (!response) {
    throw new GovernanceError({
      error_message: "Error updating neuron",
      error_type: 0,
    });
  }

  if ("Error" in response) {
    throw new GovernanceError(response.Error);
  }
};
