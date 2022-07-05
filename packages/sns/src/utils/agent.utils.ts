import type { Agent } from "@dfinity/agent";
import { AnonymousIdentity, HttpAgent } from "@dfinity/agent";

// Note: same as nns agent.utils - could be extracted to a utility

/**
 * @returns The default agent to use. An agent that connects to mainnet with the anonymous identity.
 */
export const defaultAgent = (): Agent =>
  new HttpAgent({
    host: "https://ic0.app",
    identity: new AnonymousIdentity(),
  });
