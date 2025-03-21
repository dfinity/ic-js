import { IDL } from "@dfinity/candid";
import { NeuronId } from "@dfinity/nns/src";
import { toDisburseMaturityRequest } from "@dfinity/nns/src/canisters/governance/request.converters";
import { ManageNeuronFn } from "./governance.idl";
import { createBlob, writeToJson } from "./utils";

/**
 * Issue: https://github.com/Zondax/ledger-icp/issues/270
 */

const mockNeuronId = BigInt(15374508381553347371);
const mockNeuronId2 = BigInt(8836564053576662908);

const createDisburseMaturityVector = ({
  neuronId,
  percentageToDisburse,
  index,
}: {
  neuronId: NeuronId;
  percentageToDisburse: number;
  index: number;
}) => {
  const rawRequestBody = toDisburseMaturityRequest({
    neuronId,
    percentageToDisburse,
  });

  const isValid = percentageToDisburse >= 0 && percentageToDisburse <= 100;

  const outputs = [
    `1 | Transaction type : Disburse Maturity`,
    `2 | Neuron ID : ${neuronId}`,
    `3 | Percentage to Disburse : ${percentageToDisburse}%`,
  ];

  return {
    blob_candid: createBlob({
      arg: IDL.encode(ManageNeuronFn.argTypes, [rawRequestBody]),
      methodName: "manage_neuron",
    }),
    name: `Disburse Neuron Maturity - ${index}`,
    candid_request: rawRequestBody,
    outputs,
    isValid,
  };
};

const main = () => {
  try {
    const vectors = [
      createDisburseMaturityVector({
        neuronId: mockNeuronId,
        percentageToDisburse: 50,
        index: 1,
      }),
      createDisburseMaturityVector({
        neuronId: mockNeuronId,
        percentageToDisburse: 100,
        index: 2,
      }),
      createDisburseMaturityVector({
        neuronId: mockNeuronId2,
        percentageToDisburse: 75,
        index: 3,
      }),
      createDisburseMaturityVector({
        neuronId: mockNeuronId2,
        percentageToDisburse: 25,
        index: 4,
      }),
      // Invalid test vectors
      createDisburseMaturityVector({
        neuronId: mockNeuronId2,
        percentageToDisburse: 110,
        index: 5,
      }),
    ];

    writeToJson({
      data: vectors,
      fileName: "disburse-nns-neuron-maturity.json",
    });
    console.log("File created successfully");
  } catch (error) {
    console.log("There was an error");
    console.log(error);
  }
};

main();
