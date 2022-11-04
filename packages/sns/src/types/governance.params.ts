import type { Principal } from "@dfinity/principal";
import type { NeuronId } from "../../candid/sns_governance";
import type { SnsNeuronPermissionType } from "../enums/governance.enums";
import type { E8s } from "./common";
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

/**
 * General neuron management request parameter interface
 */
interface SnsNeuronManagementParams extends Omit<QueryParams, "certified"> {
  neuronId: NeuronId;
}

/**
 * The parameters to add permissions to a neuron
 */
export interface SnsNeuronPermissionsParams extends SnsNeuronManagementParams {
  principal: Principal;
  permissions: SnsNeuronPermissionType[];
}

/**
 * The parameters to disburse a neuron
 */
export interface SnsDisburseNeuronParams extends SnsNeuronManagementParams {
  amount?: E8s;
}

/**
 * The parameters to set dissolve timestamp
 */
export interface SnsSetDissolveTimestampParams
  extends SnsNeuronManagementParams {
  dissolveTimestampSeconds: bigint;
}

/**
 * The parameters to increase dissolve delay
 */
export interface SnsIncreaseDissolveDelayParams
  extends SnsNeuronManagementParams {
  additionalDissolveDelaySeconds: number;
}
