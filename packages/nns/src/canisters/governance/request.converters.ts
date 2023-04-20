import { Principal } from "@dfinity/principal";
import { arrayBufferToUint8Array, toNullable } from "@dfinity/utils";
import type {
  AccountIdentifier as RawAccountIdentifier,
  Action as RawAction,
  Amount,
  By as RawBy,
  Change as RawChange,
  Command as RawCommand,
  Followees as RawFollowees,
  ListNeurons as RawListNeurons,
  ListProposalInfo,
  ManageNeuron as RawManageNeuron,
  NeuronId as RawNeuronId,
  NeuronIdOrSubaccount as RawNeuronIdOrSubaccount,
  NodeProvider as RawNodeProvider,
  Operation as RawOperation,
  RewardMode as RawRewardMode,
} from "../../../candid/governance";
import type { AccountIdentifier as AccountIdentifierClass } from "../../account_identifier";
import type { Vote } from "../../enums/governance.enums";
import { UnsupportedValueError } from "../../errors/governance.errors";
import type { AccountIdentifier, E8s, NeuronId } from "../../types/common";
import type {
  Action,
  By,
  Change,
  ClaimOrRefreshNeuronRequest,
  Command,
  DisburseToNeuronRequest,
  FollowRequest,
  ListProposalsRequest,
  MakeProposalRequest,
  ManageNeuron,
  NeuronIdOrSubaccount,
  NodeProvider,
  Operation,
  ProposalId,
  RewardMode,
} from "../../types/governance_converters";
import { accountIdentifierToBytes } from "../../utils/account_identifier.utils";

const fromProposalId = (proposalId: ProposalId): RawNeuronId => ({
  id: proposalId,
});

const fromNeuronId = (neuronId: NeuronId): RawNeuronId => ({
  id: neuronId,
});

const fromFollowees = (followees: Array<NeuronId>): RawFollowees => ({
  followees: followees.map(fromNeuronId),
});

const fromNeuronIdOrSubaccount = (
  neuronIdOrSubaccount: NeuronIdOrSubaccount
): RawNeuronIdOrSubaccount => {
  if ("NeuronId" in neuronIdOrSubaccount) {
    return { NeuronId: { id: neuronIdOrSubaccount.NeuronId } };
  }
  if ("Subaccount" in neuronIdOrSubaccount) {
    return { Subaccount: Uint8Array.from(neuronIdOrSubaccount.Subaccount) };
  }
  throw new UnsupportedValueError(neuronIdOrSubaccount);
};

