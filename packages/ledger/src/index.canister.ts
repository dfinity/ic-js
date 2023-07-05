import { createServices, toNullable } from "@dfinity/utils";
import type {
  GetTransactions,
  Tokens,
  _SERVICE as IcrcIndexService,
} from "../candid/icrc1_index";
import { idlFactory as certifiedIdlFactory } from "../candid/icrc1_index.certified.idl";
import { idlFactory } from "../candid/icrc1_index.idl";
import { IcrcCanister } from "./canister";
import { toGetTransactionsArgs } from "./converters/index.converters";
import { IndexError } from "./errors/index.errors";
import type { IcrcLedgerCanisterOptions } from "./types/canister.options";
import type { GetAccountTransactionsParams } from "./types/index.params";
import type { BalanceParams } from "./types/ledger.params";

export class IcrcIndexCanister extends IcrcCanister<IcrcIndexService> {
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

  /**
   * Returns the balance for a given account provided as owner and with optional subaccount.
   *
   * @param {BalanceParams} params The parameters to get the balance of an account.
   * @returns {Promise<Tokens>} The balance of the given account.
   */
  balance = (params: BalanceParams): Promise<Tokens> =>
    this.caller({ certified: params.certified }).icrc1_balance_of({
      owner: params.owner,
      subaccount: toNullable(params.subaccount),
    });
}
