export const uint8ArrayToBigInt = (array: Uint8Array): bigint => {
  const view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  if (typeof view.getBigUint64 === "function") {
    return view.getBigUint64(0);
  } else {
    const high = BigInt(view.getUint32(0));
    const low = BigInt(view.getUint32(4));

    return (high << BigInt(32)) + low;
  }
};

export const arrayBufferToUint8Array = (buffer: ArrayBuffer): Uint8Array =>
  new Uint8Array(buffer);

export const uint8ArrayToArrayOfNumber = (array: Uint8Array): Array<number> =>
  Array.from(array);

export const arrayOfNumberToUint8Array = (numbers: Array<number>): Uint8Array =>
  new Uint8Array(numbers);

export const asciiStringToByteArray = (text: string): Array<number> =>
  Array.from(text).map((c) => c.charCodeAt(0));
