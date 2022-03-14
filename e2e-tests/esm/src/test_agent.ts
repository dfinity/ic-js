/**
 * Creates a @dfinity/agent for testing purposes.
 * @jest-environment jsdom
 */

import { AnonymousIdentity, HttpAgent } from "@dfinity/agent";
import fetch from "cross-fetch";

/**
 * Gets the configuration for the given network, or panics if there is none.
 * @return { network: String, testConfig: object }
 */
const getNetworkConfig = () => {
  const network = process.env.NETWORK || "nnsdapp";
  if (!network) throw new Error("Environment variable 'NETWORK' must be set.");
  const testConfig = require("../config").networks[network];
  if (!testConfig)
    throw new Error(`Missing e2e configuration for network '${network}'.`);
  return { network, testConfig };
};

export const { network, testConfig } = getNetworkConfig();

/**
 * Creates a test agent.
 * @return {HttpAgent}
 */
export const testAgent: () => Promise<HttpAgent> = async () => {
  let agent: HttpAgent = new HttpAgent({
    host: testConfig.host,
    identity: new AnonymousIdentity(),
  });

  if (network !== "mainnet") {
    await agent.fetchRootKey();
  }
  return agent;
};

// If not running in browser, add polyfill of `window.fetch` for agent-js to work.
global.fetch = fetch;
