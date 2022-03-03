import { Principal } from "@dfinity/principal";
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
  GovernanceError as RawGovernanceError,
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
} from "../../../candid/governanceTypes.d";
import { GOVERNANCE_CANISTER_ID } from "../../constants/canister_ids";
import { AccountIdentifier, E8s, NeuronId } from "../../types/common";
import {
  Action,
  Ballot,
  BallotInfo,
  By,
  Change,
  Command,
  DisburseToNeuronResponse,
  DissolveState,
  Followees,
  GovernanceError,
  KnownNeuron,
  ListProposalsResponse,
  MakeProposalResponse,
  Neuron,
  NeuronIdOrSubaccount,
  NeuronInfo,
  NodeProvider,
  Operation,
  Proposal,
  ProposalInfo,
  RewardMode,
  Tally,
  UnsupportedValueError,
} from "../../types/governance_converters";
import { Option } from "../../types/option";
import {
  accountIdentifierFromBytes,
  arrayOfNumberToArrayBuffer,
  arrayOfNumberToUint8Array,
  principalToAccountIdentifier,
} from "../../utils/converter.utils";
// Protobuf is not supported yet:
// import { ManageNeuronResponse as PbManageNeuronResponse } from "../../proto/governance_pb";
import { convertNnsFunctionPayload, getNnsFunctionName } from "./payloads";

const toNeuronInfo = ({
  neuronId,
  principalString,
  neuronInfo,
  rawNeuron,
}: {
  neuronId: bigint;
  principalString: string;
  neuronInfo: RawNeuronInfo;
  rawNeuron?: RawNeuron;
}): NeuronInfo => {
  const fullNeuron = rawNeuron
    ? toNeuron({ neuron: rawNeuron, principalString })
    : undefined;
  return {
    neuronId: neuronId,
    dissolveDelaySeconds: neuronInfo.dissolve_delay_seconds,
    recentBallots: neuronInfo.recent_ballots.map(toBallotInfo),
    createdTimestampSeconds: neuronInfo.created_timestamp_seconds,
    state: neuronInfo.state,
    joinedCommunityFundTimestampSeconds: neuronInfo
      .joined_community_fund_timestamp_seconds.length
      ? neuronInfo.joined_community_fund_timestamp_seconds[0]
      : undefined,
    retrievedAtTimestampSeconds: neuronInfo.retrieved_at_timestamp_seconds,
    votingPower: neuronInfo.voting_power,
    ageSeconds: neuronInfo.age_seconds,
    fullNeuron: fullNeuron,
  };
};

const toNeuron = ({
  neuron,
  principalString,
}: {
  neuron: RawNeuron;
  principalString: string;
}): Neuron => ({
  id: neuron.id.length ? toNeuronId(neuron.id[0]) : undefined,
  isCurrentUserController: neuron.controller.length
    ? neuron.controller[0].toString() === principalString
    : undefined,
  controller: neuron.controller.length
    ? neuron.controller[0].toString()
    : undefined,
  recentBallots: neuron.recent_ballots.map(toBallotInfo),
  kycVerified: neuron.kyc_verified,
  notForProfit: neuron.not_for_profit,
  cachedNeuronStake: neuron.cached_neuron_stake_e8s,
  createdTimestampSeconds: neuron.created_timestamp_seconds,
  maturityE8sEquivalent: neuron.maturity_e8s_equivalent,
  agingSinceTimestampSeconds: neuron.aging_since_timestamp_seconds,
  neuronFees: neuron.neuron_fees_e8s,
  hotKeys: neuron.hot_keys.map((p) => p.toString()),
  accountIdentifier: principalToAccountIdentifier(
    GOVERNANCE_CANISTER_ID,
    arrayOfNumberToUint8Array(neuron.account)
  ),
  joinedCommunityFundTimestampSeconds: neuron
    .joined_community_fund_timestamp_seconds.length
    ? neuron.joined_community_fund_timestamp_seconds[0]
    : undefined,
  dissolveState: neuron.dissolve_state.length
    ? toDissolveState(neuron.dissolve_state[0])
    : undefined,
  followees: neuron.followees.map(([topic, followees]) =>
    toFollowees({ topic, followees })
  ),
});

