import type { ActorSubclass, Agent } from "@dfinity/agent";
import { Actor } from "@dfinity/agent";
import type { IDL } from "@dfinity/candid";
import type { Principal } from "@dfinity/principal";
import type { CanisterOptions } from "../types/canister.options";
import { defaultAgent } from "./agent.utils";

type RequiredCanisterOptions<T> = Required<
  Pick<CanisterOptions<T>, "canisterId">
> &
  Omit<CanisterOptions<T>, "canisterId">;

export const createServices = <T>({
  options: {
    canisterId,
    serviceOverride,
    certifiedServiceOverride,
    agent: agentOption,
  },
  idlFactory,
  certifiedIdlFactory,
}: {
  options: RequiredCanisterOptions<T>;
  idlFactory: IDL.InterfaceFactory;
  certifiedIdlFactory: IDL.InterfaceFactory;
}): {
  service: ActorSubclass<T>;
  certifiedService: ActorSubclass<T>;
  agent: Agent;
  canisterId: Principal;
} => {
  const agent: Agent = agentOption ?? defaultAgent();

  const service: ActorSubclass<T> =
    serviceOverride ??
    Actor.createActor<T>(idlFactory, {
      agent,
      canisterId,
    });

  const certifiedService: ActorSubclass<T> =
    certifiedServiceOverride ??
    Actor.createActor<T>(certifiedIdlFactory, {
      agent,
      canisterId,
    });

  return { service, certifiedService, agent, canisterId };
};
