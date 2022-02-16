export class AccountNotFoundError extends Error {
  static kind = "AccountNotFound";
  public kind = "AccountNotFound";
  constructor(message: string) {
    super(message);
    this.kind = "AccountNotFound";
  }
}
