import type { Principal } from "@dfinity/principal";
import {
  arrayOfNumberToUint8Array,
  asciiStringToByteArray,
  bigEndianCrc32,
  uint8ArrayToHexString,
} from "@dfinity/utils";
import { sha224 } from "@noble/hashes/sha256";

export class AccountIdentifier {
  private constructor(private readonly bytes: Uint8Array) {}

  public static fromHex(hex: string): AccountIdentifier {
    return new AccountIdentifier(Uint8Array.from(Buffer.from(hex, "hex")));
  }

  public static fromPrincipal({
    principal,
    subAccount = SubAccount.fromID(0),
  }: {
    principal: Principal;
    subAccount?: SubAccount;
  }): AccountIdentifier {
    // Hash (sha224) the principal, the subAccount and some padding
    const padding = asciiStringToByteArray("\x0Aaccount-id");

    const shaObj = sha224.create();
    shaObj.update(
      arrayOfNumberToUint8Array([
        ...padding,
        ...principal.toUint8Array(),
        ...subAccount.toUint8Array(),
      ]),
    );
    const hash = shaObj.digest();

    // Prepend the checksum of the hash and convert to a hex string
    const checksum = bigEndianCrc32(hash);
    const bytes = new Uint8Array([...checksum, ...hash]);
    return new AccountIdentifier(bytes);
  }

  public toHex(): string {
    return uint8ArrayToHexString(this.bytes);
  }

  public toUint8Array(): Uint8Array {
    return this.bytes;
  }

  public toNumbers(): number[] {
    return Array.from(this.bytes);
  }

  public toAccountIdentifierHash(): { hash: Uint8Array } {
    return {
      hash: this.toUint8Array(),
    };
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

  public static fromID(id: number): SubAccount {
    if (id < 0) throw new Error("Number cannot be negative");

    if (id > Number.MAX_SAFE_INTEGER) {
      throw new Error("Number is too large to fit in 32 bytes.");
    }

    const view = new DataView(new ArrayBuffer(32));

    // Fix for IOS < 14.8 setBigUint64 absence
    if (typeof view.setBigUint64 === "function") {
      view.setBigUint64(24, BigInt(id));
    } else {
      const TWO_TO_THE_32 = BigInt(1) << BigInt(32);
      view.setUint32(24, Number(BigInt(id) >> BigInt(32)));
      view.setUint32(28, Number(BigInt(id) % TWO_TO_THE_32));
    }

    const uint8Arary = new Uint8Array(view.buffer);
    return new SubAccount(uint8Arary);
  }

  public toUint8Array(): Uint8Array {
    return this.bytes;
  }
}
