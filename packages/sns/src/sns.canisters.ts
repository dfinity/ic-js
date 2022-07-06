import type { Neuron } from "../candid/sns_governance";
import type { GovernanceCanister } from "./governance.canister";
import type { LedgerCanister } from "./ledger.canister";
import type { RootCanister } from "./root.canister";
import type { ListNeuronsParams } from "./types/governance.params";

interface SnsCanistersOptions {
  root: RootCanister;
  governance: GovernanceCanister;
  ledger: LedgerCanister;
  // todo: add swap canister
}

/**
 * Sns canisters is a wrapper - notably used by NNS-dapp - to access a particular Sns.
 * It knows all the Sns' canisters, wrap and enhance the available features.
 */
export class SnsCanisters {
  private readonly root: RootCanister;
  private readonly governance: GovernanceCanister;
  private readonly ledger: LedgerCanister;

  /**
   * Constructor to instantiate a Sns
   * @param root - The wrapper for the "root" canister of the particular Sns
   * @param governance - The wrapper for the "governance" canister of the particular Sns
   * @param ledger - The wrapper for the "ledger" canister of the particular Sns
   */
  constructor({ root, governance, ledger }: SnsCanistersOptions) {
    this.root = root;
    this.governance = governance;
    this.ledger = ledger;
  }

  listNeurons = (params: ListNeuronsParams): Promise<Neuron[]> =>
    this.governance.listNeurons(params);
}
