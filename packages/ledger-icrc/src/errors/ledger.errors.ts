import type { icrc21_error as Icrc21RawError } from "../../candid/icrc_ledger";

export class IcrcTransferError<T> extends Error {
  public errorType: T;
  constructor({ msg, errorType }: { msg?: string; errorType: T }) {
    super(msg);
    this.errorType = errorType;
  }
}

export class GenericError extends Error {
  constructor(
    public readonly message: string,
    public readonly error_code: bigint,
  ) {
    super();
  }
}

export class ConsentMessageError extends Error {}

export class InsufficientPaymentError extends ConsentMessageError {}
export class UnsupportedCanisterCallError extends ConsentMessageError {}
export class ConsentMessageUnavailableError extends ConsentMessageError {}

export const mapIcrc21ConsentMessageError = (
  rawError: Icrc21RawError,
): ConsentMessageError => {
  if ("GenericError" in rawError) {
    return new GenericError(
      rawError.GenericError.description,
      rawError.GenericError.error_code,
    );
  }

  if ("InsufficientPayment" in rawError) {
    return new InsufficientPaymentError(
      rawError.InsufficientPayment.description,
    );
  }

  if ("UnsupportedCanisterCall" in rawError) {
    return new UnsupportedCanisterCallError(
      rawError.UnsupportedCanisterCall.description,
    );
  }
  if ("ConsentMessageUnavailable" in rawError) {
    return new ConsentMessageUnavailableError(
      rawError.ConsentMessageUnavailable.description,
    );
  }

  // Edge case
  return new ConsentMessageError(
    `Unknown error type ${JSON.stringify(rawError)}`,
  );
};
