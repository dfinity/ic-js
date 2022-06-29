import { Principal } from "@dfinity/principal";
import { mock } from "jest-mock-extended";
import { DeployedSns, SnsWasmService } from "../candid/sns-wasm.idl";
import { SnsManagerCanister } from "./sns-manager";

describe("Sns", () => {
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

    const canister = SnsManagerCanister.create({
      certifiedServiceOverride: service,
    });
    const res = await canister.listSns({});
    expect(res).toEqual(sns);
  });
});
