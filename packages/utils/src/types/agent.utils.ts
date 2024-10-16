import type { Identity } from "@dfinity/agent";

export interface CreateAgentParams {
  identity: Identity;
  host?: string;
  fetchRootKey?: boolean;
  // @deprecated Shipped as an opt-in feature but, will become the default in next major version
  verifyQuerySignatures?: boolean;
  retryTimes?: number;
}
