import type { HttpAgent } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";
import type { StatusCallback } from "./progress.utils";

export interface LedgerCanisterParams {
  ledgerCanisterId: Principal;
  agent: HttpAgent;
}

export interface ApproveTransferParams {
  canisters: { ledgerCanisterId: Principal; minterCanisterId: Principal };
  agent: HttpAgent;
  amount: bigint;
}

export type IcTransferParams = ApproveTransferParams & {
  to: string;
  statusCallback?: StatusCallback;
};
