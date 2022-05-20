import type { IDL } from "@dfinity/candid";
export const idlFactory: IDL.InterfaceFactory;
export interface NeuronId {
  id: bigint;
}

export type Result = { Ok: NeuronId[] } | { Err: string };
export interface GenesisTokenService {
  claim_neurons: (arg_0: string) => Promise<Result>;
}
