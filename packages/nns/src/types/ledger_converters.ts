import type { AccountIdentifier } from "../account_identifier";
import type { E8s } from "./common";

export type TransferRequest = {
  to: AccountIdentifier;
  amount: bigint;
  memo?: bigint;
  fee?: E8s;
  fromSubAccount?: number[];
};
