import type { Principal } from "@dfinity/principal";
import type { Subaccount, Tokens } from "../../candid/icrc1_ledger";
import type { NeuronId, ProposalId } from "../../candid/sns_governance";
import type {
  SnsNeuronPermissionType,
  SnsProposalDecisionStatus,
  SnsProposalRewardStatus,
} from "../enums/governance.enums";
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
 * The parameters available to list Sns proposals
 */
export interface SnsListProposalsParams extends QueryParams {
  // A list of proposal reward statuses, specifying that only proposals that
  // that have one of the define reward statuses should be included
  // in the list.
  // If this list is empty, no restriction is applied.
  includeRewardStatus?: SnsProposalRewardStatus[];
  // The proposal ID specifying which proposals to return.
  // This should be set to the last proposal of the previously returned page and
  // will not be included in the current page.
  beforeProposal?: ProposalId;
  // Limit the number of Proposals returned in each page, from 1 to 100.
  // If a value outside of this range is provided, 100 will be used.
  limit?: number;
  // A list of proposal types, specifying that proposals of the given
  // types should be excluded in this list.
  excludeType?: bigint[];
  // A list of proposal decision statuses, specifying that only proposals that
  // that have one of the define decision statuses should be included
  // in the list.
  // If this list is empty, no restriction is applied.
  includeStatus?: SnsProposalDecisionStatus[];
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
  // Same as createdAt from ledger's TransferParams
  createdAt?: bigint;
}

export interface SnsIncreaseStakeNeuronParams
  extends Omit<QueryParams, "certified"> {
  stakeE8s: Tokens;
  source: SnsAccount;
  neuronId: NeuronId;
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
 * The parameters to split a neuron
 */
export interface SnsSplitNeuronParams extends SnsNeuronManagementParams {
  amount: E8s;
  memo: bigint;
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
  followees: NeuronId[];
}

/**
 * The parameters to claim a neuron
 */
export interface SnsClaimNeuronParams {
  memo: bigint;
  controller: Principal;
  subaccount: Subaccount;
}

/**
 * The parameters to stake maturity of a neuron
 */
export interface SnsNeuronStakeMaturityParams
  extends SnsNeuronManagementParams {
  percentageToStake?: number;
}

/**
 * The parameters to toggle auto stake maturity of a neuron
 */
export interface SnsNeuronAutoStakeMaturityParams
  extends SnsNeuronManagementParams {
  autoStake: boolean;
}
