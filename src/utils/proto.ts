import { Agent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { QueryResponseStatus } from "@dfinity/agent";
import { polling } from "@dfinity/agent";

export const submitUpdateRequest = async (
  agent: Agent,
  canisterId: Principal,
  methodName: string,
  arg: ArrayBuffer
): Promise<ArrayBuffer> => {
  const pollStrategy = polling.defaultStrategy();

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
    pollStrategy
  );

  return blob;
};


export const submitQueryRequest = async (
  agent: Agent,
  canisterId: Principal,
  methodName: string,
  arg: ArrayBuffer
): Promise<ArrayBuffer> => {
  const queryResponse = await agent.query(canisterId, {
    methodName,
    arg,
  });

  if (queryResponse.status == QueryResponseStatus.Rejected) {
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

  return queryResponse.reply.arg;
};
