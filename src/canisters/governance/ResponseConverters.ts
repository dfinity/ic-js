import { Principal } from "@dfinity/principal";
import GOVERNANCE_CANISTER_ID from "./canisterId";
import {
  accountIdentifierFromBytes,
  arrayOfNumberToArrayBuffer,
  arrayOfNumberToUint8Array,
  principalToAccountIdentifier,
} from "../converter";
import { AccountIdentifier, E8s, NeuronId } from "../common/types";
import {
  Action,
  Ballot,
  BallotInfo,
  By,
  Change,
  Command,
  DisburseResponse,
  DisburseToNeuronResponse,
  DissolveState,
  Followees,
  KnownNeuron,
  ListProposalsResponse,
  MakeProposalResponse,
  MergeMaturityResponse,
  Neuron,
  NeuronIdOrSubaccount,
  NeuronInfo,
  NodeProvider,
  Operation,
  Proposal,
  ProposalInfo,
  RewardMode,
  SpawnResponse,
  Tally,
} from "./model";
import {
  AccountIdentifier as RawAccountIdentifier,
  Action as RawAction,
  Amount as RawAmount,
  Ballot as RawBallot,
  BallotInfo as RawBallotInfo,
  By as RawBy,
  Change as RawChange,
  Command as RawCommand,
  DissolveState as RawDissolveState,
  Followees as RawFollowees,
  KnownNeuron as RawKnownNeuron,
  ListNeuronsResponse as RawListNeuronsResponse,
  ListProposalInfoResponse as RawListProposalInfoResponse,
  ManageNeuronResponse as RawManageNeuronResponse,
  Neuron as RawNeuron,
  NeuronId as RawNeuronId,
  NeuronIdOrSubaccount as RawNeuronIdOrSubaccount,
  NeuronInfo as RawNeuronInfo,
  NodeProvider as RawNodeProvider,
  Operation as RawOperation,
  Proposal as RawProposal,
  ProposalInfo as RawProposalInfo,
  RewardMode as RawRewardMode,
  Tally as RawTally,
} from "./rawService";

