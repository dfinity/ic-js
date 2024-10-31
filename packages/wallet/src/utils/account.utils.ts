import type { IcrcAccount, IcrcSubaccount } from "@dfinity/ledger-icrc";
import type { Principal } from "@dfinity/principal";
import { toNullable } from "@dfinity/utils";

export const toAccount = ({
  owner,
  subaccount,
}: IcrcAccount): { owner: Principal; subaccount: [] | [IcrcSubaccount] } => ({
  owner,
  subaccount: toNullable(subaccount),
});
