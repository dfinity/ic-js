import { hashToHex } from "./crypto.utils";

describe("hashToHex", () => {
  const hexRegex = /^[0-9a-f]{64}$/;

  it("returns a valid 64-character hex string", async () => {
    const hash = await hashToHex("input");
    expect(hash).toHaveLength(64);
    expect(hash).toMatch(hexRegex);
  });

  it("returns different hashes for different inputs", async () => {
    const hash1 = await hashToHex("first");
    const hash2 = await hashToHex("second");

    expect(hash1).not.toBe(hash2);
  });

  it("returns the same hash for the same input", async () => {
    const input = "test";
    const hash1 = await hashToHex(input);
    const hash2 = await hashToHex(input);

    expect(hash1).toBe(hash2);
  });

  it('returns correct hash for "input"', async () => {
    const hash = await hashToHex("input");
    expect(hash).toEqual(
      "c96c6d5be8d08a12e7b5cdc1b207fa6b2430974c86803d8891675e76fd992c20",
    );
  });

  it("returns correct hash for empty string", async () => {
    const hash = await hashToHex("");
    expect(hash).toEqual(
      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    );
  });

  it("handles long strings correctly", async () => {
    const longString = "test".repeat(10_000);
    const hash = await hashToHex(longString);
    expect(hash).toHaveLength(64);
    expect(hash).toMatch(hexRegex);
  });

  it("treats different whitespace as different input", async () => {
    const a = await hashToHex("test");
    const b = await hashToHex(" test ");
    expect(a).not.toBe(b);
  });

  it("treats uppercase and lowercase input as different", async () => {
    const lower = await hashToHex("input");
    const upper = await hashToHex("INPUT");
    expect(lower).not.toBe(upper);
  });

  it("works with symbols and punctuation", async () => {
    const hash = await hashToHex("!@#$/\\()[]{}<>&?*=+-~");
    expect(hash).toMatch(hexRegex);
  });
});
