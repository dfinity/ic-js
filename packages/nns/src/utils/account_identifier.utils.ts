import type { AccountIdentifierHex } from "@dfinity/ledger-icp";
import type { Principal } from "@dfinity/principal";
import {
  arrayOfNumberToUint8Array,
  asciiStringToByteArray,
  bigEndianCrc32,
  uint8ArrayToHexString,
} from "@dfinity/utils";
import { sha224 } from "@noble/hashes/sha2";
import { Buffer } from "buffer";

// The following functions were originally made available in @dfinity/ledger-icp for domain alignment reasons.
// However, they rely on Buffer — which requires a polyfill and significantly increases bundle size in web environments.
// Since they are only used by @dfinity/nns and potentially the NNS dapp, they have been moved to this package instead.

export const accountIdentifierToBytes = (
  accountIdentifier: AccountIdentifierHex,
): Uint8Array =>
  Uint8Array.from(Buffer.from(accountIdentifier, "hex")).subarray(4);

export const accountIdentifierFromBytes = (
  accountIdentifier: Uint8Array,
): AccountIdentifierHex => Buffer.from(accountIdentifier).toString("hex");

// eslint-disable-next-line local-rules/prefer-object-params
export const principalToAccountIdentifier = (
  principal: Principal,
  subAccount?: Uint8Array,
): string => {
  // Hash (sha224) the principal, the subAccount and some padding
  const padding = asciiStringToByteArray("\x0Aaccount-id");

  const shaObj = sha224.create();
  shaObj.update(
    arrayOfNumberToUint8Array([
      ...padding,
      ...principal.toUint8Array(),
      ...(subAccount ?? Array(32).fill(0)),
    ]),
  );
  const hash = shaObj.digest();

  // Prepend the checksum of the hash and convert to a hex string
  const checksum = bigEndianCrc32(hash);
  const bytes = new Uint8Array([...checksum, ...hash]);
  return uint8ArrayToHexString(bytes);
};
