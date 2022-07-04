import { Principal } from "@dfinity/principal";
import { mock } from "jest-mock-extended";
import { DeployedSns, SnsWasmService } from "../candid/sns-wasm.idl";
import { SnsWasmCanister } from "./sns-wasm";

describe("Sns-wasm", () => {
  it("should return the list of sns", async () => {
    const sns: DeployedSns[] = [
      {
        root_canister_id: [Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai")],
      },
      {
        root_canister_id: [Principal.fromText("renrk-eyaaa-aaaaa-aaada-cai")],
      },
    ];
    const service = mock<SnsWasmService>();
    service.list_deployed_snses.mockResolvedValue({
      instances: sns,
    });

    const canister = SnsWasmCanister.create({
      certifiedServiceOverride: service,
    });
    const res = await canister.listSns({});
    expect(res).toEqual(sns);
  });
});
