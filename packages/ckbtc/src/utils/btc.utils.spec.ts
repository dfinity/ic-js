import { BtcAddressType, BtcNetwork } from "../enums/btc.enums";
import { ParseBtcAddressMalformedAddressError } from "../errors/btc.errors";
import { parseBtcAddress } from "./btc.utils";

describe("BTC utils", () => {
  it("parse Mainnet P2PKH", () => {
    const address = "17VZNX1SN5NtKa8UQFxwQbFeFc3iqRYhem";

    expect(parseBtcAddress({ address, network: BtcNetwork.Mainnet })).toEqual(
      BtcAddressType.P2pkh
    );
  });

  it("parse Testnet P2PKH", () => {
    const address = "mipcBbFg9gMiCh81Kj8tqqdgoZub1ZJRfn";

    expect(parseBtcAddress({ address, network: BtcNetwork.Testnet })).toEqual(
      BtcAddressType.P2pkh
    );
  });

  it("parse Regtest P2PKH", () => {
    const address = "mipcBbFg9gMiCh81Kj8tqqdgoZub1ZJRfn";

    expect(parseBtcAddress({ address, network: BtcNetwork.Testnet })).toEqual(
      BtcAddressType.P2pkh
    );
  });

  it("fails on invalid P2PKH", () => {
    const address = "17VZNX1SN5NtKa8UFFxwQbFeFc3iqRYhem";

    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Mainnet })
    ).toThrow();
    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Testnet })
    ).toThrow();
    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Regtest })
    ).toThrow();
  });

  it("parse Mainnet P2SH", () => {
    const address = "3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy";

    expect(parseBtcAddress({ address, network: BtcNetwork.Mainnet })).toEqual(
      BtcAddressType.P2sh
    );
  });

  it("parse Testnet P2SH", () => {
    const address = "2MzQwSSnBHWHqSAqtTVQ6v47XtaisrJa1Vc";

    expect(parseBtcAddress({ address, network: BtcNetwork.Testnet })).toEqual(
      BtcAddressType.P2sh
    );
  });

  it("parse Regtest P2SH", () => {
    const address = "2MzQwSSnBHWHqSAqtTVQ6v47XtaisrJa1Vc";

    expect(parseBtcAddress({ address, network: BtcNetwork.Regtest })).toEqual(
      BtcAddressType.P2sh
    );
  });

  it("fails on invalid P2SH", () => {
    const address = "17VZNX1SN5NtKa8UFFxwQbFFFc3iqRYhem";

    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Mainnet })
    ).toThrow();
    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Testnet })
    ).toThrow();
    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Regtest })
    ).toThrow();
  });

  it("fails on bogus address", () => {
    const address = "x";

    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Mainnet })
    ).toThrow();
    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Testnet })
    ).toThrow();
    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Regtest })
    ).toThrow();
  });

  it("fails on empty address", () => {
    const address = "";

    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Mainnet })
    ).toThrow();
    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Testnet })
    ).toThrow();
    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Regtest })
    ).toThrow();
  });

  it("parse Mainnet Bech32 P2WPKH", () => {
    const [a, b] = [
      "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4",
      "bc1q973xrrgje6etkkn9q9azzsgpxeddats8ckvp5s",
    ];

    expect(
      parseBtcAddress({ address: a, network: BtcNetwork.Mainnet })
    ).toEqual(BtcAddressType.P2wpkhV0);
    expect(
      parseBtcAddress({ address: b, network: BtcNetwork.Mainnet })
    ).toEqual(BtcAddressType.P2wpkhV0);
  });

  it("parse Testnet Bech32 P2WPKH", () => {
    const address = "tb1qw508d6qejxtdg4y5r3zarvary0c5xw7kxpjzsx";

    expect(parseBtcAddress({ address, network: BtcNetwork.Testnet })).toEqual(
      BtcAddressType.P2wpkhV0
    );
  });

  it("parse Regtest Bech32 P2WPKH", () => {
    const address = "bcrt1q6z64a43mjgkcq0ul2znwneq3spghrlau9slefp";

    expect(parseBtcAddress({ address, network: BtcNetwork.Regtest })).toEqual(
      BtcAddressType.P2wpkhV0
    );
  });

  it("fails on invalid Bech32", () => {
    const address = "bc1qw508d6qejxtdg4y5r3zrrvary0c5xw7kv8f3t4";

    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Mainnet })
    ).toThrow();
    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Testnet })
    ).toThrow();
    expect(() =>
      parseBtcAddress({ address, network: BtcNetwork.Regtest })
    ).toThrow();
  });

  describe("minter canister samples", () => {
    it("parse Mainnet P2wpkhV0", () => {
      const [a, b] = [
        "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4",
        "BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4",
      ];

      expect(
        parseBtcAddress({ address: a, network: BtcNetwork.Mainnet })
      ).toEqual(BtcAddressType.P2wpkhV0);

      expect(
        parseBtcAddress({ address: b, network: BtcNetwork.Mainnet })
      ).toEqual(BtcAddressType.P2wpkhV0);
    });

    it("should throw invalid checksum", () => {
      const address = "bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t5";

      expect(() => {
        parseBtcAddress({ address, network: BtcNetwork.Regtest });
      }).toThrow(ParseBtcAddressMalformedAddressError);
    });
  });

  describe("not supported address types", () => {
    it("fails on Mainnet Bech32 P2WSH", () => {
      const address =
        "bc1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3qccfmv3";

      expect(() =>
        parseBtcAddress({ address, network: BtcNetwork.Mainnet })
      ).toThrow();
    });

    it("fails on Testnet Bech32 P2WSH", () => {
      const address =
        "tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sl5k7";

      expect(() =>
        parseBtcAddress({ address, network: BtcNetwork.Testnet })
      ).toThrow();
    });

    it("fails on Regtest Bech32 P2WSH", () => {
      const address =
        "bcrt1q5n2k3frgpxces3dsw4qfpqk4kksv0cz96pldxdwxrrw0d5ud5hcqzzx7zt";

      expect(() =>
        parseBtcAddress({ address, network: BtcNetwork.Regtest })
      ).toThrow();
    });
  });
});
