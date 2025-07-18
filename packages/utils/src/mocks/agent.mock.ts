import type { HttpAgent } from "@dfinity/agent";
import type { AgentManagerConfig } from "../utils/agent.utils";

export const mockHttpAgent = {
  call: vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => ({ data: "mocked call result" }),
  }),
  query: vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => ({ data: "mocked query result" }),
  }),
  fetchRootKey: vi.fn().mockResolvedValue(undefined),
} as unknown as HttpAgent;

export const mockHttpAgent2 = {
  call: vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => ({ data: "mocked call result" }),
  }),
  query: vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => ({ data: "mocked query result" }),
  }),
  fetchRootKey: vi.fn().mockResolvedValue(undefined),
} as unknown as HttpAgent;

export const mockAgentManagerConfig: AgentManagerConfig = {
  fetchRootKey: false,
  host: "https://icp-api.io",
};
