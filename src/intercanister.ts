import { CreateNeuronRequest } from "./types/intercanister";
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
