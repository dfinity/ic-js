import type { Principal } from "@dfinity/principal";
import { bigIntToUint8Array, toNullable } from "@dfinity/utils";
import type { BlockIndex, Tokens } from "../candid/icrc1_ledger";
import type {
  GetMetadataResponse,
  ListNervousSystemFunctionsResponse,
  NervousSystemParameters,
  Neuron,
  NeuronId,
} from "../candid/sns_governance";
import type { GetTransactions } from "../candid/sns_index";
import type {
  BuyerState,
  GetBuyerStateRequest,
  GetStateResponse,
  RefreshBuyerTokensRequest,
} from "../candid/sns_swap";
import { MAX_NEURONS_SUBACCOUNTS } from "./constants/governance.constants";
import { SnsGovernanceError } from "./errors/governance.errors";
import type { SnsGovernanceCanister } from "./governance.canister";
import type { SnsLedgerCanister } from "./ledger.canister";
import type { SnsRootCanister } from "./root.canister";
import type { SnsIndexCanister } from "./sns-index.canister";
import type { SnsSwapCanister } from "./swap.canister";
import type {
  SnsClaimNeuronParams,
  SnsDisburseNeuronParams,
  SnsGetNeuronParams,
  SnsIncreaseDissolveDelayParams,
  SnsListNeuronsParams,
  SnsNeuronAutoStakeMaturityParams,
  SnsNeuronPermissionsParams,
  SnsNeuronStakeMaturityParams,
  SnsSetDissolveTimestampParams,
  SnsSetTopicFollowees,
  SnsStakeNeuronParams,
} from "./types/governance.params";
import type { BalanceParams, TransferParams } from "./types/ledger.params";
import type {
  SnsAccount,
  SnsTokenMetadataResponse,
} from "./types/ledger.responses";
import type { QueryParams } from "./types/query.params";
import type { GetAccountTransactionsParams } from "./types/sns-index.params";
import { neuronSubaccount } from "./utils/governance.utils";

interface SnsWrapperOptions {
  /** The wrapper for the "root" canister of the particular Sns */
  root: SnsRootCanister;
  /** The wrapper for the "governance" canister of the particular Sns */
  governance: SnsGovernanceCanister;
  /** The wrapper for the "ledger" canister of the particular Sns */
  ledger: SnsLedgerCanister;
  /** The wrapper for the "swap" canister of the particular Sns */
  swap: SnsSwapCanister;
  /** The wrapper for the "index" canister of the particular Sns */
  index: SnsIndexCanister;

  /** The wrapper has been instantiated and should perform query or update calls */
  certified: boolean;
}

/**
 * Sns wrapper - notably used by NNS-dapp - ease the access to a particular Sns.
 * It knows all the Sns' canisters, wrap and enhance their available features.
 * A wrapper either performs query or update calls.
 */
export class SnsWrapper {
  private readonly root: SnsRootCanister;
  private readonly governance: SnsGovernanceCanister;
  private readonly ledger: SnsLedgerCanister;
  private readonly swap: SnsSwapCanister;
  private readonly index: SnsIndexCanister;
  private readonly certified: boolean;

  /**
   * Constructor to instantiate a Sns
   */
  constructor({
    root,
    governance,
    ledger,
    swap,
    index: index,
    certified,
  }: SnsWrapperOptions) {
    this.root = root;
    this.governance = governance;
    this.ledger = ledger;
    this.swap = swap;
    this.index = index;
    this.certified = certified;
  }

  /**
   * Binds the list of canister ids of the Sns.
   */
  get canisterIds(): {
    rootCanisterId: Principal;
    ledgerCanisterId: Principal;
    governanceCanisterId: Principal;
    swapCanisterId: Principal;
  } {
    return {
      rootCanisterId: this.root.canisterId,
      ledgerCanisterId: this.ledger.canisterId,
      governanceCanisterId: this.governance.canisterId,
      swapCanisterId: this.swap.canisterId,
    };
  }

