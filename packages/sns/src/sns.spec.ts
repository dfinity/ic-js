import type { ActorSubclass } from "@dfinity/agent";
import { mock } from "jest-mock-extended";
import type { _SERVICE as SnsRootService } from "../candid/sns_root";
import {
  governanceCanisterIdMock,
  ledgerCanisterIdMock,
  rootCanisterIdMock,
  snsMock,
} from "./mocks/sns.mock";
import { initSnsWrapper } from "./sns";

describe("Sns", () => {
  it("should init a wrapper", async () => {
    const service = mock<ActorSubclass<SnsRootService>>();
    service.list_sns_canisters.mockResolvedValue(snsMock);

    const { canisterIds } = await initSnsWrapper({
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
