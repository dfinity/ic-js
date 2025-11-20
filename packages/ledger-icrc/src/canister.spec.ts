import { arrayOfNumberToUint8Array } from "@dfinity/utils";
import type { ActorSubclass } from "@icp-sdk/core/agent";
import { Principal } from "@icp-sdk/core/lib/esm/principal";
import { mock } from "vitest-mock-extended";
import type { _SERVICE as Icrc1Service } from "./candid/icrc_icrc-1";
import { IcrcCanister } from "./canister";
import { ledgerCanisterIdMock } from "./mocks/ledger.mock";

describe("ICRC canister", () => {
  class MockCanister extends IcrcCanister<Icrc1Service> {}

  describe("balance", () => {
    it("should return the balance of main account", async () => {
      const service = mock<ActorSubclass<Icrc1Service>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = MockCanister.create({
        canisterId: ledgerCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const owner = Principal.fromText("aaaaa-aa");
      const res = await canister.balance({
        owner,
      });

      expect(service.icrc1_balance_of).toHaveBeenCalled();
      expect(res).toEqual(balance);
    });

    it("should return the balance of subaccount", async () => {
      const service = mock<ActorSubclass<Icrc1Service>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = MockCanister.create({
        canisterId: ledgerCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const owner = Principal.fromText("aaaaa-aa");
      const subaccount = arrayOfNumberToUint8Array([0, 0, 1]);
      const res = await canister.balance({
        owner,
        subaccount,
      });

      expect(res).toEqual(balance);
    });
  });
});