const fromAction = (action: Action): RawAction => {
  if ("ExecuteNnsFunction" in action) {
    const executeNnsFunction = action.ExecuteNnsFunction;

    if (executeNnsFunction.payloadBytes === undefined) {
      throw new Error("payloadBytes not found");
    }

    return {
      ExecuteNnsFunction: {
        nns_function: executeNnsFunction.nnsFunctionId,
        payload: arrayBufferToUint8Array(executeNnsFunction.payloadBytes),
      },
    };
  }
  if ("ManageNeuron" in action) {
    const manageNeuron = action.ManageNeuron;
    return {
      ManageNeuron: fromManageNeuron(manageNeuron),
    };
  }
  if ("ApproveGenesisKyc" in action) {
    const approveGenesisKyc = action.ApproveGenesisKyc;
    return {
      ApproveGenesisKyc: {
        principals: approveGenesisKyc.principals.map(Principal.fromText),
      },
    };
  }
  if ("ManageNetworkEconomics" in action) {
    const networkEconomics = action.ManageNetworkEconomics;
    return {
      ManageNetworkEconomics: {
        neuron_minimum_stake_e8s: networkEconomics.neuronMinimumStake,
        max_proposals_to_keep_per_topic:
          networkEconomics.maxProposalsToKeepPerTopic,
        neuron_management_fee_per_proposal_e8s:
          networkEconomics.neuronManagementFeePerProposal,
        reject_cost_e8s: networkEconomics.rejectCost,
        transaction_fee_e8s: networkEconomics.transactionFee,
        neuron_spawn_dissolve_delay_seconds:
          networkEconomics.neuronSpawnDissolveDelaySeconds,
        minimum_icp_xdr_rate: networkEconomics.minimumIcpXdrRate,
        maximum_node_provider_rewards_e8s:
          networkEconomics.maximumNodeProviderRewards,
      },
    };
  }
  if ("RewardNodeProvider" in action) {
    const rewardNodeProvider = action.RewardNodeProvider;
    return {
      RewardNodeProvider: {
        node_provider: rewardNodeProvider.nodeProvider
          ? [fromNodeProvider(rewardNodeProvider.nodeProvider)]
          : [],
        amount_e8s: rewardNodeProvider.amountE8s,
        reward_mode:
          rewardNodeProvider.rewardMode != null
            ? [fromRewardMode(rewardNodeProvider.rewardMode)]
            : [],
      },
    };
  }
  if ("RewardNodeProviders" in action) {
    const rewardNodeProviders = action.RewardNodeProviders;
    return {
      RewardNodeProviders: {
        use_registry_derived_rewards:
          rewardNodeProviders.useRegistryDerivedRewards === undefined
            ? []
            : [rewardNodeProviders.useRegistryDerivedRewards],
        rewards: rewardNodeProviders.rewards.map((r) => ({
          node_provider: r.nodeProvider
            ? [fromNodeProvider(r.nodeProvider)]
            : [],
          amount_e8s: r.amountE8s,
          reward_mode:
            r.rewardMode != null ? [fromRewardMode(r.rewardMode)] : [],
        })),
      },
    };
  }
  if ("AddOrRemoveNodeProvider" in action) {
    const addOrRemoveNodeProvider = action.AddOrRemoveNodeProvider;
    return {
      AddOrRemoveNodeProvider: {
        change: addOrRemoveNodeProvider.change
          ? [fromChange(addOrRemoveNodeProvider.change)]
          : [],
      },
    };
  }
  if ("Motion" in action) {
    const motion = action.Motion;
    return {
      Motion: {
        motion_text: motion.motionText,
      },
    };
  }

  if ("SetDefaultFollowees" in action) {
    const setDefaultFollowees = action.SetDefaultFollowees;
    return {
      SetDefaultFollowees: {
        default_followees: setDefaultFollowees.defaultFollowees.map((f) => [
          f.topic as number,
          fromFollowees(f.followees),
        ]),
      },
    };
  }

  if ("RegisterKnownNeuron" in action) {
    const knownNeuron = action.RegisterKnownNeuron;
    return {
      RegisterKnownNeuron: {
        id: [{ id: knownNeuron.id }],
        known_neuron_data: [
          {
            name: knownNeuron.name,
            description:
              knownNeuron.description !== undefined
                ? [knownNeuron.description]
                : [],
          },
        ],
      },
    };
  }

  if ("SetSnsTokenSwapOpenTimeWindow" in action) {
    const { request, swapCanisterId } = action.SetSnsTokenSwapOpenTimeWindow;

    return {
      SetSnsTokenSwapOpenTimeWindow: {
        request:
          request === undefined
            ? []
            : [
                {
                  open_time_window:
                    request.openTimeWindow === undefined
                      ? []
                      : [
                          {
                            start_timestamp_seconds:
                              request.openTimeWindow.startTimestampSeconds,
                            end_timestamp_seconds:
                              request.openTimeWindow.endTimestampSeconds,
                          },
                        ],
                },
              ],

        swap_canister_id:
          swapCanisterId === undefined
            ? []
            : [Principal.fromText(swapCanisterId)],
      },
    };
  }

  if ("OpenSnsTokenSwap" in action) {
    const { communityFundInvestmentE8s, targetSwapCanisterId, params } =
      action.OpenSnsTokenSwap;

    return {
      OpenSnsTokenSwap: {
        community_fund_investment_e8s: toNullable(communityFundInvestmentE8s),
        target_swap_canister_id: toNullable(targetSwapCanisterId),
        params:
          params === undefined
            ? []
            : [
                {
                  min_participant_icp_e8s: params.minParticipantIcpE8s,
                  max_icp_e8s: params.maxIcpE8s,
                  swap_due_timestamp_seconds: params.swapDueTimestampSeconds,
                  min_participants: params.minParticipants,
                  sns_token_e8s: params.snsTokenE8s,
                  max_participant_icp_e8s: params.maxParticipantIcpE8s,
                  min_icp_e8s: params.minIcpE8s,
                  sale_delay_seconds: toNullable(params.saleDelaySeconds),
                  neuron_basket_construction_parameters: toNullable(
                    params.neuronBasketConstructionParameters
                  ),
                },
              ],
      },
    };
  }

  if ("CreateServiceNervousSystem" in action) {
    // TODO: Convert from CreateServiceNervousSystem to RawCreateServiceNervousSystem
    return action;
  }

  // If there's a missing action, this line will cause a compiler error.
  throw new UnsupportedValueError(action);
};

