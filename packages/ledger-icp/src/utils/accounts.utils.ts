import { bigEndianCrc32 } from "@dfinity/utils";
import { InvalidAccountIDError } from "../errors/ledger.errors";

/**
 * Checks account id check sum
 *
 * @throws InvalidAccountIDError
 */
export const checkAccountId = (accountId: string): void => {
  // Verify the checksum of the given address.
  if (accountId.length != 64) {
    throw new InvalidAccountIDError(
      `Invalid account identifier ${accountId}. The account identifier must be 64 chars in length.`,
    );
  }

  const toAccountBytes = Buffer.from(accountId, "hex");
  const foundChecksum = toAccountBytes.slice(0, 4);
  const expectedCheckum = Buffer.from(bigEndianCrc32(toAccountBytes.slice(4)));
  if (!expectedCheckum.equals(foundChecksum)) {
    throw new InvalidAccountIDError(
      `Account identifier ${accountId} has an invalid checksum. Are you sure the account identifier is correct?\n\nExpected checksum: ${expectedCheckum.toString(
        "hex",
      )}\nFound checksum: ${foundChecksum.toString("hex")}`,
    );
  }
};
