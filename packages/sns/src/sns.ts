import type { Agent } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";
import type {
  ListSnsCanistersResponse,
  _SERVICE as SnsRootCanister,
} from "../candid/sns_root";
import { SnsGovernanceCanister } from "./governance.canister";
import { LedgerCanister } from "./ledger.canister";
import { RootCanister } from "./root.canister";
import { SnsWrapper } from "./sns.wrapper";
import { SwapCanister } from "./swap.canister";
import type { CanisterOptions } from "./types/canister.options";
import type { QueryParams } from "./types/query.params";
import { assertNonNullish } from "./utils/asserts.utils";
import { fromNullable } from "./utils/did.utils";

/**
 * Options to discover and initialize all canisters of a Sns.
 */
export interface InitSnsCanistersOptions extends QueryParams {
  /** An agent that can be used to override the default agent. Useful to target another environment that mainnet. */
  agent?: Agent;
  /** The options that will be used to instantiate the actors of the root canister of the particular Sns. */
  rootOptions: Omit<CanisterOptions<SnsRootCanister>, "agent">;
}

export interface InitSnsWrapper {
  (options: InitSnsCanistersOptions): Promise<SnsWrapper>;
}

/**
 * Lookup for the canister ids of a Sns and initialize the wrapper to access its features.
 */
export const initSnsWrapper: InitSnsWrapper = async ({
  agent,
  rootOptions,
  certified = true,
}: InitSnsCanistersOptions): Promise<SnsWrapper> => {
  const rootCanister: RootCanister = RootCanister.create({
    ...rootOptions,
    agent,
  });

  const { ledger, swap, governance }: ListSnsCanistersResponse =
    await rootCanister.listSnsCanisters({ certified });

  const governanceCanisterId: Principal | undefined = fromNullable(governance);
  const ledgerCanisterId: Principal | undefined = fromNullable(ledger);
  const swapCanisterId: Principal | undefined = fromNullable(swap);

  assertNonNullish(governanceCanisterId);
  assertNonNullish(ledgerCanisterId);
  assertNonNullish(swapCanisterId);

  return new SnsWrapper({
    root: rootCanister,
    governance: SnsGovernanceCanister.create({
      canisterId: governanceCanisterId,
      agent,
    }),
    ledger: LedgerCanister.create({ canisterId: ledgerCanisterId, agent }),
    swap: SwapCanister.create({ canisterId: swapCanisterId, agent }),
    certified,
  });
};
