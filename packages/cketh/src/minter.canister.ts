import type { QueryParams } from "@dfinity/utils";
import { Canister, createServices } from "@dfinity/utils";
import type {
  _SERVICE as CkETHMinterService,
  Eip1559TransactionPrice,
  MinterInfo,
  RetrieveEthRequest,
  RetrieveEthStatus,
} from "../candid/minter";
import { idlFactory as certifiedIdlFactory } from "../candid/minter.certified.idl";
import { idlFactory } from "../candid/minter.idl";
import { createWithdrawEthError } from "./errors/minter.errors";
import type { CkETHMinterCanisterOptions } from "./types/canister.options";

export class CkETHMinterCanister extends Canister<CkETHMinterService> {
  static create(options: CkETHMinterCanisterOptions<CkETHMinterService>) {
    const { service, certifiedService, canisterId } =
      createServices<CkETHMinterService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new CkETHMinterCanister(canisterId, service, certifiedService);
  }

  /**
   * The address of the helper smart contract may change in the future when the minter is upgraded. Please verify the address of the helper contract before any important transfer by querying the minter as follows.
   *
   * @param {QueryParams} params The parameters to resolve the ckETH smart contract address.
   * @param {boolean} params.certified query or update call
   * @returns {Promise<string>} Address of the helper smart contract.
   */
  getSmartContractAddress = ({
    certified,
  }: QueryParams = {}): Promise<string> => {
    const { smart_contract_address } = this.caller({ certified });
    return smart_contract_address();
  };

  /**
   * Submits a request to convert ckETH to ETH after making an ICRC-2 approval.
   *
   * Preconditions:
   *
   * The caller allowed the minter's principal to spend its funds using
   * [icrc2_approve] on the ckETH ledger.
   *
   * @param {Object} params The parameters to withdrawal ckETH to ETH.
   * @param {string} params.address The destination ETH address.
   * @param {bigint} params.amount The ETH amount in wei.
   * @returns {Promise<RetrieveEthRequest>} The successful result or the operation.
   */
  withdrawEth = async ({
    address,
    ...rest
  }: {
    address: string;
    amount: bigint;
  }): Promise<RetrieveEthRequest> => {
    const { withdraw_eth } = this.caller({
      certified: true,
    });

    const response = await withdraw_eth({
      recipient: address,
      ...rest,
    });

    if ("Err" in response) {
      throw createWithdrawEthError(response.Err);
    }

    return response.Ok;
  };

  /**
   * Estimate the price of a transaction issued by the minter when converting ckETH to ETH.
   *
   * @returns {Promise<Eip1559TransactionPrice>} The estimated gas fee and limit
   */
  eip1559TransactionPrice = (): Promise<Eip1559TransactionPrice> => {
    const { eip_1559_transaction_price } = this.caller({
      certified: true,
    });
    return eip_1559_transaction_price();
  };

  /**
   * Retrieve the status of a withdrawal request.
   *
   * @returns {Promise<RetrieveEthStatus>} The current status of an Ethereum transaction for a block index resulting from a withdrawal.
   */
  retrieveEthStatus = (blockIndex: bigint): Promise<RetrieveEthStatus> => {
    const { retrieve_eth_status } = this.caller({
      certified: true,
    });
    return retrieve_eth_status(blockIndex);
  };

  /**
   * Returns internal minter parameters such as the minimal withdrawal amount, the last observed block number, etc.
   *
   * @param {QueryParams} params The parameters to get the minter info.
   * @param {boolean} params.certified query or update call
   */
  getMinterInfo = async ({ certified }: QueryParams): Promise<MinterInfo> => {
    const { get_minter_info } = this.caller({ certified });
    return get_minter_info();
  };
}
