import type { ActorSubclass, Agent } from "@dfinity/agent";
import type { LedgerCanister } from "@dfinity/ledger-icp";
import {
  AccountIdentifier,
  SubAccount,
  checkAccountId,
} from "@dfinity/ledger-icp";
import type { Principal } from "@dfinity/principal";
import {
  arrayOfNumberToUint8Array,
  asciiStringToByteArray,
  assertPercentageNumber,
  createServices,
  fromNullable,
  isNullish,
  nonNullish,
  uint8ArrayToBigInt,
} from "@dfinity/utils";
import { sha256 } from "@noble/hashes/sha256";
import randomBytes from "randombytes";
import type {
  Command_1,
  _SERVICE as GovernanceService,
  ListProposalInfo,
  MergeResponse,
  Neuron as RawNeuron,
  NeuronInfo as RawNeuronInfo,
  ProposalInfo as RawProposalInfo,
  RewardEvent,
} from "../candid/governance";
import { idlFactory as certifiedIdlFactory } from "../candid/governance.certified.idl";
import { idlFactory } from "../candid/governance.idl";
import {
  fromClaimOrRefreshNeuronRequest,
  fromListNeurons,
  fromListProposalsRequest,
  toAddHotkeyRequest,
  toAutoStakeMaturityRequest,
  toClaimOrRefreshRequest,
  toDisburseNeuronRequest,
  toIncreaseDissolveDelayRequest,
  toJoinCommunityFundRequest,
  toLeaveCommunityFundRequest,
  toMakeProposalRawRequest,
  toManageNeuronsFollowRequest,
  toMergeMaturityRequest,
  toMergeRequest,
  toRegisterVoteRequest,
  toRemoveHotkeyRequest,
  toSetDissolveDelayRequest,
  toSpawnNeuronRequest,
  toSplitRawRequest,
  toStakeMaturityRequest,
  toStartDissolvingRequest,
  toStopDissolvingRequest,
} from "./canisters/governance/request.converters";
import {
  toArrayOfNeuronInfo,
  toListProposalsResponse,
  toNeuronInfo,
  toProposalInfo,
} from "./canisters/governance/response.converters";
import {
  getSuccessfulCommandFromResponse,
  manageNeuron,
  simulateManageNeuron,
} from "./canisters/governance/services";
import { MAINNET_GOVERNANCE_CANISTER_ID } from "./constants/canister_ids";
import { E8S_PER_TOKEN } from "./constants/constants";
import type { Vote } from "./enums/governance.enums";
import {
  CouldNotClaimNeuronError,
  GovernanceError,
  InsufficientAmountError,
  UnrecognizedTypeError,
} from "./errors/governance.errors";
import type { E8s, NeuronId } from "./types/common";
import type { GovernanceCanisterOptions } from "./types/governance.options";
import type {
  ClaimOrRefreshNeuronRequest,
  FollowRequest,
  KnownNeuron,
  ListProposalsRequest,
  ListProposalsResponse,
  MakeProposalRequest,
  NeuronInfo,
  ProposalId,
  ProposalInfo,
} from "./types/governance_converters";

export class GovernanceCanister {
  private constructor(
    private readonly canisterId: Principal,
    private readonly service: ActorSubclass<GovernanceService>,
    private readonly certifiedService: ActorSubclass<GovernanceService>,
    private readonly agent: Agent,
  ) {
    this.canisterId = canisterId;
    this.service = service;
    this.certifiedService = certifiedService;
    this.agent = agent;
  }

  public static create(options: GovernanceCanisterOptions = {}) {
    const canisterId: Principal =
      options.canisterId ?? MAINNET_GOVERNANCE_CANISTER_ID;

    const { service, certifiedService, agent } =
      createServices<GovernanceService>({
        options: {
          ...options,
          canisterId,
        },
        idlFactory,
        certifiedIdlFactory,
      });

    return new GovernanceCanister(canisterId, service, certifiedService, agent);
  }

  /**
   * Returns the list of neurons controlled by the caller.
   *
   * If an array of neuron IDs is provided, precisely those neurons will be fetched.
   *
   * If `certified` is true, the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   *
   * The backend treats `includeEmptyNeurons` as true if absent.
   */
  public listNeurons = async ({
    certified = true,
    neuronIds,
    includeEmptyNeurons,
  }: {
    certified: boolean;
    neuronIds?: NeuronId[];
    includeEmptyNeurons?: boolean;
  }): Promise<NeuronInfo[]> => {
    const rawRequest = fromListNeurons({ neuronIds, includeEmptyNeurons });
    const raw_response =
      await this.getGovernanceService(certified).list_neurons(rawRequest);
    return toArrayOfNeuronInfo({
      response: raw_response,
      canisterId: this.canisterId,
    });
  };

