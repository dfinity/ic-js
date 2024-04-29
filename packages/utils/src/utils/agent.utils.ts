import type { Agent, Identity } from "@dfinity/agent";
import { AnonymousIdentity, HttpAgent } from "@dfinity/agent";

/**
 * Get a default agent that connects to mainnet with the anonymous identity.
 * @returns The default agent to use
 */
export const defaultAgent = (): Agent =>
  new HttpAgent({
    host: "https://icp-api.io",
    identity: new AnonymousIdentity(),
  });

/**
 * Create an agent for a given identity
 * @param identity A mandatory identity to use for the agent
 * @param host An optional host to connect to
 * @param fetchRootKey Fetch root key for certificate validation during local development or on testnet
 * @param verifyQuerySignatures Check for signatures in the state tree signed by the node that replies to queries - i.e. certify responses.
 */
export const createAgent = async ({
  identity,
  host,
  fetchRootKey = false,
  verifyQuerySignatures = false,
}: {
  identity: Identity;
  host?: string;
  fetchRootKey?: boolean;
  // @deprecated Shipped as an opt-in feature but, will become the default in next major version
  verifyQuerySignatures?: boolean;
}): Promise<HttpAgent> => {
  const agent: HttpAgent = new HttpAgent({
    identity,
    ...(host !== undefined && { host }),
    verifyQuerySignatures,
    retryTimes: 10
  });

  if (fetchRootKey) {
    await agent.fetchRootKey();
  }

  return agent;
};
