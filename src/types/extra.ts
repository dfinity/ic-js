// Types used for specific inter-canister operations.  These types are "uncommon" as they are not ever likely to be useful for other canisters.

import { E8s } from "./common";

export type CreateNeuronRequest = {
  stake: E8s;
  fromSubAccountId?: number;
};
