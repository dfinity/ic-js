import type { AccountIdentifier } from "../account_identifier";
import type { E8s } from "./common";

export type TransferRequest = {
  to: AccountIdentifier;
  amount: bigint;
  memo?: bigint;
  fee?: E8s;
  // TODO: If didc is updated in nns-dapp as well, this array of number will become a Uint8Array
  fromSubAccount?: number[];
};
