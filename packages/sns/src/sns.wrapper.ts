import type { Principal } from "@dfinity/principal";
import type { Neuron } from "../candid/sns_governance";
import type { GetStateResponse } from "../candid/sns_swap";
import type { GovernanceCanister } from "./governance.canister";
import type { LedgerCanister } from "./ledger.canister";
import type { RootCanister } from "./root.canister";
import type { SwapCanister } from "./swap.canister";
import type { ListNeuronsParams } from "./types/governance.params";
import type { QueryParams } from "./types/query.params";

interface SnsWrapperOptions {
  /** The wrapper for the "root" canister of the particular Sns */
  root: RootCanister;
  /** The wrapper for the "governance" canister of the particular Sns */
  governance: GovernanceCanister;
  /** The wrapper for the "ledger" canister of the particular Sns */
  ledger: LedgerCanister;
  /** The wrapper for the "swap" canister of the particular Sns */
  swap: SwapCanister;

  /** The wrapper has been instantiated and should perform query or update calls */
  certified: boolean;
}

/**
 * Sns wrapper - notably used by NNS-dapp - ease the access to a particular Sns.
 * It knows all the Sns' canisters, wrap and enhance their available features.
 * A wrapper either performs query or update calls.
 */
export class SnsWrapper {
  private readonly root: RootCanister;
  private readonly governance: GovernanceCanister;
  private readonly ledger: LedgerCanister;
  private readonly swap: SwapCanister;
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
  } {
    return {
      rootCanisterId: this.root.canisterId,
      ledgerCanisterId: this.ledger.canisterId,
      governanceCanisterId: this.governance.canisterId,
    };
  }

  listNeurons = (
    params: Omit<ListNeuronsParams, "certified">
  ): Promise<Neuron[]> => this.governance.listNeurons(this.mergeParams(params));

  metadata = (params: Omit<QueryParams, "certified">): Promise<string> =>
    this.governance.metadata(this.mergeParams(params));

  swapState = (
    params: Omit<QueryParams, "certified">
  ): Promise<GetStateResponse> => this.swap.state(this.mergeParams(params));

  private mergeParams(params: Omit<QueryParams, "certified">): QueryParams {
    return {
      ...params,
      certified: this.certified,
    };
  }
}
