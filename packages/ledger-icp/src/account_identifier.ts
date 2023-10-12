import type { AccountIdentifier as AccountIdentifierPb } from "@dfinity/nns-proto";
import type { Principal } from "@dfinity/principal";
import {
  arrayOfNumberToUint8Array,
  asciiStringToByteArray,
  bigEndianCrc32,
  uint8ArrayToHexString,
} from "@dfinity/utils";
import { sha224 } from "@noble/hashes/sha256";
import { importNnsProto } from "./utils/proto.utils";

export class AccountIdentifier {
  private constructor(private readonly bytes: Uint8Array) {}

  public static fromHex(hex: string): AccountIdentifier {
    return new AccountIdentifier(Uint8Array.from(Buffer.from(hex, "hex")));
  }

  public static fromPrincipal({
    principal,
    subAccount = SubAccount.ZERO,
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
      ])
    );
    const hash = shaObj.digest();

    // Prepend the checksum of the hash and convert to a hex string
    const checksum = bigEndianCrc32(hash);
    const bytes = new Uint8Array([...checksum, ...hash]);
    return new AccountIdentifier(bytes);
  }

  /**
   * @returns An AccountIdentifier protobuf object.
   */
  public async toProto(): Promise<AccountIdentifierPb> {
    const { AccountIdentifier: AccountIdentifierConstructor } =
      await importNnsProto();
    const accountIdentifier = new AccountIdentifierConstructor();
    accountIdentifier.setHash(this.bytes);
    return accountIdentifier;
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
    if (id < 0 || id > 255) {
      throw "Subaccount ID must be >= 0 and <= 255";
    }

    const bytes: Uint8Array = new Uint8Array(32).fill(0);
    bytes[31] = id;
    return new SubAccount(bytes);
  }

  public static ZERO: SubAccount = this.fromID(0);

  public toUint8Array(): Uint8Array {
    return this.bytes;
  }
}
