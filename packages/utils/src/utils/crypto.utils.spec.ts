import { Expiry, SubmitRequestType } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { hashObject, hashText } from "./crypto.utils";

describe("crypto.utils", () => {
  const hexRegex = /^[0-9a-fA-F]{64}$/;

  describe("hashObject", () => {
    const mockCanisterId = "doked-biaaa-aaaar-qag2a-cai";

    const mockPrincipalText =
      "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe";

    it("returns a valid 64-character hex string for basic string params", async () => {
      const params = { key1: "value1", key2: "value2" };
      const hash = await hashObject(params);

      expect(hash).toHaveLength(64);
      expect(hash).toMatch(hexRegex);
    });

    it("returns different hashes for different input values", async () => {
      const hashInput1 = { key: "value1" };
      const hashInput2 = { key: "value2" };

      const hash1 = await hashObject(hashInput1);
      const hash2 = await hashObject(hashInput2);

      expect(hash1).not.toBe(hash2);
    });

    it("returns the same hash for the same input object", async () => {
      const input = { a: "1", b: "2" };
      const hash1 = await hashObject(input);
      const hash2 = await hashObject(input);

      expect(hash1).toBe(hash2);
    });

    it("returns the expected hash for simple value", async () => {
      const hash = await hashObject({ a: 123 });
      expect(hash).toEqual(
        "917cbcf20ffdb44b525db310004af7597b512c57cf37ad585d9b37b5e6617cca",
      );
    });

    it("generates the expected hash for a complex payload", async () => {
      const payload = {
        amount: 987654321n,
        user: Principal.fromText("aaaaa-aa"),
        key: new Uint8Array([1, 2, 3, 4]),
      };

      const hash = await hashObject(payload);

      expect(hash).toEqual(
        "7809e083f1e990698332f9328280d37d0d6b4637d2a2d8e2fdce0ccf13d9a40e",
      );
    });

    describe("handles complex value types", () => {
      it("handles BigInt values and distinguishes them correctly", async () => {
        const hash1 = await hashObject({ amount: 123n });
        const hash2 = await hashObject({ amount: 456n });

        expect(hash1).not.toBe(hash2);
        expect(hash1).toMatch(hexRegex);
      });

      it("handles Principal values correctly", async () => {
        const principalA = Principal.fromText("v7iq7-yiaaa-aaaan-qmrtq-cai");
        const principalB = Principal.fromText(
          "ids2f-skxn7-4uwrl-lgtdm-mcv3m-m324f-vjn73-xg6xq-uea7b-37klk-nqe",
        );

        const hashA = await hashObject({ user: principalA });
        const hashB = await hashObject({ user: principalB });

        expect(hashA).not.toBe(hashB);
        expect(hashA).toMatch(hexRegex);
      });

      it("handles Uint8Array values correctly", async () => {
        const hash = await hashObject({
          key: new Uint8Array([1, 2, 3, 4]),
        });

        expect(hash).toMatch(hexRegex);
      });

      it("handles Object values safely", async () => {
        class Tmp {
          constructor(private value: number) {}
        }

        const hash = await hashObject({
          expiry: new Tmp(1_000_000),
        });

        expect(hash).toMatch(hexRegex);
      });

      it("handles a combination of all supported types in a single payload", async () => {
        const complexPayload = {
          canister_id: Principal.fromText(mockCanisterId),
          sender: Principal.fromText(mockPrincipalText),
          method_name: "test-method",
          arg: new Uint8Array([68, 73, 68, 76]),
          nonce: new Uint8Array([1, 2, 3]).buffer,
          ingress_expiry: new Expiry(5 * 60 * 1000),
          request_type: SubmitRequestType.Call,
        };

        const hash = await hashObject(complexPayload);
        expect(hash).toMatch(hexRegex);
      });
    });
  });

  describe("hashText", () => {
    it("returns a valid 64-character hex string for a simple string", async () => {
      const hash = await hashText("hello world");
      expect(hash).toHaveLength(64);
      expect(hash).toMatch(hexRegex);
    });

    it("returns different hashes for different strings", async () => {
      const hash1 = await hashText("hello");
      const hash2 = await hashText("world");

      expect(hash1).not.toBe(hash2);
    });

    it("returns the same hash for the same input", async () => {
      const input = "repeatable input";
      const hash1 = await hashText(input);
      const hash2 = await hashText(input);

      expect(hash1).toBe(hash2);
    });

    it("returns expected hash for a known string", async () => {
      const hash = await hashText("abc");
      expect(hash).toBe(
        "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",
      );
    });

    it("handles non-string input (TextEncoder.encode implicitly use toString())", async () => {
      // @ts-expect-error intentionally passing non-string input
      const hash = await hashText({});
      expect(typeof hash).toBe("string");
      expect(hash).toMatch(/^[0-9a-f]{64}$/i);
    });
  });
});
