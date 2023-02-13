import type { UpdateBalanceError } from "../../candid/minter";

export class MinterUpdateBalanceError extends Error {}
export class MinterGenericError extends MinterUpdateBalanceError {}
export class MinterTemporaryUnavailableError extends MinterUpdateBalanceError {}
export class MinterAlreadyProcessingError extends MinterUpdateBalanceError {}
export class MinterNoNewUtxosError extends MinterUpdateBalanceError {}

export const createUpdateBalanceError = (
  Err: UpdateBalanceError
): MinterUpdateBalanceError => {
  if ("GenericError" in Err) {
    const {
      GenericError: { error_message, error_code },
    } = Err;
    return new MinterGenericError(`${error_message} (${error_code})`);
  }

  if ("TemporarilyUnavailable" in Err) {
    return new MinterTemporaryUnavailableError(Err.TemporarilyUnavailable);
  }

  if ("AlreadyProcessing" in Err) {
    return new MinterAlreadyProcessingError();
  }

  if ("NoNewUtxos" in Err) {
    return new MinterNoNewUtxosError();
  }

  // Handle types added in the backend but not yet added in the frontend
  return new MinterUpdateBalanceError(
    `Unsupported response type in minter.updateBalance ${JSON.stringify(Err)}`
  );
};
