import type { RetrieveEthRequest } from "@dfinity/cketh";
import { CkETHMinterCanister } from "@dfinity/cketh";
import type {
  MinterCanisterParams,
  WithdrawEthParams,
} from "../types/eth-withdrawals.transactions";

const ckEthMinterCanister = async ({
  minterCanisterId,
  agent,
}: MinterCanisterParams): Promise<CkETHMinterCanister> =>
  CkETHMinterCanister.create({
    agent,
    canisterId: minterCanisterId,
  });

export const withdrawEth = async ({
  minterCanisterId,
  agent,
  ...params
}: WithdrawEthParams): Promise<RetrieveEthRequest> => {
  const { withdrawEth } = await ckEthMinterCanister({
    minterCanisterId,
    agent,
  });

  return withdrawEth(params);
};
