import type { Principal } from "@dfinity/principal";
import { createServices, type QueryParams } from "@dfinity/utils";
import type {
  GetTransactions,
  _SERVICE as IcrcIndexNgService,
} from "../candid/icrc_index-ng";
import { idlFactory as certifiedIdlFactory } from "../candid/icrc_index-ng.certified.idl";
import { idlFactory } from "../candid/icrc_index-ng.idl";
import { IcrcCanister } from "./canister";
import { toGetTransactionsArgs } from "./converters/index.converters";
import { IndexError } from "./errors/index.errors";
import type { IcrcLedgerCanisterOptions } from "./types/canister.options";
import type { GetIndexNgAccountTransactionsParams } from "./types/index-ng.params";

export class IcrcIndexNgCanister extends IcrcCanister<IcrcIndexNgService> {
  static create(options: IcrcLedgerCanisterOptions<IcrcIndexNgService>) {
    const { service, certifiedService, canisterId } =
      createServices<IcrcIndexNgService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new IcrcIndexNgCanister(canisterId, service, certifiedService);
  }

  /**
   * Get the transactions of an account
   *
   * Always certified.
   * `get_account_transactions` needs to be called with an update
   * because the index canisters makes a call to the ledger canister to get the transaction data.
   * Index Canister only holds the transactions ids in state, not the whole transaction data.
   */
  /**
   * Get the transactions of an account.
   *
   * @param {GetAccountTransactionsParams} params The parameters to get the transactions of an account.
   * @returns {Promise<GetTransactions>} The list of transactions and further related information of the given account.
   */
  getTransactions = async ({
    certified,
    ...rest
  }: GetIndexNgAccountTransactionsParams): Promise<GetTransactions> => {
    const response = await this.caller({
      certified,
    }).get_account_transactions(toGetTransactionsArgs(rest));

    if ("Err" in response) {
      throw new IndexError(response.Err.message);
    }

    return response.Ok;
  };

  /**
   * Returns the ledger canister ID related to the index canister.
   */
  ledgerId = (params: QueryParams): Promise<Principal> => {
    const { ledger_id } = this.caller(params);
    return ledger_id();
  };
}
