import type { QueryParams } from "@dfinity/utils";
import type { NeuronId } from "../../candid/sns_governance";
import type { E8s } from "./common";

export interface SnsAddMaturityParams extends QueryParams {
  id: NeuronId;
  amountE8s: E8s;
}
