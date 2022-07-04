import { mock } from "jest-mock-extended";
import type { _SERVICE as GenesisTokenService } from "../../../candid/genesis_token";
import { GenesisTokenCanister } from "./genesis_token";

describe("GenesisTokenCanister", () => {
  it("claimNeurons returns a list of neuron ids", async () => {
    const response = {
      Ok: [
        {
          id: BigInt(1),
        },
        {
          id: BigInt(2),
        },
      ],
    };
    const service = mock<GenesisTokenService>();
    service.claim_neurons.mockResolvedValue(response);

    const gtc = GenesisTokenCanister.create({ serviceOverride: service });
    const res = await gtc.claimNeurons({
      hexPubKey: "",
    });
    expect(res).toEqual([BigInt(1), BigInt(2)]);
  });

  it("claimNeurons throws errors", async () => {
    const response = {
      Err: "An error occurred.",
    };
    const service = mock<GenesisTokenService>();
    service.claim_neurons.mockResolvedValue(response);

    const gtc = GenesisTokenCanister.create({ serviceOverride: service });
    const call = async () => {
      await gtc.claimNeurons({ hexPubKey: "" });
    };
    await expect(call).rejects.toThrow("An error occurred.");
  });
});
