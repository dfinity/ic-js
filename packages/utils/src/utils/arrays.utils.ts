import { assertNonNullish } from "./asserts.utils";

export const uint8ArrayToBigInt = (array: Uint8Array): bigint => {
  const view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  if (typeof view.getBigUint64 === "function") {
    return view.getBigUint64(0);
  }
  const high = BigInt(view.getUint32(0));
  const low = BigInt(view.getUint32(4));

  return (high << BigInt(32)) + low;
};

export const bigIntToUint8Array = (value: bigint): Uint8Array => {
  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);
  if (typeof view.setBigUint64 === "function") {
    view.setBigUint64(0, value);
  } else {
    const high = Number(value >> BigInt(32));
    const low = Number(value & BigInt(0xffffffff));

    view.setUint32(0, high);
    view.setUint32(4, low);
  }

  return new Uint8Array(buffer);
};

export const numberToUint8Array = (value: number): Uint8Array => {
  const view = new DataView(new ArrayBuffer(8));
  for (let index = 7; index >= 0; --index) {
    view.setUint8(index, value % 256);
    value = value >> 8;
  }
  return new Uint8Array(view.buffer);
};

export const arrayBufferToUint8Array = (buffer: ArrayBuffer): Uint8Array =>
  new Uint8Array(buffer);

export const uint8ArrayToArrayOfNumber = (array: Uint8Array): Array<number> =>
  Array.from(array);

export const arrayOfNumberToUint8Array = (numbers: Array<number>): Uint8Array =>
  new Uint8Array(numbers);

export const asciiStringToByteArray = (text: string): Array<number> =>
  Array.from(text).map((c) => c.charCodeAt(0));

export const hexStringToUint8Array = (hexString: string): Uint8Array => {
  const matches = hexString.match(/.{1,2}/g);

  assertNonNullish(matches, "Invalid hex string.");

  return Uint8Array.from(matches.map((byte) => parseInt(byte, 16)));
};

/**
 * Compare two Uint8Arrays for byte-level equality.
 *
 * @param {Object} params
 * @param {Uint8Array} params.a - First Uint8Array to compare.
 * @param {Uint8Array} params.b - Second Uint8Array to compare.
 * @returns {boolean} True if both arrays have the same length and identical contents.
 */
export const uint8ArraysEqual = ({ a, b }: { a: Uint8Array; b: Uint8Array }) =>
  a.length === b.length && a.every((byte, i) => byte === b[i]);

export const uint8ArrayToHexString = (bytes: Uint8Array | number[]) => {
  if (!(bytes instanceof Uint8Array)) {
    bytes = Uint8Array.from(bytes);
  }
  return bytes.reduce(
    (str, byte) => str + byte.toString(16).padStart(2, "0"),
    "",
  );
};

export const candidNumberArrayToBigInt = (array: number[]): bigint => {
  let result = 0n;
  for (let i = array.length - 1; i >= 0; i--) {
    result = (result << 32n) + BigInt(array[i]);
  }
  return result;
};
