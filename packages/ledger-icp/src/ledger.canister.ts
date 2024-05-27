import type { Principal } from "@dfinity/principal";
import { Canister, createServices, type QueryParams } from "@dfinity/utils";
import type { _SERVICE as LedgerService, Value } from "../candid/ledger";
import { idlFactory as certifiedIdlFactory } from "../candid/ledger.certified.idl";
import { idlFactory } from "../candid/ledger.idl";
import {
  toIcrc1TransferRawRequest,
  toTransferRawRequest,
} from "./canisters/ledger/ledger.request.converts";
import { MAINNET_LEDGER_CANISTER_ID } from "./constants/canister_ids";
import {
  mapIcrc1TransferError,
  mapTransferError,
} from "./errors/ledger.errors";
import type { BlockHeight } from "./types/common";
import type { LedgerCanisterOptions } from "./types/ledger.options";
import type { AccountBalanceParams } from "./types/ledger.params";
import type {
  Icrc1TransferRequest,
  TransferRequest,
} from "./types/ledger_converters";
import { paramToAccountIdentifier } from "./utils/params.utils";

export class LedgerCanister extends Canister<LedgerService> {
  public static create(options: LedgerCanisterOptions = {}) {
    const canisterId: Principal =
      options.canisterId ?? MAINNET_LEDGER_CANISTER_ID;

    const { service, certifiedService } = createServices<LedgerService>({
      options: {
        ...options,
        canisterId,
      },
      idlFactory,
      certifiedIdlFactory,
    });

    return new LedgerCanister(canisterId, service, certifiedService);
  }

  /**
   * Returns the balance of the specified account identifier.
   *
   * If `certified` is true, the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   *
   * @param {AccountBalanceParams} params The parameters to get the balance of an account.
   * @param {AccountIdentifierParam} params.accountIdentifier The account identifier provided either as hex string or as an AccountIdentifier.
   * @param {boolean} params.certified query or update call.
   * @returns {Promise<bigint>} The balance of the given account.
   * @throws {@link Error}
   */
  public accountBalance = async ({
    accountIdentifier: accountIdentifierParam,
    certified = true,
  }: AccountBalanceParams): Promise<bigint> => {
    const accountIdentifier = paramToAccountIdentifier(accountIdentifierParam);

    const service = certified ? this.certifiedService : this.service;
    const tokens = await service.account_balance({
      account: accountIdentifier.toUint8Array(),
    });
    return tokens.e8s;
  };

  /**
   * Fetches the ledger metadata.
   *
   * @param {QueryParams} params - The parameters used to fetch the metadata, notably query or certified call.
   * @returns {Promise<Array<[string, Value]>>} The metadata of the ICP ledger. A promise that resolves to an array of metadata entries, where each entry is a tuple consisting of a string and a value.
   */
  metadata = (params: QueryParams): Promise<Array<[string, Value]>> => {
    const { icrc1_metadata } = this.caller(params);
    return icrc1_metadata();
  };

  /**
   * Returns the transaction fee of the ledger canister
   * @returns {BigInt}
   */
  public transactionFee = async () => {
    const {
      transfer_fee: { e8s },
    } = await this.service.transfer_fee({});
    return e8s;
  };

  /**
   * Transfer ICP from the caller to the destination `accountIdentifier`.
   * Returns the index of the block containing the tx if it was successful.
   *
   * @throws {@link TransferError}
   */
  public transfer = async (request: TransferRequest): Promise<BlockHeight> => {
    const rawRequest = toTransferRawRequest(request);
    const response = await this.certifiedService.transfer(rawRequest);
    if ("Err" in response) {
      throw mapTransferError(response.Err);
    }
    return response.Ok;
  };

  // WARNING: When using the ICRC-1 interface of the ICP ledger, there is no
  // relationship between the memo and the icrc1Memo of a transaction. The
  // ICRC-1 interface simply cannot set the memo field and the non-ICRC-1
  // interface cannot set the icrc1Memo field, even though the icrc1Memo field
  // is called just "memo" in canister method params.
  /**
   * Transfer ICP from the caller to the destination `Account`.
   * Returns the index of the block containing the tx if it was successful.
   *
   * @throws {@link TransferError}
   */
  public icrc1Transfer = async (
    request: Icrc1TransferRequest,
  ): Promise<BlockHeight> => {
    const rawRequest = toIcrc1TransferRawRequest(request);
    const response = await this.certifiedService.icrc1_transfer(rawRequest);
    if ("Err" in response) {
      throw mapIcrc1TransferError(response.Err);
    }
    return response.Ok;
  };
}
