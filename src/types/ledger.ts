import { Agent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { ICP } from "../icp";

export type BlockHeight = bigint;

export type TransferError =
  | InvalidSender
  | InsufficientFunds
  | TxTooOld
  | TxCreatedInFuture
  | TxDuplicate
  | BadFee;

export class InvalidSender {}
export class BadFee {}
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

export type Fetcher = (
  agent: Agent,
  canisterId: Principal,
  methodName: string,
  arg: ArrayBuffer
) => Promise<Uint8Array | Error>;

// HttpAgent options that can be used at construction.
export interface LedgerCanisterOptions {
  // The agent to use when communicating with the ledger canister.
  agent?: Agent;
  // The ledger canister's ID.
  canisterId?: Principal;
  // The method to use for performing an update call. Primarily overridden
  // in test for mocking.
  updateCallOverride?: Fetcher;
  // The method to use for performing a query call. Primarily overridden
  // in test for mocking.
  queryCallOverride?: Fetcher;
}
