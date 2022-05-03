import { Principal } from "@dfinity/principal";
import { Buffer } from "buffer";
import { sha224 } from "js-sha256";
import { AccountIdentifier } from "../types/common";
import {
  asciiStringToByteArray,
  calculateCrc32,
  toHexString,
} from "./converter.utils";

export const accountIdentifierToBytes = (
  accountIdentifier: AccountIdentifier
): Uint8Array =>
  Uint8Array.from(Buffer.from(accountIdentifier, "hex")).subarray(4);

export const accountIdentifierFromBytes = (
  accountIdentifier: Uint8Array
): AccountIdentifier => Buffer.from(accountIdentifier).toString("hex");

export const principalToAccountIdentifier = (
  principal: Principal,
  subAccount?: Uint8Array
): string => {
  // Hash (sha224) the principal, the subAccount and some padding
  const padding = asciiStringToByteArray("\x0Aaccount-id");

  const shaObj = sha224.create();
  shaObj.update([
    ...padding,
    ...principal.toUint8Array(),
    ...(subAccount ?? Array(32).fill(0)),
  ]);
  const hash = new Uint8Array(shaObj.array());

  // Prepend the checksum of the hash and convert to a hex string
  const checksum = calculateCrc32(hash);
  const bytes = new Uint8Array([...checksum, ...hash]);
  return toHexString(bytes);
};
