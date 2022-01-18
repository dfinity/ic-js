import { mock } from "jest-mock-extended";
import { CandidKnownNeuronsResponse, GovernanceService } from "../candid/governance.idl";
import { GovernanceCanister } from "./governance";

describe("GovernanceCanister.listKnownNeurons", () => {
  it("returns the DF and ICA neurons", async () => {
    const response: CandidKnownNeuronsResponse = { known_neurons: [] };
    const service = mock<GovernanceService>();
    service.list_known_neurons.calledWith().mockResolvedValue(response);

    const governance = new GovernanceCanister(service, service);
    const res = await governance.listKnownNeurons(false);

    expect(res).toHaveLength(2);
    expect(res[0]).toEqual({
      id: BigInt(27),
      name: "DFINITY Foundation",
      description: undefined
    });
    expect(res[1]).toEqual({
      id: BigInt(28),
      name: "Internet Computer Association",
      description: undefined
    })
  });
});