const toBallotInfo = ({ vote, proposal_id }: RawBallotInfo): BallotInfo => ({
  vote,
  proposalId: proposal_id.length ? toNeuronId(proposal_id[0]) : undefined,
});

const toDissolveState = (dissolveState: RawDissolveState): DissolveState => {
  if ("DissolveDelaySeconds" in dissolveState) {
    return {
      DissolveDelaySeconds: dissolveState.DissolveDelaySeconds,
    };
  } else {
    return {
      WhenDissolvedTimestampSeconds:
        dissolveState.WhenDissolvedTimestampSeconds,
    };
  }
};

const toFollowees = ({
  topic,
  followees,
}: {
  topic: number;
  followees: RawFollowees;
}): Followees => ({
  topic,
  followees: followees.followees.map(toNeuronId),
});

const toNeuronId = ({ id }: RawNeuronId): NeuronId => id;

const toNeuronIdOrSubaccount = (
  neuronIdOrSubaccount: RawNeuronIdOrSubaccount
): NeuronIdOrSubaccount => {
  if ("NeuronId" in neuronIdOrSubaccount) {
    return { NeuronId: neuronIdOrSubaccount.NeuronId.id };
  }
  if ("Subaccount" in neuronIdOrSubaccount) {
    return { Subaccount: neuronIdOrSubaccount.Subaccount };
  }
  throw new UnsupportedValueError(neuronIdOrSubaccount);
};

const toBallot = ({
  neuronId,
  ballot,
}: {
  neuronId: bigint;
  ballot: RawBallot;
}): Ballot => {
  const { vote, voting_power: votingPower } = ballot;

  return {
    neuronId,
    vote,
    votingPower,
  };
};

const toProposal = ({
  title,
  url,
  action,
  summary,
}: RawProposal): Proposal => ({
  title: title.length ? title[0] : undefined,
  url,
  action: action.length ? toAction(action[0]) : undefined,
  summary,
});

