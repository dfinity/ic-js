import { Principal } from "@dfinity/principal";
import type {
  ListNeuronsResponse,
  Neuron,
  NeuronInfo,
} from "../../candid/governance";

const one = BigInt(1);
export const mockNeuronId = BigInt(14567);
export const mockNeuronInfo: NeuronInfo = {
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
export const mockNeuron: Neuron = {
  id: [{ id: mockNeuronId }],
  staked_maturity_e8s_equivalent: [one],
  controller: [Principal.fromHex("1f")],
  recent_ballots: [],
  kyc_verified: false,
  not_for_profit: false,
  maturity_e8s_equivalent: one,
  cached_neuron_stake_e8s: one,
  created_timestamp_seconds: one,
  auto_stake_maturity: [false],
  aging_since_timestamp_seconds: one,
  hot_keys: [],
  account: new Uint8Array([1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 6]),
  joined_community_fund_timestamp_seconds: [],
  dissolve_state: [],
  followees: [],
  neuron_fees_e8s: one,
  transfer: [],
  known_neuron_data: [],
  spawn_at_timestamp_seconds: [],
};
export const mockListNeuronsResponse: ListNeuronsResponse = {
  neuron_infos: [[mockNeuronId, mockNeuronInfo]],
  full_neurons: [mockNeuron],
};
