import type { Agent } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";
import type { _SERVICE as SnsWasmService } from "../../../../candid/sns_wasm";

export interface SnsWasmCanisterOptions {
  // The agent to use when communicating with the Sns-wasm canister.
  agent?: Agent;
  // The Sns-wasm canister's ID.
  canisterId?: Principal;
  // The service to use when calling into the IC. Primarily overridden
  // in test for mocking.
  serviceOverride?: SnsWasmService;
  // The service to use when calling into the IC. Primarily overridden
  // in test for mocking.
  certifiedServiceOverride?: SnsWasmService;
}
