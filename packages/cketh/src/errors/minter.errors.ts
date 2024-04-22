import { nonNullish } from "@dfinity/utils";
import {
  LedgerError,
  WithdrawalError,
  WithdrawErc20Error,
} from "../../candid/minter";

export class MinterGenericError extends Error {}

export class MinterWithdrawalError extends MinterGenericError {}

export class MinterTemporaryUnavailableError extends MinterWithdrawalError {}
export class MinterInsufficientFundsError extends MinterWithdrawalError {}
export class MinterInsufficientAllowanceError extends MinterWithdrawalError {}
export class MinterAmountTooLowError extends MinterWithdrawalError {}
export class MinterRecipientAddressBlockedError extends MinterWithdrawalError {}
export class MinterTokenNotSupported extends MinterWithdrawalError {}

export class LedgerGenericError extends Error {}

export class LedgerWithdrawalError extends LedgerGenericError {}
export class LedgerTemporaryUnavailableError extends MinterWithdrawalError {}
export class LedgerInsufficientAllowanceError extends MinterWithdrawalError {}
export class LedgerAmountTooLowError extends MinterWithdrawalError {}
export class LedgerInsufficientFundsError extends MinterWithdrawalError {}

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

export const createWithdrawErc20Error = (
  Err: WithdrawErc20Error,
): MinterWithdrawalError | LedgerWithdrawalError => {
  if ("TemporarilyUnavailable" in Err) {
    return new MinterTemporaryUnavailableError(Err.TemporarilyUnavailable);
  }

  if ("RecipientAddressBlocked" in Err) {
    return new MinterRecipientAddressBlockedError(
      `${Err.RecipientAddressBlocked.address}`,
    );
  }

  if ("TokenNotSupported" in Err) {
    return new MinterTokenNotSupported(
      `${Err.TokenNotSupported.supported_tokens.map(({ erc20_contract_address, ckerc20_token_symbol, ledger_canister_id }) => `Contract ${erc20_contract_address}, symbol ${ckerc20_token_symbol} and ledger canister ID ${ledger_canister_id.toText()}.`)}`,
    );
  }

  const createLedgerError = ({
    Err,
    ckEthBlockIndex,
  }: {
    Err: LedgerError;
    ckEthBlockIndex?: bigint;
  }): LedgerWithdrawalError => {
    if ("TemporarilyUnavailable" in Err) {
      return new LedgerTemporaryUnavailableError(Err.TemporarilyUnavailable);
    }

    if ("InsufficientAllowance" in Err) {
      return new LedgerInsufficientAllowanceError(
        `${Err.InsufficientAllowance.allowance} for ${Err.InsufficientAllowance.ledger_id} with ${Err.InsufficientAllowance.failed_burn_amount} ${Err.InsufficientAllowance.token_symbol}${nonNullish(ckEthBlockIndex) ? ` (${ckEthBlockIndex})` : ""}}`,
      );
    }

    if ("AmountTooLow" in Err) {
      return new LedgerAmountTooLowError(
        `${Err.AmountTooLow.minimum_burn_amount} for ${Err.AmountTooLow.ledger_id} with ${Err.AmountTooLow.failed_burn_amount} ${Err.AmountTooLow.token_symbol}${nonNullish(ckEthBlockIndex) ? ` (${ckEthBlockIndex})` : ""}`,
      );
    }

    if ("InsufficientFunds" in Err) {
      return new LedgerInsufficientFundsError(
        `${Err.InsufficientFunds.balance} for ${Err.InsufficientFunds.ledger_id} with ${Err.InsufficientFunds.failed_burn_amount} ${Err.InsufficientFunds.token_symbol}${nonNullish(ckEthBlockIndex) ? ` (${ckEthBlockIndex})` : ""}`,
      );
    }

    // Handle types added in the backend but not yet added in the frontend
    return new LedgerWithdrawalError(
      `Unsupported response type in ledger for minter.withdrawErc20 ${JSON.stringify(Err)}`,
    );
  };

  if ("CkErc20LedgerError" in Err) {
    return createLedgerError({
      Err: Err.CkErc20LedgerError.error,
      ckEthBlockIndex: Err.CkErc20LedgerError.cketh_block_index,
    });
  }

  if ("CkEthLedgerError" in Err) {
    return createLedgerError({ Err: Err.CkEthLedgerError.error });
  }

  // Handle types added in the backend but not yet added in the frontend
  return new MinterWithdrawalError(
    `Unsupported response type in minter.withdrawErc20 ${JSON.stringify(Err)}`,
  );
};
