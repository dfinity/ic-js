import type { Principal } from "@dfinity/principal";

/**
 * Convert a principal to a Uint8Array 32 length.
 * e.g. Useful to convert a canister ID when topping up cycles with the Cmc canister
 * @param principal The principal that needs to be converted to Subaccount
 */
export const principalToSubAccount = (principal: Principal): Uint8Array => {
  const bytes: Uint8Array = principal.toUint8Array();
  const subAccount: Uint8Array = new Uint8Array(32);
  subAccount[0] = bytes.length;
  subAccount.set(bytes, 1);
  return subAccount;
};
