import { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { toNullable } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import {
  _SERVICE as CkETHMinterService,
  RetrieveEthRequest,
} from "../candid/minter";
import {
  MinterAmountTooLowError,
  MinterInsufficientAllowanceError,
  MinterInsufficientFundsError,
  MinterRecipientAddressBlockedError,
  MinterTemporaryUnavailableError,
  MinterWithdrawalError,
} from "./errors/minter.errors";
import { CkETHMinterCanister } from "./minter.canister";
import {
  ckETHSmartContractAddressMock,
  ethAddressMock,
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

  const gasFeeEstimate = {
    max_priority_fee_per_gas: 123n,
    max_fee_per_gas: 456n,
    max_transaction_fee: 7n,
  };

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

  describe("Withdraw ETH", () => {
    const success: RetrieveEthRequest = {
      block_index: 1n,
    };
    const ok = { Ok: success };

    const params = {
      address: ethAddressMock,
      amount: 123_000n,
    };

    it("should return Ok", async () => {
      const service = mock<ActorSubclass<CkETHMinterService>>();
      service.withdraw_eth.mockResolvedValue(ok);

      const canister = minter(service);

      const res = await canister.withdrawEth(params);

      expect(service.withdraw_eth).toBeCalledTimes(1);

      const { address, ...rest } = params;
      expect(service.withdraw_eth).toBeCalledWith({
        recipient: address,
        ...rest,
      });

      expect(res).toEqual(success);
    });

    it("should throw MinterTemporarilyUnavailable", async () => {
      const service = mock<ActorSubclass<CkETHMinterService>>();

      const error = { Err: { TemporarilyUnavailable: "unavailable" } };
      service.withdraw_eth.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.withdrawEth(params);

      await expect(call).rejects.toThrowError(
        new MinterTemporaryUnavailableError(error.Err.TemporarilyUnavailable),
      );
    });

    it("should throw MinterAmountTooLowError", async () => {
      const service = mock<ActorSubclass<CkETHMinterService>>();

      const error = { Err: { AmountTooLow: { min_withdrawal_amount: 123n } } };
      service.withdraw_eth.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.withdrawEth(params);

      await expect(call).rejects.toThrowError(
        new MinterAmountTooLowError(
          `${error.Err.AmountTooLow.min_withdrawal_amount}`,
        ),
      );
    });

    it("should throw MinterRecipientAddressBlockedError", async () => {
      const service = mock<ActorSubclass<CkETHMinterService>>();

      const error = {
        Err: { RecipientAddressBlocked: { address: ethAddressMock } },
      };
      service.withdraw_eth.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.withdrawEth(params);

      await expect(call).rejects.toThrowError(
        new MinterRecipientAddressBlockedError(
          `${error.Err.RecipientAddressBlocked.address}`,
        ),
      );
    });

    it("should throw MinterInsufficientFundsError", async () => {
      const service = mock<ActorSubclass<CkETHMinterService>>();

      const error = { Err: { InsufficientFunds: { balance: 123n } } };
      service.withdraw_eth.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.withdrawEth(params);

      await expect(call).rejects.toThrowError(
        new MinterInsufficientFundsError(
          `${error.Err.InsufficientFunds.balance}`,
        ),
      );
    });

    it("should throw MinterInsufficientAllowanceError", async () => {
      const service = mock<ActorSubclass<CkETHMinterService>>();

      const error = { Err: { InsufficientAllowance: { allowance: 123n } } };
      service.withdraw_eth.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.withdrawEth(params);

      await expect(call).rejects.toThrowError(
        new MinterInsufficientAllowanceError(
          `${error.Err.InsufficientAllowance.allowance}`,
        ),
      );
    });

    it("should throw unsupported response", async () => {
      const service = mock<ActorSubclass<CkETHMinterService>>();

      const error = { Err: { Test: null } as unknown };
      // @ts-ignore we explicity want the results to throw some error type
      service.withdraw_eth.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.withdrawEth(params);

      await expect(call).rejects.toThrowError(
        new MinterWithdrawalError(
          `Unsupported response type in minter.withdrawEth ${JSON.stringify(
            error.Err,
          )}`,
        ),
      );
    });
  });

  describe("Estimate withdrawal fee", () => {
    it("should return estimated fee", async () => {
      const result = {
        ...gasFeeEstimate,
        gas_limit: 89n,
        timestamp: toNullable(99999999n),
      };

      const service = mock<ActorSubclass<CkETHMinterService>>();
      service.eip_1559_transaction_price.mockResolvedValue(result);

      const canister = minter(service);

      const res = await canister.eip1559TransactionPrice({});

      expect(service.eip_1559_transaction_price).toBeCalled();
      expect(res).toEqual(result);
    });

    it("should bubble errors", () => {
      const service = mock<ActorSubclass<CkETHMinterService>>();
      service.eip_1559_transaction_price.mockRejectedValue(new Error());

      const canister = minter(service);

      const call = () => canister.eip1559TransactionPrice({ certified: false });

      expect(call).rejects.toThrowError();
    });
  });

  describe("Retrieve Eth status", () => {
    it("should return status", async () => {
      const result = {
        TxCreated: null,
      };

      const service = mock<ActorSubclass<CkETHMinterService>>();
      service.retrieve_eth_status.mockResolvedValue(result);

      const canister = minter(service);

      const params = 123n;

      const res = await canister.retrieveEthStatus(params);

      expect(service.retrieve_eth_status).toBeCalledWith(params);
      expect(res).toEqual(result);
    });

    it("should bubble errors", () => {
      const service = mock<ActorSubclass<CkETHMinterService>>();
      service.retrieve_eth_status.mockRejectedValue(new Error());

      const canister = minter(service);

      const call = () => canister.retrieveEthStatus(123n);

      expect(call).rejects.toThrowError();
    });
  });

  describe("Minter Info", () => {
    it("should return minter info", async () => {
      const result = {
        eth_balance: toNullable(1n),
        last_observed_block_number: toNullable(2n),
        last_gas_fee_estimate: toNullable({
          ...gasFeeEstimate,
          timestamp: 999999n,
        }),
        smart_contract_address: toNullable(ckETHSmartContractAddressMock),
        minimum_withdrawal_amount: toNullable(3n),
        minter_address: toNullable(ckETHSmartContractAddressMock),
        ethereum_block_height: toNullable({ Safe: null }),
      };

      const service = mock<ActorSubclass<CkETHMinterService>>();
      service.get_minter_info.mockResolvedValue(result);

      const canister = minter(service);

      const res = await canister.getMinterInfo({
        certified: true,
      });

      expect(service.get_minter_info).toBeCalled();
      expect(res).toEqual(result);
    });

    it("should bubble errors", () => {
      const service = mock<ActorSubclass<CkETHMinterService>>();
      service.get_minter_info.mockImplementation(() => {
        throw new Error();
      });

      const canister = minter(service);

      expect(() =>
        canister.getMinterInfo({ certified: true }),
      ).rejects.toThrowError();
    });
  });
});
