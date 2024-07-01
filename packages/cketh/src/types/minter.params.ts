import type { Principal } from "@dfinity/principal";
import { isNullish, toNullable, type QueryParams } from "@dfinity/utils";
import type { Eip1559TransactionPriceArg } from "../../candid/minter";

export type Eip1559TransactionPriceParams = {
  ckErc20LedgerId?: Principal;
} & QueryParams;

export const toEip1559TransactionPriceParams = ({
  ckErc20LedgerId: ckerc20_ledger_id,
}: Eip1559TransactionPriceParams): [] | [Eip1559TransactionPriceArg] =>
  toNullable(isNullish(ckerc20_ledger_id) ? undefined : { ckerc20_ledger_id });
