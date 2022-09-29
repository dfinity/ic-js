import type { TransferError } from "../../candid/icrc1_ledger";

export class SnsTransferError extends Error {
  public type: TransferError;
  constructor({ msg, type }: { msg?: string; type: TransferError }) {
    super(msg);
    this.type = type;
  }
}
