import { ICPTs } from "../proto/ledger_pb";
import { E8S_PER_TOKEN, TOKEN_DECIMAL_ACCURACY } from "./constants/constants";
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
      e8s += BigInt(integral) * E8S_PER_TOKEN;
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

export type Token = {
  symbol: string;
  name: string;
};

export const ICPToken: Token = {
  symbol: "ICP",
  name: "ICP",
};

export class TokenAmount {
  protected constructor(protected e8s: bigint, public token: Token) {}

  public static fromE8s(amount: bigint, token: Token = ICPToken): TokenAmount {
    return new TokenAmount(amount, token);
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
    token: Token = ICPToken
  ): TokenAmount | FromStringToTokenError {
    const e8s = convertStringToE8s(amount);

    if (typeof e8s === "bigint") {
      return new TokenAmount(e8s, token);
    }
    return e8s;
  }

  public static fromNumber(
    amount: number,
    token: Token = ICPToken
  ): TokenAmount | FromStringToTokenError {
    // If more than TOKEN_DECIMAL_ACCURACY, it returns 0, not the error.
    return TokenAmount.fromString(
      amount.toFixed(TOKEN_DECIMAL_ACCURACY),
      token
    );
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
