import { Actor, type Agent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { sha256 } from "js-sha256";
import randomBytes from "randombytes";
import { idlFactory as certifiedIdlFactory } from "../candid/governance.certified.idl";
import { GovernanceService, idlFactory } from "../candid/governance.idl";
import {
  ListProposalInfo,
  ProposalInfo as RawProposalInfo,
} from "../candid/governanceTypes";
import {
  ListNeurons as PbListNeurons,
  ListNeuronsResponse as PbListNeuronsResponse,
  ManageNeuron as PbManageNeuron,
  ManageNeuronResponse as PbManageNeuronResponse,
} from "../proto/governance_pb";
import { AccountIdentifier, SubAccount } from "./account_identifier";
import {
  fromClaimOrRefreshNeuronRequest,
  fromListNeurons,
  fromListProposalsRequest,
  toAddHotkeyRequest,
  toClaimOrRefreshRequest,
  toDisburseNeuronRequest,
  toIncreaseDissolveDelayRequest,
  toJoinCommunityFundRequest,
  toMakeProposalRawRequest,
  toManageNeuronsFollowRequest,
  toMergeMaturityRequest,
  toMergeRequest,
  toRegisterVoteRequest,
  toRemoveHotkeyRequest,
  toSpawnNeuronRequest,
  toSplitRawRequest,
  toStartDissolvingRequest,
  toStopDissolvingRequest,
} from "./canisters/governance/request.converters";
import {
  fromAddHotKeyRequest,
  fromDisburseRequest,
  fromIncreaseDissolveDelayRequest,
  fromMergeMaturityRequest,
  fromMergeRequest,
  fromRemoveHotKeyRequest,
  fromSpawnRequest,
  fromStartDissolvingRequest,
  fromStopDissolvingRequest,
} from "./canisters/governance/request.proto.converters";
import {
  convertPbNeuronToNeuronInfo,
  toArrayOfNeuronInfo,
  toListProposalsResponse,
  toProposalInfo,
} from "./canisters/governance/response.converters";
import { checkPbManageNeuronResponse } from "./canisters/governance/response.proto.converters";
import {
  getSuccessfulCommandFromResponse,
  manageNeuron,
} from "./canisters/governance/services";
import { MAINNET_GOVERNANCE_CANISTER_ID } from "./constants/canister_ids";
import { E8S_PER_ICP } from "./constants/constants";
import {
  CouldNotClaimNeuronError,
  GovernanceError,
  InsufficientAmountError,
  UnrecognizedTypeError,
} from "./errors/governance.errors";
import { ICP } from "./icp";
import { LedgerCanister } from "./ledger";
import { E8s, NeuronId } from "./types/common";
import { GovernanceCanisterOptions } from "./types/governance";
import {
  ClaimOrRefreshNeuronRequest,
  DisburseRequest,
  FollowRequest,
  KnownNeuron,
  ListProposalsRequest,
  ListProposalsResponse,
  MakeProposalRequest,
  MergeMaturityRequest,
  MergeRequest,
  NeuronInfo,
  ProposalId,
  ProposalInfo,
  SpawnRequest,
  Vote,
} from "./types/governance_converters";
import { verifyCheckSum } from "./utils/accounts.utils";
import { defaultAgent } from "./utils/agent.utils";
import {
  asciiStringToByteArray,
  uint8ArrayToBigInt,
} from "./utils/converter.utils";
import { assertPercentageNumber } from "./utils/number.utils";
import { updateCall } from "./utils/proto.utils";

export class GovernanceCanister {
  private constructor(
    private readonly canisterId: Principal,
    private readonly service: GovernanceService,
    private readonly certifiedService: GovernanceService,
    private readonly agent: Agent,
    private readonly hardwareWallet: boolean = false
  ) {
    this.canisterId = canisterId;
    this.service = service;
    this.certifiedService = certifiedService;
    this.agent = agent;
    this.hardwareWallet = hardwareWallet;
  }

  public static create(options: GovernanceCanisterOptions = {}) {
    const agent = options.agent ?? defaultAgent();
    const canisterId = options.canisterId ?? MAINNET_GOVERNANCE_CANISTER_ID;

    const service =
      options.serviceOverride ??
      Actor.createActor<GovernanceService>(idlFactory, {
        agent,
        canisterId,
      });

    const certifiedService =
      options.certifiedServiceOverride ??
      Actor.createActor<GovernanceService>(certifiedIdlFactory, {
        agent,
        canisterId,
      });

    return new GovernanceCanister(
      canisterId,
      service,
      certifiedService,
      agent,
      options.hardwareWallet
    );
  }

  /**
   * Returns the list of neurons controlled by the caller.
   *
   * If an array of neuron IDs is provided, precisely those neurons will be fetched.
   *
   * If `certified` is true, the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   *
   */
  public listNeurons = async ({
    certified = true,
    neuronIds,
  }: {
    certified: boolean;
    neuronIds?: NeuronId[];
  }): Promise<NeuronInfo[]> => {
    if (this.hardwareWallet) {
      // Hardware Wallet does not support specifying neuronIds.
      return this.listNeuronsHardwareWallet();
    }
    const rawRequest = fromListNeurons(neuronIds);
    const raw_response = await this.getGovernanceService(
      certified
    ).list_neurons(rawRequest);
    return toArrayOfNeuronInfo(raw_response);
  };

  /**
   * Returns the list of neurons who have been approved by the community to
   * appear as the default followee options.
   *
   * If `certified` is true, the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   */
  public listKnownNeurons = async (
    certified = true
  ): Promise<KnownNeuron[]> => {
    const response = await this.getGovernanceService(
      certified
    ).list_known_neurons();

    return response.known_neurons.map((n) => ({
      id: n.id[0]?.id ?? BigInt(0),
      name: n.known_neuron_data[0]?.name ?? "",
      description: n.known_neuron_data[0]?.description[0],
    }));
  };

  /**
   * Returns the list of proposals made for the community to vote on,
   * paginated and filtered by the request.
   *
   * If `certified` is true (default), the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   */
  public listProposals = async ({
    request,
    certified = true,
  }: {
    request: ListProposalsRequest;
    certified?: boolean;
  }): Promise<ListProposalsResponse> => {
    const rawRequest: ListProposalInfo = fromListProposalsRequest(request);
    const rawResponse = await this.getGovernanceService(
      certified
    ).list_proposals(rawRequest);
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
    fromSubAccountId,
    ledgerCanister,
  }: {
    stake: ICP;
    principal: Principal;
    fromSubAccountId?: number;
    ledgerCanister: LedgerCanister;
  }): Promise<NeuronId> => {
    if (stake.toE8s() < E8S_PER_ICP) {
      throw new InsufficientAmountError(ICP.fromString("1") as ICP);
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
      fromSubAccountId,
      to: accountIdentifier,
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
    if (neuronId === undefined) {
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
    if (this.hardwareWallet) {
      return this.increaseDissolveDelayHardwareWallet({
        neuronId,
        additionalDissolveDelaySeconds,
      });
    }
    const request = toIncreaseDissolveDelayRequest({
      neuronId,
      additionalDissolveDelaySeconds,
    });

    return manageNeuron({
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
    if (this.hardwareWallet) {
      return this.startDissolvingHardwareWallet(neuronId);
    }
    const request = toStartDissolvingRequest(neuronId);

    return manageNeuron({
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
    if (this.hardwareWallet) {
      return this.stopDissolvingHardwareWallet(neuronId);
    }
    const request = toStopDissolvingRequest(neuronId);

    return manageNeuron({
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

    return manageNeuron({
      request,
      service: this.certifiedService,
    });
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
    if (this.hardwareWallet) {
      return this.mergeNeuronsHardwareWallet(request);
    }
    const rawRequest = toMergeRequest(request);

    return manageNeuron({
      request: rawRequest,
      service: this.certifiedService,
    });
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
    amount: ICP;
  }): Promise<NeuronId> => {
    const request = toSplitRawRequest({
      neuronId,
      amount: amount.toE8s(),
    });

    const response = await this.certifiedService.manage_neuron(request);
    const commmand = getSuccessfulCommandFromResponse(response);

    if ("Split" in commmand) {
      const neuron = commmand.Split.created_neuron_id[0];
      if (neuron === undefined) {
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
      `Unrecognized Split error in ${JSON.stringify(response)}`
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
   * @throws {@link GovernanceError}
   */
  public makeProposal = async (request: MakeProposalRequest): Promise<void> => {
    const rawRequest = toMakeProposalRawRequest(request);

    return manageNeuron({
      request: rawRequest,
      service: this.certifiedService,
    });
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

    return manageNeuron({
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

    return manageNeuron({
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
    if (toAccountId !== undefined) {
      // Might throw InvalidAccountIDError
      verifyCheckSum(toAccountId);
    }
    if (this.hardwareWallet) {
      return this.disburseHardwareWallet({ neuronId, toAccountId, amount });
    }
    const request = toDisburseNeuronRequest({ neuronId, toAccountId, amount });

    return manageNeuron({
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
    // Migth throw InvalidPercentageError
    assertPercentageNumber(percentageToMerge);

    if (this.hardwareWallet) {
      return this.mergeMaturityHardwareWallet({ neuronId, percentageToMerge });
    }

    const request = toMergeMaturityRequest({ neuronId, percentageToMerge });

    return manageNeuron({
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
    if (percentageToSpawn !== undefined) {
      // Migth throw InvalidPercentageError
      assertPercentageNumber(percentageToSpawn);
    }
    if (this.hardwareWallet) {
      return this.spawnHardwareWallet({
        neuronId,
        percentageToSpawn,
        newController: newController?.toText(),
      });
    }

    const request = toSpawnNeuronRequest({
      neuronId,
      percentageToSpawn,
      newController,
      nonce,
    });

    const response = await this.certifiedService.manage_neuron(request);
    const command = getSuccessfulCommandFromResponse(response);
    if (
      "Spawn" in command &&
      command.Spawn.created_neuron_id[0] !== undefined
    ) {
      return command.Spawn.created_neuron_id[0].id;
    }

    // Edge case
    throw new UnrecognizedTypeError(
      `Unrecognized Spawn error in ${JSON.stringify(response)}`
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
    if (this.hardwareWallet) {
      return this.addHotkeyHardwareWallet({ neuronId, principal });
    }

    const request = toAddHotkeyRequest({ neuronId, principal });

    return manageNeuron({
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
    if (this.hardwareWallet) {
      return this.removeHotkeyHardwareWallet({ neuronId, principal });
    }
    const request = toRemoveHotkeyRequest({ neuronId, principal });

    return manageNeuron({
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
    const { command } = rawResponse;
    if (command.length && "ClaimOrRefresh" in command[0]) {
      const claim = command[0].ClaimOrRefresh;
      return claim.refreshed_neuron_id[0]?.id;
    }

    throw new UnrecognizedTypeError(
      `Unrecognized ClaimOrRefresh error in ${JSON.stringify(rawResponse)}`
    );
  };

  /**
   * Refreshes neuron and returns neuronId when successful
   * Uses query call only.
   *
   * @throws {@link UnrecognizedTypeError}
   */
  public claimOrRefreshNeuron = async (
    request: ClaimOrRefreshNeuronRequest
  ): Promise<NeuronId | undefined> => {
    const rawRequest = fromClaimOrRefreshNeuronRequest(request);
    const rawResponse = await this.service.manage_neuron(rawRequest);
    const { command } = rawResponse;
    if (command.length && "ClaimOrRefresh" in command[0]) {
      const claim = command[0].ClaimOrRefresh;
      return claim.refreshed_neuron_id[0]?.id;
    }

    throw new UnrecognizedTypeError(
      `Unrecognized ClaimOrRefresh error in ${JSON.stringify(rawResponse)}`
    );
  };

  private buildNeuronStakeSubAccount = (
    nonce: Uint8Array,
    principal: Principal
  ): SubAccount => {
    const padding = asciiStringToByteArray("neuron-stake");
    const shaObj = sha256.create();
    shaObj.update([0x0c, ...padding, ...principal.toUint8Array(), ...nonce]);
    return SubAccount.fromBytes(new Uint8Array(shaObj.array())) as SubAccount;
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

  private listNeuronsHardwareWallet = async (): Promise<Array<NeuronInfo>> => {
    // We can't pass a list of neuron ids, the HW cannot handle it.
    const request = new PbListNeurons();
    request.setIncludeNeuronsReadableByCaller(true);

    const rawResponse = await updateCall({
      agent: this.agent,
      canisterId: this.canisterId,
      methodName: "list_neurons_pb",
      arg: request.serializeBinary(),
    });

    const response = PbListNeuronsResponse.deserializeBinary(rawResponse);
    const pbNeurons = response.getFullNeuronsList();
    return response
      .getNeuronIdsList()
      .map(convertPbNeuronToNeuronInfo(pbNeurons));
  };

  private manageNeuronUpdateCall = async (
    rawRequest: PbManageNeuron
  ): Promise<void> => {
    const rawResponse = await updateCall({
      agent: this.agent,
      canisterId: this.canisterId,
      methodName: "manage_neuron_pb",
      arg: rawRequest.serializeBinary(),
    });

    checkPbManageNeuronResponse(rawResponse);
  };

  private addHotkeyHardwareWallet = async ({
    neuronId,
    principal,
  }: {
    neuronId: NeuronId;
    principal: Principal;
  }): Promise<void> => {
    const rawRequest = fromAddHotKeyRequest({
      neuronId,
      principal: principal.toText(),
    });
    await this.manageNeuronUpdateCall(rawRequest);
  };

  private removeHotkeyHardwareWallet = async ({
    neuronId,
    principal,
  }: {
    neuronId: NeuronId;
    principal: Principal;
  }): Promise<void> => {
    const rawRequest = fromRemoveHotKeyRequest({
      neuronId,
      principal: principal.toText(),
    });
    await this.manageNeuronUpdateCall(rawRequest);
  };

  private increaseDissolveDelayHardwareWallet = async ({
    neuronId,
    additionalDissolveDelaySeconds,
  }: {
    neuronId: NeuronId;
    additionalDissolveDelaySeconds: number;
  }): Promise<void> => {
    const rawRequest = fromIncreaseDissolveDelayRequest({
      neuronId,
      additionalDissolveDelaySeconds,
    });
    await this.manageNeuronUpdateCall(rawRequest);
  };

  private startDissolvingHardwareWallet = async (
    neuronId: NeuronId
  ): Promise<void> => {
    const rawRequest = fromStartDissolvingRequest(neuronId);
    await this.manageNeuronUpdateCall(rawRequest);
  };

  private stopDissolvingHardwareWallet = async (
    neuronId: NeuronId
  ): Promise<void> => {
    const rawRequest = fromStopDissolvingRequest(neuronId);
    await this.manageNeuronUpdateCall(rawRequest);
  };

  private disburseHardwareWallet = async (
    request: DisburseRequest
  ): Promise<void> => {
    const rawRequest = fromDisburseRequest(request);
    await this.manageNeuronUpdateCall(rawRequest);
  };

  private mergeMaturityHardwareWallet = async (
    request: MergeMaturityRequest
  ): Promise<void> => {
    const rawRequest = fromMergeMaturityRequest(request);
    await this.manageNeuronUpdateCall(rawRequest);
  };

  private spawnHardwareWallet = async (
    request: SpawnRequest
  ): Promise<NeuronId> => {
    const rawRequest = fromSpawnRequest(request);
    const rawResponse = await updateCall({
      agent: this.agent,
      canisterId: this.canisterId,
      methodName: "manage_neuron_pb",
      arg: rawRequest.serializeBinary(),
    });

    const response = PbManageNeuronResponse.deserializeBinary(rawResponse);
    const err = response.getError();
    if (err) {
      throw new GovernanceError({
        error_message: err.getErrorMessage(),
        error_type: err.getErrorType(),
      });
    }
    const createdNeuronId = response.getSpawn()?.getCreatedNeuronId();
    if (createdNeuronId !== undefined) {
      return BigInt(createdNeuronId.getId());
    }
    throw new UnrecognizedTypeError(
      `Unrecognized Spawn error in ${JSON.stringify(response)}`
    );
  };

  private mergeNeuronsHardwareWallet = async (
    request: MergeRequest
  ): Promise<void> => {
    const rawRequest = fromMergeRequest(request);
    await this.manageNeuronUpdateCall(rawRequest);
  };
}