const toAction = (action: RawAction): Action => {
  if ("ExecuteNnsFunction" in action) {
    const executeNnsFunction = action.ExecuteNnsFunction;
    const payloadBytes = arrayOfNumberToArrayBuffer(executeNnsFunction.payload);
    const payload = payloadBytes.byteLength
      ? convertNnsFunctionPayload(executeNnsFunction.nns_function, payloadBytes)
      : undefined;

    return {
      ExecuteNnsFunction: {
        nnsFunctionId: executeNnsFunction.nns_function,
        nnsFunctionName: getNnsFunctionName(executeNnsFunction.nns_function),
        payload,
        payloadBytes,
      },
    };
  }
  if ("ManageNeuron" in action) {
    const manageNeuron = action.ManageNeuron;
    return {
      ManageNeuron: {
        id: manageNeuron.id.length ? toNeuronId(manageNeuron.id[0]) : undefined,
        command: manageNeuron.command.length
          ? toCommand(manageNeuron.command[0])
          : undefined,
        neuronIdOrSubaccount: manageNeuron.neuron_id_or_subaccount.length
          ? toNeuronIdOrSubaccount(manageNeuron.neuron_id_or_subaccount[0])
          : undefined,
      },
    };
  }
  if ("ApproveGenesisKyc" in action) {
    const approveKyc = action.ApproveGenesisKyc;
    return {
      ApproveGenesisKyc: {
        principals: approveKyc.principals.map((p) => p.toString()),
      },
    };
  }
  if ("ManageNetworkEconomics" in action) {
    const networkEconomics = action.ManageNetworkEconomics;
    return {
      ManageNetworkEconomics: {
        neuronMinimumStake: networkEconomics.neuron_minimum_stake_e8s,
        maxProposalsToKeepPerTopic:
          networkEconomics.max_proposals_to_keep_per_topic,
        neuronManagementFeePerProposal:
          networkEconomics.neuron_management_fee_per_proposal_e8s,
        rejectCost: networkEconomics.reject_cost_e8s,
        transactionFee: networkEconomics.transaction_fee_e8s,
        neuronSpawnDissolveDelaySeconds:
          networkEconomics.neuron_spawn_dissolve_delay_seconds,
        minimumIcpXdrRate: networkEconomics.minimum_icp_xdr_rate,
        maximumNodeProviderRewards:
          networkEconomics.maximum_node_provider_rewards_e8s,
      },
    };
  }
  if ("RewardNodeProvider" in action) {
    const rewardNodeProvider = action.RewardNodeProvider;
    return {
      RewardNodeProvider: {
        nodeProvider: rewardNodeProvider.node_provider.length
          ? toNodeProvider(rewardNodeProvider.node_provider[0])
          : undefined,
        amountE8s: rewardNodeProvider.amount_e8s,
        rewardMode: rewardNodeProvider.reward_mode.length
          ? toRewardMode(rewardNodeProvider.reward_mode[0])
          : undefined,
      },
    };
  }
  if ("RewardNodeProviders" in action) {
    const rewardNodeProviders = action.RewardNodeProviders;
    return {
      RewardNodeProviders: {
        rewards: rewardNodeProviders.rewards.map((r) => ({
          nodeProvider: r.node_provider.length
            ? toNodeProvider(r.node_provider[0])
            : undefined,
          amountE8s: r.amount_e8s,
          rewardMode: r.reward_mode.length
            ? toRewardMode(r.reward_mode[0])
            : undefined,
        })),
      },
    };
  }
  if ("AddOrRemoveNodeProvider" in action) {
    const addOrRemoveNodeProvider = action.AddOrRemoveNodeProvider;
    return {
      AddOrRemoveNodeProvider: {
        change: addOrRemoveNodeProvider.change.length
          ? toChange(addOrRemoveNodeProvider.change[0])
          : undefined,
      },
    };
  }
  if ("Motion" in action) {
    const motion = action.Motion;
    return {
      Motion: {
        motionText: motion.motion_text,
      },
    };
  }
  if ("SetDefaultFollowees" in action) {
    const setDefaultFollowees = action.SetDefaultFollowees;
    return {
      SetDefaultFollowees: {
        defaultFollowees: setDefaultFollowees.default_followees.map(
          ([topic, followees]) => toFollowees({ topic, followees })
        ),
      },
    };
  }
  if ("RegisterKnownNeuron" in action) {
    const knownNeuron = action.RegisterKnownNeuron;
    return {
      RegisterKnownNeuron: toKnownNeuron(knownNeuron),
    };
  }

  throw new UnsupportedValueError(action);
};

const toTally = (tally: RawTally): Tally => {
  return {
    no: tally.no,
    yes: tally.yes,
    total: tally.total,
    timestampSeconds: tally.timestamp_seconds,
  };
};

