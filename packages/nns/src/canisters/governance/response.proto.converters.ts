import { GovernanceError } from "../../errors/governance.errors";
import { importNnsProto } from "../../utils/proto.utils";

export const checkPbManageNeuronResponse = async (rawResponse: Uint8Array) => {
  const { ManageNeuronResponse: ManageNeuronResponseConstructor } =
    await importNnsProto();

  const response =
    ManageNeuronResponseConstructor.deserializeBinary(rawResponse);
  const err = response.getError();
  if (err) {
    throw new GovernanceError({
      error_message: err.getErrorMessage(),
      error_type: err.getErrorType(),
    });
  }
};