const fromCommand = (command: Command): RawCommand => {
  if ("Split" in command) {
    const split = command.Split;
    return {
      Split: {
        amount_e8s: split.amount,
      },
    };
  }
  if ("Follow" in command) {
    const follow = command.Follow;
    return {
      Follow: {
        topic: follow.topic,
        followees: follow.followees.map(fromNeuronId),
      },
    };
  }
  if ("ClaimOrRefresh" in command) {
    const claimOrRefresh = command.ClaimOrRefresh;
    return {
      ClaimOrRefresh: {
        by: claimOrRefresh.by ? [fromClaimOrRefreshBy(claimOrRefresh.by)] : [],
      },
    };
  }
  if ("Configure" in command) {
    const configure = command.Configure;
    return {
      Configure: {
        operation: configure.operation
          ? [fromOperation(configure.operation)]
          : [],
      },
    };
  }
  if ("RegisterVote" in command) {
    const registerVote = command.RegisterVote;
    return {
      RegisterVote: {
        vote: registerVote.vote,
        proposal: registerVote.proposal
          ? [fromProposalId(registerVote.proposal)]
          : [],
      },
    };
  }
  if ("DisburseToNeuron" in command) {
    const disburseToNeuron = command.DisburseToNeuron;
    return {
      DisburseToNeuron: {
        dissolve_delay_seconds: disburseToNeuron.dissolveDelaySeconds,
        kyc_verified: disburseToNeuron.kycVerified,
        amount_e8s: disburseToNeuron.amount,
        new_controller: disburseToNeuron.newController
          ? [Principal.fromText(disburseToNeuron.newController)]
          : [],
        nonce: disburseToNeuron.nonce,
      },
    };
  }
  if ("MergeMaturity" in command) {
    const mergeMaturity = command.MergeMaturity;
    return {
      MergeMaturity: {
        percentage_to_merge: mergeMaturity.percentageToMerge,
      },
    };
  }
  if ("StakeMaturity" in command) {
    const { percentageToStake } = command.StakeMaturity;
    return {
      StakeMaturity: {
        percentage_to_stake: toNullable(percentageToStake),
      },
    };
  }
  if ("MakeProposal" in command) {
    const makeProposal = command.MakeProposal;
    return {
      MakeProposal: {
        url: makeProposal.url,
        title: [],
        action: makeProposal.action ? [fromAction(makeProposal.action)] : [],
        summary: makeProposal.summary,
      },
    };
  }
  if ("Disburse" in command) {
    const disburse = command.Disburse;
    return {
      Disburse: {
        to_account: disburse.toAccountId
          ? [fromAccountIdentifier(disburse.toAccountId)]
          : [],
        amount: disburse.amount ? [fromAmount(disburse.amount)] : [],
      },
    };
  }
  if ("Spawn" in command) {
    const spawn = command.Spawn;
    return {
      Spawn: {
        percentage_to_spawn:
          spawn.percentageToSpawn === undefined
            ? []
            : [spawn.percentageToSpawn],
        new_controller: spawn.newController
          ? [Principal.fromText(spawn.newController)]
          : [],
        nonce: [],
      },
    };
  }
  if ("Merge" in command) {
    const merge = command.Merge;
    return {
      Merge: {
        source_neuron_id: merge.sourceNeuronId
          ? [{ id: merge.sourceNeuronId }]
          : [],
      },
    };
  }

  // If there's a missing command above, this line will cause a compiler error.
  throw new UnsupportedValueError(command);
};

