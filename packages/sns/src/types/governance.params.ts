import type { Principal } from "@dfinity/principal";
import type { NeuronId } from "../../candid/sns_governance";
import type { QueryParams } from "./query.params";

export interface ListNeuronsParams extends QueryParams {
  principal?: Principal | undefined;
  limit?: number;
  beforeNeuronId?: NeuronId;
}