  /**
   * Returns the list of neurons who have been approved by the community to
   * appear as the default followee options.
   *
   * If `certified` is true, the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   */
  public listKnownNeurons = async (
    certified = true,
  ): Promise<KnownNeuron[]> => {
    const response =
      await this.getGovernanceService(certified).list_known_neurons();

    return response.known_neurons.map((n) => ({
      id: fromNullable(n.id)?.id ?? BigInt(0),
      name: fromNullable(n.known_neuron_data)?.name ?? "",
      description: fromNullable(
        fromNullable(n.known_neuron_data)?.description ?? [],
      ),
    }));
  };

  /**
   * Returns the latest reward event.
   *
   * If `certified` is true, the request is fetched as an update call, otherwise
   * it's fetched using a query call.
   *
   */
  public getLastestRewardEvent = async (
    certified = true,
  ): Promise<RewardEvent> => {
    return this.getGovernanceService(certified).get_latest_reward_event();
  };

  /**
   * Returns the list of proposals made for the community to vote on,
   * paginated and filtered by the request.
   *
   * If `certified` is true (default), the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   *
   * @param request the options to list the proposals (limit number of results, topics to search for, etc.)
   * @param certified query or update calls
   */
  public listProposals = async ({
    request,
    certified = true,
  }: {
    request: ListProposalsRequest;
    certified?: boolean;
  }): Promise<ListProposalsResponse> => {
    const rawRequest: ListProposalInfo = fromListProposalsRequest(request);
    const rawResponse =
      await this.getGovernanceService(certified).list_proposals(rawRequest);
    return toListProposalsResponse(rawResponse);
  };

  /**
   * @throws {@link InsufficientAmountError}
   * @throws {@link StakeNeuronTransferError}
   * @throws {@link CouldNotClaimNeuronError}
   * @throws {@link TransferError}
   */
  public stakeNeuron = async ({
    stake,
    principal,
    fromSubAccount,
    ledgerCanister,
    createdAt,
    fee,
  }: {
    stake: bigint;
    principal: Principal;
    fromSubAccount?: number[];
    ledgerCanister: LedgerCanister;
    // Used for the TransferRequest parameters.
    // Check the TransferRequest type for more information.
    createdAt?: bigint;
    fee?: E8s;
  }): Promise<NeuronId> => {
    if (stake < E8S_PER_TOKEN) {
      throw new InsufficientAmountError(stake);
    }

    const nonceBytes = new Uint8Array(randomBytes(8));
    const nonce = uint8ArrayToBigInt(nonceBytes);
    const toSubAccount = this.buildNeuronStakeSubAccount(nonceBytes, principal);
    const accountIdentifier = AccountIdentifier.fromPrincipal({
      principal: this.canisterId,
      subAccount: toSubAccount,
    });

    // Send amount to the ledger.
    await ledgerCanister.transfer({
      memo: nonce,
      amount: stake,
      fromSubAccount,
      to: accountIdentifier,
      createdAt,
      fee,
    });

    // Notify the governance of the transaction so that the neuron is created.
    const neuronId: NeuronId | undefined =
      await this.claimOrRefreshNeuronFromAccount({
        controller: principal,
        memo: nonce,
      });

    // Typescript was complaining with `neuronId || new NeuronNotFound()`:
    // "Type 'undefined' is not assignable to type 'bigint | StakeNeuronError | TransferError'"
    // hence the explicit check.
    if (isNullish(neuronId)) {
      throw new CouldNotClaimNeuronError();
    }

    return neuronId;
  };

