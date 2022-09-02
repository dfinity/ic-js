import { ICPTs } from "../proto/ledger_pb";
import { E8S_PER_ICP, ICP_DECIMAL_ACCURACY } from "./constants/constants";
import { FromStringToTokenError } from "./enums/token.enums";

export const convertStringToE8s = (
  amount: string
): bigint | FromStringToTokenError => {
  // Remove all instances of "," and "'".
  amount = amount.trim().replace(/[,']/g, "");

  // Verify that the string is of the format 1234.5678
  const regexMatch = amount.match(/\d*(\.\d*)?/);
  if (!regexMatch || regexMatch[0] !== amount) {
    return FromStringToTokenError.InvalidFormat;
  }

  const [integral, fractional] = amount.split(".");

  let e8s = BigInt(0);

  if (integral) {
    try {
      e8s += BigInt(integral) * E8S_PER_ICP;
    } catch {
      return FromStringToTokenError.InvalidFormat;
    }
  }

  if (fractional) {
    if (fractional.length > 8) {
      return FromStringToTokenError.FractionalMoreThan8Decimals;
    }
    try {
      e8s += BigInt(fractional.padEnd(8, "0"));
    } catch {
      return FromStringToTokenError.InvalidFormat;
    }
  }

  return e8s;
};

export class Token {
  protected constructor(
    protected e8s: bigint,
    public symbol: string,
    public name: string
  ) {}

  public static fromE8s(
    amount: bigint,
    { symbol, name }: { symbol: string; name: string } = {
      symbol: "ICP",
      name: "ICP",
    }
  ): Token {
    return new Token(amount, symbol, name);
  }

  /**
   * Initialize from a string. Accepted formats:
   *
   * 1234567.8901
   * 1'234'567.8901
   * 1,234,567.8901
   */
  public static fromString(
    amount: string,
    { symbol, name }: { symbol: string; name: string } = {
      symbol: "ICP",
      name: "ICP",
    }
  ): Token | FromStringToTokenError {
    const e8s = convertStringToE8s(amount);

    if (typeof e8s === "bigint") {
      return new Token(e8s, symbol, name);
    }
    return e8s;
  }

  public static fromNumber(
    amount: number,
    { symbol, name }: { symbol: string; name: string } = {
      symbol: "ICP",
      name: "ICP",
    }
  ): Token | FromStringToTokenError {
    // If more than ICP_DECIMAL_ACCURACY, it returns 0, not the error.
    return Token.fromString(amount.toFixed(ICP_DECIMAL_ACCURACY), {
      symbol,
      name,
    });
  }

  public toE8s(): bigint {
    return this.e8s;
  }

  // TODO: Remove this method when ICP class is not used anymore
  public toProto(): ICPTs {
    const proto = new ICPTs();
    proto.setE8s(this.e8s.toString());
    return proto;
  }
}
