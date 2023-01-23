import type { Icrc1Subaccount } from "@dfinity/ledger";
import type { Principal } from "@dfinity/principal";
import { asciiStringToByteArray, numberToUint8Array } from "@dfinity/utils";
import { sha256 } from "js-sha256";

/**
 * Neuron subaccount is calculated as "sha256(0x0c . “neuron-stake” . controller . i)"
 *
 * @param params
 * @param {Principal} params.newController
 * @param {number} params.index
 * @returns
 */
export const neuronSubaccount = ({
  index,
  controller,
}: {
  index: number;
  controller: Principal;
}): Icrc1Subaccount => {
  const padding = asciiStringToByteArray("neuron-stake");
  const data = [
    0x0c,
    ...padding,
    ...controller.toUint8Array(),
    ...numberToUint8Array(index),
  ];
  // TODO(#238): Implement without library and make it compatible with NodeJS and browser
  const shaObj = sha256.create();
  shaObj.update(data);
  return new Uint8Array(shaObj.array());
};
