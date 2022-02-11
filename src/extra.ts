// API calls with a scope wider than one canister:
// - calls that require multiple canisters.
// - calls that require additional systems such as hardware wallets.

import { Principal } from "@dfinity/principal";
import { E8S_PER_ICP } from "./constants/constants";
import { LedgerCanister } from "./ledger";
import { NnsDappCanister } from "./nns_dapp";
import { CreateNeuronRequest } from "./types/extra";

/**
 * Uses governance and ledger canisters to create a neuron.
 */
export async function createNeuronWithNnsDapp({
  request,
}: {
  principal: Principal;
  ledgerCanister: LedgerCanister;
  nnsDappCanister: NnsDappCanister;
  request: CreateNeuronRequest;
}): Promise<string> {
  if (request.stake < E8S_PER_ICP) {
    throw "Need a minimum of 1 ICP to stake a neuron";
  }

  /*
  const nonceBytes = new Uint8Array(randomBytes(8));
  const nonce = convert.uint8ArrayToBigInt(nonceBytes);
  const toSubAccount = buildSubAccount(nonceBytes, principal);

  const accountIdentifier = convert.principalToAccountIdentifier(
    GOVERNANCE_CANISTER_ID,
    toSubAccount
  );

  // Send amount to the ledger.
  await ledgerService.sendICPTs({
    memo: nonce,
    amount: request.stake,
    to: accountIdentifier,
    fromSubAccountId: request.fromSubAccountId,
  });

  // Notify the governance of the transaction so that the neuron is created.
  return await governanceService.claimOrRefreshNeuronFromAccount({
    controller: principal,
    memo: nonce,
  });
*/

  return new Promise(() => "foo");
}
