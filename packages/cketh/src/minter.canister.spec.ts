import { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { mock } from "jest-mock-extended";
import type { _SERVICE as CkETHMinterService } from "../candid/minter";
import { CkETHMinterCanister } from "./minter.canister";
import {
  ckETHSmartContractAddressMock,
  minterCanisterIdMock,
} from "./mocks/minter.mock";

describe("ckETH minter canister", () => {
  const minter = (
    service: ActorSubclass<CkETHMinterService>,
  ): CkETHMinterCanister =>
    CkETHMinterCanister.create({
      canisterId: minterCanisterIdMock,
      certifiedServiceOverride: service,
    });

  const nonCertifiedMinter = (
    service: ActorSubclass<CkETHMinterService>,
  ): CkETHMinterCanister =>
    CkETHMinterCanister.create({
      canisterId: minterCanisterIdMock,
      serviceOverride: service,
    });

  describe("Smart contract address", () => {
    it("should return the helper smart contract address", async () => {
      const service = mock<ActorSubclass<CkETHMinterService>>();
      service.smart_contract_address.mockResolvedValue(
        ckETHSmartContractAddressMock,
      );

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");
      const res = await canister.getSmartContractAddress();
      expect(service.smart_contract_address).toBeCalled();
      expect(res).toEqual(ckETHSmartContractAddressMock);
    });

    it("should bubble errors", () => {
      const service = mock<ActorSubclass<CkETHMinterService>>();
      service.smart_contract_address.mockImplementation(() => {
        throw new Error();
      });

      const canister = minter(service);

      expect(() => canister.getSmartContractAddress()).toThrowError();
    });
  });
});
