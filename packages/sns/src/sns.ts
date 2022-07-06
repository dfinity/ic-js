import type { Principal } from "@dfinity/principal";
import type {
  CanisterStatusResultV2,
  _SERVICE as SnsRootCanister,
} from "../candid/sns_root";
import { GovernanceCanister } from "./governance.canister";
import { LedgerCanister } from "./ledger.canister";
import { RootCanister } from "./root.canister";
import { SnsCanisters } from "./sns.canisters";
import type { CanisterOptions } from "./types/canister.options";
import { assertNonNullish } from "./utils/asserts.utils";

export interface InitSnsCanistersOptions {
  rootOptions: CanisterOptions<SnsRootCanister>;
}

export interface InitSns {
  (options: InitSnsCanistersOptions): Promise<SnsCanisters>;
}

/**
 * Lookup for the canister ids of a Sns and initialize the wrapper to access all its features.
 * @param rootOptions - The options that will be used to instantiate the actors of the root canister of the particular Sns.
 */
export const initSns: InitSns = async ({
  rootOptions,
}: InitSnsCanistersOptions): Promise<SnsCanisters> => {
  const rootCanister: RootCanister = RootCanister.create(rootOptions);

  // TODO: this will be soon modified to variants, see canistersSummary details
  const canisters: Array<[string, Principal, CanisterStatusResultV2]> =
    await rootCanister.canistersSummary({});

  const canisterId = (
    type: "governance" | "ledger" | "swap"
  ): Principal | undefined =>
    canisters.find(
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

  return new SnsCanisters({
    root: rootCanister,
    governance: GovernanceCanister.create({ canisterId: governanceCanisterId }),
    ledger: LedgerCanister.create({ canisterId: ledgerCanisterId }),
  });
};