  // TODO: Rename to and replace `stakeNeuron` once `stakeNeuronIcrc1` is tested
  // in NNS dapp.
  // Note: Ledger HW does currently (2023-09-20) not support ICRC-1 transfers to
  // the governance canister.
  /**
   * @throws {@link InsufficientAmountError}
   * @throws {@link StakeNeuronTransferError}
   * @throws {@link CouldNotClaimNeuronError}
   * @throws {@link TransferError}
   */
  public stakeNeuronIcrc1 = async ({
    stake,
    principal,
    fromSubAccount,
    ledgerCanister,
    createdAt,
    fee,
  }: {
    stake: bigint;
    principal: Principal;
    fromSubAccount?: Uint8Array;
    ledgerCanister: LedgerCanister;
    // Used for the TransferRequest parameters.
    // Check the TransferRequest type for more information.
    createdAt?: bigint;
    fee?: E8s;
  }): Promise<NeuronId> => {
    if (stake < E8S_PER_TOKEN) {
      throw new InsufficientAmountError(stake);
    }

    const nonceBytes = new Uint8Array(randomBytes(8));
    const nonce = uint8ArrayToBigInt(nonceBytes);
    const toSubAccount = this.getNeuronStakeSubAccountBytes(
      nonceBytes,
      principal,
    );

    // Send amount to the ledger.
    await ledgerCanister.icrc1Transfer({
      // WARNING: This does not set the same memo field as the stakeNeuron
      // function above and would need to be handled separately from that field.
      icrc1Memo: nonceBytes,
      amount: stake,
      fromSubAccount,
      to: {
        owner: this.canisterId,
        subaccount: [toSubAccount],
      },
      createdAt,
      fee,
    });

    // Notify the governance of the transaction so that the neuron is created.
    const neuronId: NeuronId | undefined =
      await this.claimOrRefreshNeuronFromAccount({
        controller: principal,
        memo: nonce,
      });

    // Typescript was complaining with `neuronId || new NeuronNotFound()`:
    // "Type 'undefined' is not assignable to type 'bigint | StakeNeuronError | TransferError'"
    // hence the explicit check.
    if (isNullish(neuronId)) {
      throw new CouldNotClaimNeuronError();
    }

    return neuronId;
  };

  /**
   * Increases dissolve delay of a neuron
   *
   * @throws {@link GovernanceError}
   */
  public increaseDissolveDelay = async ({
    neuronId,
    additionalDissolveDelaySeconds,
  }: {
    neuronId: NeuronId;
    additionalDissolveDelaySeconds: number;
  }): Promise<void> => {
    const request = toIncreaseDissolveDelayRequest({
      neuronId,
      additionalDissolveDelaySeconds,
    });

    await manageNeuron({
      request,
      service: this.certifiedService,
    });
  };

  /**
   * Sets dissolve delay of a neuron.
   * The new date is now + dissolveDelaySeconds.
   *
   * @param {NeuronId} neuronId
   * @param {number} dissolveDelaySeconds
   * @throws {@link GovernanceError}
   */
  public setDissolveDelay = async ({
    neuronId,
    dissolveDelaySeconds,
  }: {
    neuronId: NeuronId;
    dissolveDelaySeconds: number;
  }): Promise<void> => {
    const request = toSetDissolveDelayRequest({
      neuronId,
      dissolveDelaySeconds,
    });

    await manageNeuron({
      request,
      service: this.certifiedService,
    });
  };

  /**
   * Start dissolving process of a neuron
   *
   * @throws {@link GovernanceError}
   */
  public startDissolving = async (neuronId: NeuronId): Promise<void> => {
    const request = toStartDissolvingRequest(neuronId);

    await manageNeuron({
      request,
      service: this.certifiedService,
    });
  };

  /**
   * Stop dissolving process of a neuron
   *
   * @throws {@link GovernanceError}
   */
  public stopDissolving = async (neuronId: NeuronId): Promise<void> => {
    const request = toStopDissolvingRequest(neuronId);

    await manageNeuron({
      request,
      service: this.certifiedService,
    });
  };

  /**
   * Neuron joins the community fund
   *
   * @throws {@link GovernanceError}
   */
  public joinCommunityFund = async (neuronId: NeuronId): Promise<void> => {
    const request = toJoinCommunityFundRequest(neuronId);

    await manageNeuron({
      request,
      service: this.certifiedService,
    });
  };

  /**
   * Changes auto-stake maturity for this Neuron. While on, auto-stake maturity will cause all the maturity generated by voting rewards to this neuron to be automatically staked and contribute to the voting power of the neuron.
   *
   * @param {neuronId: NeuronId; autoStake: boolean;} params
   * @param {NeuronId} neuronId The id of the neuron for which to request a change of the auto stake feature
   * @param {number} autoStake `true` to enable the auto-stake maturity for this neuron, `false` to turn it off
   *
   * @throws {@link GovernanceError}
   */
  public autoStakeMaturity = async (params: {
    neuronId: NeuronId;
    autoStake: boolean;
  }): Promise<void> => {
    await manageNeuron({
      request: toAutoStakeMaturityRequest(params),
      service: this.certifiedService,
    });
  };

