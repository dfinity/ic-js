import { AccountIdentifier } from "../account_identifier";
import type { AccountIdentifierParam } from "../types/ledger.params";

export const paramToAccountIdentifier = (
  param: AccountIdentifierParam,
): AccountIdentifier =>
  param instanceof AccountIdentifier ? param : AccountIdentifier.fromHex(param);
