import type { Principal } from "@dfinity/principal";
import {
  Canister,
  createServices,
  toNullable,
  type QueryParams,
} from "@dfinity/utils";
import type {
  _SERVICE as CkETHMinterService,
  Eip1559TransactionPrice,
  MinterInfo,
  RetrieveErc20Request,
  RetrieveEthRequest,
  RetrieveEthStatus,
  Subaccount,
} from "../candid/minter";
import { idlFactory as certifiedIdlFactory } from "../candid/minter.certified.idl";
import { idlFactory } from "../candid/minter.idl";
import {
  createWithdrawErc20Error,
  createWithdrawEthError,
} from "./errors/minter.errors";
import type { CkETHMinterCanisterOptions } from "./types/canister.options";
import {
  toEip1559TransactionPriceParams,
  type Eip1559TransactionPriceParams,
} from "./types/minter.params";

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
   * @param {Subacount} params.fromSubaccount The optional subaccount to burn ckETH from.
   * @returns {Promise<RetrieveEthRequest>} The successful result or the operation.
   */
  withdrawEth = async ({
    address,
    fromSubaccount,
    ...rest
  }: {
    address: string;
    amount: bigint;
    fromSubaccount?: Subaccount;
  }): Promise<RetrieveEthRequest> => {
    const { withdraw_eth } = this.caller({
      certified: true,
    });

    const response = await withdraw_eth({
      recipient: address,
      from_subaccount: toNullable(fromSubaccount),
      ...rest,
    });

    if ("Err" in response) {
      throw createWithdrawEthError(response.Err);
    }

    return response.Ok;
  };

  /**
   * Submits a request to convert ckErc20 to Erc20 - e.g. ckUSDC to USDC - after making ICRC-2 approvals for the ckETH and related ckErc20 ledgers.
   *
   * Preconditions:
   *
   * The caller allowed the minter's principal to spend its funds using
   * [icrc2_approve] on the ckErc20 ledger and to burn some of the user’s ckETH tokens to pay for the transaction fees on the CkETH ledger.
   *
   * @param {Object} params The parameters to withdrawal ckErc20 to Erc20.
   * @param {string} params.address The destination ETH address.
   * @param {bigint} params.amount The ETH amount in wei.
   * @param {Subaccount} params.fromCkEthSubaccount The optional subaccount to burn ckETH from to pay for the transaction fee.
   * @param {Subaccount} params.fromCkEthSubaccount The optional subaccount to burn ckERC20 from.
   * @returns {Promise<RetrieveErc20Request>} The successful result or the operation.
   */
  withdrawErc20 = async ({
    address,
    ledgerCanisterId,
    fromCkEthSubaccount,
    fromCkErc20Subaccount,
    ...rest
  }: {
    address: string;
    amount: bigint;
    ledgerCanisterId: Principal;
    fromCkEthSubaccount?: Subaccount;
    fromCkErc20Subaccount?: Subaccount;
  }): Promise<RetrieveErc20Request> => {
    const { withdraw_erc20 } = this.caller({
      certified: true,
    });

    const response = await withdraw_erc20({
      recipient: address,
      ckerc20_ledger_id: ledgerCanisterId,
      from_cketh_subaccount: toNullable(fromCkEthSubaccount),
      from_ckerc20_subaccount: toNullable(fromCkErc20Subaccount),
      ...rest,
    });

    if ("Err" in response) {
      throw createWithdrawErc20Error(response.Err);
    }

    return response.Ok;
  };

  /**
   * Estimate the price of a transaction issued by the minter when converting ckETH to ETH and ckER20 to ERC20.
   *
   * @param {Eip1559TransactionPriceParams} params - The parameters to get the minter info.
   * @param {Principal} [params.ckErc20LedgerId] - The optional identifier for a particular ckERC20 ledger.
   * @param {boolean} [params.certified] - Indicates whether this is a certified query or an update call.
   *
   * @returns {Promise<Eip1559TransactionPrice>} - The estimated gas fee and limit.
   */
  eip1559TransactionPrice = ({
    certified,
    ...rest
  }: Eip1559TransactionPriceParams): Promise<Eip1559TransactionPrice> => {
    const { eip_1559_transaction_price } = this.caller({
      certified,
    });
    return eip_1559_transaction_price(toEip1559TransactionPriceParams(rest));
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
  getMinterInfo = ({ certified }: QueryParams): Promise<MinterInfo> => {
    const { get_minter_info } = this.caller({ certified });
    return get_minter_info();
  };
}
