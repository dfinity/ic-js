import { AnonymousIdentity } from "@dfinity/agent";
import { mock } from "jest-mock-extended";
import { ICP, LedgerCanister } from ".";
import { GovernanceService } from "../candid/governance.idl";
import {
  ClaimOrRefreshNeuronFromAccountResponse,
  ListKnownNeuronsResponse,
  ListNeuronsResponse,
  NeuronInfo,
  ProposalInfo as RawProposalInfo,
} from "../candid/governanceTypes";
import { GovernanceCanister } from "./governance";
import { InsufficientAmount } from "./types/errors";

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

  describe("getProposalInfo", () => {
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
      const response = await governance.getProposalInfo({
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

  it("gets user neurons", async () => {
    const one = BigInt(1);
    const mockNeuronInfo: NeuronInfo = {
      dissolve_delay_seconds: one,
      recent_ballots: [],
      created_timestamp_seconds: one,
      state: 2,
      stake_e8s: one,
      joined_community_fund_timestamp_seconds: [],
      retrieved_at_timestamp_seconds: one,
      known_neuron_data: [],
      voting_power: one,
      age_seconds: one,
    };
    const response: ListNeuronsResponse = {
      neuron_infos: [[BigInt(1), mockNeuronInfo]],
      full_neurons: [],
    };
    const service = mock<GovernanceService>();
    service.list_neurons.mockResolvedValue(response);

    const governance = GovernanceCanister.create({
      certifiedServiceOverride: service,
      serviceOverride: service,
    });
    const neurons = await governance.getNeurons({
      certified: true,
      principal: new AnonymousIdentity().getPrincipal(),
    });
    expect(service.list_neurons).toBeCalled();
    expect(neurons.length).toBe(1);
  });
});
