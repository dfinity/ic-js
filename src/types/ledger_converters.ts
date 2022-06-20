import { AccountIdentifier } from "../account_identifier";
import { ICP } from "../icp";
import { E8s } from "./common";

export type TransferRequest = {
  to: AccountIdentifier;
  amount: ICP;
  memo?: bigint;
  fee?: E8s;
  fromSubAccount?: number[];
};
