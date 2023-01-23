import { Principal } from "@dfinity/principal";
import type { Icrc1Account } from "../types/ledger.responses";

// https://github.com/dfinity/ICRC-1/pull/55/files#diff-b335630551682c19a781afebcf4d07bf978fb1f8ac04c6bf87428ed5106870f5R236
const EXTRA_BYTES = parseInt("FF", 16);
const MAX_ACCOUNT_BYTES_LENGTH = 32;

/**
 * Removes leading zeros from a Uint8Array
 *
 * @param bytes Uint8Array
 * @returns Uint8Array
 */
const shrink = (bytes: Uint8Array): Uint8Array => {
  const shrinked = Array.from(bytes);
  while (shrinked[0] === 0) {
    shrinked.shift();
  }
  return Uint8Array.from(shrinked);
};

/**
 * Encodes an Icrc1 account into a string.
 * Formatting Reference: https://github.com/dfinity/ICRC-1/pull/55/files#diff-b335630551682c19a781afebcf4d07bf978fb1f8ac04c6bf87428ed5106870f5R238
 *
 * @param account { owner: Principal, subaccount?: Uint8Array }
 * @returns string
 */
export const encodeIcrc1Account = ({
  owner,
  subaccount,
}: Icrc1Account): string => {
  if (subaccount === undefined) {
    return owner.toText();
  }

  const subaccountBytes = shrink(subaccount);

  if (subaccountBytes.length === 0) {
    return owner.toText();
  }

  const bytes = Uint8Array.from([
    ...owner.toUint8Array(),
    ...subaccountBytes,
    subaccountBytes.length,
    EXTRA_BYTES,
  ]);

  return Principal.fromUint8Array(bytes).toText();
};

/**
 * Decodes a string into an Icrc1 account.
 * Formatting Reference: https://github.com/dfinity/ICRC-1/pull/55/files#diff-b335630551682c19a781afebcf4d07bf978fb1f8ac04c6bf87428ed5106870f5R268
 *
 * @param accountString string
 * @throws Error if the string is not a valid Icrc1 account
 * @returns Icrc1Account { owner: Principal, subaccount?: Uint8Array }
 */
export const decodeIcrc1Account = (accountString: string): Icrc1Account => {
  const principal = Principal.fromText(accountString);

  const [ff, nonZeroLength, ...restReversed] = principal
    .toUint8Array()
    .reverse();

  if (ff !== EXTRA_BYTES) {
    return {
      owner: Principal.fromText(accountString),
    };
  }

  if (
    nonZeroLength > MAX_ACCOUNT_BYTES_LENGTH ||
    nonZeroLength === 0 ||
    nonZeroLength === undefined
  ) {
    throw new Error("Invalid account string");
  }

  const subaccountBytesReversed = restReversed.slice(0, nonZeroLength);
  if (
    subaccountBytesReversed[0] === 0 ||
    subaccountBytesReversed.length !== nonZeroLength
  ) {
    throw new Error("Invalid account string");
  }
  while (subaccountBytesReversed.length < MAX_ACCOUNT_BYTES_LENGTH) {
    subaccountBytesReversed.push(0);
  }
  const subaccount = Uint8Array.from(subaccountBytesReversed.reverse());

  const principalBytes = restReversed
    .reverse()
    .filter((_, i) => i < restReversed.length - nonZeroLength);

  return {
    owner: Principal.fromUint8Array(Uint8Array.from(principalBytes)),
    subaccount,
  };
};
