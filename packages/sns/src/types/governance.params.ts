import type { Principal } from "@dfinity/principal";
import type { NeuronId } from "../../candid/sns_governance";
import type { QueryParams } from "./query.params";

/**
 * The parameters available to list Sns neurons
 */
export interface SnsListNeuronsParams extends QueryParams {
  /** Scope the query to a particular principal */
  principal?: Principal | undefined;
  /** The maximum number of neurons returned by the method `list_neurons` */
  limit?: number;
  /** Index the search to returns a list that starts after specified neuron id */
  beforeNeuronId?: NeuronId;
}

/**
 * The parameters to get an sns neuron
 */
export interface SnsGetNeuronParams extends QueryParams {
  neuronId: NeuronId;
}
