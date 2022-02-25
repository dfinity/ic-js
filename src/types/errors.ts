import { ICP } from "../icp";
import { BlockHeight } from "./common";

export type TransferError =
  | InvalidSender
  | InsufficientFunds
  | TxTooOld
  | TxCreatedInFuture
  | TxDuplicate
  | BadFee
  | NeuronNotFound;

export class GeneralError {}
export class NeuronNotFound {}
export class InvalidSender {}
export class BadFee {}
export class InsufficientAmount {
  constructor(public readonly minimumAmount: ICP) {}
}
export class InsufficientFunds {
  constructor(public readonly balance: ICP) {}
}
export class TxTooOld {
  constructor(public readonly allowed_window_secs: number) {}
}
export class TxCreatedInFuture {}
export class TxDuplicate {
  constructor(public readonly duplicateOf: BlockHeight) {}
}
