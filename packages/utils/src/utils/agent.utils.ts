import type { Agent, Identity } from "@dfinity/agent";
import { AnonymousIdentity, HttpAgent } from "@dfinity/agent";

/**
 * Get a default agent that connects to mainnet with the anonymous identity.
 * @returns The default agent to use
 */
export const defaultAgent = (): Agent =>
  new HttpAgent({
    host: "https://ic0.app",
    identity: new AnonymousIdentity(),
  });

/**
 * Create an agent for a given identity
 * @param identity A mandatory identity to use for the agent
 * @param host An optional host to connect to
 * @param fetchRootKey Fetch root key for certificate validation during local development or on testnet
 */
export const createAgent = async ({
  identity,
  host,
  fetchRootKey = false,
}: {
  identity: Identity;
  host?: string;
  fetchRootKey?: boolean;
}): Promise<HttpAgent> => {
  const agent: HttpAgent = new HttpAgent({
    identity,
    ...(host !== undefined && { host }),
  });

  if (fetchRootKey) {
    await agent.fetchRootKey();
  }

  return agent;
};
