import { DerEncodedPublicKey } from "@dfinity/agent";
import { Option } from "../option";
type NeuronId = bigint;

export type KnownNeuron = {
  id: NeuronId,
  name: string,
  description: Option<string>
};
