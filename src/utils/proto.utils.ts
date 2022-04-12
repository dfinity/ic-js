import { Agent, polling } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";

/**
 * Submits an update call to the IC.
 * @returns The (binary) response if the request succeeded, an error otherwise.
 */
export const updateCall = async ({
  agent,
  canisterId,
  methodName,
  arg,
}: {
  agent: Agent;
  canisterId: Principal;
  methodName: string;
  arg: ArrayBuffer;
}): Promise<Uint8Array> => {
  const submitResponse = await agent.call(canisterId, {
    methodName,
    arg,
    effectiveCanisterId: canisterId,
  });

  if (!submitResponse.response.ok) {
    throw new Error(
      [
        "Call failed:",
        `  Method: ${methodName}`,
        `  Canister ID: ${canisterId}`,
        `  Request ID: ${submitResponse.requestId}`,
        `  HTTP status code: ${submitResponse.response.status}`,
        `  HTTP status text: ${submitResponse.response.statusText}`,
      ].join("\n")
    );
  }

  const blob = await polling.pollForResponse(
    agent,
    canisterId,
    submitResponse.requestId,
    polling.defaultStrategy()
  );

  return new Uint8Array(blob);
};

/**
 * Submits a query call to the IC.
 * @returns The (binary) response if the request succeeded, an error otherwise.
 */
export const queryCall = async ({
  agent,
  canisterId,
  methodName,
  arg,
}: {
  agent: Agent;
  canisterId: Principal;
  methodName: string;
  arg: ArrayBuffer;
}): Promise<Uint8Array> => {
  const queryResponse = await agent.query(canisterId, {
    methodName,
    arg,
  });

  if (queryResponse.status == "rejected") {
    throw new Error(
      [
        "Call failed:",
        `  Method: ${methodName}`,
        `  Canister ID: ${canisterId}`,
        `  HTTP status code: ${queryResponse.reject_code}`,
        `  HTTP status text: ${queryResponse.reject_message}`,
      ].join("\n")
    );
  }

  return new Uint8Array(queryResponse.reply.arg);
};
