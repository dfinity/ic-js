import type { Agent } from "@dfinity/agent";
import { AnonymousIdentity, HttpAgent } from "@dfinity/agent";
import type { CreateAgentParams } from "../types/agent.utils";
import { nonNullish } from "./nullish.utils";

/**
 * Get a default agent that connects to mainnet with the anonymous identity.
 * @returns The default agent to use
 */
export const defaultAgent = (): Agent =>
  HttpAgent.createSync({
    host: "https://icp-api.io",
    identity: new AnonymousIdentity(),
  });

/**
 * Create an agent for a given identity
 *
 * @param {CreateAgentParams} params The parameters to create a new HTTP agent
 * @param {Identity} params.identity A mandatory identity to use for the agent
 * @param {string} params.host An optional host to connect to, particularly useful for local development
 * @param {boolean} params.fetchRootKey Fetch root key for certificate validation during local development or on testnet
 * @param {boolean} params.verifyQuerySignatures Check for signatures in the state tree signed by the node that replies to queries - i.e. certify responses.
 * @param {number} params.retryTimes Set the number of retries the agent should perform before error.
 */
export const createAgent = async ({
  identity,
  host,
  fetchRootKey = false,
  verifyQuerySignatures = false,
  retryTimes,
}: CreateAgentParams): Promise<HttpAgent> => {
  return await HttpAgent.create({
    identity,
    ...(nonNullish(host) && { host }),
    verifyQuerySignatures,
    ...(nonNullish(retryTimes) && { retryTimes }),
    shouldFetchRootKey: fetchRootKey,
  });
};
