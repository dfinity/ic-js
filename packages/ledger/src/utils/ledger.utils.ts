import { Principal } from "@dfinity/principal";
import {
  bigEndianCrc32,
  notEmptyString,
  uint8ArrayToHexString,
} from "@dfinity/utils";
import { hexStringToUint8Array } from "@dfinity/utils/src";
import { encodeBase32 } from "@dfinity/utils/src/utils/base32.utils";
import type { IcrcAccount } from "../types/ledger.responses";

const MAX_SUBACCOUNT_HEX_LENGTH = 64;

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
 * Encodes an Icrc-1 account compatible into a string.
 * Formatting Reference: https://github.com/dfinity/ICRC-1/pull/55/files#diff-b335630551682c19a781afebcf4d07bf978fb1f8ac04c6bf87428ed5106870f5R238
 *
 * @param account { owner: Principal, subaccount?: Uint8Array }
 * @returns string
 */
export const encodeIcrcAccount = ({
  owner,
  subaccount,
}: IcrcAccount): string => {
  if (subaccount === undefined) {
    return owner.toText();
  }

  const subaccountBytes = shrink(subaccount);

  if (subaccountBytes.length === 0) {
    return owner.toText();
  }

  const removeLeadingZeros = (text: string): string => text.replace(/^0+/, "");

  return `${owner.toText()}-${encodeCrc({
    owner,
    subaccount,
  })}.${removeLeadingZeros(uint8ArrayToHexString(subaccount))}`;
};

const encodeCrc = ({ owner, subaccount }: Required<IcrcAccount>): string => {
  const crc = bigEndianCrc32(
    Uint8Array.from([...owner.toUint8Array(), ...subaccount])
  );

  return encodeBase32(crc);
};

/**
 * Decodes a string into an Icrc-1 compatible account.
 * Formatting Reference: https://github.com/dfinity/ICRC-1/pull/98
 *
 * @param accountString string
 * @throws Error if the string is not a valid Icrc-1 account
 * @returns IcrcAccount { owner: Principal, subaccount?: Uint8Array }
 */
export const decodeIcrcAccount = (accountString: string): IcrcAccount => {
  const [principalAndMaybeCheckSum, subaccountHex] = accountString.split(".");

  if (!notEmptyString(principalAndMaybeCheckSum)) {
    throw new Error("Invalid account. No string provided.");
  }

  if (subaccountHex === undefined) {
    return {
      owner: Principal.fromText(accountString),
    };
  }

  const [checksum, ...rest] = principalAndMaybeCheckSum.split("-").reverse();
  const principalText = rest.reverse().join("-");

  const account = {
    owner: Principal.fromText(principalText),
    subaccount: hexStringToUint8Array(
      subaccountHex.padStart(MAX_SUBACCOUNT_HEX_LENGTH, "0")
    ),
  };

  const crcText = encodeCrc(account);

  if (crcText !== checksum) {
    throw new Error("Invalid account. Invalid checksum.");
  }

  return account;
};