const toCommand = (command: RawCommand): Command => {
  if ("Spawn" in command) {
    const spawn = command.Spawn;
    return {
      Spawn: {
        newController: spawn.new_controller.length
          ? spawn.new_controller[0].toString()
          : undefined,
      },
    };
  }
  if ("Split" in command) {
    const split = command.Split;
    return {
      Split: {
        amount: split.amount_e8s,
      },
    };
  }
  if ("Follow" in command) {
    const follow = command.Follow;
    return {
      Follow: {
        topic: follow.topic,
        followees: follow.followees.map(toNeuronId),
      },
    };
  }
  if ("ClaimOrRefresh" in command) {
    const claimOrRefresh = command.ClaimOrRefresh;
    return {
      ClaimOrRefresh: {
        by: claimOrRefresh.by.length
          ? toClaimOrRefreshBy(claimOrRefresh.by[0])
          : undefined,
      },
    };
  }
  if ("Configure" in command) {
    const configure = command.Configure;
    return {
      Configure: {
        operation: configure.operation.length
          ? toOperation(configure.operation[0])
          : undefined,
      },
    };
  }
  if ("RegisterVote" in command) {
    const registerVote = command.RegisterVote;
    return {
      RegisterVote: {
        vote: registerVote.vote,
        proposal: registerVote.proposal.length
          ? toNeuronId(registerVote.proposal[0])
          : undefined,
      },
    };
  }
  if ("DisburseToNeuron" in command) {
    const disburseToNeuron = command.DisburseToNeuron;
    return {
      DisburseToNeuron: {
        dissolveDelaySeconds: disburseToNeuron.dissolve_delay_seconds,
        kycVerified: disburseToNeuron.kyc_verified,
        amount: disburseToNeuron.amount_e8s,
        newController: disburseToNeuron.new_controller.length
          ? disburseToNeuron.new_controller[0].toString()
          : undefined,
        nonce: disburseToNeuron.nonce,
      },
    };
  }
  if ("MergeMaturity" in command) {
    const mergeMaturity = command.MergeMaturity;
    return {
      MergeMaturity: {
        percentageToMerge: mergeMaturity.percentage_to_merge,
      },
    };
  }
  if ("MakeProposal" in command) {
    const makeProposal = command.MakeProposal;
    return {
      MakeProposal: {
        title: makeProposal.title.length ? makeProposal.title[0] : undefined,
        url: makeProposal.url,
        action: makeProposal.action.length
          ? toAction(makeProposal.action[0])
          : undefined,
        summary: makeProposal.summary,
      },
    };
  }
  if ("Disburse" in command) {
    const disburse = command.Disburse;
    return {
      Disburse: {
        toAccountId: disburse.to_account.length
          ? toAccountIdentifier(disburse.to_account[0])
          : undefined,
        amount: disburse.amount.length
          ? toAmount(disburse.amount[0])
          : undefined,
      },
    };
  }
  if ("Merge" in command) {
    const merge = command.Merge;
    return {
      Merge: {
        sourceNeuronId: merge.source_neuron_id.length
          ? merge.source_neuron_id[0].id
          : undefined,
      },
    };
  }
  throw new UnsupportedValueError(command);
};

const toOperation = (operation: RawOperation): Operation => {
  if ("RemoveHotKey" in operation) {
    const removeHotKey = operation.RemoveHotKey;
    return {
      RemoveHotKey: {
        hotKeyToRemove: removeHotKey.hot_key_to_remove.length
          ? removeHotKey.hot_key_to_remove[0].toString()
          : undefined,
      },
    };
  }
  if ("AddHotKey" in operation) {
    const addHotKey = operation.AddHotKey;
    return {
      AddHotKey: {
        newHotKey: addHotKey.new_hot_key.length
          ? addHotKey.new_hot_key[0].toString()
          : undefined,
      },
    };
  }
  if ("StopDissolving" in operation) {
    return {
      StopDissolving: {},
    };
  }
  if ("StartDissolving" in operation) {
    return {
      StartDissolving: {},
    };
  }
  if ("IncreaseDissolveDelay" in operation) {
    const increaseDissolveDelay = operation.IncreaseDissolveDelay;
    return {
      IncreaseDissolveDelay: {
        additionalDissolveDelaySeconds:
          increaseDissolveDelay.additional_dissolve_delay_seconds,
      },
    };
  }
  if ("JoinCommunityFund" in operation) {
    return operation;
  }
  if ("SetDissolveTimestamp" in operation) {
    const setDissolveTimestamp = operation.SetDissolveTimestamp;
    return {
      SetDissolveTimestamp: {
        dissolveTimestampSeconds:
          setDissolveTimestamp.dissolve_timestamp_seconds,
      },
    };
  }
  throw new UnsupportedValueError(operation);
};

const toChange = (change: RawChange): Change => {
  if ("ToRemove" in change) {
    return {
      ToRemove: toNodeProvider(change.ToRemove),
    };
  }
  if ("ToAdd" in change) {
    return {
      ToAdd: toNodeProvider(change.ToAdd),
    };
  }
  throw new UnsupportedValueError(change);
};

