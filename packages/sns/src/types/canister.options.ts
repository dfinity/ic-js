import type { ActorSubclass, Agent } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

// Note: only difference with nns canister options is canisterId is mandatory for Sns

export interface CanisterOptions<T> {
  // The agent to use when communicating with the canister.
  agent?: Agent;
  // The service to use when calling into the IC. Primarily overridden
  // in test for mocking.
  serviceOverride?: ActorSubclass<T>;
  // The service to use when calling into the IC. Primarily overridden
  // in test for mocking.
  certifiedServiceOverride?: ActorSubclass<T>;
}

export interface SnsCanisterOptions<T> extends CanisterOptions<T> {
  // The canister's ID.
  canisterId: Principal;
}