const fromOperation = (operation: Operation): RawOperation => {
  if ("RemoveHotKey" in operation) {
    const removeHotKey = operation.RemoveHotKey;
    return {
      RemoveHotKey: {
        hot_key_to_remove:
          removeHotKey.hotKeyToRemove != null
            ? [Principal.fromText(removeHotKey.hotKeyToRemove)]
            : [],
      },
    };
  }
  if ("AddHotKey" in operation) {
    const addHotKey = operation.AddHotKey;
    return {
      AddHotKey: {
        new_hot_key: addHotKey.newHotKey
          ? [Principal.fromText(addHotKey.newHotKey)]
          : [],
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
        additional_dissolve_delay_seconds:
          increaseDissolveDelay.additionalDissolveDelaySeconds,
      },
    };
  }
  if ("JoinCommunityFund" in operation) {
    return operation;
  }
  if ("LeaveCommunityFund" in operation) {
    return operation;
  }
  if ("SetDissolveTimestamp" in operation) {
    const setDissolveTimestamp = operation.SetDissolveTimestamp;
    return {
      SetDissolveTimestamp: {
        dissolve_timestamp_seconds:
          setDissolveTimestamp.dissolveTimestampSeconds,
      },
    };
  }
  if ("ChangeAutoStakeMaturity" in operation) {
    const { requestedSettingForAutoStakeMaturity } =
      operation.ChangeAutoStakeMaturity;
    return {
      ChangeAutoStakeMaturity: {
        requested_setting_for_auto_stake_maturity:
          requestedSettingForAutoStakeMaturity,
      },
    };
  }
  // If there's a missing operation above, this line will cause a compiler error.
  throw new UnsupportedValueError(operation);
};

const fromChange = (change: Change): RawChange => {
  if ("ToRemove" in change) {
    return {
      ToRemove: fromNodeProvider(change.ToRemove),
    };
  }
  if ("ToAdd" in change) {
    return {
      ToAdd: fromNodeProvider(change.ToAdd),
    };
  }
  // If there's a missing change above, this line will cause a compiler error.
  throw new UnsupportedValueError(change);
};

const fromNodeProvider = (nodeProvider: NodeProvider): RawNodeProvider => {
  return {
    id: nodeProvider.id != null ? [Principal.fromText(nodeProvider.id)] : [],
    reward_account:
      nodeProvider.rewardAccount != null
        ? [fromAccountIdentifier(nodeProvider.rewardAccount)]
        : [],
  };
};

const fromAmount = (amount: E8s): Amount => ({
  e8s: amount,
});

const fromAccountIdentifier = (
  accountIdentifier: AccountIdentifier
): RawAccountIdentifier => ({
  hash: accountIdentifierToBytes(accountIdentifier),
});

const fromRewardMode = (rewardMode: RewardMode): RawRewardMode => {
  if ("RewardToNeuron" in rewardMode) {
    return {
      RewardToNeuron: {
        dissolve_delay_seconds: rewardMode.RewardToNeuron.dissolveDelaySeconds,
      },
    };
  } else if ("RewardToAccount" in rewardMode) {
    return {
      RewardToAccount: {
        to_account:
          rewardMode.RewardToAccount.toAccount != null
            ? [fromAccountIdentifier(rewardMode.RewardToAccount.toAccount)]
            : [],
      },
    };
  } else {
    // If there's a missing rewardMode above, this line will cause a compiler error.
    throw new UnsupportedValueError(rewardMode);
  }
};

const fromClaimOrRefreshBy = (by: By): RawBy => {
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
        controller: by.MemoAndController.controller
          ? [by.MemoAndController.controller]
          : [],
      },
    };
  } else {
    // Ensures all cases are covered at compile-time.
    throw new UnsupportedValueError(by);
  }
};

export const fromListNeurons = (neuronIds?: NeuronId[]): RawListNeurons => ({
  neuron_ids: BigUint64Array.from(neuronIds ?? []),
  include_neurons_readable_by_caller: neuronIds ? false : true,
});

