import type { Agent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import type {
  CanisterStatusResultV2,
  _SERVICE as SnsRootCanister,
} from "../candid/sns_root";
import { GovernanceCanister } from "./governance.canister";
import { LedgerCanister } from "./ledger.canister";
import { RootCanister } from "./root.canister";
import { SnsWrapper } from "./sns.wrapper";
import { SwapCanister } from "./swap.canister";
import type { CanisterOptions } from "./types/canister.options";
import type { QueryParams } from "./types/query.params";
import { assertNonNullish } from "./utils/asserts.utils";

/**
 * Options to discover and initialize all canisters of a Sns.
 */
export interface InitSnsCanistersOptions extends QueryParams {
  /** An agent that can be used to override the default agent. Useful to target another environment that mainnet. */
  agent?: Agent;
  /** The options that will be used to instantiate the actors of the root canister of the particular Sns. */
  rootOptions: Omit<CanisterOptions<SnsRootCanister>, "agent">;
}

export interface InitSns {
  (options: InitSnsCanistersOptions): Promise<SnsWrapper>;
}

/**
 * Lookup for the canister ids of a Sns and initialize the wrapper to access its features.
 */
export const initSns: InitSns = async ({
  agent,
  rootOptions,
  certified = true,
}: InitSnsCanistersOptions): Promise<SnsWrapper> => {
  const rootCanister: RootCanister = RootCanister.create({
    ...rootOptions,
    agent,
  });

  // TODO: this will be soon modified to variants, see canistersSummary details
  const canisters: Array<[string, Principal, CanisterStatusResultV2]> =
    await rootCanister.canistersSummary({ certified });

  const canisterId = (
    type: "governance" | "ledger" | "swap"
  ): Principal | undefined =>
    canisters.find(
      /* eslint-disable @typescript-eslint/no-unused-vars */
      ([canisterType, _canisterId, _status]: [
        string,
        Principal,
        CanisterStatusResultV2
      ]) => canisterType === type
    )?.[1];

  const governanceCanisterId: Principal | undefined = canisterId("governance");
  const ledgerCanisterId: Principal | undefined = canisterId("ledger");

  // TODO: not yet provided, see canistersSummary
  // const swapCanisterId: Principal | undefined = canisterId('swap');
  const swapCanisterId: Principal | undefined = Principal.fromText(
    "mr56c-4qaaa-aaaaa-aacgq-cai"
  );

  assertNonNullish(governanceCanisterId);
  assertNonNullish(ledgerCanisterId);
  assertNonNullish(swapCanisterId);

  return new SnsWrapper({
    root: rootCanister,
    governance: GovernanceCanister.create({
      canisterId: governanceCanisterId,
      agent,
    }),
    ledger: LedgerCanister.create({ canisterId: ledgerCanisterId, agent }),
    swap: SwapCanister.create({ canisterId: swapCanisterId, agent }),
    certified,
  });
};
