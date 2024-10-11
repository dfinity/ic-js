import { HttpAgent } from "@dfinity/agent";
import { describe, expect } from "@jest/globals";
import { mockAgentManagerConfig, mockHttpAgent } from "../mocks/agent.mock";
import { mockIdentity } from "../mocks/identity.mock";
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
  });

  describe("createAgent", () => {
    it("should create a new agent", async () => {
      mockHttpAgentCreate.mockResolvedValueOnce(mockHttpAgent);

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
      mockHttpAgentCreate.mockResolvedValueOnce(mockHttpAgent);

      await agentManager.createAgent({ identity: mockIdentity });

      const agent = await agentManager.getAgent({ identity: mockIdentity });

      expect(mockHttpAgentCreate).toHaveBeenCalledTimes(2);
      expect(agent).toBeUndefined();
    });
  });

  describe("getAgent", () => {
    it("should create a new agent when there is none", async () => {
      mockHttpAgentCreate.mockResolvedValueOnce(mockHttpAgent);

      const agent = await agentManager.getAgent({ identity: mockIdentity });

      expect(mockHttpAgentCreate).toHaveBeenCalledWith(
        expect.objectContaining({ identity: mockIdentity }),
      );
      expect(agent).toBe(mockHttpAgent);
    });

    it("should return cached agent if already created", async () => {
      mockHttpAgentCreate.mockResolvedValueOnce(mockHttpAgent);

      await agentManager.getAgent({ identity: mockIdentity });

      const agent = await agentManager.getAgent({ identity: mockIdentity });

      expect(mockHttpAgentCreate).toHaveBeenCalledTimes(1);
      expect(agent).toBe(mockHttpAgent);
    });
  });

  describe("clearAgents", () => {
    it("should clear cached agents", async () => {
      mockHttpAgentCreate.mockResolvedValueOnce(mockHttpAgent);

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
