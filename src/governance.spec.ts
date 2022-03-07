import { AnonymousIdentity } from "@dfinity/agent";
import { mock } from "jest-mock-extended";
import { ICP, LedgerCanister, Vote } from ".";
import { GovernanceService } from "../candid/governance.idl";
import {
  ClaimOrRefreshNeuronFromAccountResponse,
  ListKnownNeuronsResponse,
  ManageNeuronResponse,
  ProposalInfo as RawProposalInfo,
} from "../candid/governanceTypes";
import { GovernanceCanister } from "./governance";
import {
  mockListNeuronsResponse,
  mockNeuronId,
  mockNeuronInfo,
} from "./mocks/governance.mock";
import { InsufficientAmount } from "./types/governance";

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
    const response = await governance.stakeNeuron({
      stake: ICP.fromString("0.1") as ICP,
      principal: new AnonymousIdentity().getPrincipal(),
      ledgerCanister: mockLedger,
    });

    expect(mockLedger.transfer).not.toBeCalled();
    expect(service.claim_or_refresh_neuron_from_account).not.toBeCalled();
    expect(response).not.toEqual(neuronId);
    expect(response).toBeInstanceOf(InsufficientAmount);
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
    const response = await governance.registerVote({
      neuronId: BigInt(1),
      vote: Vote.YES,
      proposalId: BigInt(2),
    });
    expect(service.manage_neuron).toBeCalled();
    expect("Ok" in response).toBeTruthy();
    expect("Err" in response).toBeFalsy();
  });

  it("returns error when registers vote fails with error", async () => {
    const serviceResponse: ManageNeuronResponse = {
      command: [{ Error: { error_message: "Some error", error_type: 1 } }],
    };
    const service = mock<GovernanceService>();
    service.manage_neuron.mockResolvedValue(serviceResponse);

    const governance = GovernanceCanister.create({
      certifiedServiceOverride: service,
    });
    const response = await governance.registerVote({
      neuronId: BigInt(1),
      vote: Vote.YES,
      proposalId: BigInt(2),
    });
    expect(service.manage_neuron).toBeCalled();
    expect("Ok" in response).toBeFalsy();
    expect("Err" in response).toBeTruthy();
  });

  it("returns error when registers vote fails unexpectetdly", async () => {
    const serviceResponse: ManageNeuronResponse = {
      command: [],
    };
    const service = mock<GovernanceService>();
    service.manage_neuron.mockResolvedValue(serviceResponse);

    const governance = GovernanceCanister.create({
      certifiedServiceOverride: service,
    });
    const response = await governance.registerVote({
      neuronId: BigInt(1),
      vote: Vote.YES,
      proposalId: BigInt(2),
    });
    expect(service.manage_neuron).toBeCalled();
    expect("Ok" in response).toBeFalsy();
    expect("Err" in response).toBeTruthy();
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
    expect("Ok" in response).toBeTruthy();
    expect("Err" in response).toBeFalsy();
  });

  it("returns error when increaseDissolveDelay fails with error", async () => {
    const serviceResponse: ManageNeuronResponse = {
      command: [{ Error: { error_message: "Some error", error_type: 1 } }],
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
    expect("Ok" in response).toBeFalsy();
    expect("Err" in response).toBeTruthy();
  });

  it("returns error when increaseDissolveDelay fails unexpectetdly", async () => {
    const serviceResponse: ManageNeuronResponse = {
      command: [],
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
    expect("Ok" in response).toBeFalsy();
    expect("Err" in response).toBeTruthy();
  });
});
