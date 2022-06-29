import { Agent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { SnsWasmService } from "../../candid/sns-wasm.idl";

export interface SnsManagerCanisterOptions {
  // The agent to use when communicating with the SNS manager canister.
  agent?: Agent;
  // The SNS manager canister's ID.
  canisterId?: Principal;
  // The service to use when calling into the IC. Primarily overridden
  // in test for mocking.
  serviceOverride?: SnsWasmService;
  // The service to use when calling into the IC. Primarily overridden
  // in test for mocking.
  certifiedServiceOverride?: SnsWasmService;
}