  listNeurons = (
    params: Omit<SnsListNeuronsParams, "certified">
  ): Promise<Neuron[]> => this.governance.listNeurons(this.mergeParams(params));

  listNervousSystemFunctions = (
    params: Omit<QueryParams, "certified">
  ): Promise<ListNervousSystemFunctionsResponse> =>
    this.governance.listNervousSystemFunctions(this.mergeParams(params));

  metadata = (
    params: Omit<QueryParams, "certified">
  ): Promise<[GetMetadataResponse, SnsTokenMetadataResponse]> =>
    Promise.all([
      this.governance.metadata(this.mergeParams(params)),
      this.ledger.metadata(this.mergeParams(params)),
    ]);

  nervousSystemParameters = (
    params: Omit<QueryParams, "certified">
  ): Promise<NervousSystemParameters> =>
    this.governance.nervousSystemParameters(this.mergeParams(params));

  ledgerMetadata = (
    params: Omit<QueryParams, "certified">
  ): Promise<SnsTokenMetadataResponse> =>
    this.ledger.metadata(this.mergeParams(params));

  transactionFee = (params: Omit<QueryParams, "certified">): Promise<Tokens> =>
    this.ledger.transactionFee(this.mergeParams(params));

  balance = (params: Omit<BalanceParams, "certified">): Promise<Tokens> =>
    this.ledger.balance(this.mergeParams(params));

  // Always certified
  transfer = (params: TransferParams): Promise<BlockIndex> =>
    this.ledger.transfer(params);

  getNeuron = (
    params: Omit<SnsGetNeuronParams, "certified">
  ): Promise<Neuron> => this.governance.getNeuron(this.mergeParams(params));

  queryNeuron = (
    params: Omit<SnsGetNeuronParams, "certified">
  ): Promise<Neuron | undefined> =>
    this.governance.queryNeuron(this.mergeParams(params));

  /**
   * Returns the subaccount of the next neuron to be created.
   *
   * The neuron account is a subaccount of the governance canister.
   * The subaccount is derived from the controller and an ascending index.
   *
   * ‼️ The id of the neuron is the subaccount (neuron ID = subaccount) ‼️.
   *
   * If the neuron does not exist for that subaccount, then we use it for the next neuron.
   *
   * The index is used in the memo of the transfer and when claiming the neuron.
   * This is how the backend can identify which neuron is being claimed.
   *
   * @param controller
   * @returns
   */
  nextNeuronAccount = async (
    controller: Principal
  ): Promise<{ account: SnsAccount; index: bigint }> => {
    // TODO: try parallilizing requests to improve performance
    for (let index = 0; index < MAX_NEURONS_SUBACCOUNTS; index++) {
      const subaccount = neuronSubaccount({ index, controller });

      const neuronId: NeuronId = { id: subaccount };
      let neuron = await this.governance.queryNeuron({
        neuronId,
        certified: false,
      });
      if (neuron === undefined) {
        // Recheck with update call whether the neuron does not exist
        neuron = await this.governance.queryNeuron({
          neuronId,
          certified: true,
        });
        // If the neuron does not exist, we can use this subaccount
        if (neuron === undefined) {
          return {
            account: {
              owner: this.canisterIds.governanceCanisterId,
              subaccount,
            },
            index: BigInt(index),
          };
        }
      }
    }
    throw new SnsGovernanceError("No more neuron accounts available");
  };

