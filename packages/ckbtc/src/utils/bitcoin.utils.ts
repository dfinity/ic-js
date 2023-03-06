import { isNullish } from "@dfinity/utils/src";
import { base58_to_binary } from "base58-js";
import { bech32, bech32m, type Decoded } from "bech32";
import { sha256 } from "js-sha256";

export enum BtcNetwork {
  Mainnet,
  Regtest,
  Testnet,
}

export enum BitcoinAddressType {
  P2wpkhV0,
  P2pkh,
  P2sh,
}

const Base58AddressTypes: Record<
  number,
  { type: BitcoinAddressType; network: BtcNetwork }
> = {
  0x00: {
    type: BitcoinAddressType.P2pkh,
    network: BtcNetwork.Mainnet,
  },

  0x6f: {
    type: BitcoinAddressType.P2pkh,
    network: BtcNetwork.Testnet,
  },

  0x05: {
    type: BitcoinAddressType.P2sh,
    network: BtcNetwork.Mainnet,
  },

  0xc4: {
    type: BitcoinAddressType.P2sh,
    network: BtcNetwork.Testnet,
  },
};

export interface BitcoinAddress {
  address: string;
  network?: BtcNetwork;
}

const parseBase58Address = ({
  address,
  network,
}: Required<BitcoinAddress>): BitcoinAddressType => {
  const decodeBase58 = (address: string): Uint8Array => {
    try {
      return base58_to_binary(address);
    } catch (error) {
      throw new Error("Invalid Address");
    }
  };

  const decoded: Uint8Array = decodeBase58(address);

  const { length } = decoded;

  if (length !== 25) {
    throw new Error("MalformedAddress");
  }

  const validateBase58Checksum = (decoded: Uint8Array) => {
    const expectedChecksum = decoded.slice(length - 4, length);
    const body = decoded.slice(0, length - 4);

    const bodyHash = sha256.create();
    bodyHash.update(body);

    const checksumHash = sha256.create();
    checksumHash.update(bodyHash.digest());

    const checksum = checksumHash.array().slice(0, 4);

    if (
        expectedChecksum.some(
            (value: number, index: number) => value !== checksum[index]
        )
    ) {
      throw new Error("MalformedAddress");
    }
  }

  validateBase58Checksum(decoded);

  const version = decoded[0];

  const versionNetwork = Base58AddressTypes[version];

  if (isNullish(versionNetwork)) {
    throw new Error("UnsupportedAddressType");
  }

  const { type, network: parsedNetwork } = versionNetwork;

  if (parsedNetwork !== network) {
    throw new Error("WrongNetwork");
  }

  return type;
};

const parseBip173Address = ({
  address,
  network,
}: Required<BitcoinAddress>): BitcoinAddressType => {
  const decodeBech32 = (address: string): Decoded => {
    try {
      if (
        address.startsWith("bc1p") ||
        address.startsWith("tb1p") ||
        address.startsWith("bcrt1p")
      ) {
        return bech32m.decode(address);
      }

      return bech32.decode(address);
    } catch (error) {
      throw new Error("MalformedAddress");
    }
  };

  const { prefix, words } = decodeBech32(address);

  const mapPrefixToNetwork: Record<string, BtcNetwork> = {
    bc: BtcNetwork.Mainnet,
    tb: BtcNetwork.Testnet,
    bcrt: BtcNetwork.Regtest,
  };

  const decodedNetwork: BtcNetwork | undefined = mapPrefixToNetwork[prefix];

  if (isNullish(decodedNetwork)) {
    throw new Error("Invalid address");
  }

  if (decodedNetwork !== network) {
    throw new Error("UnexpectedHumanReadablePart");
  }

  const [witnessVersion, ...rest] = words;

  if (witnessVersion !== 0) {
    throw new Error("UnsupportedWitnessVersion");
  }

  const data = bech32.fromWords(rest);

  if (data.length !== 20) {
    throw new Error("BadWitnessLength");
  }

  return BitcoinAddressType.P2wpkhV0;
};

/**
 * Parse a Bitcoin address.
 *
 * Parse implementation follows strategy implemented in [Minter canister](https://github.com/dfinity/ic/blob/a8da3aa23dc6f8f4708cb0cb8edce84c5bd8f225/rs/bitcoin/ckbtc/minter/src/address.rs#L54).
 * JavaScript code inspired by [bitcoin-address-validation](https://github.com/ruigomeseu/bitcoin-address-validation).
 *
 * @param {BitcoinAddress} params The Bitcoin address and network to parse
 * @param {string} params.address
 * @param {BtcNetwork} params.network Optional. Default BtcNetwork.Mainnet
 */
export const parseBitcoinAddress = ({
  address,
  network = BtcNetwork.Mainnet,
}: BitcoinAddress): BitcoinAddressType => {
  switch (address.charAt(0)) {
    case "1":
    case "2":
    case "3":
    case "m":
    case "n":
      return parseBase58Address({ address, network });
    case "b":
    case "B":
    case "t":
    case "T":
      return parseBip173Address({ address, network });
    case "":
      throw new Error("NoData");
    default:
      throw new Error("UnsupportedAddressType");
  }
};
