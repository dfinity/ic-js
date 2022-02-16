import { Agent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { NNSDappService } from "../../candid/nns_dapp.idl";

export type {
  AccountIdentifier,
  SubAccountDetails,
} from "../../candid/nns_dappTypes";

export interface NNSDappCanisterOptions {
  // The agent to use when communicating with the governance canister.
  agent?: Agent;
  // The NNSDapp canister's ID.
  canisterId: Principal;
  // The default service to use when calling into the IC. Primarily overridden
  // in test for mocking.
  serviceOverride?: NNSDappService;
  // The service to use when making 'certified' calls into the IC (as in, using
  // update calls in place of queries). Primarily overridden in test for
  // mocking.
  certifiedServiceOverride?: NNSDappService;
}
