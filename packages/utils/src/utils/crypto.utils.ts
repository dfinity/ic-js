import { arrayBufferToUint8Array } from "./arrays.utils";

export const sha256 = async (data: Uint8Array): Promise<Uint8Array> => {
  const hash = await crypto.subtle.digest("SHA-256", data);
  return arrayBufferToUint8Array(hash);
};
