import { Buffer } from "buffer";
import { crc32 } from "crc";

export const bigEndianCrc32 = (bytes: Uint8Array): Uint8Array => {
  const checksumArrayBuf = new ArrayBuffer(4);
  const view = new DataView(checksumArrayBuf);
  view.setUint32(0, crc32(Buffer.from(bytes)), false);
  return Buffer.from(checksumArrayBuf);
};
