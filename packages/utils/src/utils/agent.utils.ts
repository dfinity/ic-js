import type { Agent, Identity } from "@dfinity/agent";
import { AnonymousIdentity, HttpAgent } from "@dfinity/agent";
import { isNullish, nonNullish } from "./nullish.utils";

/**
 * Get a default agent that connects to mainnet with the anonymous identity.
 * @returns The default agent to use
 */
export const defaultAgent = (): Agent =>
  HttpAgent.createSync({
    host: "https://icp-api.io",
    identity: new AnonymousIdentity()
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
                                    retryTimes
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
    shouldFetchRootKey: fetchRootKey
  });
};

export interface AgentManagerConfig {
  fetchRootKey: boolean;
  host: string;
}

/**
 * AgentManager class manages HttpAgent instances for different identities.
 *
 * It caches agents by identity to optimise resource usage and avoid unnecessary agent creation.
 * Provides functionality to create new agents, retrieve cached agents, and clear the cache when needed.
 */
export class AgentManager {
  private agents: Record<string, HttpAgent> | undefined | null = undefined;

  private constructor(private readonly config: AgentManagerConfig) {
    this.config = config;
  }

  /**
   * Static factory method to create a new AgentManager instance.
   *
   * This method serves as an alternative to directly using the private constructor,
   * making it more convenient to create instances of `AgentManager` using a simple and clear method.
   *
   * @param {AgentManagerConfig} config - Configuration options for the AgentManager instance.
   * @param {boolean} config.fetchRootKey - Whether to fetch the root key for certificate validation.
   * @param {string} config.host - The host to connect to.
   * @returns {AgentManager} A new instance of `AgentManager`.
   */
  public static create(config: AgentManagerConfig): AgentManager {
    return new AgentManager(config);
  }

  /**
   * Get or create an HTTP agent for a given identity.
   *
   * If the agent for the specified identity has been created and cached, it is retrieved from the cache.
   * If no agent exists for the identity, a new one is created, cached, and then returned.
   *
   * @param {Identity} identity - The identity to be used to create the agent.
   * @returns {Promise<HttpAgent>} The HttpAgent associated with the given identity.
   */
  public async getAgent({
                          identity
                        }: {
    identity: Identity;
  }): Promise<HttpAgent> {
    const key = identity.getPrincipal().toText();

    if (isNullish(this.agents) || isNullish(this.agents[key])) {
      const agent = await createAgent({
        identity,
        fetchRootKey: this.config.fetchRootKey,
        host: this.config.host,
        verifyQuerySignatures: true
      });

      this.agents = {
        ...(this.agents ?? {}),
        [key]: agent
      };

      return agent;
    }

    return this.agents[key];
  }

  /**
   * Clear the cache of HTTP agents.
   *
   * This method removes all cached agents, forcing new agent creation on the next request for any identity.
   * Useful when identities have changed or if you want to reset all active connections.
   */
  public clearAgents(): void {
    this.agents = null;
  }
}
