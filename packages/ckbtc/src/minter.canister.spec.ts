import { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { arrayOfNumberToUint8Array } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import type {
  Account,
  UpdateBalanceResult,
  _SERVICE as CkBTCMinterService,
} from "../candid/minter";
import {
  RetrieveBtcError,
  RetrieveBtcOk,
  UpdateBalanceError,
} from "../candid/minter";
import {
  MinterAlreadyProcessingError,
  MinterAmountTooLowError,
  MinterGenericError,
  MinterInsufficientFundsError,
  MinterMalformedAddressError,
  MinterNoNewUtxosError,
  MinterRetrieveBtcError,
  MinterTemporaryUnavailableError,
  MinterUpdateBalanceError,
} from "./errors/minter.errors";
import { CkBTCMinterCanister } from "./minter.canister";
import { bitcoinAddressMock, minterCanisterIdMock } from "./mocks/minter.mock";

describe("ckBTC minter canister", () => {
  const minter = (
    service: ActorSubclass<CkBTCMinterService>
  ): CkBTCMinterCanister =>
    CkBTCMinterCanister.create({
      canisterId: minterCanisterIdMock,
      certifiedServiceOverride: service,
    });

  describe("BTC address", () => {
    it("should return the BTC address of main account", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.get_btc_address.mockResolvedValue(bitcoinAddressMock);

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");
      const res = await canister.getBtcAddress({
        owner,
      });
      expect(service.get_btc_address).toBeCalled();
      expect(res).toEqual(bitcoinAddressMock);
    });

    it("should return a BTC address if a subaccount is provided", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      const address = "a_btc_address_with_subaccount";
      service.get_btc_address.mockResolvedValue(address);

      const canister = minter(service);

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

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");
      expect(() =>
        canister.getBtcAddress({
          owner,
        })
      ).toThrowError();
    });
  });

  describe("Update balance", () => {
    const success: UpdateBalanceResult = {
      block_index: 1n,
      amount: 100_000n,
    };
    const ok = { Ok: success };

    it("should return Ok", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.update_balance.mockResolvedValue(ok);

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");
      const res = await canister.updateBalance({
        owner,
      });
      expect(service.update_balance).toBeCalled();
      expect(res).toEqual(success);
    });

    it("should return Ok if a subaccount is provided", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.update_balance.mockResolvedValue(ok);

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");
      const subaccount = arrayOfNumberToUint8Array([0, 0, 1]);
      const res = await canister.updateBalance({
        owner,
        subaccount,
      });
      expect(res).toEqual(success);
    });

    it("should throw MinterGenericError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = {
        Err: { GenericError: { error_message: "message", error_code: 1n } },
      };
      service.update_balance.mockResolvedValue(error);

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");

      const call = () =>
        canister.updateBalance({
          owner,
        });

      await expect(call).rejects.toThrowError(
        new MinterGenericError(
          `${error.Err.GenericError.error_message} (${error.Err.GenericError.error_code})`
        )
      );
    });

    it("should throw MinterTemporarilyUnavailable", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { TemporarilyUnavailable: "unavailable" } };
      service.update_balance.mockResolvedValue(error);

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");

      const call = () =>
        canister.updateBalance({
          owner,
        });

      await expect(call).rejects.toThrowError(
        new MinterTemporaryUnavailableError(error.Err.TemporarilyUnavailable)
      );
    });

    it("should throw MinterAlreadyProcessingError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { AlreadyProcessing: null } };
      service.update_balance.mockResolvedValue(error);

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");

      const call = () =>
        canister.updateBalance({
          owner,
        });

      await expect(call).rejects.toThrowError(
        new MinterAlreadyProcessingError()
      );
    });

    it("should throw MinterNoNewUtxosError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { NoNewUtxos: null } };
      service.update_balance.mockResolvedValue(error);

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");

      const call = () =>
        canister.updateBalance({
          owner,
        });

      await expect(call).rejects.toThrowError(new MinterNoNewUtxosError());
    });

    it("should throw unsupported response", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { Test: null } as unknown as UpdateBalanceError };
      service.update_balance.mockResolvedValue(error);

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");

      const call = () =>
        canister.updateBalance({
          owner,
        });

      await expect(call).rejects.toThrowError(
        new MinterUpdateBalanceError(
          `Unsupported response type in minter.updateBalance ${JSON.stringify(
            error.Err
          )}`
        )
      );
    });
  });

  describe("Withdrawal account", () => {
    it("should return the withdrawal account", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const owner = Principal.fromText("aaaaa-aa");
      const subaccount = arrayOfNumberToUint8Array([0, 0, 1]);

      const account: Account = {
        owner,
        subaccount: [subaccount],
      };

      service.get_withdrawal_account.mockResolvedValue(account);

      const canister = minter(service);

      const res = await canister.getWithdrawalAccount();
      expect(service.get_withdrawal_account).toBeCalled();
      expect(res).toEqual(account);
    });

    it("should bubble errors", () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.get_withdrawal_account.mockImplementation(() => {
        throw new Error();
      });

      const canister = minter(service);

      expect(() => canister.getWithdrawalAccount()).toThrowError();
    });
  });

  describe("Retrieve BTC", () => {
    const success: RetrieveBtcOk = {
      block_index: 1n,
    };
    const ok = { Ok: success };

    const params = {
      address: bitcoinAddressMock,
      amount: 123n,
    };

    it("should return Ok", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.retrieve_btc.mockResolvedValue(ok);

      const canister = minter(service);

      const res = await canister.retrieveBtc(params);

      expect(service.retrieve_btc).toBeCalled();
      expect(res).toEqual(success);
    });

    it("should throw MinterGenericError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = {
        Err: { GenericError: { error_message: "message", error_code: 1n } },
      };
      service.retrieve_btc.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtc(params);

      await expect(call).rejects.toThrowError(
        new MinterGenericError(
          `${error.Err.GenericError.error_message} (${error.Err.GenericError.error_code})`
        )
      );
    });

    it("should throw MinterTemporarilyUnavailable", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { TemporarilyUnavailable: "unavailable" } };
      service.retrieve_btc.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtc(params);

      await expect(call).rejects.toThrowError(
        new MinterTemporaryUnavailableError(error.Err.TemporarilyUnavailable)
      );
    });

    it("should throw MinterAlreadyProcessingError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { AlreadyProcessing: null } };
      service.retrieve_btc.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtc(params);

      await expect(call).rejects.toThrowError(
        new MinterAlreadyProcessingError()
      );
    });

    it("should throw MinterMalformedAddress", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { MalformedAddress: "malformated" } };
      service.retrieve_btc.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtc(params);

      await expect(call).rejects.toThrowError(
        new MinterMalformedAddressError(error.Err.MalformedAddress)
      );
    });

    it("should throw MinterAmountTooLowError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { AmountTooLow: 123n } };
      service.retrieve_btc.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtc(params);

      await expect(call).rejects.toThrowError(
        new MinterAmountTooLowError(`${error.Err.AmountTooLow}`)
      );
    });

    it("should throw MinterInsufficientFundsError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { InsufficientFunds: { balance: 123n } } };
      service.retrieve_btc.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtc(params);

      await expect(call).rejects.toThrowError(
        new MinterInsufficientFundsError(
          `${error.Err.InsufficientFunds.balance}`
        )
      );
    });

    it("should throw unsupported response", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { Test: null } as unknown as RetrieveBtcError };
      service.retrieve_btc.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtc(params);

      await expect(call).rejects.toThrowError(
        new MinterRetrieveBtcError(
          `Unsupported response type in minter.retrieveBtc ${JSON.stringify(
            error.Err
          )}`
        )
      );
    });
  });
});
