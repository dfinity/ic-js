import { AnonymousIdentity } from "@dfinity/agent";
import { mock } from "jest-mock-extended";
import { GovernanceService } from "../candid/governance.idl";
import {
  ClaimOrRefreshNeuronFromAccountResponse,
  GovernanceErrorDetail,
  ListKnownNeuronsResponse,
  ManageNeuronResponse,
  ProposalInfo as RawProposalInfo,
} from "../candid/governanceTypes";
import {
  GovernanceError,
  InsufficientAmountError,
} from "./errors/governance.errors";
import { GovernanceCanister } from "./governance";
import { ICP } from "./icp";
import { LedgerCanister } from "./ledger";
import {
  mockListNeuronsResponse,
  mockNeuronId,
  mockNeuronInfo,
} from "./mocks/governance.mock";
import { Topic, Vote } from "./types/governance_converters";

const unexpectedGovernanceError: GovernanceErrorDetail = {
  error_message: "Error updating neuron",
  error_type: 0,
};

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
    const service = mock<GovernanceService>();
    service.list_known_neurons.mockResolvedValue(response);

    const governance = GovernanceCanister.create({ serviceOverride: service });
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
    const service = mock<GovernanceService>();
    service.list_known_neurons.mockResolvedValue(response);

    const governance = GovernanceCanister.create({ serviceOverride: service });
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
    const service = mock<GovernanceService>();
    service.list_known_neurons.mockResolvedValue(response);

    const governance = GovernanceCanister.create({ serviceOverride: service });
    const res = await governance.listKnownNeurons(false);

    expect(res.map((n) => Number(n.id))).toEqual([100, 200, 300, 400]);
  });

  describe("getProposal", () => {
    it("should fetch and convert single ProposalInfo", async () => {
      const service = mock<GovernanceService>();
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

  it("creates new neuron successfully", async () => {
    const neuronId = BigInt(1);
    const clainNeuronResponse: ClaimOrRefreshNeuronFromAccountResponse = {
      result: [{ NeuronId: { id: neuronId } }],
    };
    const service = mock<GovernanceService>();
    service.claim_or_refresh_neuron_from_account.mockResolvedValue(
      clainNeuronResponse
    );

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
    expect(service.claim_or_refresh_neuron_from_account).toBeCalled();
    expect(response).toEqual(neuronId);
  });

  it("creates new neuron from subaccount successfully", async () => {
    const neuronId = BigInt(1);
    const clainNeuronResponse: ClaimOrRefreshNeuronFromAccountResponse = {
      result: [{ NeuronId: { id: neuronId } }],
    };
    const service = mock<GovernanceService>();
    service.claim_or_refresh_neuron_from_account.mockResolvedValue(
      clainNeuronResponse
    );

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
      fromSubAccountId: 1234,
    });

    expect(mockLedger.transfer).toBeCalled();
    expect(service.claim_or_refresh_neuron_from_account).toBeCalled();
    expect(response).toEqual(neuronId);
  });

  it("returns insufficient amount errors", async () => {
    const neuronId = BigInt(1);
    const clainNeuronResponse: ClaimOrRefreshNeuronFromAccountResponse = {
      result: [{ NeuronId: { id: neuronId } }],
    };
    const service = mock<GovernanceService>();
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

  it("list user neurons", async () => {
    const service = mock<GovernanceService>();
    service.list_neurons.mockResolvedValue(mockListNeuronsResponse);

    const governance = GovernanceCanister.create({
      certifiedServiceOverride: service,
      serviceOverride: service,
    });
    const neurons = await governance.listNeurons({
      certified: true,
      principal: new AnonymousIdentity().getPrincipal(),
    });
    expect(service.list_neurons).toBeCalled();
    expect(neurons.length).toBe(1);
  });

  it("registers vote successfully", async () => {
    const serviceResponse: ManageNeuronResponse = {
      command: [{ RegisterVote: {} }],
    };
    const service = mock<GovernanceService>();
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
    const service = mock<GovernanceService>();
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
    const service = mock<GovernanceService>();
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
    const service = mock<GovernanceService>();
    const governance = GovernanceCanister.create({
      certifiedServiceOverride: service,
      serviceOverride: service,
    });

    service.list_neurons.mockResolvedValue(
      Promise.resolve(mockListNeuronsResponse)
    );

    const response = await governance.getNeuron({
      certified: true,
      principal: new AnonymousIdentity().getPrincipal(),
      neuronId: BigInt(1),
    });

    expect(service.list_neurons).toBeCalled();
    expect(response).not.toBeUndefined();
    expect(Number(response?.neuronId)).toEqual(Number(mockNeuronId));
    expect(response?.state).toEqual(mockNeuronInfo.state);
  });
});

describe("GovernanceCanister.increaseDissolveDelay", () => {
  it("increases dissolve delay of the neuron successfully", async () => {
    const serviceResponse: ManageNeuronResponse = {
      command: [{ Configure: {} }],
    };
    const service = mock<GovernanceService>();
    service.manage_neuron.mockResolvedValue(serviceResponse);

    const governance = GovernanceCanister.create({
      certifiedServiceOverride: service,
    });
    const response = await governance.increaseDissolveDelay({
      neuronId: BigInt(1),
      additionalDissolveDelaySeconds: 100000,
    });
    expect(service.manage_neuron).toBeCalled();
  });

  it("throw error when increaseDissolveDelay fails with error", async () => {
    const error: GovernanceErrorDetail = {
      error_message: "Some error",
      error_type: 1,
    };
    const serviceResponse: ManageNeuronResponse = {
      command: [{ Error: error }],
    };
    const service = mock<GovernanceService>();
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
    const service = mock<GovernanceService>();
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

  describe("GovernanceCanister.setFollowees", () => {
    it("sets followees successfully", async () => {
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Follow: {} }],
      };
      const service = mock<GovernanceService>();
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
      const service = mock<GovernanceService>();
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
      const service = mock<GovernanceService>();
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
});

describe("GovernanceCanister.claimOrRefreshNeuron", () => {
  it("successfully claims or refreshes", async () => {
    const neuronId = BigInt(10);
    const serviceResponse: ManageNeuronResponse = {
      command: [
        { ClaimOrRefresh: { refreshed_neuron_id: [{ id: neuronId }] } },
      ],
    };
    const service = mock<GovernanceService>();
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
    const service = mock<GovernanceService>();
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

  describe("GovernanceCanister.joinCommunityFund", () => {
    it("successfully joins community fund", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Configure: {} }],
      };
      const service = mock<GovernanceService>();
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
      const service = mock<GovernanceService>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () => governance.joinCommunityFund(neuronId);
      expect(call).rejects.toThrow(new GovernanceError(error));
    });
  });

  describe("GovernanceCanister.startDissolving", () => {
    it("successfully starts dissolving process", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Configure: {} }],
      };
      const service = mock<GovernanceService>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const response = await governance.startDissolving(neuronId);
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
      const service = mock<GovernanceService>();
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
      const service = mock<GovernanceService>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const response = await governance.stopDissolving(neuronId);
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
      const service = mock<GovernanceService>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () => governance.stopDissolving(neuronId);
      expect(call).rejects.toThrow(new GovernanceError(error));
    });
  });
});
