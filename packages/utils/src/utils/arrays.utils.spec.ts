import {
  arrayBufferToUint8Array,
  arrayOfNumberToUint8Array,
  asciiStringToByteArray,
  uint8ArrayToArrayOfNumber,
  uint8ArrayToBigInt,
} from "./arrays.utils";

describe("arrays-utils", () => {
  const arrayNumber = [215, 227, 8, 132, 55, 128, 181, 202];
  const uint8Array = new Uint8Array(arrayNumber);

  it("should convert Uint8Array to BigInt", () =>
    expect(uint8ArrayToBigInt(uint8Array)).toEqual(15556286901827712458n));

  it("should convert array buffer to Uint8Array", () =>
    expect(arrayBufferToUint8Array(uint8Array.buffer)).toEqual(uint8Array));

  it("should convert Uint8Array to array number", () =>
    expect(uint8ArrayToArrayOfNumber(uint8Array)).toEqual(arrayNumber));

  it("should convert array number to Uint8Array", () =>
    expect(arrayOfNumberToUint8Array(arrayNumber)).toEqual(uint8Array));

  it("should convert ascii string to byte array", () => {
    const expectedResult = [
      55, 49, 49, 48, 49, 49, 48, 49, 49, 48, 55, 49, 49, 53,
    ];

    expect(asciiStringToByteArray("71101101107115")).toEqual(expectedResult);
  });
});
