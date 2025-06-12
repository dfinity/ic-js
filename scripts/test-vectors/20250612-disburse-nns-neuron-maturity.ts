import { IDL } from "@dfinity/candid";
import { AccountIdentifierHex } from "@dfinity/ledger-icp/src/types/common";
import { Account, NeuronId } from "@dfinity/nns/src";
import { toDisburseMaturityRequest } from "@dfinity/nns/src/canisters/governance/request.converters";
import { Principal } from "@dfinity/principal";
import { ManageNeuronFn } from "./governance.idl";
import { createBlob, splitAccount, splitString, writeToJson } from "./utils";

/**
 * Issue: https://github.com/Zondax/ledger-icp/issues/270
 */

const mockNeuronId = BigInt(15374508381553347371);
const mockNeuronId2 = BigInt(8836564053576662908);

const createDisburseMaturityVector = ({
  neuronId,
  percentageToDisburse,
  index,
  toAccountIdentifier,
  toAccount,
}: {
  neuronId: NeuronId;
  percentageToDisburse: number;
  index: number;
  toAccountIdentifier?: AccountIdentifierHex;
  toAccount?: Account;
}) => {
  const rawRequestBody = toDisburseMaturityRequest({
    neuronId,
    percentageToDisburse,
    toAccount,
    toAccountIdentifier,
  });

  const isValid = percentageToDisburse >= 0 && percentageToDisburse <= 100;

  const outputs = [
    `Transaction type : Disburse Maturity`,
    `Neuron ID : ${neuronId}`,
    `Percentage to Disburse : ${percentageToDisburse}%`,
  ];

  if (toAccountIdentifier) {
    const fromOutputs = splitString(toAccountIdentifier, "To Account");
    outputs.push(...fromOutputs);
  } else if (toAccount) {
    const fromOutputs = splitAccount(
      {
        owner: toAccount.owner,
        subaccount: toAccount.subaccount,
      },
      "To Account",
    );
    outputs.push(...fromOutputs);
  }

  return {
    blob_candid: createBlob({
      arg: IDL.encode(ManageNeuronFn.argTypes, [rawRequestBody]),
      methodName: "manage_neuron",
    }),
    name: `Disburse Neuron Maturity - ${index}`,
    candid_request: rawRequestBody,
    outputs: outputs.map((element, index) => `${index + 1} | ${element}`),
    isValid,
  };
};

const main = () => {
  try {
    const subaccount1 = [
      215, 232, 81, 101, 44, 208, 50, 186, 94, 215, 107, 23, 246, 38, 170, 71,
      130, 159, 6, 229, 35, 90, 13, 88, 14, 150, 211, 114, 119, 41, 234, 36,
    ];
    const subaccount2 = [
      163, 110, 20, 60, 134, 231, 228, 113, 231, 199, 25, 80, 100, 135, 207,
      122, 108, 244, 13, 167, 99, 97, 174, 175, 238, 81, 51, 225, 217, 172, 234,
      61,
    ];
    const principal1 = Principal.fromText(
      "krpzt-buecq-u3umg-7kb7r-j5jpx-twqwa-3ykc4-y3cnk-7kwvw-5bq6z-mae",
    );
    const principal2 = Principal.fromText(
      "2dfd6-abjpf-eihu7-pwv6m-qnlbt-oszmg-kb26q-rvqms-onmuh-mwiq3-uqe",
    );
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
      createDisburseMaturityVector({
        neuronId: mockNeuronId2,
        percentageToDisburse: 25,
        index: 5,
        // d4685b31 b5145050 8aff0331 584df769
        toAccountIdentifier:
          "d4685b31b51450508aff0331584df7692a84467b680326f5c5f7d30ae711682f",
      }),
      createDisburseMaturityVector({
        neuronId: mockNeuronId2,
        percentageToDisburse: 50,
        index: 6,
        toAccount: {
          owner: principal1,
          subaccount: subaccount1,
        },
      }),
      createDisburseMaturityVector({
        neuronId: mockNeuronId,
        percentageToDisburse: 75,
        index: 7,
        toAccount: {
          owner: principal2,
          subaccount: subaccount2,
        },
      }),
      // Invalid test vectors
      createDisburseMaturityVector({
        neuronId: mockNeuronId2,
        percentageToDisburse: 110,
        index: 8,
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
