import type { HttpAgent } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export interface MinterCanisterParams {
  minterCanisterId: Principal;
  agent: HttpAgent;
}

export type WithdrawEthParams = MinterCanisterParams & {
  amount: bigint;
  address: string;
};
