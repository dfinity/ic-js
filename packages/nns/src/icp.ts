import { ICPTs } from "../proto/ledger_pb";
import type { FromStringToTokenError } from "./enums/token.enums";
import { convertStringToE8s, Token } from "./token";

export class ICP extends Token {
  public static fromE8s(amount: bigint): ICP {
    return new ICP(amount, "ICP", "ICP");
  }

  /**
   * Initialize from a string. Accepted formats:
   *
   * 1234567.8901
   * 1'234'567.8901
   * 1,234,567.8901
   */
  public static fromString(amount: string): ICP | FromStringToTokenError {
    const e8s = convertStringToE8s(amount);
    if (typeof e8s === "bigint") {
      return new ICP(e8s, "ICP", "ICP");
    }
    return e8s;
  }

  public toE8s(): bigint {
    return this.e8s;
  }

  public toProto(): ICPTs {
    const proto = new ICPTs();
    proto.setE8s(this.e8s.toString());
    return proto;
  }
}
