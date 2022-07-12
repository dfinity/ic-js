import type { ActorSubclass } from "@dfinity/agent";
import { mock } from "jest-mock-extended";
import type { _SERVICE as SnsRootCanister } from "../candid/sns_root";
import { rootCanisterIdMock, snsMock } from "./mocks/sns.mock";
import { RootCanister } from "./root.canister";

describe("Root canister", () => {
  it("should return the list of canister of the sns", async () => {
    const service = mock<ActorSubclass<SnsRootCanister>>();
    service.get_sns_canisters_summary.mockResolvedValue(snsMock);

    const canister = RootCanister.create({
      canisterId: rootCanisterIdMock,
      certifiedServiceOverride: service,
    });
    const res = await canister.canistersSummary({});
    expect(res).toEqual(snsMock);
  });
});
