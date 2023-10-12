import { bigEndianCrc32 } from "./crc.utils";

describe("crc-utils", () => {
  it("should convert array to big endian crc32", () => {
    expect(bigEndianCrc32(new Uint8Array([]))).toEqual(
      Uint8Array.from([0, 0, 0, 0]),
    );
    expect(bigEndianCrc32(new Uint8Array([1, 2, 3]))).toEqual(
      Uint8Array.from([0x55, 0xbc, 0x80, 0x1d]),
    );
    expect(bigEndianCrc32(new Uint8Array([100, 99, 98, 1, 2, 3]))).toEqual(
      Uint8Array.from([0xc7, 0xe7, 0x87, 0xf5]),
    );
  });
});
