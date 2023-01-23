import { createServices, toNullable } from "@dfinity/utils";
import type {
  BlockIndex,
  Tokens,
  _SERVICE as Icrc1SnsLedgerService,
} from "../candid/icrc1_ledger";
import { idlFactory as certifiedIdlFactory } from "../candid/icrc1_ledger.certified.idl";
import { idlFactory } from "../candid/icrc1_ledger.idl";
import { toTransferArg } from "./converters/ledger.converters";
import { Icrc1TransferError } from "./errors/ledger.errors";
import { Canister } from "./services/canister";
import type { Icrc1LedgerCanisterOptions } from "./types/canister.options";
import type { BalanceParams, TransferParams } from "./types/ledger.params";
import type { Icrc1TokenMetadataResponse } from "./types/ledger.responses";
import type { QueryParams } from "./types/query.params";

export class Icrc1LedgerCanister extends Canister<Icrc1SnsLedgerService> {
  static create(options: Icrc1LedgerCanisterOptions<Icrc1SnsLedgerService>) {
    const { service, certifiedService, canisterId } =
      createServices<Icrc1SnsLedgerService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new Icrc1LedgerCanister(canisterId, service, certifiedService);
  }

  /**
   * The token metadata (name, symbol, etc.).
   */
  metadata = (params: QueryParams): Promise<Icrc1TokenMetadataResponse> =>
    this.caller(params).icrc1_metadata();

  /**
   * The ledger transaction fees.
   *
   * @returns {Tokens} The ledger transaction fees in Tokens
   */
  transactionFee = (params: QueryParams): Promise<Tokens> =>
    this.caller(params).icrc1_fee();

  /**
   * Returns the balance of the given account.
   *
   * @param {BalanceParams} params The parameters to get the balance of an account.
   * @returns {Promise<Tokens>} The balance of the given account.
   */
  balance = (params: BalanceParams): Promise<Tokens> =>
    this.caller({ certified: params.certified }).icrc1_balance_of({
      owner: params.owner,
      subaccount: toNullable(params.subaccount),
    });

  /**
   * Transfers tokens from the sender to the given account.
   *
   * @param {TransferArg} params The parameters to transfer tokens.
   *
   * @throws {Icrc1TransferError} If the transfer fails.
   */
  transfer = async (params: TransferParams): Promise<BlockIndex> => {
    const response = await this.caller({ certified: true }).icrc1_transfer(
      toTransferArg(params)
    );
    if ("Err" in response) {
      throw new Icrc1TransferError({
        errorType: response.Err,
        msg: "Failed to transfer",
      });
    }
    return response.Ok;
  };
}
