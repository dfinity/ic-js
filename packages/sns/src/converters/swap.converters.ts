import type { NewSaleTicketRequest } from "../../candid/sns_swap";
import type { NewSaleTicketParams } from "../types/swap.params";

// TOOD: what is a subaccount type? [Uint8Array];?
// type NewSaleTicketRequest = record {
//   subaccount : opt vec nat8;
//   amount_icp_e8s : nat64;
// };
// Helper for building `NewSaleTicketRequest` structure
export const toNewSaleTicketRequest = ({
  subaccount: { id },
  amount_icp_e8s,
}: NewSaleTicketParams): NewSaleTicketRequest => ({
  subaccount: [id],
  amount_icp_e8s,
});
