import type { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { arrayOfNumberToUint8Array, toNullable } from "@dfinity/utils";
import { mock } from "vitest-mock-extended";
import type {
  Account,
  _SERVICE as CkBTCMinterService,
  RetrieveBtcError,
  RetrieveBtcOk,
  RetrieveBtcStatus,
  RetrieveBtcStatusV2,
  UpdateBalanceError,
  Utxo,
} from "../candid/minter";
import {
  MinterAlreadyProcessingError,
  MinterAmountTooLowError,
  MinterGenericError,
  MinterInsufficientAllowanceError,
  MinterInsufficientFundsError,
  MinterMalformedAddressError,
  MinterNoNewUtxosError,
  MinterRetrieveBtcError,
  MinterTemporaryUnavailableError,
  MinterUpdateBalanceError,
} from "./errors/minter.errors";
import { CkBTCMinterCanister } from "./minter.canister";
import { bitcoinAddressMock, minterCanisterIdMock } from "./mocks/minter.mock";
import type { UpdateBalanceOk } from "./types/minter.responses";

describe("ckBTC minter canister", () => {
  const minter = (
    service: ActorSubclass<CkBTCMinterService>,
  ): CkBTCMinterCanister =>
    CkBTCMinterCanister.create({
      canisterId: minterCanisterIdMock,
      certifiedServiceOverride: service,
    });

  const nonCertifiedMinter = (
    service: ActorSubclass<CkBTCMinterService>,
  ): CkBTCMinterCanister =>
    CkBTCMinterCanister.create({
      canisterId: minterCanisterIdMock,
      serviceOverride: service,
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

      expect(service.get_btc_address).toHaveBeenCalled();
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
        }),
      ).toThrow();
    });
  });

  describe("Update balance", () => {
    const success: UpdateBalanceOk = [
      {
        Checked: {
          height: 123,
          value: 123n,
          outpoint: { txid: arrayOfNumberToUint8Array([0, 0, 1]), vout: 123 },
        },
      },
    ];
    const ok = { Ok: success };

    it("should return Ok", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.update_balance.mockResolvedValue(ok);

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");
      const res = await canister.updateBalance({
        owner,
      });

      expect(service.update_balance).toHaveBeenCalled();
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

      await expect(call).rejects.toThrow(
        new MinterGenericError(
          `${error.Err.GenericError.error_message} (${error.Err.GenericError.error_code})`,
        ),
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

      await expect(call).rejects.toThrow(
        new MinterTemporaryUnavailableError(error.Err.TemporarilyUnavailable),
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

      await expect(call).rejects.toThrow(new MinterAlreadyProcessingError());
    });

    it("should throw MinterNoNewUtxosError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      const pendingUtxo = {
        confirmations: 3,
        value: 3_2000_000n,
        outpoint: {
          txid: new Uint8Array([6, 5, 2, 7]),
          vout: 1,
        },
      };

      const error = {
        Err: {
          NoNewUtxos: {
            required_confirmations: 123,
            current_confirmations: toNullable(456),
            pending_utxos: [[pendingUtxo]],
          },
        } as UpdateBalanceError,
      };
      service.update_balance.mockResolvedValue(error);

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");

      const call = () =>
        canister.updateBalance({
          owner,
        });

      await expect(call).rejects.toThrow(
        new MinterNoNewUtxosError({
          pending_utxos: [[pendingUtxo]],
          required_confirmations: 123,
        }),
      );
    });

    it("should throw MinterNoNewUtxosError without pending UTXOs", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      const error = {
        Err: {
          NoNewUtxos: {
            required_confirmations: 123,
            current_confirmations: toNullable(456),
            pending_utxos: [],
          },
        } as UpdateBalanceError,
      };
      service.update_balance.mockResolvedValue(error);

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");

      const call = () =>
        canister.updateBalance({
          owner,
        });

      await expect(call).rejects.toThrow(
        new MinterNoNewUtxosError({
          pending_utxos: [],
          required_confirmations: 123,
        }),
      );
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

      await expect(call).rejects.toThrow(
        new MinterUpdateBalanceError(
          `Unsupported response type in minter.updateBalance ${JSON.stringify(
            error.Err,
          )}`,
        ),
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

      expect(service.get_withdrawal_account).toHaveBeenCalled();
      expect(res).toEqual(account);
    });

    it("should bubble errors", () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.get_withdrawal_account.mockImplementation(() => {
        throw new Error();
      });

      const canister = minter(service);

      expect(() => canister.getWithdrawalAccount()).toThrow();
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

      expect(service.retrieve_btc).toHaveBeenCalled();
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

      await expect(call).rejects.toThrow(
        new MinterGenericError(
          `${error.Err.GenericError.error_message} (${error.Err.GenericError.error_code})`,
        ),
      );
    });

    it("should throw MinterTemporarilyUnavailable", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { TemporarilyUnavailable: "unavailable" } };
      service.retrieve_btc.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtc(params);

      await expect(call).rejects.toThrow(
        new MinterTemporaryUnavailableError(error.Err.TemporarilyUnavailable),
      );
    });

    it("should throw MinterAlreadyProcessingError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { AlreadyProcessing: null } };
      service.retrieve_btc.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtc(params);

      await expect(call).rejects.toThrow(new MinterAlreadyProcessingError());
    });

    it("should throw MinterMalformedAddress", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { MalformedAddress: "malformated" } };
      service.retrieve_btc.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtc(params);

      await expect(call).rejects.toThrow(
        new MinterMalformedAddressError(error.Err.MalformedAddress),
      );
    });

    it("should throw MinterAmountTooLowError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { AmountTooLow: 123n } };
      service.retrieve_btc.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtc(params);

      await expect(call).rejects.toThrow(
        new MinterAmountTooLowError(`${error.Err.AmountTooLow}`),
      );
    });

    it("should throw MinterInsufficientFundsError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { InsufficientFunds: { balance: 123n } } };
      service.retrieve_btc.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtc(params);

      await expect(call).rejects.toThrow(
        new MinterInsufficientFundsError(
          `${error.Err.InsufficientFunds.balance}`,
        ),
      );
    });

    it("should throw unsupported response", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { Test: null } as unknown as RetrieveBtcError };
      service.retrieve_btc.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtc(params);

      await expect(call).rejects.toThrow(
        new MinterRetrieveBtcError(
          `Unsupported response type in minter.retrieveBtc ${JSON.stringify(
            error.Err,
          )}`,
        ),
      );
    });
  });

  describe("Retrieve BTC with approval", () => {
    const success: RetrieveBtcOk = {
      block_index: 1n,
    };
    const ok = { Ok: success };

    const params = {
      address: bitcoinAddressMock,
      amount: 123_000n,
    };

    it("should return Ok", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.retrieve_btc_with_approval.mockResolvedValue(ok);

      const canister = minter(service);

      const res = await canister.retrieveBtcWithApproval(params);

      expect(service.retrieve_btc_with_approval).toHaveBeenCalledTimes(1);
      expect(service.retrieve_btc_with_approval).toHaveBeenCalledWith({
        ...params,
        from_subaccount: [],
      });
      expect(res).toEqual(success);
    });

    it("should return Ok with fromSubaccount", async () => {
      const fromSubaccount = new Uint8Array([3, 4, 5]);
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.retrieve_btc_with_approval.mockResolvedValue(ok);

      const canister = minter(service);

      const res = await canister.retrieveBtcWithApproval({
        ...params,
        fromSubaccount,
      });

      expect(service.retrieve_btc_with_approval).toHaveBeenCalledTimes(1);
      expect(service.retrieve_btc_with_approval).toHaveBeenCalledWith({
        ...params,
        from_subaccount: [fromSubaccount],
      });
      expect(res).toEqual(success);
    });

    it("should throw MinterGenericError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = {
        Err: { GenericError: { error_message: "message", error_code: 1n } },
      };
      service.retrieve_btc_with_approval.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtcWithApproval(params);

      await expect(call).rejects.toThrow(
        new MinterGenericError(
          `${error.Err.GenericError.error_message} (${error.Err.GenericError.error_code})`,
        ),
      );
    });

    it("should throw MinterTemporarilyUnavailable", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { TemporarilyUnavailable: "unavailable" } };
      service.retrieve_btc_with_approval.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtcWithApproval(params);

      await expect(call).rejects.toThrow(
        new MinterTemporaryUnavailableError(error.Err.TemporarilyUnavailable),
      );
    });

    it("should throw MinterAlreadyProcessingError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { AlreadyProcessing: null } };
      service.retrieve_btc_with_approval.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtcWithApproval(params);

      await expect(call).rejects.toThrow(new MinterAlreadyProcessingError());
    });

    it("should throw MinterMalformedAddress", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { MalformedAddress: "malformated" } };
      service.retrieve_btc_with_approval.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtcWithApproval(params);

      await expect(call).rejects.toThrow(
        new MinterMalformedAddressError(error.Err.MalformedAddress),
      );
    });

    it("should throw MinterAmountTooLowError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { AmountTooLow: 123n } };
      service.retrieve_btc_with_approval.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtcWithApproval(params);

      await expect(call).rejects.toThrow(
        new MinterAmountTooLowError(`${error.Err.AmountTooLow}`),
      );
    });

    it("should throw MinterInsufficientFundsError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { InsufficientFunds: { balance: 123n } } };
      service.retrieve_btc_with_approval.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtcWithApproval(params);

      await expect(call).rejects.toThrow(
        new MinterInsufficientFundsError(
          `${error.Err.InsufficientFunds.balance}`,
        ),
      );
    });

    it("should throw MinterInsufficientAllowanceError", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { InsufficientAllowance: { allowance: 123n } } };
      service.retrieve_btc_with_approval.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtcWithApproval(params);

      await expect(call).rejects.toThrow(
        new MinterInsufficientAllowanceError(
          `${error.Err.InsufficientAllowance.allowance}`,
        ),
      );
    });

    it("should throw unsupported response", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();

      const error = { Err: { Test: null } as unknown as RetrieveBtcError };
      service.retrieve_btc_with_approval.mockResolvedValue(error);

      const canister = minter(service);

      const call = () => canister.retrieveBtcWithApproval(params);

      await expect(call).rejects.toThrow(
        new MinterRetrieveBtcError(
          `Unsupported response type in minter.retrieveBtc ${JSON.stringify(
            error.Err,
          )}`,
        ),
      );
    });
  });

  describe("Retrieve BTC status", () => {
    it("should return status", async () => {
      const submittedStatus = {
        Submitted: { txid: new Uint8Array([3, 2, 6]) },
      } as RetrieveBtcStatus;

      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.retrieve_btc_status.mockResolvedValue(submittedStatus);
      const transactionId = 481n;

      const canister = minter(service);

      const res = await canister.retrieveBtcStatus({
        transactionId,
        certified: true,
      });

      expect(service.retrieve_btc_status).toHaveBeenCalledTimes(1);
      expect(service.retrieve_btc_status).toHaveBeenCalledWith({
        block_index: transactionId,
      });
      expect(res).toEqual(submittedStatus);
    });

    it("should use non-certified service", async () => {
      const submittedStatus = {
        Submitted: { txid: new Uint8Array([9, 7, 5]) },
      } as RetrieveBtcStatus;

      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.retrieve_btc_status.mockResolvedValue(submittedStatus);
      const transactionId = 382n;

      const canister = nonCertifiedMinter(service);

      const res = await canister.retrieveBtcStatus({
        transactionId,
        certified: false,
      });

      expect(service.retrieve_btc_status).toHaveBeenCalledTimes(1);
      expect(service.retrieve_btc_status).toHaveBeenCalledWith({
        block_index: transactionId,
      });
      expect(res).toEqual(submittedStatus);
    });
  });

  describe("Retrieve BTC status V2 by account", () => {
    const owner = Principal.fromHex("4321");
    const status1 = {
      Submitted: { txid: new Uint8Array([3, 2, 6]) },
    } as RetrieveBtcStatusV2;
    const status2 = {
      Reimbursed: {
        account: { owner, subaccount: [] },
        mint_block_index: 103n,
        amount: 123_000n,
        reason: {
          CallFailed: null,
        },
      },
    } as RetrieveBtcStatusV2;
    const response = [
      {
        block_index: 101n,
        status_v2: [status1],
      },
      {
        block_index: 102n,
        status_v2: [status2],
      },
    ] as {
      block_index: bigint;
      status_v2: [] | [RetrieveBtcStatusV2];
    }[];

    const expectedResponse = [
      {
        id: 101n,
        status: status1,
      },
      {
        id: 102n,
        status: status2,
      },
    ];

    it("should return statuses", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.retrieve_btc_status_v2_by_account.mockResolvedValue(response);

      const canister = minter(service);

      const res = await canister.retrieveBtcStatusV2ByAccount({
        certified: true,
      });

      expect(service.retrieve_btc_status_v2_by_account).toHaveBeenCalledTimes(
        1,
      );
      expect(service.retrieve_btc_status_v2_by_account).toHaveBeenCalledWith(
        [],
      );
      expect(res).toEqual(expectedResponse);
    });

    it("should return statuses for account owner", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.retrieve_btc_status_v2_by_account.mockResolvedValue(response);

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");

      const account = {
        owner,
      };

      const res = await canister.retrieveBtcStatusV2ByAccount({
        certified: true,
        account,
      });

      expect(service.retrieve_btc_status_v2_by_account).toHaveBeenCalledTimes(
        1,
      );
      expect(service.retrieve_btc_status_v2_by_account).toHaveBeenCalledWith([
        {
          owner,
          subaccount: [],
        },
      ]);
      expect(res).toEqual(expectedResponse);
    });

    it("should return statuses for account with subaccount", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.retrieve_btc_status_v2_by_account.mockResolvedValue(response);

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");
      const subaccount = arrayOfNumberToUint8Array([0, 0, 1]);

      const account = {
        owner,
        subaccount,
      };

      const res = await canister.retrieveBtcStatusV2ByAccount({
        certified: true,
        account,
      });

      expect(service.retrieve_btc_status_v2_by_account).toHaveBeenCalledTimes(
        1,
      );
      expect(service.retrieve_btc_status_v2_by_account).toHaveBeenCalledWith([
        {
          owner,
          subaccount: [subaccount],
        },
      ]);
      expect(res).toEqual(expectedResponse);
    });

    it("should use non-certified service", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.retrieve_btc_status_v2_by_account.mockResolvedValue(response);

      const canister = nonCertifiedMinter(service);

      const res = await canister.retrieveBtcStatusV2ByAccount({
        certified: false,
      });

      expect(service.retrieve_btc_status_v2_by_account).toHaveBeenCalledTimes(
        1,
      );
      expect(service.retrieve_btc_status_v2_by_account).toHaveBeenCalledWith(
        [],
      );
      expect(res).toEqual(expectedResponse);
    });
  });

  describe("Estimate Withdrawal Fee", () => {
    it("should return estimated fee", async () => {
      const result = { minter_fee: 123n, bitcoin_fee: 456n };

      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.estimate_withdrawal_fee.mockResolvedValue(result);

      const canister = minter(service);

      const res = await canister.estimateWithdrawalFee({
        certified: true,
        amount: undefined,
      });

      expect(service.estimate_withdrawal_fee).toHaveBeenCalled();
      expect(res).toEqual(result);
    });

    it("should bubble errors", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.estimate_withdrawal_fee.mockImplementation(() => {
        throw new Error();
      });

      const canister = minter(service);

      await expect(
        async () =>
          await canister.estimateWithdrawalFee({
            certified: true,
            amount: undefined,
          }),
      ).rejects.toThrow();
    });
  });

  describe("Minter Info", () => {
    it("should return minter info", async () => {
      const result = {
        retrieve_btc_min_amount: 1n,
        min_confirmations: 12,
        kyt_fee: 3n,
      };

      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.get_minter_info.mockResolvedValue(result);

      const canister = minter(service);

      const res = await canister.getMinterInfo({
        certified: true,
      });

      expect(service.get_minter_info).toHaveBeenCalled();
      expect(res).toEqual(result);
    });

    it("should bubble errors", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.get_minter_info.mockImplementation(() => {
        throw new Error();
      });

      const canister = minter(service);

      await expect(
        async () => await canister.getMinterInfo({ certified: true }),
      ).rejects.toThrow();
    });
  });

  describe("Known utxos", () => {
    const utxosMock: Utxo[] = [
      {
        height: 123,
        value: 123n,
        outpoint: { txid: arrayOfNumberToUint8Array([0, 0, 1]), vout: 123 },
      },
      {
        height: 456,
        value: 456n,
        outpoint: { txid: arrayOfNumberToUint8Array([1, 2, 1]), vout: 456 },
      },
    ];

    it("should return the known utxos of main account", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.get_known_utxos.mockResolvedValue(utxosMock);

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");
      const res = await canister.getKnownUtxos({
        owner,
      });

      expect(service.get_known_utxos).toHaveBeenCalledWith({
        owner: toNullable(owner),
        subaccount: [],
      });
      expect(res).toEqual(utxosMock);
    });

    it("should return known utcos if a subaccount is provided", async () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.get_known_utxos.mockResolvedValue(utxosMock);

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");
      const subaccount = arrayOfNumberToUint8Array([0, 0, 1]);
      const res = await canister.getKnownUtxos({
        owner,
        subaccount,
      });

      expect(service.get_known_utxos).toHaveBeenCalledWith({
        owner: toNullable(owner),
        subaccount: [subaccount],
      });
      expect(res).toEqual(utxosMock);
    });

    it("should bubble errors", () => {
      const service = mock<ActorSubclass<CkBTCMinterService>>();
      service.get_known_utxos.mockImplementation(() => {
        throw new Error();
      });

      const canister = minter(service);

      const owner = Principal.fromText("aaaaa-aa");

      expect(() =>
        canister.getKnownUtxos({
          owner,
        }),
      ).toThrow();
    });
  });
});
