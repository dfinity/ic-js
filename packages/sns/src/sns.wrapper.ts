import type { Principal } from "@dfinity/principal";
import type { Neuron } from "../candid/sns_governance";
import type { GovernanceCanister } from "./governance.canister";
import type { LedgerCanister } from "./ledger.canister";
import type { RootCanister } from "./root.canister";
import type { CanisterParams } from "./types/canister.params";
import type { ListNeuronsParams } from "./types/governance.params";

interface SnsWrapperOptions {
  root: RootCanister;
  governance: GovernanceCanister;
  ledger: LedgerCanister;
  // todo: add swap canister
}

/**
 * Sns wrapper - notably used by NNS-dapp - ease the access to a particular Sns.
 * It knows all the Sns' canisters, wrap and enhance the available features.
 */
export class SnsWrapper {
  private readonly root: RootCanister;
  private readonly governance: GovernanceCanister;
  private readonly ledger: LedgerCanister;

  /**
   * Constructor to instantiate a Sns
   * @param root - The wrapper for the "root" canister of the particular Sns
   * @param governance - The wrapper for the "governance" canister of the particular Sns
   * @param ledger - The wrapper for the "ledger" canister of the particular Sns
   */
  constructor({ root, governance, ledger }: SnsWrapperOptions) {
    this.root = root;
    this.governance = governance;
    this.ledger = ledger;
  }

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

  listNeurons = (params: ListNeuronsParams): Promise<Neuron[]> =>
    this.governance.listNeurons(params);

  metadata = async (params: CanisterParams): Promise<string> =>
    this.governance.metadata(params);
}
