/**
 * Creates a @dfinity/agent for testing purposes.
 * @jest-environment jsdom
 */

const { AnonymousIdentity, HttpAgent } = require("@dfinity/agent");

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

const { network, testConfig } = getNetworkConfig();

/**
 * Creates a test agent.
 * @return {HttpAgent}
 */
const testAgent = () => {
  let agent = new HttpAgent({
    host: testConfig.host,
    identity: new AnonymousIdentity(),
  });

  let ans = new Promise((yay) => yay(agent));
  if (network !== "mainnet") {
    ans = ans.then((agent) => agent.fetchRootKey().then(() => agent));
  }
  return ans;
};

module.exports = { testConfig, testAgent };
