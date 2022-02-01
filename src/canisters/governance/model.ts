import { DerEncodedPublicKey } from "@dfinity/agent";
import { Option } from "../option";
import {
  AccountIdentifier,
  CanisterIdString,
  E8s,
  NeuronId,
  PrincipalString,
} from "../common/types";

export type KnownNeuron = {
  id: NeuronId,
  name: string,
  description: Option<string>
};
