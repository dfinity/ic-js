import { createServices, toNullable } from "@dfinity/utils";
import type {
  BlockIndex,
  Tokens,
  _SERVICE as SnsLedgerService,
} from "../candid/icrc1_ledger";
import { idlFactory as certifiedIdlFactory } from "../candid/icrc1_ledger.certified.idl";
import { idlFactory } from "../candid/icrc1_ledger.idl";
import { toTransferArg } from "./converters/ledger.converteres";
import { SnsTransferError } from "./errors/ledger.errors";
import { Canister } from "./services/canister";
import type { SnsCanisterOptions } from "./types/canister.options";
import type { BalanceParams, TransferParams } from "./types/ledger.params";
import type { SnsTokenMetadataResponse } from "./types/ledger.responses";
import type { QueryParams } from "./types/query.params";

export class SnsLedgerCanister extends Canister<SnsLedgerService> {
  static create(options: SnsCanisterOptions<SnsLedgerService>) {
    const { service, certifiedService, canisterId } =
      createServices<SnsLedgerService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new SnsLedgerCanister(canisterId, service, certifiedService);
  }

  /**
   * The token metadata (name, symbol, etc.).
   */
  metadata = (params: QueryParams): Promise<SnsTokenMetadataResponse> =>
    this.caller(params).icrc1_metadata();

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
   * @throws {SnsTransferError} If the transfer fails.
   */
  transfer = async (params: TransferParams): Promise<BlockIndex> => {
    const response = await this.caller({ certified: true }).icrc1_transfer(
      toTransferArg(params)
    );
    if ("Err" in response) {
      throw new SnsTransferError({
        type: response.Err,
        msg: "Failed to transfer",
      });
    }
    if ("Ok" in response) {
      return response.Ok;
    }
    // Edger case, should never happen.
    throw new Error("Unexpected response from transfer");
  };
}
