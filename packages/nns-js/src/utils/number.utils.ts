import { InvalidPercentageError } from "../errors/governance.errors";

export const assertPercentageNumber = (percentage: number) => {
  if (percentage < 0 || percentage > 100) {
    throw new InvalidPercentageError(
      `${percentage} is not a valid percentage number.`
    );
  }
};
