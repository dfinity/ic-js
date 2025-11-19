import { mock } from "vitest-mock-extended";
import type { ActorSubclass } from "@icp-sdk/core/lib/esm/agent";
import {
  ledgerCanisterIdMock,
  tokenMetadataResponseMock,
} from "./mocks/ledger.mock";
import type { _SERVICE as IcrcNftLedgerService } from "./candid/icrc_nft-ledger";
import { IcrcNftLedgerCanister } from "./nft-ledger.canister";

describe("NFT Ledger canister", () => {
  describe("metadata", () => {
    it("should return the collection metadata", async () => {
      const service = mock<ActorSubclass<IcrcNftLedgerService>>();
      service.icrc7_collection_metadata.mockResolvedValue(tokenMetadataResponseMock);

      const canister = IcrcNftLedgerCanister.create({
        canisterId: ledgerCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const res = await canister.metadata({});

      expect(res).toEqual(tokenMetadataResponseMock);
    });
  });
});
