import type { Principal } from "@dfinity/principal";
import { SnsNeuronId } from "..";
import type { Subaccount, Tokens } from "../../candid/icrc1_ledger";
import type { NeuronId } from "../../candid/sns_governance";
import type { SnsNeuronPermissionType } from "../enums/governance.enums";
import type { E8s } from "./common";
import type { SnsAccount } from "./ledger.responses";
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

export interface SnsStakeNeuronParams extends Omit<QueryParams, "certified"> {
  stakeE8s: Tokens;
  source: SnsAccount;
  controller: Principal;
}

// Type to transform to a ClaimOrRefresh command
export interface SnsClaimOrRefreshArgs extends Omit<QueryParams, "certified"> {
  subaccount: Uint8Array;
  memo?: bigint;
  controller?: Principal;
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

/**
 * The parameters to increase dissolve delay
 */
export interface SnsSetTopicFollowees extends SnsNeuronManagementParams {
  functionId: bigint;
  followees: SnsNeuronId[];
}

/**
 * The parameters to claim a neuron
 */
export interface SnsClaimNeuronParams {
  memo: bigint;
  controller: Principal;
  subaccount: Subaccount;
}
