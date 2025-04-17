import { uint8ArrayToHexString } from "./arrays.utils";

/**
 * Computes the SHA-256 hash of a UTF-8 string.
 *
 * @param input - A UTF-8 encoded string to hash.
 * @returns A promise that resolves to a 32-byte SHA-256 hash as an ArrayBuffer.
 *
 * @internal
 */

const computeSha256 = async (input: string): Promise<ArrayBuffer> => {
  const encoded = new TextEncoder().encode(input);
  return crypto.subtle.digest("SHA-256", encoded);
};

/**
 * Computes the SHA-256 hash of a UTF-8 string and encodes the result as a hexadecimal string.
 *
 * @param input - A UTF-8 encoded string to hash.
 * @returns A promise that resolves to the 64-character lowercase hexadecimal hash.
 */
export const hashToHex = async (input: string): Promise<string> => {
  const hashBuffer = await computeSha256(input);
  return uint8ArrayToHexString(new Uint8Array(hashBuffer));
};
