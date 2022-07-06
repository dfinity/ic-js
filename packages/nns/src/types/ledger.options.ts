import type { Agent } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";
import type { _SERVICE as LedgerService } from "../../candid/ledger";
import type { CanisterOptions } from "./canister.options";

export type LedgerCanisterCall = (params: {
  agent: Agent;
  canisterId: Principal;
  methodName: string;
  arg: ArrayBuffer;
}) => Promise<Uint8Array>;

export interface LedgerCanisterOptions extends CanisterOptions<LedgerService> {
  // The method to use for performing an update call. Primarily overridden
  // in test for mocking.
  updateCallOverride?: LedgerCanisterCall;
  // The method to use for performing a query call. Primarily overridden
  // in test for mocking.
  queryCallOverride?: LedgerCanisterCall;
  // Ledger IC App needs requests built with Protobuf.
  // This flag ensures that the methods use Protobuf.
  hardwareWallet?: boolean;
}
