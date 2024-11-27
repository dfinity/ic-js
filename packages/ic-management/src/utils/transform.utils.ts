import type { ActorConfig, CallConfig } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";

type CallTransform = Required<ActorConfig>["callTransform"];

type QueryTransform = Required<ActorConfig>["queryTransform"];

/**
 * Transformer function for service creation with `callTransform` or `queryTransform`.
 *
 * This function maps the `effective_canister_id` for calls to the Management Canister (`aaaaa-aa`).
 *
 * Original source `getManagementCanister` in agent-js.
 *
 * Providing a transformer is required to determine the effective_canister_id when the request is an update call to the Management Canister (aaaaa-aa).
 *
 * @link https://internetcomputer.org/docs/current/references/ic-interface-spec/#http-effective-canister-id
 **/
export const transform: CallTransform | QueryTransform = (
  _methodName: string,
  args: unknown[],
  _callConfig: CallConfig,
): { effectiveCanisterId: Principal } => {
  const first = args[0] as { canister_id: string };
  let effectiveCanisterId = Principal.fromHex("");
  if (first && typeof first === "object" && first.canister_id) {
    effectiveCanisterId = Principal.from(first.canister_id as unknown);
  }
  return { effectiveCanisterId };
};
