// This is possible specially in SNS projects/
// Because they share the same canisters but in different versions.
export class UnsupportedMethodError extends Error {
  constructor(public methodName: string) {
    super();
  }
}
