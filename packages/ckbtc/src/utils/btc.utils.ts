import { isNullish } from "@dfinity/utils";
import { base58_to_binary } from "base58-js";
import { bech32, bech32m, type Decoded } from "bech32";
import { sha256 } from "js-sha256";
import { BtcAddressType, BtcNetwork } from "../enums/btc.enums";
import type { BtcAddress } from "../types/btc";

// See https://en.bitcoin.it/wiki/List_of_address_prefixes
const BTC_MAINNET_PREFIX = 0; // or 0x00
const BTC_MAINNET_P2SH_PREFIX = 5; // or 0x05
const BTC_TESTNET_PREFIX = 111; // or 0x6f
const BTC_TESTNET_P2SH_PREFIX = 196; // or 0xc4

const Base58AddressTypes: Record<
  number,
  { type: BtcAddressType; networks: BtcNetwork[] }
> = {
  [BTC_MAINNET_PREFIX]: {
    type: BtcAddressType.P2pkh,
    networks: [BtcNetwork.Mainnet],
  },

  [BTC_TESTNET_PREFIX]: {
    type: BtcAddressType.P2pkh,
    networks: [BtcNetwork.Testnet, BtcNetwork.Regtest],
  },

  [BTC_MAINNET_P2SH_PREFIX]: {
    type: BtcAddressType.P2sh,
    networks: [BtcNetwork.Mainnet],
  },

  [BTC_TESTNET_P2SH_PREFIX]: {
    type: BtcAddressType.P2sh,
    networks: [BtcNetwork.Testnet, BtcNetwork.Regtest],
  },
};

const parseBase58Address = ({
  address,
  network,
}: Required<BtcAddress>): BtcAddressType => {
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
  };

  validateBase58Checksum(decoded);

  const version = decoded[0];

  const versionNetwork = Base58AddressTypes[version];

  if (isNullish(versionNetwork)) {
    throw new Error("UnsupportedAddressType");
  }

  const { type, networks } = versionNetwork;

  if (!networks.includes(network)) {
    throw new Error("WrongNetwork");
  }

  return type;
};

const parseBip173Address = ({
  address,
  network,
}: Required<BtcAddress>): BtcAddressType => {
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

  return BtcAddressType.P2wpkhV0;
};

/**
 * Parse a Bitcoin address.
 *
 * Parse implementation follows strategy implemented in [Minter canister](https://github.com/dfinity/ic/blob/a8da3aa23dc6f8f4708cb0cb8edce84c5bd8f225/rs/bitcoin/ckbtc/minter/src/address.rs#L54).
 * JavaScript code inspired by [bitcoin-address-validation](https://github.com/ruigomeseu/bitcoin-address-validation).
 *
 * @param {BtcAddress} params The Bitcoin address and network to parse
 * @param {string} params.address
 * @param {BtcNetwork} params.network Optional. Default BtcNetwork is Mainnet
 */
export const parseBtcAddress = ({
  address,
  network = BtcNetwork.Mainnet,
}: BtcAddress): BtcAddressType => {
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
