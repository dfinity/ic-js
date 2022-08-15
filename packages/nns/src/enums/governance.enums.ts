export enum NeuronState {
  UNSPECIFIED = 0,
  LOCKED = 1,
  DISSOLVING = 2,
  DISSOLVED = 3,
  SPAWNING = 4,
}

export enum Topic {
  // https://github.com/dfinity/ic/blob/master/rs/nns/governance/proto/ic_nns_governance/pb/v1/governance.proto#L27
  Unspecified = 0,
  ManageNeuron = 1,
  ExchangeRate = 2,
  NetworkEconomics = 3,
  Governance = 4,
  NodeAdmin = 5,
  ParticipantManagement = 6,
  SubnetManagement = 7,
  NetworkCanisterManagement = 8,
  Kyc = 9,
  NodeProviderRewards = 10,
  SnsDecentralizationSale = 11,
}

// The proposal status, with respect to reward distribution.
// See also ProposalStatus.
export enum ProposalRewardStatus {
  PROPOSAL_REWARD_STATUS_UNKNOWN = 0,

  // The proposal still accept votes, for the purpose of
  // vote rewards. This implies nothing on the ProposalStatus.
  PROPOSAL_REWARD_STATUS_ACCEPT_VOTES = 1,

  // The proposal no longer accepts votes. It is due to settle
  // at the next reward event.
  PROPOSAL_REWARD_STATUS_READY_TO_SETTLE = 2,

  // The proposal has been taken into account in a reward event.
  PROPOSAL_REWARD_STATUS_SETTLED = 3,

  // The proposal is not eligible to be taken into account in a reward event.
  PROPOSAL_REWARD_STATUS_INELIGIBLE = 4,
}

// The proposal status, with respect to decision making and execution.
// See also ProposalRewardStatus.
export enum ProposalStatus {
  PROPOSAL_STATUS_UNKNOWN = 0,

  // A decision (accept/reject) has yet to be made.
  PROPOSAL_STATUS_OPEN = 1,

  // The proposal has been rejected.
  PROPOSAL_STATUS_REJECTED = 2,

  // The proposal has been accepted. At this time, either execution
  // as not yet started, or it has but the outcome is not yet known.
  PROPOSAL_STATUS_ACCEPTED = 3,

  // The proposal was accepted and successfully executed.
  PROPOSAL_STATUS_EXECUTED = 4,

  // The proposal was accepted, but execution failed.
  PROPOSAL_STATUS_FAILED = 5,
}

export enum Vote {
  UNSPECIFIED = 0,
  YES = 1,
  NO = 2,
}
