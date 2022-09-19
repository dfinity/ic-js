import type { Principal } from "@dfinity/principal";
import type { Tokens } from "../candid/icrc1_ledger";
import type { GetMetadataResponse, Neuron } from "../candid/sns_governance";
import type {
  BuyerState,
  GetBuyerStateRequest,
  GetStateResponse,
  RefreshBuyerTokensRequest,
} from "../candid/sns_swap";
import type { SnsGovernanceCanister } from "./governance.canister";
import type { SnsLedgerCanister } from "./ledger.canister";
import type { SnsRootCanister } from "./root.canister";
import type { SnsSwapCanister } from "./swap.canister";
import type {
  SnsGetNeuronParams,
  SnsListNeuronsParams,
  SnsNeuronPermissionsParams,
} from "./types/governance.params";
import type { BalanceParams } from "./types/ledger.params";
import type { SnsTokenMetadataResponse } from "./types/ledger.responses";
import type { QueryParams } from "./types/query.params";

interface SnsWrapperOptions {
  /** The wrapper for the "root" canister of the particular Sns */
  root: SnsRootCanister;
  /** The wrapper for the "governance" canister of the particular Sns */
  governance: SnsGovernanceCanister;
  /** The wrapper for the "ledger" canister of the particular Sns */
  ledger: SnsLedgerCanister;
  /** The wrapper for the "swap" canister of the particular Sns */
  swap: SnsSwapCanister;

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
  private readonly certified: boolean;

  /**
   * Constructor to instantiate a Sns
   */
  constructor({
    root,
    governance,
    ledger,
    swap,
    certified,
  }: SnsWrapperOptions) {
    this.root = root;
    this.governance = governance;
    this.ledger = ledger;
    this.swap = swap;
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

  metadata = (
    params: Omit<QueryParams, "certified">
  ): Promise<[GetMetadataResponse, SnsTokenMetadataResponse]> =>
    Promise.all([
      this.governance.metadata(this.mergeParams(params)),
      this.ledger.metadata(this.mergeParams(params)),
    ]);

  ledgerMetadata = (
    params: Omit<QueryParams, "certified">
  ): Promise<SnsTokenMetadataResponse> =>
    this.ledger.metadata(this.mergeParams(params));

  balance = (params: Omit<BalanceParams, "certified">): Promise<Tokens> =>
    this.ledger.balance(this.mergeParams(params));

  getNeuron = (
    params: Omit<SnsGetNeuronParams, "certified">
  ): Promise<Neuron> => this.governance.getNeuron(this.mergeParams(params));

  // Always certified
  addNeuronPermissions = (params: SnsNeuronPermissionsParams): Promise<void> =>
    this.governance.addNeuronPermissions(params);

  // Always certified
  removeNeuronPermissions = (
    params: SnsNeuronPermissionsParams
  ): Promise<void> => this.governance.removeNeuronPermissions(params);

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

  private mergeParams<T>(params: T): QueryParams & T {
    return {
      ...params,
      certified: this.certified,
    };
  }
}
