import {
  ActorSubclass,
  AnonymousIdentity,
  polling,
  type Agent,
  type RequestId,
} from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { mock } from "jest-mock-extended";
import type {
  ClaimOrRefreshNeuronFromAccountResponse,
  GovernanceError as GovernanceErrorDetail,
  ListKnownNeuronsResponse,
  ManageNeuronResponse,
  ProposalInfo as RawProposalInfo,
  _SERVICE as GovernanceService,
} from "../candid/governance";
import { NeuronId as PbNeuronId } from "../proto/base_types_pb";
import { ManageNeuronResponse as PbManageNeuronResponse } from "../proto/governance_pb";
import {
  FeatureNotSupportedError,
  GovernanceError,
  InsufficientAmountError,
  InvalidAccountIDError,
  InvalidPercentageError,
  UnrecognizedTypeError,
} from "./errors/governance.errors";
import { GovernanceCanister } from "./governance.canister";
import { ICP } from "./icp";
import { LedgerCanister } from "./ledger.canister";
import {
  mockListNeuronsResponse,
  mockNeuronId,
  mockNeuronInfo,
} from "./mocks/governance.mock";
import {
  MakeProposalRequest,


} from "./types/governance_converters";
import {Topic, Vote} from './enums/governance.enums';

const unexpectedGovernanceError: GovernanceErrorDetail = {
  error_message: "Error updating neuron",
  error_type: 0,
};

