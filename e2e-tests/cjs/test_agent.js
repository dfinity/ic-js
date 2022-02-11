// Creates a @dfinity/agent for testing purposes.
const network = process.env.NETWORK || "mainnet";
const testConfig = require("../config").networks[network];
import { AnonymousIdentity, HttpAgent } from "@dfinity/agent";

const testAgent = new HttpAgent({
  host: testConfig.host,
  identity: new AnonymousIdentity(),
});

module.exports = { testConfig, testAgent };
