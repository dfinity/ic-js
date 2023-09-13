import type { QueryParams } from "@dfinity/utils";
import { createServices } from "@dfinity/utils";
import type {
  BlockIndex,
  Tokens,
  _SERVICE as IcrcLedgerService,
} from "../candid/icrc1_ledger";
import { idlFactory as certifiedIdlFactory } from "../candid/icrc1_ledger.certified.idl";
import { idlFactory } from "../candid/icrc1_ledger.idl";
import { IcrcCanister } from "./canister";
import { toTransferArg } from "./converters/ledger.converters";
import { IcrcTransferError } from "./errors/ledger.errors";
import type { IcrcLedgerCanisterOptions } from "./types/canister.options";
import type { TransferParams } from "./types/ledger.params";
import type { IcrcTokenMetadataResponse } from "./types/ledger.responses";

export class IcrcLedgerCanister extends IcrcCanister<IcrcLedgerService> {
  static create(options: IcrcLedgerCanisterOptions<IcrcLedgerService>) {
    const { service, certifiedService, canisterId } =
      createServices<IcrcLedgerService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new IcrcLedgerCanister(canisterId, service, certifiedService);
  }

  /**
   * The token metadata (name, symbol, etc.).
   */
  metadata = (params: QueryParams): Promise<IcrcTokenMetadataResponse> =>
    this.caller(params).icrc1_metadata();

  /**
   * The ledger transaction fees.
   *
   * @returns {Tokens} The ledger transaction fees in Tokens
   */
  transactionFee = (params: QueryParams): Promise<Tokens> =>
    this.caller(params).icrc1_fee();

  /**
   * Transfers tokens from the sender to the given account.
   *
   * @param {TransferArg} params The parameters to transfer tokens.
   *
   * @throws {IcrcTransferError} If the transfer fails.
   */
  transfer = async (params: TransferParams): Promise<BlockIndex> => {
    const response = await this.caller({ certified: true }).icrc1_transfer(
      toTransferArg(params),
    );
    if ("Err" in response) {
      throw new IcrcTransferError({
        errorType: response.Err,
        msg: "Failed to transfer",
      });
    }
    return response.Ok;
  };

  /**
   * Returns the total supply of tokens.
   */
  totalTokensSupply = (params: QueryParams): Promise<Tokens> => {
    return this.caller(params).icrc1_total_supply();
  };
}
