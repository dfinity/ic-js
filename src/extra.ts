// API calls with a scope wider than one canister:
// - calls that require multiple canisters.
// - calls that require additional systems such as hardware wallets.

import { CreateNeuronRequest } from "./types/extra";
import { Principal } from "@dfinity/principal";
import { LedgerCanister } from "./ledger";
import { NnsDappCanister } from "./nns_dapp";

/**
 * Uses governance and ledger canisters to create a neuron.
 */
export async function createNeuronWithNnsDapp({
    request
  }: {  principal: Principal,
  ledgerCanister: LedgerCanister,
  nnsDappCanister: NnsDappCanister,
request: CreateNeuronRequest}): Promise<string> {
     return new Promise(() => "foo");
}
