import { ICP } from "../icp";
import { BlockHeight } from "../types/common";

export type TransferError =
  | InvalidSenderError
  | InsufficientFundsError
  | TxTooOldError
  | TxCreatedInFutureError
  | TxDuplicateError;

export class InvalidSenderError extends Error {}

export class InsufficientFundsError extends Error {
  constructor(public readonly balance: ICP) {
    super();
  }
}

export class TxTooOldError extends Error {
  constructor(public readonly allowed_window_secs: number) {
    super();
  }
}

export class TxCreatedInFutureError extends Error {}

export class TxDuplicateError extends Error {
  constructor(public readonly duplicateOf: BlockHeight) {
    super();
  }
}

export const mapTransferError = (responseBytes: Error): TransferError => {
  const { message } = responseBytes;

  if (message.includes("Reject code: 5")) {
    // Match against the different error types.
    // This string matching is fragile. It's a stop-gap solution until
    // we migrate to the candid interface.

    if (message.match(/Sending from (.*) is not allowed/)) {
      return new InvalidSenderError();
    }

    {
      const m = message.match(/transaction.*duplicate.* in block (\d+)/);
      if (m && m.length > 1) {
        return new TxDuplicateError(BigInt(m[1]));
      }
    }

    {
      const m = message.match(
        /debit account.*, current balance: (\d*(\.\d*)?)/
      );
      if (m && m.length > 1) {
        const balance = ICP.fromString(m[1]);
        if (balance instanceof ICP) {
          return new InsufficientFundsError(balance);
        }
      }
    }

    if (message.includes("is in future")) {
      return new TxCreatedInFutureError();
    }

    {
      const m = message.match(/older than (\d+)/);
      if (m && m.length > 1) {
        return new TxTooOldError(Number.parseInt(m[1]));
      }
    }
  }

  // Unknown error. Throw as-is.
  throw responseBytes;
};
