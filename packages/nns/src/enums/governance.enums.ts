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

export enum ProposalActionNnsFunction {
  UNSPECIFIED = 0,
  CREATE_SUBNET = 1,
  ADD_NODE_TO_SUBNET = 2,
  NNS_CANISTER_INSTALL = 3,
  NNS_CANISTER_UPGRADE = 4,
  BLESS_REPLICA_VERSION = 5,
  RECOVER_SUBNET = 6,
  UPDATE_CONFIG_OF_SUBNET = 7,
  ASSIGN_NO_ID = 8,
  NNS_ROOT_UPGRADE = 9,
  ICP_XDR_CONVERSION_RATE = 10,
  UPDATE_SUBNET_REPLICA_VERSION = 11,
  CLEAR_PROVISIONAL_WHITELIST = 12,
  REMOVE_NODES_FROM_SUBNET = 13,
  SET_AUTHORIZED_SUBNETWORKS = 14,
  SET_FIREWALL_CONFIG = 15,
  UPDATE_NODE_OPERATOR_CONFIG = 16,
  STOP_OR_START_NNS_CANISTER = 17,
  REMOVE_NODES = 18,
  UNINSTALL_CODE = 19,
  UPDATE_NODE_REWARD_STABLE = 20,
  ADD_OR_REMOVE_DATACENTERS = 21,
  UPDATE_UNASSIGNED_NODES_CONFIG = 22,
  REMOVE_NODE_OPERATORS = 23,
  REROUTE_CANISTER_RANGES = 24,
  ADD_FIREWALL_RULES = 25,
  REMOVE_FIREWALL_RULES = 26,
  UPDATE_FIREWALL_RULES = 27,
  PREPARE_CANISTER_MIGRATION = 28,
  COMPLETE_CANISTER_MIGRATION = 29,
  ADD_SNS_WASM = 30,
}

export enum Vote {
  UNSPECIFIED = 0,
  YES = 1,
  NO = 2,
}
