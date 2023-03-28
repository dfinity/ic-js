import { Principal } from "@dfinity/principal";
import { asciiStringToByteArray, numberToUint8Array } from "./arrays.utils";
import { sha256 } from "./crypto.utils";

describe("crypto-utils", () => {
  it("should calculate sha256 of a sns neuron id", async () => {
    const data = Uint8Array.from([
      0x0c,
      ...asciiStringToByteArray("neuron-stake"),
      ...Principal.fromText(
        "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe"
      ).toUint8Array(),
      ...numberToUint8Array(4),
    ]);

    const hash = await sha256(data);

    const expected = new Uint8Array([
      198, 112, 210, 99, 31, 205, 63, 124, 217, 206, 133, 104, 105, 140, 83,
      167, 139, 60, 94, 58, 107, 169, 215, 12, 177, 219, 237, 24, 75, 149, 241,
      128,
    ]);

    expect(hash).toEqual(expected);
  });

  it("should encode sha256 to expected hex value", async () => {
    const msgUint8 = new TextEncoder().encode("hello world #@¶$");
    const hash = await sha256(msgUint8);
    const hashHex = Array.from(hash)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    expect(hashHex).toEqual(
      "559a1d0c6d7756c70361a8f69fe0df408f2d43cdd0f71f5827f7c02451fa64d6"
    );
  });
});
