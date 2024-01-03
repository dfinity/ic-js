import { idlFactory as certifiedIdlFactory } from "@dfinity/ckbtc/candid/minter.certified.idl";
import { idlFactory } from "@dfinity/ckbtc/candid/minter.idl";
import type { QueryParams } from "@dfinity/utils";
import { Canister, createServices } from "@dfinity/utils";
import type { _SERVICE as CkETHMinterService } from "../candid/minter";
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
}