  /**
   * Neuron leaves the community fund
   *
   * @throws {@link GovernanceError}
   */
  public leaveCommunityFund = async (neuronId: NeuronId): Promise<void> => {
    const request = toLeaveCommunityFundRequest(neuronId);

    await manageNeuron({
      request,
      service: this.certifiedService,
    });
  };

  /**
   * Sets node provider reward account.
   * Where the reward is paid to.
   *
   * @param {string} accountIdentifier
   * @throws {@link GovernanceError}
   * @throws {@link InvalidAccountIDError}
   */
  public setNodeProviderAccount = async (
    accountIdentifier: string,
  ): Promise<void> => {
    // Might throw InvalidAccountIDError
    checkAccountId(accountIdentifier);
    const account = AccountIdentifier.fromHex(accountIdentifier);
    const response = await this.certifiedService.update_node_provider({
      reward_account: [account.toAccountIdentifierHash()],
    });

    if ("Err" in response) {
      throw new GovernanceError(response.Err);
    }
  };

  /**
   * Merge two neurons
   *
   * @throws {@link GovernanceError}
   */
  public mergeNeurons = async (request: {
    sourceNeuronId: NeuronId;
    targetNeuronId: NeuronId;
  }): Promise<void> => {
    const rawRequest = toMergeRequest(request);

    await manageNeuron({
      request: rawRequest,
      service: this.certifiedService,
    });
  };

  /**
   * Simulate merging two neurons
   *
   * @throws {@link GovernanceError}
   */
  public simulateMergeNeurons = async (request: {
    sourceNeuronId: NeuronId;
    targetNeuronId: NeuronId;
  }): Promise<NeuronInfo> => {
    const rawRequest = toMergeRequest(request);

    const command = await simulateManageNeuron({
      request: rawRequest,
      service: this.certifiedService,
    });

    let merge: MergeResponse | undefined;
    let neuronInfo: RawNeuronInfo | undefined;
    let rawNeuron: RawNeuron | undefined;
    let neuronId: NeuronId | undefined;

    if (
      "Merge" in command &&
      nonNullish((merge = command.Merge)) &&
      nonNullish((neuronInfo = fromNullable(merge.target_neuron_info))) &&
      nonNullish((rawNeuron = fromNullable(merge.target_neuron))) &&
      nonNullish((neuronId = fromNullable(rawNeuron.id)?.id))
    ) {
      return toNeuronInfo({
        neuronId,
        neuronInfo,
        rawNeuron,
        canisterId: this.canisterId,
      });
    }

    // Edge case
    throw new UnrecognizedTypeError(
      `simulateMergeNeurons: Unrecognized Merge error in ${JSON.stringify(
        command,
      )}`,
    );
  };

  /**
   * Splits a neuron creating a new one
   *
   * @returns newNeuronId
   * @throws {@link GovernanceError}
   */
  public splitNeuron = async ({
    neuronId,
    amount,
  }: {
    neuronId: NeuronId;
    amount: bigint;
  }): Promise<NeuronId> => {
    const request = toSplitRawRequest({
      neuronId,
      amount,
    });

    const response = await this.certifiedService.manage_neuron(request);
    const command = getSuccessfulCommandFromResponse(response);

    if ("Split" in command) {
      const neuron = fromNullable(command.Split.created_neuron_id);
      if (isNullish(neuron)) {
        // Edge case
        throw new GovernanceError({
          error_message:
            "Unexpected error splitting neuron. No neuronId in Split response.",
          error_type: 0,
        });
      }
      return neuron.id;
    }

    // Edge case
    throw new UnrecognizedTypeError(
      `Unrecognized Split error in ${JSON.stringify(response)}`,
    );
  };

  /**
   * Returns single proposal info
   *
   * If `certified` is true (default), the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   */
  public getProposal = async ({
    proposalId,
    certified = true,
  }: {
    proposalId: bigint;
    certified?: boolean;
  }): Promise<ProposalInfo | undefined> => {
    const [proposalInfo]: [] | [RawProposalInfo] =
      await this.getGovernanceService(certified).get_proposal_info(proposalId);
    return proposalInfo ? toProposalInfo(proposalInfo) : undefined;
  };