const toNodeProvider = (nodeProvider: RawNodeProvider): NodeProvider => {
  return {
    id: nodeProvider.id.length ? nodeProvider.id[0].toString() : undefined,
    rewardAccount: nodeProvider.reward_account.length
      ? toAccountIdentifier(nodeProvider.reward_account[0])
      : undefined,
  };
};

const toAmount = (amount: RawAmount): E8s => {
  return amount.e8s;
};

const toAccountIdentifier = (
  accountIdentifier: RawAccountIdentifier
): AccountIdentifier =>
  accountIdentifierFromBytes(new Uint8Array(accountIdentifier.hash));

const toRewardMode = (rewardMode: RawRewardMode): RewardMode => {
  if ("RewardToNeuron" in rewardMode) {
    return {
      RewardToNeuron: {
        dissolveDelaySeconds: rewardMode.RewardToNeuron.dissolve_delay_seconds,
      },
    };
  } else if ("RewardToAccount" in rewardMode) {
    return {
      RewardToAccount: {
        toAccount:
          rewardMode.RewardToAccount.to_account != undefined &&
          rewardMode.RewardToAccount.to_account.length
            ? toAccountIdentifier(rewardMode.RewardToAccount.to_account[0])
            : undefined,
      },
    };
  } else {
    // Ensures all cases are covered at compile-time.
    throw new UnsupportedValueError(rewardMode);
  }
};

const toClaimOrRefreshBy = (by: RawBy): By => {
  if ("NeuronIdOrSubaccount" in by) {
    return {
      NeuronIdOrSubaccount: {},
    };
  } else if ("Memo" in by) {
    return {
      Memo: by.Memo,
    };
  } else if ("MemoAndController" in by) {
    return {
      MemoAndController: {
        memo: by.MemoAndController.memo,
        controller: by.MemoAndController.controller.length
          ? by.MemoAndController.controller[0]
          : undefined,
      },
    };
  } else {
    // Ensures all cases are covered at compile-time.
    throw new UnsupportedValueError(by);
  }
};

// prettier-ignore
// eslint-disable-next-line
const throwUnrecognisedTypeError = ({ name, value, }: { name: string; value: any; }): Error => {
  return new Error(`Unrecognised ${name} type - ${JSON.stringify(value)}`);
};

export const toProposalInfo = (
  proposalInfo: RawProposalInfo
): ProposalInfo => ({
  id: proposalInfo.id.length ? toNeuronId(proposalInfo.id[0]) : undefined,
  ballots: proposalInfo.ballots.map((b) =>
    toBallot({ neuronId: b[0], ballot: b[1] })
  ),
  rejectCost: proposalInfo.reject_cost_e8s,
  proposalTimestampSeconds: proposalInfo.proposal_timestamp_seconds,
  rewardEventRound: proposalInfo.reward_event_round,
  failedTimestampSeconds: proposalInfo.failed_timestamp_seconds,
  decidedTimestampSeconds: proposalInfo.decided_timestamp_seconds,
  proposal: proposalInfo.proposal.length
    ? toProposal(proposalInfo.proposal[0])
    : undefined,
  proposer: proposalInfo.proposer.length
    ? toNeuronId(proposalInfo.proposer[0])
    : undefined,
  latestTally: proposalInfo.latest_tally.length
    ? toTally(proposalInfo.latest_tally[0])
    : undefined,
  executedTimestampSeconds: proposalInfo.executed_timestamp_seconds,
  topic: proposalInfo.topic,
  status: proposalInfo.status,
  rewardStatus: proposalInfo.reward_status,
});

export const toArrayOfNeuronInfo = (
  { neuron_infos, full_neurons }: RawListNeuronsResponse,
  principal: Principal
): Array<NeuronInfo> =>
  neuron_infos.map(([id, neuronInfo]) =>
    toNeuronInfo({
      neuronId: id,
      principalString: principal.toString(),
      neuronInfo,
      rawNeuron: full_neurons.find(
        (neuron) => neuron.id.length && neuron.id[0].id === id
      ),
    })
  );

