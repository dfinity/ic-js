import { HttpAgent } from "@dfinity/agent";
import { describe, expect } from "@jest/globals";
import {
  mockAgentManagerConfig,
  mockHttpAgent,
  mockHttpAgent2,
} from "../mocks/agent.mock";
import { mockIdentity, mockIdentity2 } from "../mocks/identity.mock";
import { AgentManager } from "./agent.utils";

jest.mock("@dfinity/agent", () => ({
  HttpAgent: {
    create: jest.fn(),
  },
}));

jest.mock("./nullish.utils", () => ({
  isNullish: jest.requireActual("./nullish.utils").isNullish,
  nonNullish: jest.requireActual("./nullish.utils").nonNullish,
}));

describe("AgentManager", () => {
  let agentManager: AgentManager;
  const mockHttpAgentCreate = HttpAgent.create as jest.Mock;

  beforeEach(() => {
    agentManager = AgentManager.create(mockAgentManagerConfig);
    jest.clearAllMocks();

    mockHttpAgentCreate.mockResolvedValueOnce(mockHttpAgent);
  });

  describe("createAgent", () => {
    it("should create a new agent", async () => {
      const agent = await agentManager.createAgent({ identity: mockIdentity });

      expect(mockHttpAgentCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          identity: mockIdentity,
          host: mockAgentManagerConfig.host,
          shouldFetchRootKey: mockAgentManagerConfig.fetchRootKey,
        }),
      );
      expect(agent).toBe(mockHttpAgent);
    });

    it("should not cache agent", async () => {
      await agentManager.createAgent({ identity: mockIdentity });

      const agent = await agentManager.getAgent({ identity: mockIdentity });

      expect(mockHttpAgentCreate).toHaveBeenCalledTimes(2);
      expect(agent).toBeUndefined();
    });
  });

  describe("getAgent", () => {
    it("should create a new agent when there is none", async () => {
      const agent = await agentManager.getAgent({ identity: mockIdentity });

      expect(mockHttpAgentCreate).toHaveBeenCalledWith(
        expect.objectContaining({ identity: mockIdentity }),
      );
      expect(agent).toBe(mockHttpAgent);
    });

    it("should return cached agent if already created", async () => {
      await agentManager.getAgent({ identity: mockIdentity });

      const agent = await agentManager.getAgent({ identity: mockIdentity });

      expect(mockHttpAgentCreate).toHaveBeenCalledTimes(1);
      expect(agent).toBe(mockHttpAgent);
    });

    it("should handle multiple agents for multiple identities", async () => {
      await agentManager.getAgent({ identity: mockIdentity });

      mockHttpAgentCreate.mockResolvedValueOnce(mockHttpAgent2);

      const agent2 = await agentManager.getAgent({ identity: mockIdentity2 });
      const agent1 = await agentManager.getAgent({ identity: mockIdentity });

      expect(mockHttpAgentCreate).toHaveBeenCalledTimes(2);

      expect(agent1).toBe(mockHttpAgent);
      expect(agent1).not.toBe(mockHttpAgent2);

      expect(agent2).toBe(mockHttpAgent2);
      expect(agent2).not.toBe(mockHttpAgent);
    });
  });

  describe("clearAgents", () => {
    it("should clear cached agents", async () => {
      await agentManager.getAgent({ identity: mockIdentity });

      const agentBefore = await agentManager.getAgent({
        identity: mockIdentity,
      });

      expect(agentBefore).toBe(mockHttpAgent);

      agentManager.clearAgents();

      const agentAfter = await agentManager.getAgent({
        identity: mockIdentity,
      });

      expect(mockHttpAgentCreate).toHaveBeenCalledTimes(2);
      expect(agentAfter).not.toBe(mockHttpAgent);
      expect(agentAfter).toBeUndefined();
    });
  });
});
