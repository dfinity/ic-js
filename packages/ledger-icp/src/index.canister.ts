import { Canister, createServices, type CanisterOptions } from "@dfinity/utils";
import type { _SERVICE as IndexService } from "../candid/index";
import { idlFactory as certifiedIdlFactory } from "../candid/ledger.certified.idl";
import { idlFactory } from "../candid/ledger.idl";
import { MAINNET_INDEX_CANISTER_ID } from "./constants/canister_ids";
import type { AccountBalanceParams } from "./types/ledger.params";
import { paramToAccountIdentifier } from "./utils/params.utils";

export class IndexCanister extends Canister<IndexService> {
  static create({
    canisterId: optionsCanisterId,
    ...options
  }: CanisterOptions<IndexService>) {
    const { service, certifiedService, canisterId } =
      createServices<IndexService>({
        options: {
          ...options,
          canisterId: optionsCanisterId ?? MAINNET_INDEX_CANISTER_ID,
        },
        idlFactory,
        certifiedIdlFactory,
      });

    return new IndexCanister(canisterId, service, certifiedService);
  }

  /**
   * Returns the balance of the specified account identifier.
   *
   * @param {AccountBalanceParams} params The parameters to get the balance of an account.
   * @param {AccountIdentifierParam} params.accountIdentifier The account identifier provided either as hex string or as an AccountIdentifier.
   * @param {boolean} params.certified query or update call.
   * @returns {Promise<bigint>} The balance of the given account.
   */
  accountBalance = ({
    certified,
    accountIdentifier,
  }: AccountBalanceParams): Promise<bigint> =>
    this.caller({ certified }).get_account_identifier_balance(
      paramToAccountIdentifier(accountIdentifier).toHex(),
    );
}
