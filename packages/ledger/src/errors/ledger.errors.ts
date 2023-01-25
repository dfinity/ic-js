import type { TransferError } from "../../candid/icrc1_ledger";

export class IcrcTransferError extends Error {
  public errorType: TransferError;
  constructor({ msg, errorType }: { msg?: string; errorType: TransferError }) {
    super(msg);
    this.errorType = errorType;
  }
}