export const fromManageNeuron = ({
  id,
  command,
  neuronIdOrSubaccount,
}: ManageNeuron): RawManageNeuron => ({
  id: id ? [fromNeuronId(id)] : [],
  command: command ? [fromCommand(command)] : [],
  neuron_id_or_subaccount: neuronIdOrSubaccount
    ? [fromNeuronIdOrSubaccount(neuronIdOrSubaccount)]
    : [],
});

export const fromListProposalsRequest = ({
  includeRewardStatus,
  beforeProposal,
  excludeTopic,
  includeStatus,
  limit,
}: ListProposalsRequest): ListProposalInfo => {
  return {
    include_reward_status: Int32Array.from(includeRewardStatus),
    before_proposal: beforeProposal ? [fromProposalId(beforeProposal)] : [],
    limit: limit,
    exclude_topic: Int32Array.from(excludeTopic),
    include_status: Int32Array.from(includeStatus),
  };
};

/* Protobuf is not supported yet
export const fromAddHotKeyRequest = (request: AddHotKeyRequest): PbManageNeuron => {
  const hotkeyPrincipal = new PbPrincipalId();
  hotkeyPrincipal.setSerializedId(
    Principal.fromText(request.principal).toUint8Array()
  );

  const hotkey = new PbManageNeuron.AddHotKey();
  hotkey.setNewHotKey(hotkeyPrincipal);

  const configure = new PbManageNeuron.Configure();
  configure.setAddHotKey(hotkey);

  const result = new PbManageNeuron();
  result.setConfigure(configure);
  const neuronId = new PbNeuronId();
  neuronId.setId(request.neuronId.toString());
  result.setNeuronId(neuronId);

  return result;
};
*/

export const fromClaimOrRefreshNeuronRequest = (
  request: ClaimOrRefreshNeuronRequest
): RawManageNeuron => {
  const rawCommand: RawCommand = {
    ClaimOrRefresh: { by: [{ NeuronIdOrSubaccount: {} }] },
  };

  return {
    id: [],
    command: [rawCommand],
    neuron_id_or_subaccount: [{ NeuronId: { id: request.neuronId } }],
  };
};

export const toClaimOrRefreshRequest = ({
  memo,
  controller,
}: {
  memo: bigint;
  controller?: Principal;
}): RawManageNeuron => {
  const rawCommand: RawCommand = {
    ClaimOrRefresh: {
      by: [
        {
          MemoAndController: {
            controller: controller == undefined ? [] : [controller],
            memo,
          },
        },
      ],
    },
  };

  return {
    id: [],
    command: [rawCommand],
    neuron_id_or_subaccount: [],
  };
};

/* Protobuf is not supported yet
export const fromMergeMaturityRequest = (
  request: MergeMaturityRequest
): PbManageNeuron => {
  const mergeMaturity = new PbManageNeuron.MergeMaturity();
  mergeMaturity.setPercentageToMerge(request.percentageToMerge);
  const manageNeuron = new PbManageNeuron();
  const neuronId = new PbNeuronId();
  neuronId.setId(request.neuronId.toString());
  manageNeuron.setNeuronId(neuronId);
  manageNeuron.setMergeMaturity(mergeMaturity);
  return manageNeuron;
};
*/

