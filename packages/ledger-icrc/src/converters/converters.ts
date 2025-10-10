import { fromNullable, nonNullish } from "@dfinity/utils";
import type { Account } from "../../candid/icrc_ledger";
import type { IcrcAccount } from "../types/ledger.responses";

/**
 * Converts a Candid Account object to an IcrcAccount, effectively transforming nullable properties into nullish ones.
 *
 * @param {Account} - The Candid Account object to convert.
 * @return {IcrcAccount} - The converted IcrcAccount object.
 */
export const fromCandidAccount = ({
  owner,
  subaccount: nullableSubaccount,
}: Account): IcrcAccount => {
  const subaccount = fromNullable(nullableSubaccount);

  return {
    owner,
    ...(nonNullish(subaccount) ? { subaccount } : {}),
  };
};
