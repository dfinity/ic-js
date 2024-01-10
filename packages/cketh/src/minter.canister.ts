import { idlFactory as certifiedIdlFactory } from "@dfinity/ckbtc/candid/minter.certified.idl";
import { idlFactory } from "@dfinity/ckbtc/candid/minter.idl";
import type { QueryParams } from "@dfinity/utils";
import { Canister, createServices } from "@dfinity/utils";
import type {
  _SERVICE as CkETHMinterService,
  RetrieveEthRequest,
} from "../candid/minter";
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
}
