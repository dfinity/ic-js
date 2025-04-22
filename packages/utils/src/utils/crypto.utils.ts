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
export const generateHash = async <T extends object>(
  params: T,
): Promise<string> => {
  const jsonString = JSON.stringify(params, jsonReplacer);

  return await generateHashText(jsonString);
};

/**
 * Generates a SHA-256 hash from a plain text string.
 *
 * The string is UTF-8 encoded and hashed using the SubtleCrypto API.
 * The resulting hash is returned as a hexadecimal string.
 *
 * @param {string} text - The text to hash.
 * @returns {Promise<string>} A promise that resolves to the hex string of the SHA-256 hash.
 */
export const generateHashText = async (text: string): Promise<string> => {
  const dataBuffer = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);

  return uint8ArrayToHexString(new Uint8Array(hashBuffer));
};
