import type { BtcNetwork } from "../enums/btc.enums";

export interface BtcAddress {
  address: string;
  network?: BtcNetwork;
}
