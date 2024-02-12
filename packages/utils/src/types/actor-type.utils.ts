import type { ActorMethod } from "@dfinity/agent";

export type ServiceParam<S, K extends keyof S> =
  S[K] extends ActorMethod<infer A, unknown> ? A : never;

export type ServiceResponse<S, K extends keyof S> =
  S[K] extends ActorMethod<never, infer R> ? Awaited<R> : never;
