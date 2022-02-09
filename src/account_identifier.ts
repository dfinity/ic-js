import { Principal } from "@dfinity/principal";
import { sha224 } from "js-sha256";
import { AccountIdentifier as AccountIdentifierPb } from "../proto/ledger_pb";
import {
  asciiStringToByteArray,
  calculateCrc32,
  toHexString,
} from "./utils/converter.utils";

export class AccountIdentifier {
  private constructor(private readonly bytes: Uint8Array) {}

  public static fromHex(hex: string): AccountIdentifier {
    return new AccountIdentifier(Uint8Array.from(Buffer.from(hex, "hex")));
  }

  public static fromPrincipal(
    principal: Principal,
    subAccount = SubAccount.ZERO
  ): AccountIdentifier {
    // Hash (sha224) the principal, the subAccount and some padding
    const padding = asciiStringToByteArray("\x0Aaccount-id");

    const shaObj = sha224.create();
    shaObj.update([
      ...padding,
      ...principal.toUint8Array(),
      ...subAccount.toUint8Array(),
    ]);
    const hash = new Uint8Array(shaObj.array());

    // Prepend the checksum of the hash and convert to a hex string
    const checksum = calculateCrc32(hash);
    const bytes = new Uint8Array([...checksum, ...hash]);
    return new AccountIdentifier(bytes);
  }

  /**
   * @returns An AccountIdentifier protobuf object.
   */
  public toProto(): AccountIdentifierPb {
    const accountIdentifier = new AccountIdentifierPb();
    accountIdentifier.setHash(this.bytes);
    return accountIdentifier;
  }

  public toHex(): string {
    return toHexString(this.bytes);
  }
}

export class SubAccount {
  private constructor(private readonly bytes: Uint8Array) {}

  public static fromBytes(bytes: Uint8Array): SubAccount | Error {
    if (bytes.length != 32) {
      return Error("Subaccount length must be 32-bytes");
    }

    return new SubAccount(bytes);
  }

  public static fromPrincipal(principal: Principal): SubAccount {
    const bytes = new Uint8Array(32).fill(0);

    const principalBytes = principal.toUint8Array();
    bytes[0] = principalBytes.length;

    for (let i = 0; i < principalBytes.length; i++) {
      bytes[1 + i] = principalBytes[i];
    }

    return new SubAccount(bytes);
  }

  public static ZERO: SubAccount = new SubAccount(new Uint8Array(32).fill(0));

  public toUint8Array(): Uint8Array {
    return this.bytes;
  }
}
