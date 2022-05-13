import { ManageNeuronResponse as PbManageNeuronResponse } from "../../../proto/governance_pb";

export const checkPbManageNeuronResponse = (rawResponse: Uint8Array): void => {
  const response = PbManageNeuronResponse.deserializeBinary(rawResponse);
  const err = response.getError();
  if (err) {
    throw err;
  }
};
