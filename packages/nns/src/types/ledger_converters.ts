import type { AccountIdentifier } from "../account_identifier";
import type { Token } from "../Token";
import type { E8s } from "./common";

export type TransferRequest = {
  to: AccountIdentifier;
  amount: Token;
  memo?: bigint;
  fee?: E8s;
  fromSubAccount?: number[];
};
