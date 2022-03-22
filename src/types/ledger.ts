import { Agent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { CanisterCall } from "./common";

// HttpAgent options that can be used at construction.
export interface LedgerCanisterOptions {
  // The agent to use when communicating with the ledger canister.
  agent?: Agent;
  // The ledger canister's ID.
  canisterId?: Principal;
  // The method to use for performing an update call. Primarily overridden
  // in test for mocking.
  updateCallOverride?: CanisterCall;
  // The method to use for performing a query call. Primarily overridden
  // in test for mocking.
  queryCallOverride?: CanisterCall;
}
