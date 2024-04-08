import type {
  Icrc1TransferError as RawIcrc1TransferError,
  TransferError as RawTransferError,
} from "../../candid/ledger";
import type { BlockHeight } from "../types/common";

export class TransferError extends Error {}

export class InvalidSenderError extends TransferError {}

export class InvalidAccountIDError extends Error {}

export class InsufficientFundsError extends TransferError {
  constructor(public readonly balance: bigint) {
    super();
  }
}

export class TxTooOldError extends TransferError {
  constructor(public readonly allowed_window_secs?: number | undefined) {
    super();
  }
}

export class TxCreatedInFutureError extends TransferError {}

export class TxDuplicateError extends TransferError {
  constructor(public readonly duplicateOf: BlockHeight) {
    super();
  }
}

export class BadFeeError extends TransferError {
  constructor(public readonly expectedFee: bigint) {
    super();
  }
}

export const mapTransferError = (
  rawTransferError: RawTransferError,
): TransferError => {
  if ("TxDuplicate" in rawTransferError) {
    return new TxDuplicateError(rawTransferError.TxDuplicate.duplicate_of);
  }
  if ("InsufficientFunds" in rawTransferError) {
    return new InsufficientFundsError(
      rawTransferError.InsufficientFunds.balance.e8s,
    );
  }
  if ("TxCreatedInFuture" in rawTransferError) {
    return new TxCreatedInFutureError();
  }
  if ("TxTooOld" in rawTransferError) {
    return new TxTooOldError(
      Number(rawTransferError.TxTooOld.allowed_window_nanos),
    );
  }
  if ("BadFee" in rawTransferError) {
    return new BadFeeError(rawTransferError.BadFee.expected_fee.e8s);
  }
  // Edge case
  return new TransferError(
    `Unknown error type ${JSON.stringify(rawTransferError)}`,
  );
};

export const mapIcrc1TransferError = (
  rawTransferError: RawIcrc1TransferError,
): TransferError => {
  if ("Duplicate" in rawTransferError) {
    return new TxDuplicateError(rawTransferError.Duplicate.duplicate_of);
  }
  if ("InsufficientFunds" in rawTransferError) {
    return new InsufficientFundsError(
      rawTransferError.InsufficientFunds.balance,
    );
  }
  if ("CreatedInFuture" in rawTransferError) {
    return new TxCreatedInFutureError();
  }
  if ("TooOld" in rawTransferError) {
    return new TxTooOldError();
  }
  if ("BadFee" in rawTransferError) {
    return new BadFeeError(rawTransferError.BadFee.expected_fee);
  }
  // Edge case
  return new TransferError(
    `Unknown error type ${JSON.stringify(rawTransferError)}`,
  );
};
