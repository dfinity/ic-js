import { isNullish } from "@dfinity/utils/src";
import { bech32, bech32m, type Decoded } from "bech32";
import { base58_to_binary } from 'base58-js';

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
      throw new Error('Invalid Address');
    }
  }

  const decoded: Uint8Array = decodeBase58(address);

  if (decoded.length !== 25) {
    throw new Error('MalformedAddress');
  }


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
