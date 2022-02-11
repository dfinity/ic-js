// GovernanceCanister options that can be used at construction.
import { Agent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { GovernanceService } from "../../candid/governance.idl";

export interface GovernanceCanisterOptions {
  // The agent to use when communicating with the governance canister.
  agent?: Agent;
  // The governance canister's ID.
  canisterId?: Principal;
  // The default service to use when calling into the IC. Primarily overridden
  // in test for mocking.
  serviceOverride?: GovernanceService;
  // The service to use when making 'certified' calls into the IC (as in, using
  // update calls in place of queries). Primarily overridden in test for
  // mocking.
  certifiedServiceOverride?: GovernanceService;
  // The user on behalf of which calls are being made.
  myPrincipal?: Principal;
}
