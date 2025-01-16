import type { ActorSubclass } from "@dfinity/agent";
import { AnonymousIdentity } from "@dfinity/agent";
import type { LedgerCanister } from "@dfinity/ledger-icp";
import { AccountIdentifier, InvalidAccountIDError } from "@dfinity/ledger-icp";
import { Principal } from "@dfinity/principal";
import { InvalidPercentageError } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import type {
  ClaimOrRefreshNeuronFromAccountResponse,
  GovernanceError as GovernanceErrorDetail,
  _SERVICE as GovernanceService,
  ListKnownNeuronsResponse,
  ManageNeuronResponse,
  NeuronsFundEconomics,
  InstallCode as RawInstallCode,
  NetworkEconomics as RawNetworkEconomics,
  ProposalInfo as RawProposalInfo,
  StopOrStartCanister as RawStopOrStartCanister,
  UpdateCanisterSettings as RawUpdateCanisterSettings,
  VotingPowerEconomics as RawVotingPowerEconomics,
  Result,
  RewardEvent,
} from "../candid/governance";
import {
  CanisterAction,
  CanisterInstallMode,
  LogVisibility,
  NeuronVisibility,
  Topic,
  Vote,
} from "./enums/governance.enums";
import {
  GovernanceError,
  InsufficientAmountError,
  UnrecognizedTypeError,
} from "./errors/governance.errors";
import { GovernanceCanister } from "./governance.canister";
import {
  mockListNeuronsResponse,
  mockNeuron,
  mockNeuronId,
  mockNeuronInfo,
} from "./mocks/governance.mock";
import type {
  Action,
  InstallCode,
  MakeProposalRequest,
  NetworkEconomics,
  StopOrStartCanister,
  UpdateCanisterSettings,
} from "./types/governance_converters";

const nextRandomBytes: number[] = [];

jest.mock("randombytes", () => ({
  __esModule: true,
  default: function (n: number) {
    const nums: number[] = [];
    for (let i = 0; i < n; i++) {
      const nextByte = nextRandomBytes.shift();
      if (nextByte !== undefined) {
        nums.push(nextByte);
      } else {
        nums.push(Math.floor(Math.random() * 0x100));
      }
    }
    return new Uint8Array(nums);
  },
}));

const unexpectedGovernanceError: GovernanceErrorDetail = {
  error_message: "Error updating neuron",
  error_type: 0,
};

const rawNeuronFundsEconomics: NeuronsFundEconomics = {
  maximum_icp_xdr_rate: [
    {
      basis_points: [456n],
    },
  ],
  max_theoretical_neurons_fund_participation_amount_xdr: [
    {
      human_readable: ["456"],
    },
  ],
  neurons_fund_matched_funding_curve_coefficients: [
    {
      contribution_threshold_xdr: [
        {
          human_readable: ["789"],
        },
      ],
      one_third_participation_milestone_xdr: [
        {
          human_readable: ["123"],
        },
      ],
      full_participation_milestone_xdr: [
        {
          human_readable: ["456"],
        },
      ],
    },
  ],
  minimum_icp_xdr_rate: [
    {
      basis_points: [123n],
    },
  ],
};

const rawVotingPowerEconomics: RawVotingPowerEconomics = {
  start_reducing_voting_power_after_seconds: [
    BigInt((365.25 * 24 * 60 * 60) / 2),
  ],
  clear_following_after_seconds: [BigInt((365.25 * 24 * 60 * 60) / 12)],
};

const rawNetworkEconomics: RawNetworkEconomics = {
  neuron_minimum_stake_e8s: BigInt(100_000_000),
  max_proposals_to_keep_per_topic: 1000,
  neuron_management_fee_per_proposal_e8s: BigInt(10_000),
  reject_cost_e8s: BigInt(10_000_000),
  transaction_fee_e8s: BigInt(1000),
  neuron_spawn_dissolve_delay_seconds: BigInt(3600 * 24 * 7),
  minimum_icp_xdr_rate: BigInt(1),
  maximum_node_provider_rewards_e8s: BigInt(10_000_000_000),
  neurons_fund_economics: [rawNeuronFundsEconomics],
  voting_power_economics: [rawVotingPowerEconomics],
};

