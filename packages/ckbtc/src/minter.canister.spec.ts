import { ActorSubclass } from "@dfinity/agent";
import { ledgerCanisterIdMock } from "@dfinity/ledger/src/mocks/ledger.mock";
import { Principal } from "@dfinity/principal";
import { arrayOfNumberToUint8Array } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import type { _SERVICE as CkBTCMinterService } from "../candid/minter";
import { CkBTCMinterCanister } from "./minter.canister";

describe("ckBTC minter canister", () => {
  describe("BTC address", () => {
    it("should return the BTC address of main account", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      const address = "bcrt1qu2aqme90t6hpac50x0xw8ljwqs250vn6tzlmsv";
      service.get_btc_address.mockResolvedValue(address);

      const canister = CkBTCMinterCanister.create({
        canisterId: ledgerCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const owner = Principal.fromText("aaaaa-aa");
      const res = await canister.getBtcAddress({
        owner,
      });
      expect(service.get_btc_address).toBeCalled();
      expect(res).toEqual(address);
    });

    it("should return a BTC address if a subaccount is provided", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      const address = "a_btc_address_with_subaccount";
      service.get_btc_address.mockResolvedValue(address);

      const canister = CkBTCMinterCanister.create({
        canisterId: ledgerCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const owner = Principal.fromText("aaaaa-aa");
      const subaccount = arrayOfNumberToUint8Array([0, 0, 1]);
      const res = await canister.getBtcAddress({
        owner,
        subaccount,
      });
      expect(res).toEqual(address);
    });

    it("should bubble errors", () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.get_btc_address.mockImplementation(() => {
        throw new Error();
      });

      const canister = CkBTCMinterCanister.create({
        canisterId: ledgerCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const owner = Principal.fromText("aaaaa-aa");
      expect(() =>
        canister.getBtcAddress({
          owner,
        })
      ).toThrowError();
    });
  });
});