/* Protobuf is not supported yet
export const fromRemoveHotKeyRequest = (
  request: RemoveHotKeyRequest
): PbManageNeuron => {
  const hotkeyPrincipal = new PbPrincipalId();
  hotkeyPrincipal.setSerializedId(
    Principal.fromText(request.principal).toUint8Array()
  );

  const command = new PbManageNeuron.RemoveHotKey();
  command.setHotKeyToRemove(hotkeyPrincipal);

  const configure = new PbManageNeuron.Configure();
  configure.setRemoveHotKey(command);

  const result = new PbManageNeuron();
  result.setConfigure(configure);

  const neuronId = new PbNeuronId();
  neuronId.setId(request.neuronId.toString());
  result.setNeuronId(neuronId);

  return result;
};

export const fromStartDissolvingRequest = (
  request: StartDissolvingRequest
): PbManageNeuron => {
  const configure = new PbManageNeuron.Configure();
  configure.setStartDissolving(new PbManageNeuron.StartDissolving());

  const result = new PbManageNeuron();
  result.setConfigure(configure);

  const neuronId = new PbNeuronId();
  neuronId.setId(request.neuronId.toString());
  result.setNeuronId(neuronId);

  return result;
};

export const fromStopDissolvingRequest = (
  request: StopDissolvingRequest
): PbManageNeuron => {
  const configure = new PbManageNeuron.Configure();
  configure.setStopDissolving(new PbManageNeuron.StopDissolving());

  const result = new PbManageNeuron();
  result.setConfigure(configure);

  const neuronId = new PbNeuronId();
  neuronId.setId(request.neuronId.toString());
  result.setNeuronId(neuronId);

  return result;
};

export const fromIncreaseDissolveDelayRequest = (
  request: IncreaseDissolveDelayRequest
): PbManageNeuron => {
  const command = new PbManageNeuron.IncreaseDissolveDelay();
  command.setAdditionalDissolveDelaySeconds(
    request.additionalDissolveDelaySeconds
  );

  const configure = new PbManageNeuron.Configure();
  configure.setIncreaseDissolveDelay(command);

  const result = new PbManageNeuron();
  result.setConfigure(configure);

  const neuronId = new PbNeuronId();
  neuronId.setId(request.neuronId.toString());
  result.setNeuronId(neuronId);

  return result;
};

export const fromFollowRequest = (request: FollowRequest): PbManageNeuron => {
  const follow = new PbManageNeuron.Follow();
  follow.setTopic(request.topic);
  follow.setFolloweesList(
    request.followees.map((followee) => {
      const neuronId = new PbNeuronId();
      neuronId.setId(followee.toString());
      return neuronId;
    })
  );
  const manageNeuron = new PbManageNeuron();
  const neuronId = new PbNeuronId();
  neuronId.setId(request.neuronId.toString());
  manageNeuron.setNeuronId(neuronId);
  manageNeuron.setFollow(follow);
  return manageNeuron;
};

export const fromRegisterVoteRequest = (
  request: RegisterVoteRequest
): PbManageNeuron => {
  const registerVote = new PbManageNeuron.RegisterVote();
  registerVote.setVote(request.vote);
  const proposal = new PbProposalId();
  proposal.setId(request.proposal.toString());
  registerVote.setProposal(proposal);
  const manageNeuron = new PbManageNeuron();
  const neuronId = new PbNeuronId();
  neuronId.setId(request.neuronId.toString());
  manageNeuron.setNeuronId(neuronId);
  manageNeuron.setRegisterVote(registerVote);
  return manageNeuron;
};

export const fromSpawnRequest = (request: SpawnRequest): PbManageNeuron => {
  const spawn = new PbManageNeuron.Spawn();

  if (request.newController) {
    const newController = new PbPrincipalId();
    newController.setSerializedId(
      Principal.fromText(request.newController).toUint8Array().slice(4)
    );
    spawn.setNewController(newController);
  }

  const manageNeuron = new PbManageNeuron();
  manageNeuron.setSpawn(spawn);

  const neuronId = new PbNeuronId();
  neuronId.setId(request.neuronId.toString());
  manageNeuron.setNeuronId(neuronId);
  return manageNeuron;
};
*/

export const toSplitRawRequest = ({
  neuronId,
  amount,
}: {
  neuronId: NeuronId;
  amount: E8s;
}): RawManageNeuron => {
  const rawCommand: RawCommand = {
    Split: {
      amount_e8s: amount,
    },
  };

  return {
    id: [],
    command: [rawCommand],
    neuron_id_or_subaccount: [{ NeuronId: { id: neuronId } }],
  };
};

