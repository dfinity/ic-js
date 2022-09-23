import type { ActorMethod } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export interface AccountState {
  authenticated_principal_id: [] | [Principal];
  successfully_transferred_neurons: Array<TransferredNeuron>;
  is_whitelisted_for_forwarding: boolean;
  has_donated: boolean;
  failed_transferred_neurons: Array<TransferredNeuron>;
  neuron_ids: Array<NeuronId>;
  has_claimed: boolean;
  has_forwarded: boolean;
  icpts: number;
}
export interface NeuronId {
  id: bigint;
}
export type Result = { Ok: Array<NeuronId> } | { Err: string };
export type Result_1 = { Ok: null } | { Err: string };
export type Result_2 = { Ok: AccountState } | { Err: string };
export interface TransferredNeuron {
  error: [] | [string];
  timestamp_seconds: bigint;
  neuron_id: [] | [NeuronId];
}
export interface _SERVICE {
  balance: ActorMethod<[string], number>;
  claim_neurons: ActorMethod<[string], Result>;
  donate_account: ActorMethod<[string], Result_1>;
  forward_whitelisted_unclaimed_accounts: ActorMethod<[null], Result_1>;
  get_account: ActorMethod<[string], Result_2>;
  get_build_metadata: ActorMethod<[], string>;
  len: ActorMethod<[], number>;
  total: ActorMethod<[], number>;
}
