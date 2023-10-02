export class IcrcTransferError<T> extends Error {
  public errorType: T;
  constructor({ msg, errorType }: { msg?: string; errorType: T }) {
    super(msg);
    this.errorType = errorType;
  }
}
