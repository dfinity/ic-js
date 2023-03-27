import { Principal } from "@dfinity/principal";
import { decodeBase32, encodeBase32 } from "./base32.utils";
import { bigEndianCrc32 } from "./crc.utils";

describe("base32-utils", () => {
  const checksum = "dfxgiyy";

  it("should encode base32", () => {
    const owner = Principal.fromText(
      "k2t6j-2nvnp-4zjm3-25dtz-6xhaa-c7boj-5gayf-oj3xs-i43lp-teztq-6ae"
    );
    const subaccount = Uint8Array.from([...Array(32)].map((_, i) => i + 1));

    const crc = bigEndianCrc32(
      Uint8Array.from([...owner.toUint8Array(), ...subaccount])
    );

    expect(encodeBase32(crc)).toEqual(checksum);
  });

  // Same logic as in @dfinity/principal.fromText
  it("should decode base32", () => {
    const canisterIdNoDash = "rrkah-fqaaa-aaaaa-aaaaq-cai"
      .toLowerCase()
      .replace(/-/g, "");

    let arr = decodeBase32(canisterIdNoDash);
    arr = arr.slice(4, arr.length);

    const principal = Principal.fromUint8Array(arr);

    expect(principal.toText()).toEqual("rrkah-fqaaa-aaaaa-aaaaq-cai");
  });
});
