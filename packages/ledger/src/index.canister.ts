import { Canister, createServices } from "@dfinity/utils";
import type {
  GetTransactions,
  _SERVICE as IcrcIndexService,
} from "../candid/icrc1_index";
import { idlFactory as certifiedIdlFactory } from "../candid/icrc1_index.certified.idl";
import { idlFactory } from "../candid/icrc1_index.idl";
import { toGetTransactionsArgs } from "./converters/index.converters";
import { IndexError } from "./errors/index.errors";
import type { IcrcLedgerCanisterOptions } from "./types/canister.options";
import type { GetAccountTransactionsParams } from "./types/index.params";

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
   * Get the transactions of an account.
   *
   * @param {GetAccountTransactionsParams} params The parameters to get the transactions of an account.
   * @returns {Promise<GetTransactions>} The list of transactions and further related information of the given account.
   */
  getTransactions = async ({
    certified,
    ...rest
  }: GetAccountTransactionsParams): Promise<GetTransactions> => {
    const response = await this.caller({
      certified,
    }).get_account_transactions(toGetTransactionsArgs(rest));

    if ("Err" in response) {
      throw new IndexError(response.Err.message);
    }

    return response.Ok;
  };
}