  /**
   * Create new proposal
   *
   * @returns The newly created proposal ID or undefined if the success response returned by the Governance canister does not provide such information.
   * @throws {@link GovernanceError}
   */
  public makeProposal = async (
    request: MakeProposalRequest,
  ): Promise<NeuronId | undefined> => {
    const rawRequest = toMakeProposalRawRequest(request);

    const cmd = await manageNeuron({
      request: rawRequest,
      service: this.certifiedService,
    });

    return "MakeProposal" in cmd
      ? fromNullable(cmd.MakeProposal.proposal_id)?.id
      : undefined;
  };

  /**
   *
   * Registers vote for a proposal from the neuron passed.
   *
   * @throws {@link GovernanceError}
   */
  public registerVote = async ({
    neuronId,
    vote,
    proposalId,
  }: {
    neuronId: NeuronId;
    vote: Vote;
    proposalId: ProposalId;
  }): Promise<void> => {
    const request = toRegisterVoteRequest({ neuronId, vote, proposalId });

    await manageNeuron({
      request,
      service: this.certifiedService,
    });
  };

  /**
   * Edit neuron followees per topic
   *
   * @throws {@link GovernanceError}
   */
  public setFollowees = async (followRequest: FollowRequest): Promise<void> => {
    const request = toManageNeuronsFollowRequest(followRequest);

    await manageNeuron({
      request,
      service: this.certifiedService,
    });
  };

  /**
   * Disburse neuron on Account
   *
   * @throws {@link GovernanceError}
   * @throws {@link InvalidAccountIDError}
   */
  public disburse = async ({
    neuronId,
    toAccountId,
    amount,
  }: {
    neuronId: NeuronId;
    toAccountId?: string;
    amount?: E8s;
  }): Promise<void> => {
    if (nonNullish(toAccountId)) {
      // Might throw InvalidAccountIDError
      checkAccountId(toAccountId);
    }
    // TODO: Test that the new way also works for disbursements.
    const toAccountIdentifier = nonNullish(toAccountId)
      ? AccountIdentifier.fromHex(toAccountId)
      : undefined;
    const request = toDisburseNeuronRequest({
      neuronId,
      toAccountIdentifier,
      amount,
    });

    await manageNeuron({
      request,
      service: this.certifiedService,
    });
  };

  /**
   * Merge Maturity of a neuron
   *
   * @throws {@link GovernanceError}
   * @throws {@link InvalidPercentageError}
   *
   */
  public mergeMaturity = async ({
    neuronId,
    percentageToMerge,
  }: {
    neuronId: NeuronId;
    percentageToMerge: number;
  }): Promise<void> => {
    // Might throw InvalidPercentageError
    assertPercentageNumber(percentageToMerge);

    const request = toMergeMaturityRequest({ neuronId, percentageToMerge });

    await manageNeuron({
      request,
      service: this.certifiedService,
    });
  };

  /**
   * Stake the maturity of a neuron.
   *
   * @param {neuronId: NeuronId; percentageToStake: number;} params
   * @param {NeuronId} neuronId The id of the neuron for which to stake the maturity
   * @param {number} percentageToStake Optional. Percentage of the current maturity to stake. If not provided, all of the neuron's current maturity will be staked.
   *
   * @throws {@link GovernanceError}
   * @throws {@link InvalidPercentageError}
   *
   */
  public stakeMaturity = async ({
    neuronId,
    percentageToStake,
  }: {
    neuronId: NeuronId;
    percentageToStake?: number;
  }): Promise<void> => {
    assertPercentageNumber(percentageToStake ?? 100);

    await manageNeuron({
      request: toStakeMaturityRequest({ neuronId, percentageToStake }),
      service: this.certifiedService,
    });
  };

  /**
   * Merge Maturity of a neuron
   *
   * @throws {@link GovernanceError}
   * @throws {@link InvalidPercentageError}
   *
   */
  public spawnNeuron = async ({
    neuronId,
    percentageToSpawn,
    newController,
    nonce,
  }: {
    neuronId: NeuronId;
    percentageToSpawn?: number;
    newController?: Principal;
    nonce?: bigint;
  }): Promise<bigint> => {
    if (nonNullish(percentageToSpawn)) {
      // Migth throw InvalidPercentageError
      assertPercentageNumber(percentageToSpawn);
    }

    const request = toSpawnNeuronRequest({
      neuronId,
      percentageToSpawn,
      newController,
      nonce,
    });

    const response = await this.certifiedService.manage_neuron(request);
    const command = getSuccessfulCommandFromResponse(response);
    let createdNeuronId: NeuronId | undefined;

    if (
      "Spawn" in command &&
      nonNullish(
        (createdNeuronId = fromNullable(command.Spawn.created_neuron_id)?.id),
      )
    ) {
      return createdNeuronId;
    }

    // Edge case
    throw new UnrecognizedTypeError(
      `Unrecognized Spawn error in ${JSON.stringify(response)}`,
    );
  };

