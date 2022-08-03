import type { Neuron, NeuronId } from "../../candid/sns_governance";

export const neuronIdMock: NeuronId = { id: [1] };

export const neuronMock = {
  id: [neuronIdMock],
} as Neuron;

export const neuronsMock: Neuron[] = [neuronMock];
