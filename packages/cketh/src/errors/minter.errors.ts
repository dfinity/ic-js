import type { WithdrawalError } from "../../candid/minter";

export class MinterGenericError extends Error {}

export class MinterWithdrawalError extends MinterGenericError {}

export class MinterTemporaryUnavailableError extends MinterWithdrawalError {}
export class MinterInsufficientFundsError extends MinterWithdrawalError {}
export class MinterInsufficientAllowanceError extends MinterWithdrawalError {}
export class MinterAmountTooLowError extends MinterWithdrawalError {}
export class MinterRecipientAddressBlockedError extends MinterWithdrawalError {}

export const createWithdrawEthError = (
  Err: WithdrawalError,
): MinterWithdrawalError => {
  if ("TemporarilyUnavailable" in Err) {
    return new MinterTemporaryUnavailableError(Err.TemporarilyUnavailable);
  }

  if ("InsufficientAllowance" in Err) {
    return new MinterInsufficientAllowanceError(
      `${Err.InsufficientAllowance.allowance}`,
    );
  }

  if ("AmountTooLow" in Err) {
    return new MinterAmountTooLowError(
      `${Err.AmountTooLow.min_withdrawal_amount}`,
    );
  }

  if ("RecipientAddressBlocked" in Err) {
    return new MinterRecipientAddressBlockedError(
      `${Err.RecipientAddressBlocked.address}`,
    );
  }

  if ("InsufficientFunds" in Err) {
    return new MinterInsufficientFundsError(`${Err.InsufficientFunds.balance}`);
  }

  // Handle types added in the backend but not yet added in the frontend
  return new MinterWithdrawalError(
    `Unsupported response type in minter.withdrawEth ${JSON.stringify(Err)}`,
  );
};
