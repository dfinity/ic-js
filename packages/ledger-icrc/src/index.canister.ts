import { Canister, createServices } from "@dfinity/utils";
import type {
  GetTransactions,
  _SERVICE as IcrcIndexService,
} from "../candid/icrc_index";
import { idlFactory as certifiedIdlFactory } from "../candid/icrc_index.certified.idl";
import { idlFactory } from "../candid/icrc_index.idl";
import { toGetTransactionsArgs } from "./converters/index.converters";
import { IndexError } from "./errors/index.errors";
import type { IcrcLedgerCanisterOptions } from "./types/canister.options";
import type { GetAccountTransactionsParams } from "./types/index.params";

/**
 * @deprecated Replaced by `IcrcIndexNgCanister`, which requires interacting with an Index canister that has been upgraded to the so-called `index-ng` WASM.
 */
export class IcrcIndexCanister extends Canister<IcrcIndexService> {
  static create(options: IcrcLedgerCanisterOptions<IcrcIndexService>) {
    const { service, certifiedService, canisterId } =
      createServices<IcrcIndexService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new IcrcIndexCanister(canisterId, service, certifiedService);
  }

  /**
   * Get the transactions of an account
   *
   * Always certified.
   * `get_account_transactions` needs to be called with an update
   * because the index canisters makes a call to the ledger canister to get the transaction data.
   * Index Canister only holds the transactions ids in state, not the whole transaction data.
   *
   * @deprecated Replaced by `IcrcIndexNgCanister.getTransactions`.
   */
  getTransactions = async (
    params: GetAccountTransactionsParams,
  ): Promise<GetTransactions> => {
    const response = await this.caller({
      certified: true,
    }).get_account_transactions(toGetTransactionsArgs(params));

    if ("Err" in response) {
      throw new IndexError(response.Err.message);
    }

    return response.Ok;
  };
}
