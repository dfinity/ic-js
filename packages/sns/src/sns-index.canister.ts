import { Canister, createServices } from "@dfinity/utils";
import type {
  GetTransactions,
  _SERVICE as SnsIndexService,
} from "../candid/sns_index";
import { idlFactory as certifiedIdlFactory } from "../candid/sns_index.certified.idl";
import { idlFactory } from "../candid/sns_index.idl";
import { toGetTransactionsArgs } from "./converters/sns-index.converters";
import { SnsIndexError } from "./errors/sns-index.errors";
import type { SnsCanisterOptions } from "./types/canister.options";
import type { GetAccountTransactionsParams } from "./types/sns-index.params";

export class SnsIndexCanister extends Canister<SnsIndexService> {
  static create(options: SnsCanisterOptions<SnsIndexService>) {
    const { service, certifiedService, canisterId } =
      createServices<SnsIndexService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new SnsIndexCanister(canisterId, service, certifiedService);
  }

  /**
   * Get the transactions of an account
   *
   * Always certified.
   * `get_account_transactions` needs to be called with an update
   * because the index canisters makes a call to the ledger canister to get the transaction data.
   * Index Canister only holds the transactions ids in state, not the whole transaction data.
   */
  getTransactions = async (
    params: GetAccountTransactionsParams
  ): Promise<GetTransactions> => {
    const response = await this.caller({
      certified: true,
    }).get_account_transactions(toGetTransactionsArgs(params));

    if ("Err" in response) {
      throw new SnsIndexError(response.Err.message);
    }

    return response.Ok;
  };
}