describe("GovernanceCanister", () => {
  const error: GovernanceErrorDetail = {
    error_message: "Some error",
    error_type: 1,
  };
  const errorServiceResponse: ManageNeuronResponse = {
    command: [{ Error: error }],
  };

  const mockManageNetworkEconomics: NetworkEconomics = {
    neuronMinimumStake: BigInt(100_000_000),
    maxProposalsToKeepPerTopic: 1000,
    neuronManagementFeePerProposal: BigInt(10_000),
    rejectCost: BigInt(10_000_000),
    transactionFee: BigInt(1000),
    neuronSpawnDissolveDelaySeconds: BigInt(3600 * 24 * 7),
    minimumIcpXdrRate: BigInt(1),
    maximumNodeProviderRewards: BigInt(10_000_000_000),
    neuronsFundEconomics: {
      minimumIcpXdrRate: {
        basisPoints: 123n,
      },
      maxTheoreticalNeuronsFundParticipationAmountXdr: {
        humanReadable: "456",
      },
      neuronsFundMatchedFundingCurveCoefficients: {
        contributionThresholdXdr: {
          humanReadable: "789",
        },
        oneThirdParticipationMilestoneXdr: {
          humanReadable: "123",
        },
        fullParticipationMilestoneXdr: {
          humanReadable: "456",
        },
      },
      maximumIcpXdrRate: {
        basisPoints: 456n,
      },
    },
    votingPowerEconomics: {
      startReducingVotingPowerAfterSeconds: BigInt((365.25 * 24 * 60 * 60) / 2),
      clearFollowingAfterSeconds: BigInt((365.25 * 24 * 60 * 60) / 12),
    },
  };
  const mockManageNetworkEconomicsAction: Action = {
    ManageNetworkEconomics: mockManageNetworkEconomics,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

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
  });

  describe("GovernanceCanister.stakeNeuron", () => {
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
        jest.fn().mockResolvedValue(BigInt(1)),
      );

      const stake = 100_000_000n;
      const controller = Principal.fromText("2amoo-gaqe4-3ekjz-wiu");

      nextRandomBytes.push(123, 4, 56, 7, 8, 90, 1, 234, 5, 67);
      const expectedMemo = 8864271569428021738n;
      const expectedIcpAccount = AccountIdentifier.fromHex(
        "911c1b8826981b7126dc62cf176f30550eefee5d31e2071143ca17e727b251e5",
      );

      expect(mockLedger.transfer).toBeCalledTimes(0);
      expect(service.manage_neuron).toBeCalledTimes(0);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const response = await governance.stakeNeuron({
        stake,
        principal: controller,
        ledgerCanister: mockLedger,
      });

      expect(mockLedger.transfer).toBeCalledTimes(1);
      expect(mockLedger.transfer).toBeCalledWith({
        amount: stake,
        memo: expectedMemo,
        to: expectedIcpAccount,
      });
      expect(service.manage_neuron).toBeCalledTimes(1);
      expect(service.manage_neuron).toBeCalledWith({
        command: [
          {
            ClaimOrRefresh: {
              by: [
                {
                  MemoAndController: {
                    controller: [controller],
                    memo: expectedMemo,
                  },
                },
              ],
            },
          },
        ],
        id: [],
        neuron_id_or_subaccount: [],
      });
      expect(response).toEqual(neuronId);
    });

    it("stakeNeuron passes fee to the ledger transfer", async () => {
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
        jest.fn().mockResolvedValue(BigInt(1)),
      );
      const fee = BigInt(10_000);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      await governance.stakeNeuron({
        stake: BigInt(100_000_000),
        principal: new AnonymousIdentity().getPrincipal(),
        ledgerCanister: mockLedger,
        fee,
      });

      expect(mockLedger.transfer).toBeCalledWith(
        expect.objectContaining({ fee }),
      );
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
        jest.fn().mockResolvedValue(BigInt(1)),
      );

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const response = await governance.stakeNeuron({
        stake: BigInt(100_000_000),
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
        clainNeuronResponse,
      );

      const mockLedger = mock<LedgerCanister>();
      mockLedger.transfer.mockImplementation(jest.fn());

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const call = async () =>
        await governance.stakeNeuron({
          stake: BigInt(10_000_000),
          principal: new AnonymousIdentity().getPrincipal(),
          ledgerCanister: mockLedger,
        });

      expect(mockLedger.transfer).not.toBeCalled();
      expect(service.claim_or_refresh_neuron_from_account).not.toBeCalled();

      await expect(call).rejects.toThrow(
        new InsufficientAmountError(BigInt(10_000_000)),
      );
    });
  });

  describe("GovernanceCanister.listNeurons", () => {
    it("list user neurons", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      const certifiedService = mock<ActorSubclass<GovernanceService>>();
      const oldService = mock<ActorSubclass<GovernanceService>>();
      certifiedService.list_neurons.mockResolvedValue(mockListNeuronsResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: certifiedService,
        serviceOverride: service,
        oldListNeuronsServiceOverride: oldService,
      });
      const neurons = await governance.listNeurons({
        certified: true,
        includeEmptyNeurons: true,
        includePublicNeurons: true,
      });
      expect(certifiedService.list_neurons).toBeCalledWith({
        neuron_ids: new BigUint64Array(),
        include_neurons_readable_by_caller: true,
        include_empty_neurons_readable_by_caller: [true],
        include_public_neurons_in_full_neurons: [true],
      });
      expect(certifiedService.list_neurons).toBeCalledTimes(1);
      expect(neurons.length).toBe(1);
      expect(service.list_neurons).not.toBeCalled();
      expect(oldService.list_neurons).not.toBeCalled();
    });

    it("list user neurons excluding empty neurons", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      const oldService = mock<ActorSubclass<GovernanceService>>();
      service.list_neurons.mockResolvedValue(mockListNeuronsResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
        serviceOverride: service,
        oldListNeuronsServiceOverride: oldService,
      });
      const neurons = await governance.listNeurons({
        certified: true,
        includeEmptyNeurons: false,
      });
      expect(service.list_neurons).toBeCalledWith({
        neuron_ids: new BigUint64Array(),
        include_neurons_readable_by_caller: true,
        include_empty_neurons_readable_by_caller: [false],
        include_public_neurons_in_full_neurons: [],
      });
      expect(service.list_neurons).toBeCalledTimes(1);
      expect(neurons.length).toBe(1);
    });

    it("list user neurons excluding public neurons", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      const oldService = mock<ActorSubclass<GovernanceService>>();
      service.list_neurons.mockResolvedValue(mockListNeuronsResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
        serviceOverride: service,
        oldListNeuronsServiceOverride: oldService,
      });
      const neurons = await governance.listNeurons({
        certified: true,
        includePublicNeurons: false,
      });
      expect(service.list_neurons).toBeCalledWith({
        neuron_ids: new BigUint64Array(),
        include_neurons_readable_by_caller: true,
        include_empty_neurons_readable_by_caller: [],
        include_public_neurons_in_full_neurons: [false],
      });
      expect(service.list_neurons).toBeCalledTimes(1);
      expect(neurons.length).toBe(1);
    });

    it("should use old service when not excluding empty neurons", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      const oldService = mock<ActorSubclass<GovernanceService>>();
      oldService.list_neurons.mockResolvedValue(mockListNeuronsResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
        serviceOverride: service,
        oldListNeuronsServiceOverride: oldService,
      });
      const neurons = await governance.listNeurons({
        certified: true,
      });
      expect(oldService.list_neurons).toBeCalledWith({
        neuron_ids: new BigUint64Array(),
        include_neurons_readable_by_caller: true,
        // The field is present in the argument but ignored by the old service.
        include_empty_neurons_readable_by_caller: [],
        // The field is present in the argument but ignored by the old service.
        include_public_neurons_in_full_neurons: [],
      });
      expect(oldService.list_neurons).toBeCalledTimes(1);
      expect(neurons.length).toBe(1);
      expect(service.list_neurons).not.toBeCalled();
    });

    it("should not use old service when not certified", async () => {
      const certifiedService = mock<ActorSubclass<GovernanceService>>();
      const service = mock<ActorSubclass<GovernanceService>>();
      const oldService = mock<ActorSubclass<GovernanceService>>();
      service.list_neurons.mockResolvedValue(mockListNeuronsResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: certifiedService,
        serviceOverride: service,
        oldListNeuronsServiceOverride: oldService,
      });
      const neurons = await governance.listNeurons({
        certified: false,
      });
      expect(service.list_neurons).toBeCalledWith({
        neuron_ids: new BigUint64Array(),
        include_neurons_readable_by_caller: true,
        include_empty_neurons_readable_by_caller: [],
        include_public_neurons_in_full_neurons: [],
      });
      expect(service.list_neurons).toBeCalledTimes(1);
      expect(neurons.length).toBe(1);
      expect(oldService.list_neurons).not.toBeCalled();
      expect(certifiedService.list_neurons).not.toBeCalled();
    });
  });

  describe("GovernanceCanister.listProposals", () => {
    const rawProposal = {
      id: [{ id: 1n }],
      ballots: [],
      proposal: [],
      proposer: [],
      latest_tally: [],
    } as unknown as RawProposalInfo;

    it("list user proposals with params", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      service.list_proposals.mockResolvedValue({
        proposal_info: [rawProposal],
      });

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
        serviceOverride: service,
      });
      const limit = 2;
      const { proposals } = await governance.listProposals({
        certified: true,
        request: {
          limit,
          beforeProposal: undefined,
          includeRewardStatus: [],
          includeAllManageNeuronProposals: false,
          excludeTopic: [],
          includeStatus: [],
        },
      });
      expect(service.list_proposals).toBeCalled();
      expect(service.list_proposals).toBeCalledWith({
        limit,
        include_reward_status: new Int32Array(),
        before_proposal: [],
        exclude_topic: new Int32Array(),
        include_all_manage_neuron_proposals: [false],
        include_status: new Int32Array(),
        omit_large_fields: [],
      });
      expect(proposals.length).toBe(1);
    });

    it("list user proposals supports optional omitLargeFields", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      service.list_proposals.mockResolvedValue({
        proposal_info: [rawProposal],
      });

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
        serviceOverride: service,
      });
      const limit = 2;
      const { proposals } = await governance.listProposals({
        certified: true,
        request: {
          limit,
          beforeProposal: undefined,
          includeRewardStatus: [],
          includeAllManageNeuronProposals: false,
          excludeTopic: [],
          includeStatus: [],
          omitLargeFields: true,
        },
      });
      expect(service.list_proposals).toBeCalled();
      expect(service.list_proposals).toBeCalledWith({
        limit,
        include_reward_status: new Int32Array(),
        before_proposal: [],
        exclude_topic: new Int32Array(),
        include_all_manage_neuron_proposals: [false],
        include_status: new Int32Array(),
        omit_large_fields: [true],
      });
      expect(proposals.length).toBe(1);
    });
  });

  describe("GovernanceCanister.registerVote", () => {
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
        vote: Vote.Yes,
        proposalId: BigInt(2),
      });
      expect(service.manage_neuron).toBeCalled();
    });

    it("throw error when registers vote fails with error", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(errorServiceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const call = async () =>
        await governance.registerVote({
          neuronId: BigInt(1),
          vote: Vote.Yes,
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
          vote: Vote.Yes,
          proposalId: BigInt(2),
        });

      await expect(call).rejects.toThrow(
        new GovernanceError(unexpectedGovernanceError),
      );
    });
  });

  describe("GovernanceCanister.getNeuron", () => {
    it("should fetch and convert a neuron", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
        serviceOverride: service,
        oldListNeuronsServiceOverride: service,
      });

      service.list_neurons.mockResolvedValue(
        Promise.resolve(mockListNeuronsResponse),
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
        Promise.resolve([rawProposal]),
      );
      const response = await governance.getProposal({
        proposalId: BigInt(1),
      });

      expect(service.get_proposal_info).toBeCalled();
      expect(response).not.toBeUndefined();
      expect(response).toHaveProperty("id", 1n);
    });

    it("should fetch and convert ManageNetworkEconomics on ProposalInfo", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
        serviceOverride: service,
      });

      const rawProposal = {
        id: [{ id: 1n }],
        ballots: [],
        proposal: [
          {
            title: ["This is a title"],
            url: "some-url",
            summary: "Here it goes the summary",
            action: [
              {
                ManageNetworkEconomics: rawNetworkEconomics,
              },
            ],
          },
        ],
        proposer: [],
        latest_tally: [],
      } as unknown as RawProposalInfo;
      service.get_proposal_info.mockResolvedValue(
        Promise.resolve([rawProposal]),
      );
      const response = await governance.getProposal({
        proposalId: BigInt(1),
      });

      expect(service.get_proposal_info).toBeCalled();
      expect(response).not.toBeUndefined();
      expect(response).toHaveProperty("id", 1n);

      const { ManageNetworkEconomics } = response?.proposal?.action as {
        ManageNetworkEconomics: NetworkEconomics;
      };

      expect(ManageNetworkEconomics).toEqual(
        mockManageNetworkEconomicsAction.ManageNetworkEconomics,
      );
    });

    it("should fetch and convert InstallCode on ProposalInfo", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
        serviceOverride: service,
      });

      const rawInstallCode: RawInstallCode = {
        arg_hash: [Uint8Array.from([1, 2, 3])],
        wasm_module_hash: [Uint8Array.from([4, 5, 6])],
        skip_stopping_before_installing: [true],
        canister_id: [Principal.fromText("miw6j-knlcl-xq")],
        install_mode: [3],
      };

      const expectedInstallCode: InstallCode = {
        skipStoppingBeforeInstalling: true,
        canisterId: "miw6j-knlcl-xq",
        installMode: CanisterInstallMode.Upgrade,
        argHash: "010203",
        wasmModuleHash: "040506",
      };

      const rawProposal = {
        id: [{ id: 1n }],
        ballots: [],
        proposal: [
          {
            title: ["This is a title"],
            url: "some-url",
            summary: "Here it goes the summary",
            action: [
              {
                InstallCode: rawInstallCode,
              },
            ],
          },
        ],
        proposer: [],
        latest_tally: [],
      } as unknown as RawProposalInfo;
      service.get_proposal_info.mockResolvedValue(
        Promise.resolve([rawProposal]),
      );
      const proposalId = 5467n;
      const response = await governance.getProposal({
        proposalId,
      });

      expect(service.get_proposal_info).toBeCalledWith(proposalId);
      expect(service.get_proposal_info).toBeCalledTimes(1);
      expect(response).not.toBeUndefined();
      expect(response).toHaveProperty("id", 1n);

      const { InstallCode } = response?.proposal?.action as {
        InstallCode: InstallCode;
      };

      expect(InstallCode).toEqual(expectedInstallCode);
    });

    it("should fetch and convert StopOrStartCanister on ProposalInfo", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
        serviceOverride: service,
      });

      const rawStopOrStartCanister: RawStopOrStartCanister = {
        canister_id: [Principal.fromText("miw6j-knlcl-xq")],
        action: [1],
      };

      const expectedStopOrStartCanister: StopOrStartCanister = {
        canisterId: "miw6j-knlcl-xq",
        action: CanisterAction.Stop,
      };

      const rawProposal = {
        id: [{ id: 1n }],
        ballots: [],
        proposal: [
          {
            title: ["This is a title"],
            url: "some-url",
            summary: "Here it goes the summary",
            action: [
              {
                StopOrStartCanister: rawStopOrStartCanister,
              },
            ],
          },
        ],
        proposer: [],
        latest_tally: [],
      } as unknown as RawProposalInfo;
      service.get_proposal_info.mockResolvedValue(
        Promise.resolve([rawProposal]),
      );
      const proposalId = 5467n;
      const response = await governance.getProposal({
        proposalId,
      });

      expect(service.get_proposal_info).toBeCalledWith(proposalId);
      expect(service.get_proposal_info).toBeCalledTimes(1);
      expect(response).not.toBeUndefined();
      expect(response).toHaveProperty("id", 1n);

      const { StopOrStartCanister } = response?.proposal?.action as {
        StopOrStartCanister: StopOrStartCanister;
      };

      expect(StopOrStartCanister).toEqual(expectedStopOrStartCanister);
    });

    it("should fetch and convert UpdateCanisterSettings on ProposalInfo", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
        serviceOverride: service,
      });

      const rawUpdateCanisterSettings: RawUpdateCanisterSettings = {
        canister_id: [Principal.fromText("miw6j-knlcl-xq")],
        settings: [
          {
            controllers: [
              {
                controllers: [Principal.fromText("aaaaa-aa")],
              },
            ],
            compute_allocation: [1n],
            memory_allocation: [123456n],
            wasm_memory_limit: [234567n],
            freezing_threshold: [100n],
            log_visibility: [1],
          },
        ],
      };

      const expectedUpdateCanisterSettings: UpdateCanisterSettings = {
        canisterId: "miw6j-knlcl-xq",
        settings: {
          controllers: ["aaaaa-aa"],
          computeAllocation: 1n,
          memoryAllocation: 123456n,
          wasmMemoryLimit: 234567n,
          freezingThreshold: 100n,
          logVisibility: LogVisibility.Controllers,
        },
      };

      const rawProposal = {
        id: [{ id: 1n }],
        ballots: [],
        proposal: [
          {
            title: ["This is a title"],
            url: "some-url",
            summary: "Here it goes the summary",
            action: [
              {
                UpdateCanisterSettings: rawUpdateCanisterSettings,
              },
            ],
          },
        ],
        proposer: [],
        latest_tally: [],
      } as unknown as RawProposalInfo;
      service.get_proposal_info.mockResolvedValue(
        Promise.resolve([rawProposal]),
      );
      const response = await governance.getProposal({
        proposalId: 1n,
      });

      expect(service.get_proposal_info).toBeCalledWith(1n);
      expect(service.get_proposal_info).toBeCalledTimes(1);
      expect(response).not.toBeUndefined();
      expect(response).toHaveProperty("id", 1n);

      const { UpdateCanisterSettings } = response?.proposal?.action as {
        UpdateCanisterSettings: UpdateCanisterSettings;
      };

      expect(UpdateCanisterSettings).toEqual(expectedUpdateCanisterSettings);
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

    it("throw error when increaseDissolveDelay fails with error", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(errorServiceResponse);

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
        new GovernanceError(unexpectedGovernanceError),
      );
    });
  });

  describe("GovernanceCanister.setDissolveDelay", () => {
    it("sets dissolve delay of the neuron successfully", async () => {
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Configure: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      await governance.setDissolveDelay({
        neuronId: BigInt(1),
        dissolveDelaySeconds: 100000,
      });
      expect(service.manage_neuron).toBeCalled();
    });

    it("throw error when setDissolveDelay fails with error", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(errorServiceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const call = async () =>
        await governance.setDissolveDelay({
          neuronId: BigInt(1),
          dissolveDelaySeconds: 100000,
        });

      await expect(call).rejects.toThrow(new GovernanceError(error));
    });

    it("throw error when setDissolveDelay fails unexpectedly", async () => {
      const serviceResponse: ManageNeuronResponse = {
        command: [],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const call = async () =>
        await governance.setDissolveDelay({
          neuronId: BigInt(1),
          dissolveDelaySeconds: 100000,
        });

      await expect(call).rejects.toThrow(
        new GovernanceError(unexpectedGovernanceError),
      );
    });
  });

  describe("GovernanceCanister.setNodeProviderAccount", () => {
    const validAccount =
      "cd70bfa0f092c38a0ff8643d4617219761eb61d199b15418c0b1114d59e30f8e";
    it("sets node provider reward account successfully", async () => {
      const serviceResponse: Result = {
        Ok: null,
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.update_node_provider.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      await governance.setNodeProviderAccount(validAccount);
      expect(service.update_node_provider).toBeCalled();
    });

    it("throw error when update_node_provider returns error", async () => {
      const serviceResponse: Result = {
        Err: error,
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.update_node_provider.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const call = async () =>
        await governance.setNodeProviderAccount(validAccount);

      await expect(call).rejects.toThrow(new GovernanceError(error));
    });

    it("throw error when account is not valid", async () => {
      const serviceResponse: Result = {
        Ok: null,
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.update_node_provider.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const call = async () =>
        await governance.setNodeProviderAccount("invalid");

      await expect(call).rejects.toThrow(InvalidAccountIDError);
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
        new GovernanceError(unexpectedGovernanceError),
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
      await governance.claimOrRefreshNeuron({
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
      await governance.joinCommunityFund(neuronId);
      expect(service.manage_neuron).toBeCalled();
    });

    it("throws error if response is error", async () => {
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
      await governance.leaveCommunityFund(neuronId);
      expect(service.manage_neuron).toBeCalled();
    });

    it("throws error if response is error", async () => {
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

  describe("GovernanceCanister.autoStakeMaturity", () => {
    it("successfully auto stake maturity", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Configure: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const { autoStakeMaturity } = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      await autoStakeMaturity({ neuronId, autoStake: true });
      expect(service.manage_neuron).toBeCalled();
    });

    it("should convert auto stake parameter", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Configure: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const { autoStakeMaturity } = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const command = (requested_setting_for_auto_stake_maturity: boolean) => ({
        command: [
          {
            Configure: {
              operation: [
                {
                  ChangeAutoStakeMaturity: {
                    requested_setting_for_auto_stake_maturity,
                  },
                },
              ],
            },
          },
        ],
        id: [{ id: neuronId }],
        neuron_id_or_subaccount: [],
      });

      await autoStakeMaturity({ neuronId, autoStake: true });
      expect(service.manage_neuron).toBeCalledWith(command(true));

      await autoStakeMaturity({ neuronId, autoStake: false });
      expect(service.manage_neuron).toBeCalledWith(command(false));
    });

    it("throws error if response is error", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const { autoStakeMaturity } = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () => autoStakeMaturity({ neuronId, autoStake: true });
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

    it("throws error if response is error", async () => {
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

    it("throws error if response is error", async () => {
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

  describe("GovernanceCanister.setNeuronVisibility", () => {
    it("successfully sets neuron visibility", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Configure: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      await governance.setVisibility(neuronId, NeuronVisibility.Public);
      expect(service.manage_neuron).toBeCalledWith({
        command: [
          {
            Configure: {
              operation: [
                {
                  SetVisibility: {
                    visibility: [2],
                  },
                },
              ],
            },
          },
        ],
        id: [{ id: neuronId }],
        neuron_id_or_subaccount: [],
      });
    });

    it("throws error if response is error", async () => {
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
        governance.setVisibility(neuronId, NeuronVisibility.Public);
      expect(call).rejects.toThrow(new GovernanceError(error));
    });
  });

  describe("GovernanceCanister.mergeNeurons", () => {
    it("successfully merges two neurons", async () => {
      const sourceNeuronId = BigInt(10);
      const targetNeuronId = BigInt(13);
      const serviceResponse: ManageNeuronResponse = {
        command: [
          {
            Merge: {
              target_neuron: [],
              source_neuron: [],
              target_neuron_info: [],
              source_neuron_info: [],
            },
          },
        ],
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

    it("throws error if response is error", async () => {
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

  describe("GovernanceCanister.simulateMergeNeurons", () => {
    it("successfully simulate merging two neurons", async () => {
      const sourceNeuronId = BigInt(11);
      const targetNeuronId = BigInt(14);
      const serviceResponse: ManageNeuronResponse = {
        command: [
          {
            Merge: {
              target_neuron: [{ ...mockNeuron, id: [{ id: targetNeuronId }] }],
              source_neuron: [{ ...mockNeuron, id: [{ id: sourceNeuronId }] }],
              target_neuron_info: [mockNeuronInfo],
              source_neuron_info: [mockNeuronInfo],
            },
          },
        ],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.simulate_manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const mergedNeuron = await governance.simulateMergeNeurons({
        sourceNeuronId,
        targetNeuronId,
      });
      expect(mergedNeuron.neuronId).toBe(targetNeuronId);
      expect(mergedNeuron.fullNeuron?.id).toBe(targetNeuronId);
      expect(service.simulate_manage_neuron).toBeCalled();
      expect(service.manage_neuron).not.toBeCalled();
    });

    it("throws error if response is error", async () => {
      const sourceNeuronId = BigInt(12);
      const targetNeuronId = BigInt(15);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.simulate_manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const call = () =>
        governance.simulateMergeNeurons({
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

  describe("GovernanceCanister.stakeMaturity", () => {
    const serviceResponse: ManageNeuronResponse = {
      command: [
        {
          StakeMaturity: {
            staked_maturity_e8s: BigInt(100_000),
            maturity_e8s: BigInt(1_000_000),
          },
        },
      ],
    };

    it("successfully stake maturity for neuron", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const { stakeMaturity } = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      await stakeMaturity({
        neuronId: BigInt(10),
        percentageToStake: 50,
      });

      expect(service.manage_neuron).toBeCalled();
    });

    it("should stake maturity for neuron with no percentage", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const { stakeMaturity } = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      await stakeMaturity({
        neuronId: BigInt(10),
      });

      expect(service.manage_neuron).toBeCalledWith({
        command: [
          {
            StakeMaturity: {
              percentage_to_stake: [],
            },
          },
        ],
        id: [
          {
            id: BigInt(10),
          },
        ],
        neuron_id_or_subaccount: [],
      });
    });

    it("throws error if percentage not valid", () => {
      const service = mock<ActorSubclass<GovernanceService>>();

      const { stakeMaturity } = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const call = () =>
        stakeMaturity({
          neuronId: BigInt(10),
          percentageToStake: 300,
        });

      expect(call).rejects.toThrow(InvalidPercentageError);
      expect(service.manage_neuron).not.toBeCalled();
    });

    it("throws error if response is error", async () => {
      const serviceResponse: ManageNeuronResponse = {
        command: [{ Error: error }],
      };

      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const { stakeMaturity } = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });

      const call = () =>
        stakeMaturity({
          neuronId: BigInt(10),
          percentageToStake: 50,
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

    it("throws error if response is error", async () => {
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

  describe("GovernanceCanister.refreshVotingPower", () => {
    it("successfully refreshes voting power of a neuron", async () => {
      const neuronId = BigInt(10);
      const serviceResponse: ManageNeuronResponse = {
        command: [{ RefreshVotingPower: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      await governance.refreshVotingPower({
        neuronId,
      });
      expect(service.manage_neuron).toBeCalledTimes(1);
    });

    it("throws error if response is error", async () => {
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
        governance.refreshVotingPower({
          neuronId,
        });
      expect(call).rejects.toThrow(new GovernanceError(error));
    });
  });

  describe("GovernanceCanister.splitNeuron", () => {
    it("successfully splits neuron", async () => {
      const neuronId = BigInt(10);
      const amount = BigInt(600_000_000);
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
      const neuronId = BigInt(10);
      const amount = BigInt(600_000_000);
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

    it("throws error if response is error", async () => {
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
      await governance.stopDissolving(neuronId);
      expect(service.manage_neuron).toBeCalled();
    });

    it("throws error if response is error", async () => {
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
      action: mockManageNetworkEconomicsAction,
    };
    it("successfully creates a proposal", async () => {
      const proposalId = 10n;

      const serviceResponse: ManageNeuronResponse = {
        command: [
          { MakeProposal: { proposal_id: [{ id: proposalId }], message: [] } },
        ],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const response = await governance.makeProposal(makeProposalRequest);
      expect(service.manage_neuron).toBeCalled();
      expect(response).toEqual(proposalId);
    });

    it("successfully creates a proposal but return undefined", async () => {
      const serviceResponse: ManageNeuronResponse = {
        command: [{ RegisterVote: {} }],
      };
      const service = mock<ActorSubclass<GovernanceService>>();
      service.manage_neuron.mockResolvedValue(serviceResponse);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
      });
      const response = await governance.makeProposal(makeProposalRequest);
      expect(service.manage_neuron).toBeCalled();
      expect(response).toEqual(undefined);
    });

    it("throws error if response is error", async () => {
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

  describe("getLastestRewardEvent", () => {
    const mockRewardEvent: RewardEvent = {
      rounds_since_last_distribution: [BigInt(1_000)],
      day_after_genesis: BigInt(365),
      actual_timestamp_seconds: BigInt(12234455555),
      total_available_e8s_equivalent: BigInt(20_000_000_000),
      distributed_e8s_equivalent: BigInt(2_000_000_000),
      settled_proposals: [],
      latest_round_available_e8s_equivalent: [BigInt(1_000_000_000)],
    };

    it("gets the latest reward event", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      service.get_latest_reward_event.mockResolvedValue(mockRewardEvent);

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
        serviceOverride: service,
      });
      const rewardEvent = await governance.getLastestRewardEvent(true);
      expect(service.get_latest_reward_event).toBeCalled();
      expect(rewardEvent).toBe(mockRewardEvent);
    });
  });

  describe("getNetworkEconomicsParameters", () => {
    it("gets the network economics parameters", async () => {
      const service = mock<ActorSubclass<GovernanceService>>();
      service.get_network_economics_parameters.mockResolvedValue(
        rawNetworkEconomics,
      );

      const governance = GovernanceCanister.create({
        certifiedServiceOverride: service,
        serviceOverride: service,
      });
      const response = await governance.getNetworkEconomicsParameters({
        certified: true,
      });
      expect(service.get_network_economics_parameters).toBeCalledTimes(1);
      expect(response).toEqual(mockManageNetworkEconomics);
    });
  });
});
