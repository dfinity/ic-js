// Creates a @dfinity/agent for testing purposes.
const network = process.env.NETWORK || "mainnet";
const testConfig = require("../config").networks[network];
import { AnonymousIdentity, HttpAgent } from "@dfinity/agent";

const testAgent = () => {
  let agent = new HttpAgent({
    host: testConfig.host,
    identity: new AnonymousIdentity(),
  });

  let ans = new Promise((yay) => () => agent);
  if (network !== "mainnet") {
    ans = ans.then((agent) => agent.fetchRootKey().then(() => agent));
  }
  return ans;
};

module.exports = { testConfig, testAgent };
