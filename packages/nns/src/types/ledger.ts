import type { Agent } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";
import type { _SERVICE as LedgerService } from "../../../../candid/ledger";

export type LedgerCanisterCall = (params: {
  agent: Agent;
  canisterId: Principal;
  methodName: string;
  arg: ArrayBuffer;
}) => Promise<Uint8Array>;

// HttpAgent options that can be used at construction.
export interface LedgerCanisterOptions {
  // The agent to use when communicating with the ledger canister.
  agent?: Agent;
  // The ledger canister's ID.
  canisterId?: Principal;
  // The service to use when calling into the IC. Primarily overridden
  // in test for mocking.
  serviceOverride?: LedgerService;
  // The service to use when calling into the IC. Primarily overridden
  // in test for mocking.
  certifiedServiceOverride?: LedgerService;
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
