import type { HttpAgentOptions, Identity } from "@icp-sdk/core/agent";

export type CreateAgentParams = Pick<
  HttpAgentOptions,
  "host" | "retryTimes" | "verifyQuerySignatures"
> & {
  identity: Identity;
  fetchRootKey?: boolean;
};
