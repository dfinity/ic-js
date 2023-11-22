import {
  Canister,
  createServices,
  toNullable,
  type QueryParams,
} from "@dfinity/utils";
import type {
  _SERVICE as CkBTCMinterService,
  MinterInfo,
  RetrieveBtcOk,
  RetrieveBtcStatus,
  Account as WithdrawalAccount,
} from "../candid/minter";
import { idlFactory as certifiedIdlFactory } from "../candid/minter.certified.idl";
import { idlFactory } from "../candid/minter.idl";
import {
  createRetrieveBtcError,
  createRetrieveBtcWithApprovalError,
  createUpdateBalanceError,
} from "./errors/minter.errors";
import type { CkBTCMinterCanisterOptions } from "./types/canister.options";
import type {
  EstimateWithdrawalFeeParams,
  GetBTCAddressParams,
  RetrieveBtcParams,
  UpdateBalanceParams,
} from "./types/minter.params";
import type {
  EstimateWithdrawalFee,
  RetrieveBtcResponse,
  RetrieveBtcWithApprovalResponse,
  UpdateBalanceOk,
  UpdateBalanceResponse,
} from "./types/minter.responses";

export class CkBTCMinterCanister extends Canister<CkBTCMinterService> {
  static create(options: CkBTCMinterCanisterOptions<CkBTCMinterService>) {
    const { service, certifiedService, canisterId } =
      createServices<CkBTCMinterService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new CkBTCMinterCanister(canisterId, service, certifiedService);
  }

  /**
   * Returns a BTC address for a given account.
   *
   * Note: an update call is required by the Minter canister.
   *
   * @param {GetBTCAddressParams} params The parameters for which a BTC address should be resolved.
   * @param {Principal} params.owner The owner for which the BTC address should be generated. If not provided, the `caller` will be use instead.
   * @param {Uint8Array} params.subaccount An optional subaccount to compute the address.
   * @returns {Promise<string>} The BTC address of the given account.
   */
  getBtcAddress = ({
    owner,
    subaccount,
  }: GetBTCAddressParams): Promise<string> =>
    this.caller({ certified: true }).get_btc_address({
      owner: toNullable(owner),
      subaccount: toNullable(subaccount),
    });

  /**
   * Notify the minter about the bitcoin transfer.
   *
   * Upon successful notification, new ckBTC should be available on the targeted address.
   *
   * @param {UpdateBalanceParams} params The parameters are the address to which bitcoin where transferred.
   * @param {Principal} params.owner The owner of the address. If not provided, the `caller` will be use instead.
   * @param {Principal} params.subaccount An optional subaccount of the address.
   * @returns {Promise<UpdateBalanceOk>} The result of the balance update.
   */
  updateBalance = async ({
    owner,
    subaccount,
  }: UpdateBalanceParams): Promise<UpdateBalanceOk> => {
    const response: UpdateBalanceResponse = await this.caller({
      certified: true,
    }).update_balance({
      owner: toNullable(owner),
      subaccount: toNullable(subaccount),
    });

    if ("Err" in response) {
      throw createUpdateBalanceError(response.Err);
    }

    return response.Ok;
  };

  /**
   * Returns the account to which the caller should deposit ckBTC before withdrawing BTC using the [retrieveBtc] endpoint.
   *
   * @returns {Promise<Account>} The account to which ckBTC needs to be transferred. Provide corresponding information to map an Icrc1 account.
   */
  getWithdrawalAccount = (): Promise<WithdrawalAccount> =>
    this.caller({ certified: true }).get_withdrawal_account();

  /**
   * Submits a request to convert ckBTC to BTC.
   *
   * # Note
   *
   * The BTC retrieval process is slow. Instead of synchronously waiting for a BTC transaction to settle, this method returns a request ([block_index]) that the caller can use to query the request status.
   *
   * # Preconditions
   *
   * The caller deposited the requested amount in ckBTC to the account that the [getWithdrawalAccount] endpoint returns.
   *
   * @param {RetrieveBtcParams} params The parameters are the bitcoin address and amount to convert.
   * @param {string} params.address The bitcoin address.
   * @param {bigint} params.amount The ckBTC amount.
   * @returns {Promise<RetrieveBtcOk>} The result or the operation.
   */
  retrieveBtc = async (params: RetrieveBtcParams): Promise<RetrieveBtcOk> => {
    const response: RetrieveBtcResponse = await this.caller({
      certified: true,
    }).retrieve_btc(params);

    if ("Err" in response) {
      throw createRetrieveBtcError(response.Err);
    }

    return response.Ok;
  };

  /**
   * Submits a request to convert ckBTC to BTC after making an ICRC-2 approval.
   *
   * # Note
   *
   * The BTC retrieval process is slow. Instead of synchronously waiting for a BTC transaction to settle, this method returns a request ([block_index]) that the caller can use to query the request status.
   *
   * # Preconditions
   *
   * The caller allowed the minter's principal to spend its funds using
   * [icrc2_approve] on the ckBTC ledger.
   *
   * @param {string} params.address The bitcoin address.
   * @param {bigint} params.amount The ckBTC amount.
   * @param {Uint8Array} params.fromSubaccount An optional subaccount from which
   *     the ckBTC should be transferred.
   * @returns {Promise<RetrieveBtcOk>} The result or the operation.
   */
  retrieveBtcWithApproval = async ({
    address,
    amount,
    fromSubaccount,
  }: {
    address: string;
    amount: bigint;
    fromSubaccount?: Uint8Array;
  }): Promise<RetrieveBtcOk> => {
    const response: RetrieveBtcWithApprovalResponse = await this.caller({
      certified: true,
    }).retrieve_btc_with_approval({
      address,
      amount,
      from_subaccount: toNullable(fromSubaccount),
    });

    if ("Err" in response) {
      throw createRetrieveBtcWithApprovalError(response.Err);
    }

    return response.Ok;
  };

  /**
   * Returns the status of a specific BTC withdrawal based on the transaction ID
   * of the corresponding burn transaction.
   *
   * @param {bigint} transactionId The ID of the corresponding burn transaction.
   * @param {boolean} certified query or update call
   */
  retrieveBtcStatus = async ({
    transactionId,
    certified,
  }: {
    transactionId: bigint;
    certified: boolean;
  }): Promise<RetrieveBtcStatus> =>
    this.caller({
      certified,
    }).retrieve_btc_status({ block_index: transactionId });

  /**
   * Returns an estimation of the user's fee (in Satoshi) for a retrieve_btc request based on the current status of the Bitcoin network and the fee related to the minter.
   *
   * @param {RetrieveBtcParams} params The parameters to estimate the fee.
   * @param {boolean} params.certified query or update call
   * @param {bigint | undefined} params.amount The optional amount for which the fee should be estimated.
   */
  estimateWithdrawalFee = async ({
    certified,
    amount,
  }: EstimateWithdrawalFeeParams): Promise<EstimateWithdrawalFee> =>
    this.caller({
      certified,
    }).estimate_withdrawal_fee({ amount: toNullable(amount) });

  /**
   * Returns internal minter parameters such as the minimal amount to retrieve BTC, minimal number of confirmations or KYT fee.
   *
   * @param {QueryParams} params The parameters to get the deposit fee.
   * @param {boolean} params.certified query or update call
   */
  getMinterInfo = async ({ certified }: QueryParams): Promise<MinterInfo> =>
    this.caller({
      certified,
    }).get_minter_info();
}
