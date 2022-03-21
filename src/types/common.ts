import { Agent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";

export type CanisterIdString = string;
export type NeuronId = bigint;
export type AccountIdentifier = string;
export type BlockHeight = bigint;
export type E8s = bigint;
export type Memo = bigint;
export type PrincipalString = string;
export type SubAccount = Uint8Array;

export type CanisterCall = (
  agent: Agent,
  canisterId: Principal,
  methodName: string,
  arg: ArrayBuffer
) => Promise<Uint8Array | Error>;

export type Option<T> = T | undefined;
