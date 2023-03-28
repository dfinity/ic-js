import type { IcrcSubaccount } from "@dfinity/ledger";
import type { Principal } from "@dfinity/principal";
import {
  asciiStringToByteArray,
  numberToUint8Array,
  sha256,
} from "@dfinity/utils";

/**
 * Neuron subaccount is calculated as "sha256(0x0c . “neuron-stake” . controller . i)"
 *
 * @param params
 * @param {Principal} params.newController
 * @param {number} params.index
 * @returns
 */
export const neuronSubaccount = async ({
  index,
  controller,
}: {
  index: number;
  controller: Principal;
}): Promise<IcrcSubaccount> => {
  const padding = asciiStringToByteArray("neuron-stake");
  const data = Uint8Array.from([
    0x0c,
    ...padding,
    ...controller.toUint8Array(),
    ...numberToUint8Array(index),
  ]);
  return sha256(data);
};
