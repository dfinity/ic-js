import type { ConversionStep } from "../enums/progress.enums";

export interface ConversionCurrentStatus {
  previousStep: ConversionStep | undefined;
  currentStep: ConversionStep | undefined;
  nextStep: ConversionStep | undefined;
}

export type StatusCallback = (status: ConversionCurrentStatus) => void;
