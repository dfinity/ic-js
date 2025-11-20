import { arrayOfNumberToUint8Array, createServices } from "@dfinity/utils";
import type { ActorSubclass } from "@icp-sdk/core/agent";
import { Principal } from "@icp-sdk/core/principal";
import { mock } from "vitest-mock-extended";
import { idlFactory as certifiedIdlFactory } from "./candid/icrc_ledger.certified.idl";
import { idlFactory } from "./candid/icrc_ledger.idl";
import { IcrcCanister } from "./canister";
import type { IcrcCanisterService } from "./types/canister.types";

describe("ICRC canister", () => {
  class MockCanister extends IcrcCanister<IcrcCanisterService> {
    static create() {
      const { service, certifiedService, canisterId } =
        createServices<IcrcCanisterService>({
          idlFactory,
          certifiedIdlFactory,
        });

      return new MockCanister(canisterId, service, certifiedService);
    }
  }

  describe("balance", () => {
    it("should return the balance of main account", async () => {
      const service = mock<ActorSubclass<IcrcCanisterService>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = MockCanister.create({});

      const owner = Principal.fromText("aaaaa-aa");
      const res = await canister.balance({
        owner,
      });

      expect(service.icrc1_balance_of).toHaveBeenCalled();
      expect(res).toEqual(balance);
    });

    it("should return the balance of subaccount", async () => {
      const service = mock<ActorSubclass<IcrcCanisterService>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = MockCanister.create({});

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
