import type { NewSaleTicketRequest } from "../../candid/sns_swap";
import type { NewSaleTicketParams } from "../types/swap.params";

// Helper for building `NewSaleTicketRequest` structure
export const toNewSaleTicketRequest = ({
  neuronId: { id },
  amount_icp_e8s,
}: NewSaleTicketParams): NewSaleTicketRequest => ({
  subaccount: [id],
  amount_icp_e8s,
});
