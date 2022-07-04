import { GovernanceError as GovernanceErrorDetail } from "../../../../candid/governanceTypes";
import { ICP } from "../icp";

export abstract class StakeNeuronError extends Error {}

export class CouldNotClaimNeuronError extends StakeNeuronError {}

export class InsufficientAmountError extends StakeNeuronError {
  constructor(public readonly minimumAmount: ICP) {
    super();
  }
}

export class UnrecognizedTypeError extends Error {}
export class GovernanceError extends Error {
  constructor(public readonly detail: GovernanceErrorDetail) {
    super();
  }
}

export class InvalidPercentageError extends Error {}
export class InvalidAccountIDError extends Error {}

/**
 * An error used to ensure at compile-time that it's never reached.
 */
export class UnsupportedValueError extends Error {
  constructor(value: never) {
    super("Unsupported value: " + value);
  }
}

export class FeatureNotSupportedError extends Error {}
