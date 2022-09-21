import { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
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

  describe("balance", () => {
    it("should return the balance of main account", async () => {
      const service = mock<ActorSubclass<SnsLedgerService>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = SnsLedgerCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const owner = Principal.fromText("aaaaa-aa");
      const res = await canister.balance({
        owner,
      });
      expect(res).toEqual(balance);
    });

    it("should return the balance of subaccount", async () => {
      const service = mock<ActorSubclass<SnsLedgerService>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = SnsLedgerCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const owner = Principal.fromText("aaaaa-aa");
      const subaccount = [0, 0, 1];
      const res = await canister.balance({
        owner,
        subaccount,
      });
      expect(res).toEqual(balance);
    });
  });
});
