// The Candid files are generated from Proto. That's why the enums are currently lost in the conversion process.
// These enums are used to map back numbers provided by the backend through the Candid declaration.
// We use Pascal case for consistency reason.
//
// Proto source: https://github.com/dfinity/ic/blob/master/rs/nns/governance/proto/icNns_governance/pb/v1/governance.proto

export enum NeuronState {
  Unspecified = 0,
  Locked = 1,
  Dissolving = 2,
  Dissolved = 3,
  Spawning = 4,
}

export enum Topic {
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
  Unknown = 0,

  // The proposal still accept votes, for the purpose of
  // vote rewards. This implies nothing on the ProposalStatus.
  AcceptVotes = 1,

  // The proposal no longer accepts votes. It is due to settle
  // at the next reward event.
  ReadyToSettle = 2,

  // The proposal has been taken into account in a reward event.
  Settled = 3,

  // The proposal is not eligible to be taken into account in a reward event.
  Ineligible = 4,
}

// The proposal status, with respect to decision making and execution.
// See also ProposalRewardStatus.
export enum ProposalStatus {
  Unknown = 0,

  // A decision (accept/reject) has yet to be made.
  Open = 1,

  // The proposal has been rejected.
  Rejected = 2,

  // The proposal has been accepted. At this time, either execution
  // as not yet started, or it has but the outcome is not yet known.
  Accepted = 3,

  // The proposal was accepted and successfully executed.
  Executed = 4,

  // The proposal was accepted, but execution failed.
  Failed = 5,
}

export enum Vote {
  Unspecified = 0,
  Yes = 1,
  No = 2,
}

export enum NnsFunction {
  Unspecified = 0,
  CreateSubnet = 1,
  AddNodeToSubnet = 2,
  NnsCanisterInstall = 3,
  NnsCanisterUpgrade = 4,
  BlessReplicaVersion = 5,
  RecoverSubnet = 6,
  UpdateConfigOfSubnet = 7,
  AssignNoid = 8,
  NnsRootUpgrade = 9,
  IcpXdrConversionRate = 10,
  UpdateSubnetReplicaVersion = 11,
  ClearProvisionalWhitelist = 12,
  RemoveNodesFromSubnet = 13,
  SetAuthorizedSubnetworks = 14,
  SetFirewallConfig = 15,
  UpdateNodeOperatorConfig = 16,
  StopOrStartNnsCanister = 17,
  RemoveNodes = 18,
  UninstallCode = 19,
  UpdateNodeRewardsTable = 20,
  AddOrRemoveDataCenters = 21,
  UpdateUnassignedNodesConfig = 22,
  RemoveNodeOperators = 23,
  RerouteCanisterRanges = 24,
  AddFirewallRules = 25,
  RemoveFirewallRules = 26,
  UpdateFirewallRules = 27,
  PrepareCanisterMigration = 28,
  CompleteCanisterMigration = 29,
  AddSnsWasm = 30,
}
