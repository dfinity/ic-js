import type {
  IcrcAccount,
  IcrcSubaccount,
  IcrcTokens,
} from "@dfinity/ledger-icrc";
import type { Principal } from "@dfinity/principal";
import type { QueryParams } from "@dfinity/utils";
import type { NeuronId, ProposalId } from "../../candid/sns_governance";
import type {
  SnsNeuronPermissionType,
  SnsProposalDecisionStatus,
  SnsProposalRewardStatus,
  SnsVote,
} from "../enums/governance.enums";
import type { E8s } from "./common";

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
 * The parameters to get an sns proposal
 */
export interface SnsGetProposalParams extends QueryParams {
  proposalId: ProposalId;
}

/**
 * The parameters to get a Sns neuron
 */
export interface SnsGetNeuronParams extends QueryParams {
  neuronId: NeuronId;
}

export interface SnsStakeNeuronParams extends Omit<QueryParams, "certified"> {
  stakeE8s: IcrcTokens;
  source: IcrcAccount;
  controller: Principal;
  // Same as createdAt from ledger's TransferParams
  createdAt?: bigint;
  fee?: bigint;
}

export interface SnsIncreaseStakeNeuronParams
  extends Omit<QueryParams, "certified"> {
  stakeE8s: IcrcTokens;
  source: IcrcAccount;
  neuronId: NeuronId;
}

// Type to transform to a ClaimOrRefresh command
export interface SnsClaimOrRefreshArgs extends Omit<QueryParams, "certified"> {
  subaccount: Uint8Array | number[];
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
  toAccount?: IcrcAccount;
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
 * The parameters to register vote
 */
export interface SnsRegisterVoteParams extends SnsNeuronManagementParams {
  vote: SnsVote;
  proposalId: ProposalId;
}

/**
 * The parameters to claim a neuron
 */
export interface SnsClaimNeuronParams {
  memo: bigint;
  controller: Principal;
  subaccount: IcrcSubaccount;
}

/**
 * The parameters to stake maturity of a neuron
 */
export interface SnsNeuronStakeMaturityParams
  extends SnsNeuronManagementParams {
  percentageToStake?: number;
}

/**
 * The parameters to disburse maturity of a neuron
 */
export interface SnsNeuronDisburseMaturityParams
  extends SnsNeuronManagementParams {
  toAccount?: IcrcAccount;
  percentageToDisburse: number;
}

/**
 * The parameters to toggle auto stake maturity of a neuron
 */
export interface SnsNeuronAutoStakeMaturityParams
  extends SnsNeuronManagementParams {
  autoStake: boolean;
}