describe("GovernanceCanister", () => {
  const requestId = new ArrayBuffer(20) as RequestId;
  const agentCallSuccessfulResponse = {
    requestId,
    response: {
      ok: true,
      status: 13,
      statusText: "good",
    },
  };
  const newSpawnNeuronId = new PbNeuronId();
  newSpawnNeuronId.setId("1234");
  const spawnResponse = new PbManageNeuronResponse.SpawnResponse();
  spawnResponse.setCreatedNeuronId(newSpawnNeuronId);
  const successfulResponse = new PbManageNeuronResponse();
  successfulResponse.setSpawn(spawnResponse);
  // We only care about the specifics in the Spawn Response.
  // Therefore, we don't need to create a valid and specific response for each call.
  const spyPollForResponse = jest
    .spyOn(polling, "pollForResponse")
    .mockImplementation(
      jest.fn().mockResolvedValue(successfulResponse.serializeBinary())
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  // TODO: Take out tests from "listKnownNeurons" describe
  describe("GovernanceCanister.listKnownNeurons", () => {
    it("populates all KnownNeuron fields correctly", async () => {
      const response: ListKnownNeuronsResponse = {
        known_neurons: [
          {
            id: [{ id: BigInt(100) }],
            known_neuron_data: [{ name: "aaa", description: ["xyz"] }],
          },
        ],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.list_known_neurons.mockResolvedValue(response);

      const governance = GovernanceCanister.create({
        serviceOverride: service,
      });
      const res = await governance.listKnownNeurons(false);

      expect(res).toContainEqual({
        id: BigInt(100),
        name: "aaa",
        description: "xyz",
      });
    });

    it("handles description being undefined", async () => {
      const response: ListKnownNeuronsResponse = {
        known_neurons: [
          {
            id: [{ id: BigInt(100) }],
            known_neuron_data: [{ name: "aaa", description: [] }],
          },
        ],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.list_known_neurons.mockResolvedValue(response);

      const governance = GovernanceCanister.create({
        serviceOverride: service,
      });
      const res = await governance.listKnownNeurons(false);

      expect(res).toContainEqual({
        id: BigInt(100),
        name: "aaa",
        description: undefined,
      });
    });

    it("returns all KnownNeurons returned by the Governance canister", async () => {
      const response: ListKnownNeuronsResponse = {
        known_neurons: [
          {
            id: [{ id: BigInt(100) }],
            known_neuron_data: [{ name: "aaa", description: [] }],
          },
          {
            id: [{ id: BigInt(200) }],
            known_neuron_data: [{ name: "bbb", description: [] }],
          },
          {
            id: [{ id: BigInt(300) }],
            known_neuron_data: [{ name: "ccc", description: [] }],
          },
          {
            id: [{ id: BigInt(400) }],
            known_neuron_data: [{ name: "ddd", description: [] }],
          },
        ],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.list_known_neurons.mockResolvedValue(response);

      const governance = GovernanceCanister.create({
        serviceOverride: service,
      });
      const res = await governance.listKnownNeurons(false);

      expect(res.map((n) => Number(n.id))).toEqual([100, 200, 300, 400]);
    });

    it("creates new neuron successfully", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [
          { ClaimOrRefresh: { refreshed_neuron_id: [{ id: neuronId }] } },
        ],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const mockLedger = mock<LedgerCanister>();
      mockLedger.transfer.mockImplementation(
        jest.fn().mockResolvedValue(BigInt(1))
      );

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const response = await governance.stakeNeuron({
        stake: ICP.fromString("1") as ICP,
        principal: new AnonymousIdentity().getPrincipal(),
        ledgerCanister: mockLedger,
      });

      expect(mockLedger.transfer).toBeCalled();
      expect(service.manage_neuron).toBeCalled();
      expect(response).toEqual(neuronId);
    });

    it("creates new neuron from subaccount successfully", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [
          { ClaimOrRefresh: { refreshed_neuron_id: [{ id: neuronId }] } },
        ],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const mockLedger = mock<LedgerCanister>();
      mockLedger.transfer.mockImplementation(
        jest.fn().mockResolvedValue(BigInt(1))
      );

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const response = await governance.stakeNeuron({
        stake: ICP.fromString("1") as ICP,
        principal: new AnonymousIdentity().getPrincipal(),
        ledgerCanister: mockLedger,
        fromSubAccount: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 1,
        ],
      });

      expect(mockLedger.transfer).toBeCalled();
      expect(service.manage_neuron).toBeCalled();
      expect(response).toEqual(neuronId);
    });

    it("returns insufficient amount errors", async () => {
      const neuronId = BigInt(1);
      const clainNeuronResponse: ClaimOrRefreshNeuronFromAccountResponse = {
        result: [{ NeuronId: { id: neuronId } }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.claim_or_refresh_neuron_from_account.mockResolvedValue(
        clainNeuronResponse
      );

      const mockLedger = mock<LedgerCanister>();
      mockLedger.transfer.mockImplementation(jest.fn());

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const call = async () =>
        await governance.stakeNeuron({
          stake: ICP.fromString("0.1") as ICP,
          principal: new AnonymousIdentity().getPrincipal(),
          ledgerCanister: mockLedger,
        });

      expect(mockLedger.transfer).not.toBeCalled();
      expect(service.claim_or_refresh_neuron_from_account).not.toBeCalled();

      await expect(call).rejects.toThrow(
        new InsufficientAmountError(ICP.fromString("1") as ICP)
      );
    });

    describe("listNeurons", () => {
      it("list user neurons", async () => {
        const service = mock<ActorSubclass<GovernanceService>>();
        service.list_neurons.mockResolvedValue(mockListNeuronsResponse);

        const governance = GovernanceCanister.create({
          certifiedServiceOverride: service,
          serviceOverride: service,
        });
        const neurons = await governance.listNeurons({
          certified: true,
        });
        expect(service.list_neurons).toBeCalled();
        expect(neurons.length).toBe(1);
      });

      it("list Hardware Wallet neurons", async () => {
        const agent = mock<Agent>();
        agent.call.mockResolvedValue(agentCallSuccessfulResponse);

        const governance = GovernanceCanister.create({
          agent,
          hardwareWallet: true,
        });
        await governance.listNeurons({ certified: true });
        expect(agent.call).toBeCalled();
        expect(spyPollForResponse).toBeCalled();
      });

      it("should not support query neurons with hardware wallet (only update calls)", async () => {
        const agent = mock<Agent>();
        agent.call.mockResolvedValue(agentCallSuccessfulResponse);

        const governance = GovernanceCanister.create({
          agent,
          hardwareWallet: true,
        });

        const call = async () =>
          await governance.listNeurons({ certified: false });

        await expect(call).rejects.toThrow(new FeatureNotSupportedError());
      });
    });

    it("registers vote successfully", async () => {
      const serviceResponse: ManageNeuronResponse = {
        command: [{ RegisterVote: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      await governance.registerVote({
        neuronId: BigInt(1),
        vote: Vote.YES,
        proposalId: BigInt(2),
      });
      expect(service.manage_neuron).toBeCalled();
    });

    it("throw error when registers vote fails with error", async () => {
      const error: GovernanceErrorDetail = {
        error_message: "Some error",
        error_type: 1,
      };

      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const call = async () =>
        await governance.registerVote({
          neuronId: BigInt(1),
          vote: Vote.YES,
          proposalId: BigInt(2),
        });

      await expect(call).rejects.toThrow(new GovernanceError(error));
    });

    it("throw error when registers vote fails unexpectedly", async () => {
      const serviceResponse: ManageNeuronResponse = {
        command: [],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const call = async () =>
        await governance.registerVote({
          neuronId: BigInt(1),
          vote: Vote.YES,
          proposalId: BigInt(2),
        });

      await expect(call).rejects.toThrow(
        new GovernanceError(unexpectedGovernanceError)
      );
    });

    it("should fetch and convert a neuron", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
        serviceOverride: service,
      });

      service.list_neurons.mockResolvedValue(
        Promise.resolve(mockListNeuronsResponse)
      );

      const response = await governance.getNeuron({
        certified: true,
        neuronId: BigInt(1),
      });

      expect(service.list_neurons).toBeCalled();
      expect(response).not.toBeUndefined();
      expect(Number(response?.neuronId)).toEqual(Number(mockNeuronId));
      expect(response?.state).toEqual(mockNeuronInfo.state);
    });
  });

  describe("GovernanceCanister.getProposal", () => {
    it("should fetch and convert single ProposalInfo", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
        serviceOverride: service,
      });
      const rawProposal = {
        id: [{ id: 1n }],
        ballots: [],
        proposal: [],
        proposer: [],
        latest_tally: [],
      } as unknown as RawProposalInfo;
      service.get_proposal_info.mockResolvedValue(
        Promise.resolve([rawProposal])
      );
      const response = await governance.getProposal({
        proposalId: BigInt(1),
      });

      expect(service.get_proposal_info).toBeCalled();
      expect(response).not.toBeUndefined();
      expect(response).toHaveProperty("id", 1n);
    });
  });

  describe("GovernanceCanister.claimOrRefreshNeuronFromAccount", () => {
    it("returns successfully neuron id", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [
          { ClaimOrRefresh: { refreshed_neuron_id: [{ id: neuronId }] } },
        ],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const principal = Principal.fromText("aaaaa-aa");
      const response = await governance.claimOrRefreshNeuronFromAccount({
        memo: BigInt(1),
        controller: principal,
      });
      expect(service.manage_neuron).toBeCalled();
      expect(response).toBe(neuronId);
    });

    it("throws in unexpected response", async () => {
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Configure: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const principal = Principal.fromText("aaaaa-aa");
      const call = () =>
        governance.claimOrRefreshNeuronFromAccount({
          memo: BigInt(1),
          controller: principal,
        });
      expect(call).rejects.toThrow(UnrecognizedTypeError);
    });
  });

  describe("GovernanceCanister.increaseDissolveDelay", () => {
    it("increases dissolve delay of the neuron successfully", async () => {
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Configure: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      await governance.increaseDissolveDelay({
        neuronId: BigInt(1),
        additionalDissolveDelaySeconds: 100000,
      });
      expect(service.manage_neuron).toBeCalled();
    });

    it("increases dissolve delay of the neuron from a Hardware Wallet successfully", async () => {
      const agent = mock<Agent>();
      agent.call.mockResolvedValue(agentCallSuccessfulResponse);

      const governance = GovernanceCanister.create({
        agent,
        hardwareWallet: true,
      });

      await governance.increaseDissolveDelay({
        neuronId: BigInt(1),
        additionalDissolveDelaySeconds: 100000,
      });
      expect(agent.call).toBeCalled();
      expect(spyPollForResponse).toBeCalled();
    });

    it("throw error when increaseDissolveDelay fails with error", async () => {
      const error: GovernanceErrorDetail = {
        error_message: "Some error",
        error_type: 1,
      };
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const call = async () =>
        await governance.increaseDissolveDelay({
          neuronId: BigInt(1),
          additionalDissolveDelaySeconds: 100000,
        });

      await expect(call).rejects.toThrow(new GovernanceError(error));
    });

    it("throw error when increaseDissolveDelay fails unexpectedly", async () => {
      const serviceResponse: ManageNeuronResponse = {
        command: [],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const call = async () =>
        await governance.increaseDissolveDelay({
          neuronId: BigInt(1),
          additionalDissolveDelaySeconds: 100000,
        });

      await expect(call).rejects.toThrow(
        new GovernanceError(unexpectedGovernanceError)
      );
    });
  });

  describe("GovernanceCanister.setFollowees", () => {
    it("sets followees successfully", async () => {
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Follow: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      await governance.setFollowees({
        neuronId: BigInt(1),
        topic: Topic.Governance,
        followees: [BigInt(3), BigInt(6)],
      });
      expect(service.manage_neuron).toBeCalled();
    });

    it("throw error when setFollowees fails with error", async () => {
      const error: GovernanceErrorDetail = {
        error_message: "Some error",
        error_type: 1,
      };
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const call = async () =>
        await governance.setFollowees({
          neuronId: BigInt(1),
          topic: Topic.Governance,
          followees: [BigInt(3), BigInt(6)],
        });

      await expect(call).rejects.toThrow(new GovernanceError(error));
    });

    it("throw error when setFollowees fails unexpectedly", async () => {
      const serviceResponse: ManageNeuronResponse = {
        command: [],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const call = async () =>
        await governance.setFollowees({
          neuronId: BigInt(1),
          topic: Topic.Governance,
          followees: [BigInt(3), BigInt(6)],
        });

      await expect(call).rejects.toThrow(
        new GovernanceError(unexpectedGovernanceError)
      );
    });
  });

  describe("GovernanceCanister.claimOrRefreshNeuron", () => {
    it("successfully claims or refreshes", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [
          { ClaimOrRefresh: { refreshed_neuron_id: [{ id: neuronId }] } },
        ],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        serviceOverride: service,
      });
      const response = await governance.claimOrRefreshNeuron({
        neuronId,
        by: { NeuronIdOrSubaccount: {} },
      });
      expect(service.manage_neuron).toBeCalled();
    });

    it("throws error if response does not match", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Configure: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        serviceOverride: service,
      });
      const call = () =>
        governance.claimOrRefreshNeuron({
          neuronId,
          by: { NeuronIdOrSubaccount: {} },
        });
      expect(call).rejects.toThrowError();
    });
  });

  describe("GovernanceCanister.joinCommunityFund", () => {
    it("successfully joins community fund", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Configure: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const response = await governance.joinCommunityFund(neuronId);
      expect(service.manage_neuron).toBeCalled();
    });

    it("throws error if response is error", async () => {
      const error: GovernanceErrorDetail = {
        error_message: "Some error",
        error_type: 1,
      };
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () => governance.joinCommunityFund(neuronId);
      expect(call).rejects.toThrow(new GovernanceError(error));
    });
  });

  describe("GovernanceCanister.leaveCommunityFund", () => {
    it("successfully leaves community fund", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Configure: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const response = await governance.leaveCommunityFund(neuronId);
      expect(service.manage_neuron).toBeCalled();
    });

    it("throws error if response is error", async () => {
      const error: GovernanceErrorDetail = {
        error_message: "Some error",
        error_type: 1,
      };
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () => governance.leaveCommunityFund(neuronId);
      expect(call).rejects.toThrow(new GovernanceError(error));
    });
  });

  describe("GovernanceCanister.addHotkey", () => {
    it("successfully adds hotkey to neuron", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Configure: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const principal = Principal.fromText("kb4lg-bqaaa-aaaab-qabfq-cai");
      await governance.addHotkey({ neuronId, principal });
      expect(service.manage_neuron).toBeCalled();
    });

    it("successfully adds hotkey to neuron from Hardware Wallet", async () => {
      const agent = mock<Agent>();
      agent.call.mockResolvedValue(agentCallSuccessfulResponse);

      const governance = GovernanceCanister.create({
        agent,
        hardwareWallet: true,
      });

      const neuronId = BigInt(10);
      const principal = Principal.fromText("kb4lg-bqaaa-aaaab-qabfq-cai");
      await governance.addHotkey({ neuronId, principal });
      expect(agent.call).toBeCalled();
      expect(spyPollForResponse).toBeCalled();
    });

    it("throws error if response is error", async () => {
      const error: GovernanceErrorDetail = {
        error_message: "Some error",
        error_type: 1,
      };
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const principal = Principal.fromText("kb4lg-bqaaa-aaaab-qabfq-cai");

      const call = () => governance.addHotkey({ neuronId, principal });
      expect(call).rejects.toThrow(new GovernanceError(error));
    });
  });

  describe("GovernanceCanister.removeHotkey", () => {
    it("successfully removes hotkey to neuron", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Configure: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const principal = Principal.fromText("kb4lg-bqaaa-aaaab-qabfq-cai");
      await governance.removeHotkey({ neuronId, principal });
      expect(service.manage_neuron).toBeCalled();
    });

    it("successfully removes hotkey to neuron from Hardware Wallet", async () => {
      const agent = mock<Agent>();
      agent.call.mockResolvedValue(agentCallSuccessfulResponse);

      const governance = GovernanceCanister.create({
        agent,
        hardwareWallet: true,
      });

      const neuronId = BigInt(10);
      const principal = Principal.fromText("kb4lg-bqaaa-aaaab-qabfq-cai");
      await governance.removeHotkey({ neuronId, principal });
      expect(agent.call).toBeCalled();
      expect(spyPollForResponse).toBeCalled();
    });

    it("throws error if response is error", async () => {
      const error: GovernanceErrorDetail = {
        error_message: "Some error",
        error_type: 1,
      };
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const principal = Principal.fromText("kb4lg-bqaaa-aaaab-qabfq-cai");

      const call = () => governance.removeHotkey({ neuronId, principal });
      expect(call).rejects.toThrow(new GovernanceError(error));
    });
  });

  describe("GovernanceCanister.mergeNeurons", () => {
    it("successfully merges two neurons", async () => {
      const sourceNeuronId = BigInt(10);
      const targetNeuronId = BigInt(13);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Merge: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      await governance.mergeNeurons({
        sourceNeuronId,
        targetNeuronId,
      });
      expect(service.manage_neuron).toBeCalled();
    });

    it("successfully merges two neurons from Hardware Wallet", async () => {
      const agent = mock<Agent>();
      agent.call.mockResolvedValue(agentCallSuccessfulResponse);

      const governance = GovernanceCanister.create({
        agent,
        hardwareWallet: true,
      });

      const sourceNeuronId = BigInt(10);
      const targetNeuronId = BigInt(13);
      await governance.mergeNeurons({
        sourceNeuronId,
        targetNeuronId,
      });
      expect(agent.call).toBeCalled();
      expect(spyPollForResponse).toBeCalled();
    });

    it("throws error if response is error", async () => {
      const error: GovernanceErrorDetail = {
        error_message: "Some error",
        error_type: 1,
      };
      const sourceNeuronId = BigInt(10);
      const targetNeuronId = BigInt(13);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () =>
        governance.mergeNeurons({
          sourceNeuronId,
          targetNeuronId,
        });
      expect(call).rejects.toThrow(new GovernanceError(error));
    });
  });

  describe("GovernanceCanister.mergeMaturity", () => {
    it("successfully merges maturity neurons", async () => {
      const serviceResponse: ManageNeuronResponse = {
        command: [
          {
            MergeMaturity: {
              merged_maturity_e8s: BigInt(100_000),
              new_stake_e8s: BigInt(1_000_000),
            },
          },
        ],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      await governance.mergeMaturity({
        neuronId: BigInt(10),
        percentageToMerge: 50,
      });
      expect(service.manage_neuron).toBeCalled();
    });

    it("successfully merges maturity neurons from Hardware Wallet", async () => {
      const agent = mock<Agent>();
      agent.call.mockResolvedValue(agentCallSuccessfulResponse);

      const governance = GovernanceCanister.create({
        agent,
        hardwareWallet: true,
      });

      await governance.mergeMaturity({
        neuronId: BigInt(10),
        percentageToMerge: 50,
      });
      expect(agent.call).toBeCalled();
      expect(spyPollForResponse).toBeCalled();
    });

    it("throws error if percentage not valid", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () =>
        governance.mergeMaturity({
          neuronId: BigInt(10),
          percentageToMerge: 300,
        });
      expect(call).rejects.toThrow(InvalidPercentageError);
      expect(service.manage_neuron).not.toBeCalled();
    });

    it("throws error if response is error", async () => {
      const error: GovernanceErrorDetail = {
        error_message: "Some error",
        error_type: 1,
      };
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () =>
        governance.mergeMaturity({
          neuronId: BigInt(10),
          percentageToMerge: 50,
        });
      expect(call).rejects.toThrow(new GovernanceError(error));
    });
  });

  describe("GovernanceCanister.spawnNeuron", () => {
    it("successfully spawns new neuron", async () => {
      const neuronId = BigInt(100_000);
      const serviceResponse: ManageNeuronResponse = {
        command: [
          {
            Spawn: {
              created_neuron_id: [{ id: neuronId }],
            },
          },
        ],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const response = await governance.spawnNeuron({
        neuronId: BigInt(10),
        percentageToSpawn: 50,
      });
      expect(service.manage_neuron).toBeCalled();
      expect(response).toBe(neuronId);
    });

    it("successfully spawns new neuron from Hardware Wallet", async () => {
      const agent = mock<Agent>();
      const requestId = new ArrayBuffer(20) as RequestId;
      const response = {
        requestId,
        response: {
          ok: true,
          status: 13,
          statusText: "good",
        },
      };
      agent.call.mockResolvedValue(response);

      const governance = GovernanceCanister.create({
        agent,
        hardwareWallet: true,
      });

      const neuronId = await governance.spawnNeuron({
        neuronId: BigInt(10),
        percentageToSpawn: 50,
      });
      expect(agent.call).toBeCalled();
      expect(spyPollForResponse).toBeCalled();
      expect(neuronId).toBe(BigInt(newSpawnNeuronId.getId()));
    });

    it("throws error if percentage not valid", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () =>
        governance.spawnNeuron({
          neuronId: BigInt(10),
          percentageToSpawn: 300,
        });
      expect(call).rejects.toThrow(InvalidPercentageError);
      expect(service.manage_neuron).not.toBeCalled();
    });

    it("throws error if response is error", async () => {
      const error: GovernanceErrorDetail = {
        error_message: "Some error",
        error_type: 1,
      };
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () =>
        governance.spawnNeuron({
          neuronId: BigInt(10),
          percentageToSpawn: 50,
        });
      expect(call).rejects.toThrow(new GovernanceError(error));
    });
  });

  describe("GovernanceCanister.disburse", () => {
    it("successfully disburses neuron", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Disburse: { transfer_block_height: BigInt(12345) } }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      await governance.disburse({
        neuronId,
      });
      expect(service.manage_neuron).toBeCalled();
    });

    it("successfully disburses neuron from Hardware Wallet", async () => {
      const agent = mock<Agent>();
      agent.call.mockResolvedValue(agentCallSuccessfulResponse);

      const governance = GovernanceCanister.create({
        agent,
        hardwareWallet: true,
      });

      await governance.disburse({
        neuronId: BigInt(10),
      });
      expect(agent.call).toBeCalled();
      expect(spyPollForResponse).toBeCalled();
    });

    it("throws error if response is error", async () => {
      const error: GovernanceErrorDetail = {
        error_message: "Some error",
        error_type: 1,
      };
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () =>
        governance.disburse({
          neuronId,
        });
      expect(call).rejects.toThrow(new GovernanceError(error));
    });

    it("throws error if invalid account id", async () => {
      const neuronId = BigInt(10);
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockImplementation(jest.fn());

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () =>
        governance.disburse({
          neuronId,
          toAccountId: "not-valid",
        });
      expect(call).rejects.toThrow(InvalidAccountIDError);
      expect(service.manage_neuron).not.toBeCalled();
    });
  });

  describe("GovernanceCanister.splitNeuron", () => {
    it("successfully splits neuron", async () => {
      const neuronId = BigInt(10);
      const amount = ICP.fromString("6") as ICP;
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Split: { created_neuron_id: [{ id: BigInt(11) }] } }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      await governance.splitNeuron({
        neuronId,
        amount,
      });
      expect(service.manage_neuron).toBeCalled();
    });

    it("throws error if response is error", async () => {
      const error: GovernanceErrorDetail = {
        error_message: "Some error",
        error_type: 1,
      };
      const neuronId = BigInt(10);
      const amount = ICP.fromString("6") as ICP;
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () =>
        governance.splitNeuron({
          neuronId,
          amount,
        });
      expect(call).rejects.toThrow(new GovernanceError(error));
    });
  });

  describe("GovernanceCanister.startDissolving", () => {
    it("successfully starts dissolving process", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Configure: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      await governance.startDissolving(neuronId);
      expect(service.manage_neuron).toBeCalled();
    });

    it("successfully starts dissolving process from Hardware Wallet", async () => {
      const agent = mock<Agent>();
      agent.call.mockResolvedValue(agentCallSuccessfulResponse);

      const governance = GovernanceCanister.create({
        agent,
        hardwareWallet: true,
      });

      await governance.startDissolving(BigInt(10));
      expect(agent.call).toBeCalled();
      expect(spyPollForResponse).toBeCalled();
    });

    it("throws error if response is error", async () => {
      const error: GovernanceErrorDetail = {
        error_message: "Some error",
        error_type: 1,
      };
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () => governance.startDissolving(neuronId);
      expect(call).rejects.toThrow(new GovernanceError(error));
    });
  });

  describe("GovernanceCanister.stopDissolving", () => {
    it("successfully stops dissolving process", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Configure: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const response = await governance.stopDissolving(neuronId);
      expect(service.manage_neuron).toBeCalled();
    });

    it("successfully stops dissolving process from Hardware Wallet", async () => {
      const agent = mock<Agent>();
      agent.call.mockResolvedValue(agentCallSuccessfulResponse);

      const governance = GovernanceCanister.create({
        agent,
        hardwareWallet: true,
      });

      await governance.stopDissolving(BigInt(10));
      expect(agent.call).toBeCalled();
      expect(spyPollForResponse).toBeCalled();
    });

    it("throws error if response is error", async () => {
      const error: GovernanceErrorDetail = {
        error_message: "Some error",
        error_type: 1,
      };
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () => governance.stopDissolving(neuronId);
      expect(call).rejects.toThrow(new GovernanceError(error));
    });
  });

  describe("GovernanceCanister.makeProposal", () => {
    const makeProposalRequest: MakeProposalRequest = {
      title: "This is a title",
      url: "some-url",
      summary: "Here it goes the summary",
      neuronId: BigInt(10),
      action: {
        ManageNetworkEconomics: {
          neuronMinimumStake: BigInt(100_000_000),
          maxProposalsToKeepPerTopic: 1000,
          neuronManagementFeePerProposal: BigInt(10_000),
          rejectCost: BigInt(10_000_000),
          transactionFee: BigInt(1000),
          neuronSpawnDissolveDelaySeconds: BigInt(3600 * 24 * 7),
          minimumIcpXdrRate: BigInt(1),
          maximumNodeProviderRewards: BigInt(10_000_000_000),
        },
      },
    };
    it("successfully creates a proposal", async () => {
      const serviceResponse: ManageNeuronResponse = {
        command: [{ MakeProposal: { proposal_id: [{ id: BigInt(10) }] } }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const response = await governance.makeProposal(makeProposalRequest);
      expect(service.manage_neuron).toBeCalled();
    });

    it("throws error if response is error", async () => {
      const error: GovernanceErrorDetail = {
        error_message: "Some error",
        error_type: 1,
      };
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () => governance.makeProposal(makeProposalRequest);
      expect(call).rejects.toThrow(new GovernanceError(error));
    });
  });
});
