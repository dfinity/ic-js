import type { ICPTs } from "@dfinity/nns-proto";
import {
  convertStringToE8s,
  ICPToken,
  type FromStringToTokenError,
  type Token,
} from "@dfinity/utils";
import { importNnsProto } from "./utils/proto.utils";

/**
 * We don't extend to keep `fromE8s` and `fromString` as backwards compatible.
 * @deprecated
 */
export class ICP {
  private constructor(
    private e8s: bigint,
    public token: Token,
  ) {}

  public static fromE8s(amount: bigint): ICP {
    return new ICP(amount, ICPToken);
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
      return new ICP(e8s, ICPToken);
    }
    return e8s;
  }

  public toE8s(): bigint {
    return this.e8s;
  }

  public async toProto(): Promise<ICPTs> {
    const { ICPTs: ICPTsConstructor } = await importNnsProto();

    const proto = new ICPTsConstructor();
    proto.setE8s(this.e8s.toString());
    return proto;
  }
}
