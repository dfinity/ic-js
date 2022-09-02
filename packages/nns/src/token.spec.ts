import { describe, expect, it } from "@jest/globals";
import { FromStringToTokenError } from "./enums/token.enums";
import { TokenAmount } from "./token";

describe("ICP", () => {
  it("can be initialized from a whole number string", () => {
    expect(TokenAmount.fromString("1")).toEqual(
      TokenAmount.fromE8s(BigInt(100000000))
    );
    expect(TokenAmount.fromString("1234")).toEqual(
      TokenAmount.fromE8s(BigInt(123400000000))
    );
    expect(TokenAmount.fromString("000001234")).toEqual(
      TokenAmount.fromE8s(BigInt(123400000000))
    );
    expect(TokenAmount.fromString(" 1")).toEqual(
      TokenAmount.fromE8s(BigInt(100000000))
    );
    expect(TokenAmount.fromString("1,000")).toEqual(
      TokenAmount.fromE8s(BigInt(100000000000))
    );
    expect(TokenAmount.fromString("1'000")).toEqual(
      TokenAmount.fromE8s(BigInt(100000000000))
    );
    expect(TokenAmount.fromString("1'000'000")).toEqual(
      TokenAmount.fromE8s(BigInt(100000000000000))
    );
    expect(TokenAmount.fromString("1'000'000")).toEqual(
      TokenAmount.fromNumber(1_000_000)
    );
    expect(TokenAmount.fromString("1'000'000")).toEqual(
      TokenAmount.fromE8s(BigInt(100000000000000))
    );
    expect(TokenAmount.fromString("1'000")).toEqual(
      TokenAmount.fromNumber(1_000)
    );
  });

  it("can be initialized from a fractional number string", () => {
    expect(TokenAmount.fromString("0.1")).toEqual(
      TokenAmount.fromE8s(BigInt(10000000))
    );
    expect(TokenAmount.fromString("0.1")).toEqual(TokenAmount.fromNumber(0.1));
    expect(TokenAmount.fromString("45.1231")).toEqual(
      TokenAmount.fromNumber(45.1231)
    );
    expect(TokenAmount.fromString("0.0001")).toEqual(
      TokenAmount.fromE8s(BigInt(10000))
    );
    expect(TokenAmount.fromString("0.00000001")).toEqual(
      TokenAmount.fromE8s(BigInt(1))
    );
    expect(TokenAmount.fromString("0.0000000001")).toEqual(
      FromStringToTokenError.FractionalMoreThan8Decimals
    );
    expect(TokenAmount.fromNumber(0.0000000001)).toEqual(
      TokenAmount.fromNumber(0)
    );
    expect(TokenAmount.fromString(".01")).toEqual(
      TokenAmount.fromE8s(BigInt(1000000))
    );
  });

  it("can be initialized from a mixed string", () => {
    expect(TokenAmount.fromString("1.1")).toEqual(
      TokenAmount.fromE8s(BigInt(110000000))
    );
    expect(TokenAmount.fromString("1.1")).toEqual(
      TokenAmount.fromE8s(BigInt(110000000))
    );
    expect(TokenAmount.fromString("12,345.00000001")).toEqual(
      TokenAmount.fromE8s(BigInt(1234500000001))
    );
    expect(TokenAmount.fromString("12'345.00000001")).toEqual(
      TokenAmount.fromE8s(BigInt(1234500000001))
    );
    expect(TokenAmount.fromString("12345.00000001")).toEqual(
      TokenAmount.fromE8s(BigInt(1234500000001))
    );
  });

  it("returns an error on invalid formats", () => {
    expect(TokenAmount.fromString("1.1.1")).toBe(
      FromStringToTokenError.InvalidFormat
    );
    expect(TokenAmount.fromString("a")).toBe(
      FromStringToTokenError.InvalidFormat
    );
    expect(TokenAmount.fromString("3.a")).toBe(
      FromStringToTokenError.InvalidFormat
    );
    expect(TokenAmount.fromString("123asdf$#@~!")).toBe(
      FromStringToTokenError.InvalidFormat
    );
  });

  it("rejects negative numbers", () => {
    expect(TokenAmount.fromString("-1")).toBe(
      FromStringToTokenError.InvalidFormat
    );
  });
});
