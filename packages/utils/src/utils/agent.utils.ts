import type { Agent, Identity } from "@dfinity/agent";
import { AnonymousIdentity, HttpAgent } from "@dfinity/agent";
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
 * @param identity A mandatory identity to use for the agent
 * @param host An optional host to connect to
 * @param fetchRootKey Fetch root key for certificate validation during local development or on testnet
 * @param verifyQuerySignatures Check for signatures in the state tree signed by the node that replies to queries - i.e. certify responses.
 * @param retryTimes Set the number of retries the agent should perform before errorring.
 */
export const createAgent = async ({
  identity,
  host,
  fetchRootKey = false,
  verifyQuerySignatures = false,
  retryTimes,
}: {
  identity: Identity;
  host?: string;
  fetchRootKey?: boolean;
  // @deprecated Shipped as an opt-in feature but, will become the default in next major version
  verifyQuerySignatures?: boolean;
  retryTimes?: number;
}): Promise<HttpAgent> => {
  return await HttpAgent.create({
    identity,
    ...(nonNullish(host) && { host }),
    verifyQuerySignatures,
    ...(nonNullish(retryTimes) && { retryTimes }),
    shouldFetchRootKey: fetchRootKey,
  });
};
