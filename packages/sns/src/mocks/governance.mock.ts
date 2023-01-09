import { arrayOfNumberToUint8Array } from "@dfinity/utils";
import type {
  GetMetadataResponse,
  Neuron,
  NeuronId,
  ProposalData,
} from "../../candid/sns_governance";

export const neuronIdMock: NeuronId = { id: arrayOfNumberToUint8Array([1]) };

export const neuronMock = {
  id: [neuronIdMock],
} as Neuron;

export const neuronsMock: Neuron[] = [neuronMock];

export const metadataMock: GetMetadataResponse = {
  url: ["https://my.url/"],
  logo: [],
  name: ["My project"],
  description: ["Web3 for the win"],
};

export const proposalMock = {
  id: [{ id: BigInt(12) }],
} as ProposalData;

export const proposalsMock: ProposalData[] = [proposalMock];