/* Protobuf is not supported yet
export const fromDisburseRequest = (request: DisburseRequest): PbManageNeuron => {
  const disburse = new PbManageNeuron.Disburse();

  if (request.toAccountId) {
    const toAccountIdentifier = new PbAccountIdentifier();
    toAccountIdentifier.setHash(
      Uint8Array.from(Buffer.from(request.toAccountId, "hex"))
    );
    disburse.setToAccount(toAccountIdentifier);
  }

  if (request.amount != null) {
    const amount = new PbManageNeuron.Disburse.Amount();
    amount.setE8s(request.amount.toString());
    disburse.setAmount(amount);
  }

  const manageNeuron = new PbManageNeuron();
  manageNeuron.setDisburse(disburse);

  const neuronId = new PbNeuronId();
  neuronId.setId(request.neuronId.toString());
  manageNeuron.setNeuronId(neuronId);
  return manageNeuron;
};
*/

export const fromDisburseToNeuronRequest = (
  request: DisburseToNeuronRequest
): RawManageNeuron => {
  const rawCommand: RawCommand = {
    DisburseToNeuron: {
      dissolve_delay_seconds: request.dissolveDelaySeconds,
      kyc_verified: request.kycVerified,
      amount_e8s: request.amount,
      new_controller:
        request.newController != null
          ? [Principal.fromText(request.newController)]
          : [],
      nonce: request.nonce,
    },
  };

  return {
    id: [],
    command: [rawCommand],
    neuron_id_or_subaccount: [{ NeuronId: { id: request.neuronId } }],
  };
};

export const fromMakeProposalRequest = (
  request: MakeProposalRequest
): RawManageNeuron => {
  const rawCommand: RawCommand = {
    MakeProposal: {
      url: request.url,
      title: request.title != null ? [request.title] : [],
      summary: request.summary,
      action: [fromAction(request.action)],
    },
  };

  return {
    id: [],
    command: [rawCommand],
    neuron_id_or_subaccount: [{ NeuronId: { id: request.neuronId } }],
  };
};

export const toRegisterVoteRequest = ({
  neuronId,
  vote,
  proposalId,
}: {
  neuronId: NeuronId;
  vote: Vote;
  proposalId: ProposalId;
}): RawManageNeuron =>
  toCommand({
    neuronId,
    command: {
      RegisterVote: {
        vote,
        proposal: [{ id: proposalId }],
      },
    },
  });

export const toMakeProposalRawRequest = (
  request: MakeProposalRequest
): RawManageNeuron => {
  const rawCommand: RawCommand = {
    MakeProposal: {
      url: request.url,
      title: request.title != null ? [request.title] : [],
      summary: request.summary,
      action: [fromAction(request.action)],
    },
  };
  return {
    id: [],
    command: [rawCommand],
    neuron_id_or_subaccount: [{ NeuronId: { id: request.neuronId } }],
  };
};

export const toManageNeuronsFollowRequest = ({
  neuronId,
  topic,
  followees,
}: FollowRequest): RawManageNeuron =>
  toCommand({
    neuronId,
    command: {
      Follow: {
        topic,
        followees: followees.map((followeeId) => ({ id: followeeId })),
      },
    },
  });

export const toDisburseNeuronRequest = ({
  neuronId,
  toAccountIdentifier,
  amount,
}: {
  neuronId: NeuronId;
  toAccountIdentifier?: AccountIdentifierClass;
  amount?: E8s;
}): RawManageNeuron =>
  toCommand({
    neuronId,
    command: {
      Disburse: {
        to_account:
          toAccountIdentifier !== undefined
            ? [toAccountIdentifier.toAccountIdentifierHash()]
            : [],
        amount: amount !== undefined ? [fromAmount(amount)] : [],
      },
    },
  });

export const toMergeMaturityRequest = ({
  neuronId,
  percentageToMerge,
}: {
  neuronId: NeuronId;
  percentageToMerge: number;
}): RawManageNeuron =>
  toCommand({
    neuronId,
    command: {
      MergeMaturity: {
        percentage_to_merge: percentageToMerge,
      },
    },
  });

export const toStakeMaturityRequest = ({
  neuronId,
  percentageToStake,
}: {
  neuronId: NeuronId;
  percentageToStake?: number;
}): RawManageNeuron =>
  toCommand({
    neuronId,
    command: {
      StakeMaturity: {
        percentage_to_stake: toNullable(percentageToStake),
      },
    },
  });

