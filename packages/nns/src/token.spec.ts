import { describe, expect, it } from "@jest/globals";
import { FromStringToTokenError } from "./enums/token.enums";
import { Token } from "./token";

describe("ICP", () => {
  it("can be initialized from a whole number string", () => {
    expect(Token.fromString("1")).toEqual(Token.fromE8s(BigInt(100000000)));
    expect(Token.fromString("1234")).toEqual(
      Token.fromE8s(BigInt(123400000000))
    );
    expect(Token.fromString("000001234")).toEqual(
      Token.fromE8s(BigInt(123400000000))
    );
    expect(Token.fromString(" 1")).toEqual(Token.fromE8s(BigInt(100000000)));
    expect(Token.fromString("1,000")).toEqual(
      Token.fromE8s(BigInt(100000000000))
    );
    expect(Token.fromString("1'000")).toEqual(
      Token.fromE8s(BigInt(100000000000))
    );
    expect(Token.fromString("1'000'000")).toEqual(
      Token.fromE8s(BigInt(100000000000000))
    );
    expect(Token.fromString("1'000'000")).toEqual(Token.fromNumber(1_000_000));
    expect(Token.fromString("1'000'000")).toEqual(
      Token.fromE8s(BigInt(100000000000000))
    );
    expect(Token.fromString("1'000")).toEqual(Token.fromNumber(1_000));
  });

  it("can be initialized from a fractional number string", () => {
    expect(Token.fromString("0.1")).toEqual(Token.fromE8s(BigInt(10000000)));
    expect(Token.fromString("0.1")).toEqual(Token.fromNumber(0.1));
    expect(Token.fromString("45.1231")).toEqual(Token.fromNumber(45.1231));
    expect(Token.fromString("0.0001")).toEqual(Token.fromE8s(BigInt(10000)));
    expect(Token.fromString("0.00000001")).toEqual(Token.fromE8s(BigInt(1)));
    expect(Token.fromString("0.0000000001")).toEqual(
      FromStringToTokenError.FractionalMoreThan8Decimals
    );
    expect(Token.fromNumber(0.0000000001)).toEqual(Token.fromNumber(0));
    expect(Token.fromString(".01")).toEqual(Token.fromE8s(BigInt(1000000)));
  });

  it("can be initialized from a mixed string", () => {
    expect(Token.fromString("1.1")).toEqual(Token.fromE8s(BigInt(110000000)));
    expect(Token.fromString("1.1")).toEqual(Token.fromE8s(BigInt(110000000)));
    expect(Token.fromString("12,345.00000001")).toEqual(
      Token.fromE8s(BigInt(1234500000001))
    );
    expect(Token.fromString("12'345.00000001")).toEqual(
      Token.fromE8s(BigInt(1234500000001))
    );
    expect(Token.fromString("12345.00000001")).toEqual(
      Token.fromE8s(BigInt(1234500000001))
    );
  });

  it("returns an error on invalid formats", () => {
    expect(Token.fromString("1.1.1")).toBe(
      FromStringToTokenError.InvalidFormat
    );
    expect(Token.fromString("a")).toBe(FromStringToTokenError.InvalidFormat);
    expect(Token.fromString("3.a")).toBe(FromStringToTokenError.InvalidFormat);
    expect(Token.fromString("123asdf$#@~!")).toBe(
      FromStringToTokenError.InvalidFormat
    );
  });

  it("rejects negative numbers", () => {
    expect(Token.fromString("-1")).toBe(FromStringToTokenError.InvalidFormat);
  });
});
