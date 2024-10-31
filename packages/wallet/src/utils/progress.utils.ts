import { ConversionStep } from "../enums/progress.enums";
import type {
  ConversionCurrentStatus,
  StatusCallback,
} from "../types/progress.utils";

export class ConversionStatus {
  currentStatus: ConversionCurrentStatus;
  statusCallback: StatusCallback | undefined;

  constructor({
    nextStep,
    statusCallback,
  }: {
    nextStep: ConversionStep;
    statusCallback?: StatusCallback;
  }) {
    this.currentStatus = {
      previousStep: undefined,
      currentStep: ConversionStep.INITIALIZATION,
      nextStep,
    };

    this.statusCallback = statusCallback;
  }

  public updateNextStep(nextStep?: ConversionStep): void {
    this.currentStatus = {
      previousStep: this.currentStatus.currentStep,
      currentStep: this.currentStatus.nextStep,
      nextStep,
    };

    this.statusCallback?.(this.currentStatus);
  }
}
