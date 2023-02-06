import type { NewSaleTicketRequest } from "../../candid/sns_swap";
import type { NewSaleTicketParams } from "../types/swap.params";

// Helper for building `NewSaleTicketRequest` structure
export const toNewSaleTicketRequest = ({
  subaccount,
  amount_icp_e8s,
}: NewSaleTicketParams): NewSaleTicketRequest => ({
  subaccount: subaccount === undefined ? [] : [subaccount],
  amount_icp_e8s,
});
