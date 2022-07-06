import type { Principal } from "@dfinity/principal";
import type { NeuronId } from "../../candid/sns_governance";
import type { CanisterParams } from "./canister.params";

export interface ListNeuronsParams extends CanisterParams {
  principal?: Principal | undefined;
  limit?: number;
  beforeNeuronId?: NeuronId;
}
