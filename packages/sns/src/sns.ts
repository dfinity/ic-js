import type { Agent } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";
import { assertNonNullish, fromNullable } from "@dfinity/utils";
import { Icrc1LedgerCanister } from "../../ledger/src/ledger.canister";
import type {
  ListSnsCanistersResponse,
  _SERVICE as SnsRootService,
} from "../candid/sns_root";
import { SnsGovernanceCanister } from "./governance.canister";
import { SnsRootCanister } from "./root.canister";
import { SnsIndexCanister } from "./sns-index.canister";
import { SnsWrapper } from "./sns.wrapper";
import { SnsSwapCanister } from "./swap.canister";
import type { SnsCanisterOptions } from "./types/canister.options";
import type { QueryParams } from "./types/query.params";

/**
 * Options to discover and initialize all canisters of a Sns.
 */
export interface InitSnsCanistersOptions extends QueryParams {
  /** An agent that can be used to override the default agent. Useful to target another environment that mainnet. */
  agent?: Agent;
  /** The options that will be used to instantiate the actors of the root canister of the particular Sns. */
  rootOptions: Omit<SnsCanisterOptions<SnsRootService>, "agent">;
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
  const rootCanister: SnsRootCanister = SnsRootCanister.create({
    ...rootOptions,
    agent,
  });

  const { ledger, swap, governance, index }: ListSnsCanistersResponse =
    await rootCanister.listSnsCanisters({ certified });

  const governanceCanisterId: Principal | undefined = fromNullable(governance);
  const ledgerCanisterId: Principal | undefined = fromNullable(ledger);
  const swapCanisterId: Principal | undefined = fromNullable(swap);
  const indexCanisterId: Principal | undefined = fromNullable(index);

  assertNonNullish(governanceCanisterId);
  assertNonNullish(ledgerCanisterId);
  assertNonNullish(swapCanisterId);
  assertNonNullish(indexCanisterId);

  return new SnsWrapper({
    root: rootCanister,
    governance: SnsGovernanceCanister.create({
      canisterId: governanceCanisterId,
      agent,
    }),
    ledger: Icrc1LedgerCanister.create({ canisterId: ledgerCanisterId, agent }),
    swap: SnsSwapCanister.create({ canisterId: swapCanisterId, agent }),
    index: SnsIndexCanister.create({ canisterId: indexCanisterId, agent }),
    certified,
  });
};
