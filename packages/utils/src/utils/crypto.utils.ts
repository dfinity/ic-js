import { uint8ArrayToHexString } from "./arrays.utils";
import { jsonReplacer } from "./json.utils";

/**
 * Generates a SHA-256 hash from the given object.
 *
 * The object is first stringified using a custom `jsonReplacer`, then
 * hashed using the SubtleCrypto API. The resulting hash is returned as a hex string.
 *
 * @template T - The type of the input object.
 * @param {T} params - The object to hash.
 * @returns {Promise<string>} A promise that resolves to the hex string of the SHA-256 hash.
 */
export const hashObject = async <T extends object>(
  params: T,
): Promise<string> => {
  const jsonString = JSON.stringify(params, jsonReplacer);
  const dataBuffer = new TextEncoder().encode(jsonString);
  const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);

  return uint8ArrayToHexString(new Uint8Array(hashBuffer));
};
