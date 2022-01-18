import type { IDL } from "@dfinity/candid";
import {
  KnownNeuron,
  ListKnownNeuronsResponse,
  _SERVICE,
} from "./governance";
export {
  KnownNeuron as CandidKnownNeuron,
  ListKnownNeuronsResponse as CandidKnownNeuronsResponse,
  _SERVICE as GovernanceService,
};

export const idlFactory: IDL.InterfaceFactory;
