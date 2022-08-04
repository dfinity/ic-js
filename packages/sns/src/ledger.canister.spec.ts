import { ActorSubclass } from "@dfinity/agent";
import { mock } from "jest-mock-extended";
import type { _SERVICE as SnsLedgerService } from "../candid/icrc1_ledger";
import { SnsLedgerCanister } from "./ledger.canister";
import { tokeMetadataResponseMock } from "./mocks/ledger.mock";
import { rootCanisterIdMock } from "./mocks/sns.mock";

describe("Ledger canister", () => {
  it("should return the token metadata", async () => {
    const service = mock<ActorSubclass<SnsLedgerService>>();
    service.icrc1_metadata.mockResolvedValue(tokeMetadataResponseMock);

    const canister = SnsLedgerCanister.create({
      canisterId: rootCanisterIdMock,
      certifiedServiceOverride: service,
    });

    const res = await canister.metadata({});
    expect(res).toEqual(tokeMetadataResponseMock);
  });
});
