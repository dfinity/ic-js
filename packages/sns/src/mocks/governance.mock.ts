import type { Neuron, NeuronId } from "../../candid/sns_governance";

const neuronId: NeuronId = { id: [1] };

export const neuronsMock: Neuron[] = [
  {
    id: [neuronId],
  } as Neuron,
];
