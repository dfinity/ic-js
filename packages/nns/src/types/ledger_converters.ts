import type { AccountIdentifier } from "../account_identifier";
import type { ICP } from "../icp";
import type { E8s } from "./common";

export type TransferRequest = {
  to: AccountIdentifier;
  amount: ICP;
  memo?: bigint;
  fee?: E8s;
  fromSubAccount?: number[];
};
