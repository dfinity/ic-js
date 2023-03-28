import { BtcAddressType, BtcNetwork } from "../enums/btc.enums";
import {
  ParseBtcAddressMalformedAddressError,
  ParseBtcAddressNoDataError,
  ParseBtcAddressUnsupportedAddressTypeError,
} from "../errors/btc.errors";
import { parseBtcAddress } from "./btc.utils";

describe("BTC utils", () => {
  it("parse Mainnet P2PKH", async () => {
    const address = "17VZNX1SN5NtKa8UQFxwQbFeFc3iqRYhem";

    expect(
      await parseBtcAddress({ address, network: BtcNetwork.Mainnet })
    ).toEqual({
      address,
      network: BtcNetwork.Mainnet,
      type: BtcAddressType.P2pkh,
      parser: "base58",
    });
  });

  it("parse Testnet P2PKH", async () => {
    const address = "mipcBbFg9gMiCh81Kj8tqqdgoZub1ZJRfn";

    expect(
      await parseBtcAddress({ address, network: BtcNetwork.Testnet })
    ).toEqual({
      address,
      network: BtcNetwork.Testnet,
      type: BtcAddressType.P2pkh,
      parser: "base58",
    });
  });

  it("parse Regtest P2PKH", async () => {
    const address = "mipcBbFg9gMiCh81Kj8tqqdgoZub1ZJRfn";

    expect(
      await parseBtcAddress({ address, network: BtcNetwork.Regtest })
    ).toEqual({
      address,
      network: BtcNetwork.Regtest,
      type: BtcAddressType.P2pkh,
      parser: "base58",
    });
  });

  it("fails on invalid P2PKH", async () => {
    const address = "17VZNX1SN5NtKa8UFFxwQbFeFc3iqRYhem";

    await expect(
      parseBtcAddress({ address, network: BtcNetwork.Mainnet })
    ).rejects.toThrow(ParseBtcAddressMalformedAddressError);
    await expect(
      parseBtcAddress({ address, network: BtcNetwork.Testnet })
    ).rejects.toThrow(ParseBtcAddressMalformedAddressError);
    await expect(
      parseBtcAddress({ address, network: BtcNetwork.Regtest })
    ).rejects.toThrow(ParseBtcAddressMalformedAddressError);
  });

  it("parse Mainnet P2SH", async () => {
    const address = "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy";

    expect(
      await parseBtcAddress({ address, network: BtcNetwork.Mainnet })
    ).toEqual({
      address,
      network: BtcNetwork.Mainnet,
      type: BtcAddressType.P2sh,
      parser: "base58",
    });
  });

  it("parse Testnet P2SH", async () => {
    const address = "2MzQwSSnBHWHqSAqtTVQ6v47XtaisrJa1Vc";

    expect(
      await parseBtcAddress({ address, network: BtcNetwork.Testnet })
    ).toEqual({
      address,
      network: BtcNetwork.Testnet,
      type: BtcAddressType.P2sh,
      parser: "base58",
    });
  });

  it("parse Regtest P2SH", async () => {
    const address = "2MzQwSSnBHWHqSAqtTVQ6v47XtaisrJa1Vc";

    expect(
      await parseBtcAddress({ address, network: BtcNetwork.Regtest })
    ).toEqual({
      address,
      network: BtcNetwork.Regtest,
      type: BtcAddressType.P2sh,
      parser: "base58",
    });
  });

  it("fails on invalid P2SH", async () => {
    const address = "17VZNX1SN5NtKa8UFFxwQbFFFc3iqRYhem";

    await expect(
      parseBtcAddress({ address, network: BtcNetwork.Mainnet })
    ).rejects.toThrow(ParseBtcAddressMalformedAddressError);
    await expect(
      parseBtcAddress({ address, network: BtcNetwork.Testnet })
    ).rejects.toThrow(ParseBtcAddressMalformedAddressError);
    await expect(
      parseBtcAddress({ address, network: BtcNetwork.Regtest })
    ).rejects.toThrow(ParseBtcAddressMalformedAddressError);
  });

  it("fails on bogus address", () => {
    const address = "x";

    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Mainnet })
    ).toThrow(ParseBtcAddressUnsupportedAddressTypeError);
    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Testnet })
    ).toThrow(ParseBtcAddressUnsupportedAddressTypeError);
    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Regtest })
    ).toThrow(ParseBtcAddressUnsupportedAddressTypeError);
  });

  it("fails on empty address", () => {
    const address = "";

    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Mainnet })
    ).toThrow(ParseBtcAddressNoDataError);
    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Testnet })
    ).toThrow(ParseBtcAddressNoDataError);
    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Regtest })
    ).toThrow(ParseBtcAddressNoDataError);
  });

  it("parse Mainnet Bech32 P2WPKH", async () => {
    const [a, b] = [
      "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4",
      "bc1q973xrrgje6etkkn9q9azzsgpxeddats8ckvp5s",
    ];

    expect(
      await parseBtcAddress({ address: a, network: BtcNetwork.Mainnet })
    ).toEqual({
      address: a,
      network: BtcNetwork.Mainnet,
      type: BtcAddressType.P2wpkhV0,
      parser: "bip-173",
    });
    expect(
      await parseBtcAddress({ address: b, network: BtcNetwork.Mainnet })
    ).toEqual({
      address: b,
      network: BtcNetwork.Mainnet,
      type: BtcAddressType.P2wpkhV0,
      parser: "bip-173",
    });
  });

  it("parse Testnet Bech32 P2WPKH", async () => {
    const address = "tb1qw508d6qejxtdg4y5r3zarvary0c5xw7kxpjzsx";

    expect(
      await parseBtcAddress({ address, network: BtcNetwork.Testnet })
    ).toEqual({
      address,
      network: BtcNetwork.Testnet,
      type: BtcAddressType.P2wpkhV0,
      parser: "bip-173",
    });
  });

  it("parse Regtest Bech32 P2WPKH", async () => {
    const address = "bcrt1q6z64a43mjgkcq0ul2znwneq3spghrlau9slefp";

    expect(
      await parseBtcAddress({ address, network: BtcNetwork.Regtest })
    ).toEqual({
      address,
      network: BtcNetwork.Regtest,
      type: BtcAddressType.P2wpkhV0,
      parser: "bip-173",
    });
  });

  it("fails on invalid Bech32", async () => {
    const address = "bc1qw508d6qejxtdg4y5r3zrrvary0c5xw7kv8f3t4";

    await expect(
      parseBtcAddress({ address, network: BtcNetwork.Mainnet })
    ).rejects.toThrow(ParseBtcAddressMalformedAddressError);
    await expect(
      parseBtcAddress({ address, network: BtcNetwork.Testnet })
    ).rejects.toThrow(ParseBtcAddressMalformedAddressError);
    await expect(
      parseBtcAddress({ address, network: BtcNetwork.Regtest })
    ).rejects.toThrow(ParseBtcAddressMalformedAddressError);
  });

  describe("minter canister samples", () => {
    it("parse Mainnet P2wpkhV0", async () => {
      const [a, b] = [
        "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4",
        "BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4",
      ];

      expect(
        await parseBtcAddress({ address: a, network: BtcNetwork.Mainnet })
      ).toEqual({
        address: a,
        network: BtcNetwork.Mainnet,
        type: BtcAddressType.P2wpkhV0,
        parser: "bip-173",
      });

      expect(
        await parseBtcAddress({ address: b, network: BtcNetwork.Mainnet })
      ).toEqual({
        address: b,
        network: BtcNetwork.Mainnet,
        type: BtcAddressType.P2wpkhV0,
        parser: "bip-173",
      });
    });

    it("should throw invalid checksum", async () => {
      const address = "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t5";

      await expect(
        parseBtcAddress({ address, network: BtcNetwork.Regtest })
      ).rejects.toThrow(ParseBtcAddressMalformedAddressError);
    });
  });

  describe("not supported address types", () => {
    it("fails on Mainnet Bech32 P2WSH", async () => {
      const address =
        "bc1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3qccfmv3";

      await expect(
        parseBtcAddress({ address, network: BtcNetwork.Mainnet })
      ).rejects.toThrow();
    });

    it("fails on Testnet Bech32 P2WSH", async () => {
      const address =
        "tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sl5k7";

      await expect(
        parseBtcAddress({ address, network: BtcNetwork.Testnet })
      ).rejects.toThrow();
    });

    it("fails on Regtest Bech32 P2WSH", async () => {
      const address =
        "bcrt1q5n2k3frgpxces3dsw4qfpqk4kksv0cz96pldxdwxrrw0d5ud5hcqzzx7zt";

      await expect(
        parseBtcAddress({ address, network: BtcNetwork.Regtest })
      ).rejects.toThrow();
    });
  });
});
