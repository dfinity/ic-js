import type {
  ListNeuronsResponse,
  NeuronInfo,
} from "../../../../candid/governance";

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
export const mockListNeuronsResponse: ListNeuronsResponse = {
  neuron_infos: [[mockNeuronId, mockNeuronInfo]],
  full_neurons: [],
};
