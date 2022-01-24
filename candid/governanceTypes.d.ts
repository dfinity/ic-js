import type { Principal } from '@dfinity/principal';
export interface KnownNeuron {
  'id' : [] | [NeuronId],
  'known_neuron_data' : [] | [KnownNeuronData],
}
export interface KnownNeuronData {
  'name' : string,
  'description' : [] | [string],
}
export interface ListKnownNeuronsResponse {
  'known_neurons' : Array<KnownNeuron>,
}
export interface NeuronId { 'id' : bigint }
export interface _SERVICE {
  'list_known_neurons' : () => Promise<ListKnownNeuronsResponse>,
}
