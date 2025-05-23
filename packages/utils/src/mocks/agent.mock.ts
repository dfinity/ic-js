import type { HttpAgent } from "@dfinity/agent";
import type { AgentManagerConfig } from "../utils/agent.utils";

export const mockHttpAgent = {
  call: jest.fn().mockResolvedValue({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => ({ data: "mocked call result" }),
  }),
  query: jest.fn().mockResolvedValue({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => ({ data: "mocked query result" }),
  }),
  fetchRootKey: jest.fn().mockResolvedValue(undefined),
} as unknown as HttpAgent;

export const mockHttpAgent2 = {
  call: jest.fn().mockResolvedValue({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => ({ data: "mocked call result" }),
  }),
  query: jest.fn().mockResolvedValue({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => ({ data: "mocked query result" }),
  }),
  fetchRootKey: jest.fn().mockResolvedValue(undefined),
} as unknown as HttpAgent;

export const mockAgentManagerConfig: AgentManagerConfig = {
  fetchRootKey: false,
  host: "https://icp-api.io",
};
