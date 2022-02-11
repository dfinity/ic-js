// API calls with a scope wider than one canister:
// - calls that require multiple canisters.
// - calls that require additional systems such as hardware wallets.

import { Principal } from "@dfinity/principal";
import { sha256 } from "js-sha256";
import randomBytes from "randombytes";
import { E8S_PER_ICP } from "./constants/constants";
import { MAINNET_GOVERNANCE_CANISTER_ID } from "./constants/canister_ids";
import { LedgerCanister } from "./ledger";
import { NnsDappCanister } from "./nns_dapp";
import { CreateNeuronRequest } from "./types/extra";
import {
  asciiStringToByteArray,
  uint8ArrayToBigInt,
  principalToAccountIdentifier,
} from "./utils/converter.utils";

/**
 * Uses governance and ledger canisters to create a neuron.
 */
export async function createNeuronWithNnsDapp({
  principal,
  ledgerCanister,
  nnsDappCanister,
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

  const nonceBytes = new Uint8Array(randomBytes(8));
  const nonce = uint8ArrayToBigInt(nonceBytes);
  const toSubAccount = buildSubAccount(nonceBytes, principal);

  const accountIdentifier = principalToAccountIdentifier(
    MAINNET_GOVERNANCE_CANISTER_ID,
    toSubAccount
  );
  /*

  const accountIdentifier = convert.principalToAccountIdentifier(

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

// 32 bytes
function buildSubAccount(nonce: Uint8Array, principal: Principal): Uint8Array {
  const padding = asciiStringToByteArray("neuron-stake");
  const shaObj = sha256.create();
  shaObj.update([0x0c, ...padding, ...principal.toUint8Array(), ...nonce]);
  return new Uint8Array(shaObj.array());
}
