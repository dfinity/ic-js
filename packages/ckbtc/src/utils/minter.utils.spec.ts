import { Cbor } from "@dfinity/agent";
import { decodeMintMemo, LegacyMintMemoError } from "./minter.utils";

describe("Transactions utils", () => {
  it("should decode memo as a kyt fail", () => {
    const kytFee = 1331;
    const decodedMemo = [2, [kytFee, 1, 123]];
    const memo = new Uint8Array(Cbor.encode(decodedMemo));

    expect(decodeMintMemo(memo)).toEqual(decodedMemo);
  });

  it("should decode memo as a accumulated kyt", () => {
    const decodedMemo = [1];
    const memo = new Uint8Array(Cbor.encode(decodedMemo));

    expect(decodeMintMemo(memo)).toEqual(decodedMemo);
  });

  it("should decode memo as a single UTXO to ckBTC", () => {
    const btcWithdrawalAddress = "1ASLxsAMbbt4gcrNc6v6qDBW4JkeWAtTeh";
    const kytFee = 1333;
    const decodedMemo = [0, [btcWithdrawalAddress, kytFee, undefined]];
    const memo = new Uint8Array(Cbor.encode(decodedMemo));

    expect(decodeMintMemo(memo)).toEqual(decodedMemo);
  });

  it("should not decode legacy memo", () => {
    expect(() => decodeMintMemo(Uint8Array.from([]))).toThrow(
      new LegacyMintMemoError(),
    );

    expect(() => decodeMintMemo(new Uint8Array(32))).toThrow(
      new LegacyMintMemoError(),
    );
  });
});