export const toListProposalsResponse = ({
  proposal_info,
}: RawListProposalInfoResponse): ListProposalsResponse => ({
  proposals: proposal_info.map(toProposalInfo),
});

export const toKnownNeuron = ({
  id,
  known_neuron_data,
}: RawKnownNeuron): KnownNeuron => {
  return {
    id: id[0]?.id ?? BigInt(0),
    name: known_neuron_data[0]?.name ?? "",
    description: known_neuron_data[0]?.description[0] ?? "",
  };
};

/* Protobuf is not supported yet.
export const toSpawnResponse = (
  response: PbManageNeuronResponse
): SpawnResponse => {
  const createdNeuronId = response.getSpawn()?.getCreatedNeuronId();

  if (!createdNeuronId) {
    throw throwUnrecognisedTypeError("response", response);
  }

  return {
    createdNeuronId: BigInt(createdNeuronId.getId()),
  };
};
*/

export const toSplitResponse = (
  response: RawManageNeuronResponse
): NeuronId => {
  const command = response.command.length ? response.command[0] : undefined;

  if (command && "Split" in command) {
    const createdNeuronId = command.Split.created_neuron_id;
    if (createdNeuronId.length) {
      return createdNeuronId[0].id;
    }
  }
  throw throwUnrecognisedTypeError({ name: "response", value: response });
};

/* Protobuf is not supported yet.
export const toDisburseResponse = (
  response: PbManageNeuronResponse
): DisburseResponse => {
  const blockHeight = response.getDisburse()?.getTransferBlockHeight();

  if (!blockHeight) {
    throw throwUnrecognisedTypeError("response", response);
  }

  return {
    transferBlockHeight: BigInt(blockHeight),
  };
};
*/

export const toDisburseToNeuronResult = (
  response: RawManageNeuronResponse
): DisburseToNeuronResponse => {
  const command = response.command;
  if (
    command.length &&
    "Spawn" in command[0] &&
    command[0].Spawn.created_neuron_id.length
  ) {
    return {
      createdNeuronId: command[0].Spawn.created_neuron_id[0].id,
    };
  }
  throw throwUnrecognisedTypeError({ name: "response", value: response });
};

export const toClaimOrRefreshNeuronResponse = (
  response: RawManageNeuronResponse
): Option<NeuronId> => {
  const command = response.command;
  if (command.length && "ClaimOrRefresh" in command[0]) {
    return command[0].ClaimOrRefresh.refreshed_neuron_id.length
      ? command[0].ClaimOrRefresh.refreshed_neuron_id[0].id
      : undefined;
  }
  throw throwUnrecognisedTypeError({ name: "response", value: response });
};

/* Protobuf is not supported yet.
export const toMergeMaturityResponse = (
  response: PbManageNeuronResponse
): MergeMaturityResponse => {
  const error = response.getError();
  if (error) {
    throw error.getErrorMessage();
  }

  const mergeMaturityResponse = response.getMergeMaturity();
  if (mergeMaturityResponse) {
    return {
      mergedMaturityE8s: BigInt(mergeMaturityResponse.getMergedMaturityE8s()),
      newStakeE8s: BigInt(mergeMaturityResponse.getNewStakeE8s()),
    };
  }

  throw throwUnrecognisedTypeError("response", response);
};
*/

export const toMakeProposalResponse = (
  response: RawManageNeuronResponse
): MakeProposalResponse => {
  const command = response.command;
  if (
    command.length &&
    "MakeProposal" in command[0] &&
    command[0].MakeProposal.proposal_id.length
  ) {
    return {
      proposalId: command[0].MakeProposal.proposal_id[0].id,
    };
  }
  throw throwUnrecognisedTypeError({ name: "response", value: response });
};

export const toGovernanceError = (
  err: RawGovernanceError
): GovernanceError => ({
  errorMessage: err.error_message,
  errorType: err.error_type,
});