export const toSpawnNeuronRequest = ({
  neuronId,
  percentageToSpawn,
  newController,
  nonce,
}: {
  neuronId: NeuronId;
  percentageToSpawn?: number;
  newController?: Principal;
  nonce?: bigint;
}): RawManageNeuron =>
  toCommand({
    neuronId,
    command: {
      Spawn: {
        percentage_to_spawn:
          percentageToSpawn === undefined ? [] : [percentageToSpawn],
        new_controller: newController === undefined ? [] : [newController],
        nonce: nonce === undefined ? [] : [nonce],
      },
    },
  });

export const toAddHotkeyRequest = ({
  neuronId,
  principal,
}: {
  neuronId: NeuronId;
  principal: Principal;
}): RawManageNeuron =>
  toConfigureOperation({
    neuronId,
    operation: {
      AddHotKey: {
        new_hot_key: [principal],
      },
    },
  });

export const toRemoveHotkeyRequest = ({
  neuronId,
  principal,
}: {
  neuronId: NeuronId;
  principal: Principal;
}): RawManageNeuron =>
  toConfigureOperation({
    neuronId,
    operation: {
      RemoveHotKey: {
        hot_key_to_remove: [principal],
      },
    },
  });

export const toIncreaseDissolveDelayRequest = ({
  neuronId,
  additionalDissolveDelaySeconds,
}: {
  neuronId: NeuronId;
  additionalDissolveDelaySeconds: number;
}): RawManageNeuron =>
  toConfigureOperation({
    neuronId,
    operation: {
      IncreaseDissolveDelay: {
        additional_dissolve_delay_seconds: additionalDissolveDelaySeconds,
      },
    },
  });

export const toSetDissolveDelayRequest = ({
  neuronId,
  dissolveDelaySeconds,
}: {
  neuronId: NeuronId;
  dissolveDelaySeconds: number;
}): RawManageNeuron =>
  toConfigureOperation({
    neuronId,
    operation: {
      SetDissolveTimestamp: {
        dissolve_timestamp_seconds: BigInt(dissolveDelaySeconds),
      },
    },
  });

export const toJoinCommunityFundRequest = (
  neuronId: NeuronId
): RawManageNeuron =>
  toConfigureOperation({
    neuronId,
    operation: {
      JoinCommunityFund: {},
    },
  });

export const toAutoStakeMaturityRequest = ({
  neuronId,
  autoStake,
}: {
  neuronId: NeuronId;
  autoStake: boolean;
}): RawManageNeuron =>
  toConfigureOperation({
    neuronId,
    operation: {
      ChangeAutoStakeMaturity: {
        requested_setting_for_auto_stake_maturity: autoStake,
      },
    },
  });

export const toLeaveCommunityFundRequest = (
  neuronId: NeuronId
): RawManageNeuron =>
  toConfigureOperation({
    neuronId,
    operation: {
      LeaveCommunityFund: {},
    },
  });

export const toMergeRequest = ({
  sourceNeuronId,
  targetNeuronId,
}: {
  sourceNeuronId: NeuronId;
  targetNeuronId: NeuronId;
}): RawManageNeuron =>
  toCommand({
    neuronId: targetNeuronId,
    command: {
      Merge: { source_neuron_id: [{ id: sourceNeuronId }] },
    },
  });

export const toStartDissolvingRequest = (neuronId: NeuronId): RawManageNeuron =>
  toConfigureOperation({
    neuronId,
    operation: {
      StartDissolving: {},
    },
  });

export const toStopDissolvingRequest = (neuronId: NeuronId): RawManageNeuron =>
  toConfigureOperation({
    neuronId,
    operation: {
      StopDissolving: {},
    },
  });

export const toCommand = ({
  neuronId,
  command,
}: {
  neuronId: NeuronId;
  command: RawCommand;
}): RawManageNeuron => ({
  id: [{ id: neuronId }],
  command: [command],
  neuron_id_or_subaccount: [],
});

export const toConfigureOperation = ({
  neuronId,
  operation,
}: {
  neuronId: NeuronId;
  operation: RawOperation;
}): RawManageNeuron =>
  toCommand({
    neuronId,
    command: {
      Configure: {
        operation: [operation],
      },
    },
  });
