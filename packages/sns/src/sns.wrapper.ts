import type { Principal } from "@dfinity/principal";
import type { Neuron } from "../candid/sns_governance";
import type { GovernanceCanister } from "./governance.canister";
import type { LedgerCanister } from "./ledger.canister";
import type { RootCanister } from "./root.canister";
import type { ListNeuronsParams } from "./types/governance.params";
import type { QueryParams } from "./types/query.params";

interface SnsWrapperOptions {
  /** The wrapper for the "root" canister of the particular Sns */
  root: RootCanister;
  /** The wrapper for the "governance" canister of the particular Sns */
  governance: GovernanceCanister;
  /** The wrapper for the "ledger" canister of the particular Sns */
  ledger: LedgerCanister;
  // TODO: add swap canister

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
  private readonly certified: boolean;

  /**
   * Constructor to instantiate a Sns
   */
  constructor({ root, governance, ledger, certified }: SnsWrapperOptions) {
    this.root = root;
    this.governance = governance;
    this.ledger = ledger;
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
  ): Promise<Neuron[]> =>
    this.governance.listNeurons({
      ...params,
      certified: this.certified,
    });

  metadata = (params: Omit<QueryParams, "certified">): Promise<string> =>
    this.governance.metadata({
      ...params,
      certified: this.certified,
    });
}
