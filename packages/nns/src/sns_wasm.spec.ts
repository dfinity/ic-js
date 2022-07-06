import { ActorSubclass } from "@dfinity/agent";
import { mock } from "jest-mock-extended";
import type { _SERVICE as SnsWasmService } from "../candid/sns_wasm";
import { snsMock } from "./mocks/sns_wasm.mock";
import { SnsWasmCanister } from "./sns_wasm";

describe("Sns-wasm", () => {
  it("should return the list of sns", async () => {
    const service = mock<ActorSubclass<SnsWasmService>>();
    service.list_deployed_snses.mockResolvedValue({
      instances: snsMock,
    });

    const canister = SnsWasmCanister.create({
      certifiedServiceOverride: service,
    });
    const res = await canister.listSnses({});
    expect(res).toEqual(snsMock);
  });
});
