import type { HttpAgentOptions, Identity } from "@dfinity/agent";

export type CreateAgentParams = Pick<
  HttpAgentOptions,
  "host" | "retryTimes" | "verifyQuerySignatures"
> & {
  identity: Identity;
  fetchRootKey?: boolean;
};
