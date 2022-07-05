import type { ActorSubclass, Agent } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export interface CanisterOptions<T> {
  // The agent to use when communicating with the canister.
  agent?: Agent;
  // The canister's ID.
  canisterId?: Principal;
  // The service to use when calling into the IC. Primarily overridden
  // in test for mocking.
  serviceOverride?: ActorSubclass<T>;
  // The service to use when calling into the IC. Primarily overridden
  // in test for mocking.
  certifiedServiceOverride?: ActorSubclass<T>;
}
