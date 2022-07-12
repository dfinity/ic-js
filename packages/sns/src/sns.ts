import type { Agent } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";
import type {
  CanisterStatusResultV2,
  _SERVICE as SnsRootCanister,
} from "../candid/sns_root";
import { GovernanceCanister } from "./governance.canister";
import { LedgerCanister } from "./ledger.canister";
import { RootCanister } from "./root.canister";
import { SnsWrapper } from "./sns.wrapper";
import type { CanisterOptions } from "./types/canister.options";
import type { QueryParams } from "./types/query.params";
import { assertNonNullish } from "./utils/asserts.utils";

export interface InitSnsCanistersOptions extends QueryParams {
  agent?: Agent;
  rootOptions: Omit<CanisterOptions<SnsRootCanister>, "agent">;
}

export interface InitSns {
  (options: InitSnsCanistersOptions): Promise<SnsWrapper>;
}

/**
 * Lookup for the canister ids of a Sns and initialize the wrapper to access its features.
 *
 * @param {Object} params
 * @param params.agent - An agent that can be used to override the default agent. Useful to target another environment that mainnet.
 * @param params.rootOptions - The options that will be used to instantiate the actors of the root canister of the particular Sns.
 * @param {boolean} [params.certified=true] - Perform update calls (certified) or query calls (not certified).
 *
 * @return A Sns wrapper that inherits the certified mode that has been used for initialization purpose - i.e. an all wrapper either performs query or update calls.
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

  assertNonNullish(governanceCanisterId);
  assertNonNullish(ledgerCanisterId);
  // assert(swapCanisterId);

  return new SnsWrapper({
    root: rootCanister,
    governance: GovernanceCanister.create({
      canisterId: governanceCanisterId,
      agent,
    }),
    ledger: LedgerCanister.create({ canisterId: ledgerCanisterId, agent }),
    certified,
  });
};
