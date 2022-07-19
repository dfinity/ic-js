import { HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import fetch from "node-fetch";
import pkg from "../packages/nns/dist/index.cjs.js";
const { GovernanceCanister } = pkg;

const refreshNeuron = async (neuronId, fetchRotkey) => {
  try {
    const agent = new HttpAgent({
      fetch,
      host: "https://ic0.app",
      // host: "https://nnsdapp.dfinity.network",
    });
    if (fetchRotkey) {
      await agent.fetchRootKey();
    }
    const canister = GovernanceCanister.create({
      agent,
      canisterId: Principal.fromText("rrkah-fqaaa-aaaaa-aaaaq-cai"),
    });
    await canister.claimOrRefreshNeuron({
      neuronId: BigInt(neuronId),
      by: { NeuronIdOrSubaccount: {} },
    });
    console.log("neuron refreshed");
  } catch (e) {
    console.error(e);
  }
};

// Neuron from User with problems
refreshNeuron("7966791617963362468");
const a = {
  command: [
    {
      Error: {
        error_message:
          "Account does not have enough funds to refresh a neuron. Please make sure that account has at least 100000000 e8s (was 6299993 e8s)",
        error_type: 14,
      },
    },
  ],
};
// Mainnet neuron
// refreshNeuron("13291324902841494691");
// Testnet neuron less than 1ICP stake
// refreshNeuron("4766351651311749354", true);
