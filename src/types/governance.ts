// HttpAgent options that can be used at construction.
import { Agent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { GovernanceService } from "../../candid/governance.idl";
import { GovernanceErrorDetail } from "../../candid/governanceTypes";
import { ICP } from "../icp";
import { TransferError } from "./ledger";

export class StakeNeuronError extends Error {}

export class StakeNeuronTransferError extends StakeNeuronError {
  constructor(public readonly err: TransferError) {
    super();
  }
}
export class CouldNotClaimNeuronError extends StakeNeuronError {}
export class InsufficientAmountError extends StakeNeuronError {
  constructor(public readonly minimumAmount: ICP) {
    super();
  }
}
export class GovernanceError extends Error {
  constructor(public readonly detail: GovernanceErrorDetail) {
    super();
  }
}

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
}
