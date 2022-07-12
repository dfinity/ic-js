import type { ActorSubclass } from "@dfinity/agent";
import { mock } from "jest-mock-extended";
import type { _SERVICE as SnsRootCanister } from "../candid/sns_root";
import {
  governanceCanisterIdMock,
  ledgerCanisterIdMock,
  rootCanisterIdMock,
  snsMock,
} from "./mocks/sns.mock";
import { initSns } from "./sns";

describe("Sns", () => {
  it("should init a wrapper", async () => {
    const service = mock<ActorSubclass<SnsRootCanister>>();
    service.get_sns_canisters_summary.mockResolvedValue(snsMock);

    const { canisterIds } = await initSns({
      rootOptions: {
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      },
    });

    expect(canisterIds).not.toBeNull();

    const { rootCanisterId, ledgerCanisterId, governanceCanisterId } =
      canisterIds;
    expect(rootCanisterId.toText()).toEqual(rootCanisterIdMock.toText());
    expect(ledgerCanisterId.toText()).toEqual(ledgerCanisterIdMock.toText());
    expect(governanceCanisterId.toText()).toEqual(
      governanceCanisterIdMock.toText()
    );
  });
});