  /**
   * Add hotkey to neuron
   *
   * @throws {@link GovernanceError}
   */
  public addHotkey = async ({
    neuronId,
    principal,
  }: {
    neuronId: NeuronId;
    principal: Principal;
  }): Promise<void> => {
    const request = toAddHotkeyRequest({ neuronId, principal });

    await manageNeuron({
      request,
      service: this.certifiedService,
    });
  };

  /**
   * Remove hotkey to neuron
   *
   * @throws {@link GovernanceError}
   */
  public removeHotkey = async ({
    neuronId,
    principal,
  }: {
    neuronId: NeuronId;
    principal: Principal;
  }): Promise<void> => {
    const request = toRemoveHotkeyRequest({ neuronId, principal });

    await manageNeuron({
      request,
      service: this.certifiedService,
    });
  };

  /**
   * Gets the NeuronID of a newly created neuron.
   */
  public claimOrRefreshNeuronFromAccount = async ({
    memo,
    controller,
  }: {
    memo: bigint;
    controller?: Principal;
  }): Promise<NeuronId | undefined> => {
    const rawRequest = toClaimOrRefreshRequest({
      memo,
      controller,
    });
    const rawResponse = await this.certifiedService.manage_neuron(rawRequest);
    let command: Command_1 | undefined;
    if (
      nonNullish((command = fromNullable(rawResponse.command))) &&
      "ClaimOrRefresh" in command
    ) {
      return fromNullable(command.ClaimOrRefresh.refreshed_neuron_id)?.id;
    }

    throw new UnrecognizedTypeError(
      `Unrecognized ClaimOrRefresh error in ${JSON.stringify(rawResponse)}`,
    );
  };

  /**
   * Refreshes neuron and returns neuronId when successful
   * Uses query call only.
   *
   * @throws {@link UnrecognizedTypeError}
   */
  public claimOrRefreshNeuron = async (
    request: ClaimOrRefreshNeuronRequest,
  ): Promise<NeuronId | undefined> => {
    const rawRequest = fromClaimOrRefreshNeuronRequest(request);
    const rawResponse = await this.service.manage_neuron(rawRequest);
    let command: Command_1 | undefined;
    if (
      nonNullish((command = fromNullable(rawResponse.command))) &&
      "ClaimOrRefresh" in command
    ) {
      return fromNullable(command.ClaimOrRefresh.refreshed_neuron_id)?.id;
    }

    throw new UnrecognizedTypeError(
      `Unrecognized ClaimOrRefresh error in ${JSON.stringify(rawResponse)}`,
    );
  };

  private buildNeuronStakeSubAccount = (
    nonce: Uint8Array,
    principal: Principal,
  ): SubAccount => {
    return SubAccount.fromBytes(
      this.getNeuronStakeSubAccountBytes(nonce, principal),
    ) as SubAccount;
  };

  private getNeuronStakeSubAccountBytes = (
    nonce: Uint8Array,
    principal: Principal,
  ): Uint8Array => {
    const padding = asciiStringToByteArray("neuron-stake");
    const shaObj = sha256.create();
    shaObj.update(
      arrayOfNumberToUint8Array([
        0x0c,
        ...padding,
        ...principal.toUint8Array(),
        ...nonce,
      ]),
    );
    return shaObj.digest();
  };

  private getGovernanceService(certified: boolean): GovernanceService {
    return certified ? this.certifiedService : this.service;
  }

  /**
   * Return the data of the neuron provided as id.
   */
  public getNeuron = async ({
    certified = true,
    neuronId,
  }: {
    certified: boolean;
    neuronId: NeuronId;
  }): Promise<NeuronInfo | undefined> => {
    // The governance canister exposes two functions "get_neuron_info" and "get_full_neuron" that could probably be used to fetch the neuron details too.
    // However historically this function has been resolved with a single call "list_neurons".

    const [neuron]: NeuronInfo[] = await this.listNeurons({
      certified,
      neuronIds: [neuronId],
    });

    return neuron;
  };
}
