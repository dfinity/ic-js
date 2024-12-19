import { Principal } from "@dfinity/principal";
import type {
  Neuron as RawNeuron,
  NeuronInfo as RawNeuronInfo,
} from "../../../candid/governance";
import { MAINNET_GOVERNANCE_CANISTER_ID } from "../../constants/canister_ids";
import { NeuronState } from "../../enums/governance.enums";
import type { Neuron, NeuronInfo } from "../../types/governance_converters";
import { toNeuron, toNeuronInfo, toRawNeuron } from "./response.converters";

describe("response.converters", () => {
  const neuronId = 123n;
  const neuronStake = 100_000_000n;
  const controlledIdText = "souto-grxij-jbijj-tmr3q";
  const createdTimestampSeconds = 1_234_567_000n;
  const dissolveDelaySeconds = 8_640_000n;
  const state = NeuronState.Locked;
  const canisterId = MAINNET_GOVERNANCE_CANISTER_ID;

  const defaultCandidNeuron: RawNeuron = {
    id: [{ id: neuronId }],
    staked_maturity_e8s_equivalent: [0n],
    controller: [Principal.fromText(controlledIdText)],
    recent_ballots: [],
    kyc_verified: false,
    neuron_type: [],
    not_for_profit: false,
    cached_neuron_stake_e8s: neuronStake,
    created_timestamp_seconds: createdTimestampSeconds,
    auto_stake_maturity: [false],
    maturity_e8s_equivalent: 0n,
    aging_since_timestamp_seconds: createdTimestampSeconds,
    neuron_fees_e8s: 0n,
    hot_keys: [],
    account: new Uint8Array(),
    joined_community_fund_timestamp_seconds: [],
    dissolve_state: [{ DissolveDelaySeconds: dissolveDelaySeconds }],
    spawn_at_timestamp_seconds: [],
    followees: [],
    visibility: [],
    transfer: [],
    known_neuron_data: [],
    voting_power_refreshed_timestamp_seconds: [],
    potential_voting_power: [],
    deciding_voting_power: [],
  };

  const defaultNeuron: Neuron = {
    id: neuronId,
    stakedMaturityE8sEquivalent: 0n,
    controller: controlledIdText,
    recentBallots: [],
    neuronType: undefined,
    kycVerified: false,
    notForProfit: false,
    cachedNeuronStake: neuronStake,
    createdTimestampSeconds,
    autoStakeMaturity: false,
    maturityE8sEquivalent: 0n,
    agingSinceTimestampSeconds: createdTimestampSeconds,
    neuronFees: 0n,
    hotKeys: [],
    accountIdentifier:
      "5608e9e28e45cb752c31464abe8edfca5fca00971942a882989613c20848da6f",
    joinedCommunityFundTimestampSeconds: undefined,
    dissolveState: { DissolveDelaySeconds: dissolveDelaySeconds },
    spawnAtTimesSeconds: undefined,
    followees: [],
    visibility: undefined,
    votingPowerRefreshedTimestampSeconds: undefined,
    potentialVotingPower: undefined,
    decidingVotingPower: undefined,
  };

  const defaultCandidNeuronInfo: RawNeuronInfo = {
    dissolve_delay_seconds: dissolveDelaySeconds,
    recent_ballots: [],
    voting_power_refreshed_timestamp_seconds: [],
    potential_voting_power: [],
    neuron_type: [],
    deciding_voting_power: [],
    created_timestamp_seconds: createdTimestampSeconds,
    state,
    stake_e8s: 0n,
    joined_community_fund_timestamp_seconds: [],
    retrieved_at_timestamp_seconds: 0n,
    visibility: [],
    known_neuron_data: [],
    voting_power: 0n,
    age_seconds: 0n,
  };

  const defaultNeuronInfo: NeuronInfo = {
    neuronId,
    dissolveDelaySeconds,
    recentBallots: [],
    neuronType: undefined,
    createdTimestampSeconds,
    state,
    joinedCommunityFundTimestampSeconds: undefined,
    retrievedAtTimestampSeconds: 0n,
    votingPower: 0n,
    votingPowerRefreshedTimestampSeconds: undefined,
    decidingVotingPower: undefined,
    potentialVotingPower: undefined,
    ageSeconds: 0n,
    fullNeuron: undefined,
    visibility: undefined,
  };

  describe("toNeuronInfo", () => {
    it("should convert a default candid NeuronInfo to ic-js NeuronInfo", () => {
      expect(
        toNeuronInfo({
          neuronId,
          neuronInfo: defaultCandidNeuronInfo,
          rawNeuron: undefined,
          canisterId,
        }),
      ).toEqual(defaultNeuronInfo);
    });

    it("should convert a fullNeuron", () => {
      expect(
        toNeuronInfo({
          neuronId,
          neuronInfo: defaultCandidNeuronInfo,
          rawNeuron: defaultCandidNeuron,
          canisterId,
        }),
      ).toEqual({
        ...defaultNeuronInfo,
        fullNeuron: defaultNeuron,
      });
    });

    it("should convert a voting power refreshed timestamp", () => {
      const timestamp = 1_333_444_999n;
      expect(
        toNeuronInfo({
          neuronId,
          neuronInfo: {
            ...defaultCandidNeuronInfo,
            voting_power_refreshed_timestamp_seconds: [timestamp],
          },
          rawNeuron: undefined,
          canisterId,
        }),
      ).toEqual({
        ...defaultNeuronInfo,
        votingPowerRefreshedTimestampSeconds: timestamp,
      });
    });

    it("should convert potential voting power", () => {
      const potentialVotingPower = 1_000_000n;
      expect(
        toNeuronInfo({
          neuronId,
          neuronInfo: {
            ...defaultCandidNeuronInfo,
            potential_voting_power: [potentialVotingPower],
          },
          rawNeuron: undefined,
          canisterId,
        }),
      ).toEqual({ ...defaultNeuronInfo, potentialVotingPower });
    });

    it("should convert deciding voting power", () => {
      const decidingVotingPower = 1_001_000n;
      expect(
        toNeuronInfo({
          neuronId,
          neuronInfo: {
            ...defaultCandidNeuronInfo,
            deciding_voting_power: [decidingVotingPower],
          },
          rawNeuron: undefined,
          canisterId,
        }),
      ).toEqual({ ...defaultNeuronInfo, decidingVotingPower });
    });
  });

  describe("toNeuron", () => {
    it("should convert a default candid Neuron to ic-js Neuron", () => {
      expect(
        toNeuron({
          neuron: defaultCandidNeuron,
          canisterId,
        }),
      ).toEqual(defaultNeuron);
    });

    it("should convert a voting power refreshed timestamp", () => {
      const timestamp = 1_333_444_999n;
      expect(
        toNeuron({
          neuron: {
            ...defaultCandidNeuron,
            voting_power_refreshed_timestamp_seconds: [timestamp],
          },
          canisterId,
        }),
      ).toEqual({
        ...defaultNeuron,
        votingPowerRefreshedTimestampSeconds: timestamp,
      });
    });

    it("should convert potential voting power", () => {
      const votingPower = 1_000_000n;

      expect(
        toNeuron({
          neuron: {
            ...defaultCandidNeuron,
            potential_voting_power: [votingPower],
          },
          canisterId,
        }),
      ).toEqual({
        ...defaultNeuron,
        potentialVotingPower: votingPower,
      });
    });

    it("should convert deciding voting power", () => {
      const votingPower = 1_001_000n;

      expect(
        toNeuron({
          neuron: {
            ...defaultCandidNeuron,
            deciding_voting_power: [votingPower],
          },
          canisterId,
        }),
      ).toEqual({
        ...defaultNeuron,
        decidingVotingPower: votingPower,
      });
    });
  });

  describe("toRawNeuron", () => {
    it("should convert a default ic-js Neuron to candid Neuron", () => {
      expect(
        toRawNeuron({
          neuron: defaultNeuron,
          account: new Uint8Array(),
        }),
      ).toEqual(defaultCandidNeuron);
    });

    it("should convert a voting power refreshed timestamp", () => {
      const timestamp = 1_333_444_998n;
      expect(
        toRawNeuron({
          neuron: {
            ...defaultNeuron,
            votingPowerRefreshedTimestampSeconds: timestamp,
          },
          account: new Uint8Array(),
        }),
      ).toEqual({
        ...defaultCandidNeuron,
        voting_power_refreshed_timestamp_seconds: [timestamp],
      });
    });
  });
});
