import { ManageNeuronResponse as PbManageNeuronResponse } from "@dfinity/nns-proto";
import { GovernanceError } from "../../errors/governance.errors";

export const checkPbManageNeuronResponse = (rawResponse: Uint8Array): void => {
  const response = PbManageNeuronResponse.deserializeBinary(rawResponse);
  const err = response.getError();
  if (err) {
    throw new GovernanceError({
      error_message: err.getErrorMessage(),
      error_type: err.getErrorType(),
    });
  }
};
