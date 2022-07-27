import type { ActorSubclass } from "@dfinity/agent";
import { mock } from "jest-mock-extended";
import type { _SERVICE as SnsRootService } from "../candid/sns_root";
import { rootCanisterIdMock, snsMock } from "./mocks/sns.mock";
import { SnsRootCanister } from "./root.canister";

describe("Root canister", () => {
  it("should return the list of canister of the sns", async () => {
    const service = mock<ActorSubclass<SnsRootService>>();
    service.list_sns_canisters.mockResolvedValue(snsMock);

    const canister = SnsRootCanister.create({
      canisterId: rootCanisterIdMock,
      certifiedServiceOverride: service,
    });
    const res = await canister.listSnsCanisters({});
    expect(res).toEqual(snsMock);
  });
});