  /**
   * Stakes a neuron.
   *
   * This is a convenient method that transfers the stake to the neuron subaccount and then claims the neuron.
   *
   * @param {SnsStakeNeuronParams} params
   * @param {Principal} params.controller
   * @param {bigint} params.stakeE8s
   * @param {source} param.source
   * @returns {NeuronId}
   */
  stakeNeuron = async ({
    stakeE8s,
    source,
    controller,
  }: SnsStakeNeuronParams): Promise<NeuronId> => {
    this.assertCertified("stakeNeuron");
    const { account: neuronAccount, index } = await this.nextNeuronAccount(
      controller
    );
    // This should not happen. The neuron account is always a subaccount of the SNS governance canister.
    if (neuronAccount.subaccount === undefined) {
      throw new SnsGovernanceError(
        "There was an error creating the neuron subaccount"
      );
    }
    await this.ledger.transfer({
      amount: stakeE8s,
      to: {
        owner: neuronAccount.owner,
        subaccount: toNullable(neuronAccount.subaccount),
      },
      from_subaccount: source.subaccount,
      memo: bigIntToUint8Array(index),
    });
    return this.governance.claimNeuron({
      memo: BigInt(index),
      controller,
      subaccount: neuronAccount.subaccount,
    });
  };

  getNeuronBalance = async (neuronId: NeuronId): Promise<Tokens> => {
    const account = {
      owner: this.canisterIds.governanceCanisterId,
      subaccount: neuronId.id,
    };
    return this.ledger.balance({ ...account, certified: this.certified });
  };

  // Always certified
  addNeuronPermissions = (params: SnsNeuronPermissionsParams): Promise<void> =>
    this.governance.addNeuronPermissions(params);

  // Always certified
  refreshNeuron = (neuronId: NeuronId): Promise<void> =>
    this.governance.refreshNeuron(neuronId);

  // Always certified
  claimNeuron = (params: SnsClaimNeuronParams): Promise<NeuronId> =>
    this.governance.claimNeuron(params);

  // Always certified
  removeNeuronPermissions = (
    params: SnsNeuronPermissionsParams
  ): Promise<void> => this.governance.removeNeuronPermissions(params);

  // Always certified
  disburse = (params: SnsDisburseNeuronParams): Promise<void> =>
    this.governance.disburse(params);

  // Always certified
  startDissolving = (neuronId: NeuronId): Promise<void> =>
    this.governance.startDissolving(neuronId);

  // Always certified
  stopDissolving = (neuronId: NeuronId): Promise<void> =>
    this.governance.stopDissolving(neuronId);

  // Always certified
  setDissolveTimestamp = (
    params: SnsSetDissolveTimestampParams
  ): Promise<void> => this.governance.setDissolveTimestamp(params);

  // Always certified
  increaseDissolveDelay = (
    params: SnsIncreaseDissolveDelayParams
  ): Promise<void> => this.governance.increaseDissolveDelay(params);

  // Always certified
  setTopicFollowees = (params: SnsSetTopicFollowees): Promise<void> =>
    this.governance.setTopicFollowees(params);

  swapState = (
    params: Omit<QueryParams, "certified">
  ): Promise<GetStateResponse> => this.swap.state(this.mergeParams(params));

  // Always certified
  notifyParticipation = (params: RefreshBuyerTokensRequest): Promise<void> =>
    this.swap.notifyParticipation(params);

  getUserCommitment = (
    params: GetBuyerStateRequest
  ): Promise<BuyerState | undefined> =>
    this.swap.getUserCommitment(this.mergeParams(params));

  // Always certified
  getTransactions = (
    params: GetAccountTransactionsParams
  ): Promise<GetTransactions> => this.index.getTransactions(params);

  // Always certified
  stakeMaturity = (params: SnsNeuronStakeMaturityParams): Promise<void> =>
    this.governance.stakeMaturity(params);

  // Always certified
  autoStakeMaturity = (
    params: SnsNeuronAutoStakeMaturityParams
  ): Promise<void> => this.governance.autoStakeMaturity(params);

  private mergeParams<T>(params: T): QueryParams & T {
    return {
      ...params,
      certified: this.certified,
    };
  }

  private assertCertified = (name: string): void => {
    if (!this.certified) {
      throw new SnsGovernanceError(`Call to ${name} needs to be certified`);
    }
  };
}
