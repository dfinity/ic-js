import { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { arrayOfNumberToUint8Array } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import {
  _SERVICE as LedgerService,
  Value,
  type Account,
  type ApproveArgs as Icrc2ApproveRawRequest,
} from "../candid/ledger";
import { TRANSACTION_FEE } from "./constants/constants";
import {
  BadFeeError,
  CreatedInFutureError,
  InsufficientFundsError,
  TxCreatedInFutureError,
  TxDuplicateError,
  TxTooOldError,
} from "./errors/ledger.errors";
import { LedgerCanister } from "./ledger.canister";
import { mockAccountIdentifier, mockPrincipal } from "./mocks/ledger.mock";
import type { Icrc2ApproveRequest } from "./types/ledger_converters";

describe("LedgerCanister", () => {
  describe("accountBalance", () => {
    describe("no hardware wallet", () => {
      const tokens = {
        e8s: BigInt(30_000_000),
      };
      it("returns account balance with query call", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.account_balance.mockResolvedValue(tokens);
        const ledger = LedgerCanister.create({
          serviceOverride: service,
        });

        const balance = await ledger.accountBalance({
          accountIdentifier: mockAccountIdentifier,
          certified: false,
        });
        expect(balance).toEqual(tokens.e8s);
        expect(service.account_balance).toBeCalled();
      });

      it("returns account balance with update call", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.account_balance.mockResolvedValue(tokens);
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
        });

        const balance = await ledger.accountBalance({
          accountIdentifier: mockAccountIdentifier,
          certified: true,
        });
        expect(balance).toEqual(tokens.e8s);
        expect(service.account_balance).toBeCalled();
      });

      it("returns account balance with account identifier as hex", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.account_balance.mockResolvedValue(tokens);
        const ledger = LedgerCanister.create({
          serviceOverride: service,
        });

        const balance = await ledger.accountBalance({
          accountIdentifier: mockAccountIdentifier.toHex(),
          certified: false,
        });
        expect(balance).toEqual(tokens.e8s);
        expect(service.account_balance).toBeCalled();
      });
    });

    describe("metadata", () => {
      it("should return the token metadata", async () => {
        const tokeMetadataResponseMock: Array<[string, Value]> = [
          ["icrc1:decimals", { Nat: BigInt(8) }],
          ["icrc1:name", { Text: "Beta Test" }],
          ["icrc1:symbol", { Text: "ICP" }],
          ["icrc1:fee", { Nat: BigInt(1000) }],
        ];

        const service = mock<ActorSubclass<LedgerService>>();
        service.icrc1_metadata.mockResolvedValue(tokeMetadataResponseMock);

        const canister = LedgerCanister.create({
          certifiedServiceOverride: service,
        });

        const res = await canister.metadata({});
        expect(res).toEqual(tokeMetadataResponseMock);
      });
    });

    describe("transactionFee", () => {
      it("returns the transaction fee in e8s", async () => {
        const fee = BigInt(10_000);
        const service = mock<ActorSubclass<LedgerService>>();
        service.transfer_fee.mockResolvedValue({
          transfer_fee: {
            e8s: fee,
          },
        });
        const ledger = LedgerCanister.create({
          serviceOverride: service,
        });

        const expectedFee = await ledger.transactionFee();
        expect(service.transfer_fee).toBeCalled();
        expect(expectedFee).toBe(fee);
      });
    });
  });

  describe("transfer", () => {
    describe("no hardware wallet", () => {
      const to = mockAccountIdentifier;
      const amount = BigInt(100000);

      it("uses default transaction fee if not present", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.transfer.mockResolvedValue({
          Ok: BigInt(1234),
        });
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
          serviceOverride: service,
        });
        await ledger.transfer({
          to,
          amount,
        });

        expect(service.transfer_fee).not.toBeCalled();
        expect(service.transfer).toBeCalledWith({
          amount: { e8s: amount },
          created_at_time: [],
          fee: { e8s: TRANSACTION_FEE },
          from_subaccount: [],
          memo: 0n,
          to: to.toUint8Array(),
        });
        expect(service.transfer).toBeCalledTimes(1);
      });

      it("calls transfer certified service with data", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.transfer.mockResolvedValue({
          Ok: BigInt(1234),
        });
        const fee = BigInt(10_000);
        const memo = BigInt(3456);
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
        });
        await ledger.transfer({
          to,
          amount,
          fee,
          memo,
        });

        expect(service.transfer).toBeCalledWith({
          to: to.toUint8Array(),
          fee: {
            e8s: fee,
          },
          amount: {
            e8s: amount,
          },
          memo,
          created_at_time: [],
          from_subaccount: [],
        });
      });

      it("sets a default memo if not passed", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.transfer.mockResolvedValue({
          Ok: BigInt(1234),
        });
        const fee = BigInt(10_000);
        const defaultMemo = BigInt(0);
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
        });
        await ledger.transfer({
          to,
          amount,
          fee,
        });

        expect(service.transfer).toBeCalledWith({
          to: to.toUint8Array(),
          fee: {
            e8s: fee,
          },
          amount: {
            e8s: amount,
          },
          memo: defaultMemo,
          created_at_time: [],
          from_subaccount: [],
        });
      });

      it("handles createdAt parameter", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.transfer.mockResolvedValue({
          Ok: BigInt(1234),
        });
        const fee = BigInt(10_000);
        const memo = BigInt(3456);
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
        });
        const createdAt = BigInt(123132223);
        await ledger.transfer({
          to,
          amount,
          fee,
          memo,
          createdAt,
        });

        expect(service.transfer).toBeCalledWith({
          to: to.toUint8Array(),
          fee: {
            e8s: fee,
          },
          amount: {
            e8s: amount,
          },
          memo,
          created_at_time: [{ timestamp_nanos: createdAt }],
          from_subaccount: [],
        });
      });

      it("handles subaccount", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.transfer.mockResolvedValue({
          Ok: BigInt(1234),
        });
        const fee = BigInt(10_000);
        const memo = BigInt(0);
        const fromSubAccount = [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 1,
        ];
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
        });
        await ledger.transfer({
          to,
          amount,
          fee,
          memo,
          fromSubAccount,
        });

        expect(service.transfer).toBeCalledWith({
          to: to.toUint8Array(),
          fee: {
            e8s: fee,
          },
          amount: {
            e8s: amount,
          },
          memo,
          created_at_time: [],
          from_subaccount: [arrayOfNumberToUint8Array(fromSubAccount)],
        });
      });

      it("handles duplicate transaction", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.transfer.mockResolvedValue({
          Err: {
            TxDuplicate: {
              duplicate_of: BigInt(10),
            },
          },
        });
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
          serviceOverride: service,
        });
        const call = async () =>
          await ledger.transfer({
            to,
            amount,
            fee: BigInt(10_000),
          });

        expect(call).rejects.toThrowError(TxDuplicateError);
      });

      it("handles insufficient balance", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.transfer.mockResolvedValue({
          Err: {
            InsufficientFunds: {
              balance: {
                e8s: BigInt(12312414),
              },
            },
          },
        });
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
          serviceOverride: service,
        });
        const call = async () =>
          await ledger.transfer({
            to,
            amount,
            fee: BigInt(10_000),
          });

        expect(call).rejects.toThrowError(InsufficientFundsError);
      });

      it("handles old tx", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.transfer.mockResolvedValue({
          Err: {
            TxTooOld: {
              allowed_window_nanos: BigInt(1234),
            },
          },
        });
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
          serviceOverride: service,
        });
        const call = async () =>
          await ledger.transfer({
            to,
            amount,
            fee: BigInt(10_000),
          });

        expect(call).rejects.toThrowError(TxTooOldError);
      });

      it("handles bad fee", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.transfer.mockResolvedValue({
          Err: {
            BadFee: {
              expected_fee: {
                e8s: BigInt(1234),
              },
            },
          },
        });
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
          serviceOverride: service,
        });
        const call = async () =>
          await ledger.transfer({
            to,
            amount,
            fee: BigInt(10_000),
          });

        expect(call).rejects.toThrowError(BadFeeError);
      });

      it("handles transaction created in the future", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.transfer.mockResolvedValue({
          Err: {
            TxCreatedInFuture: null,
          },
        });
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
          serviceOverride: service,
        });
        const call = async () =>
          await ledger.transfer({
            to,
            amount,
            fee: BigInt(10_000),
          });

        expect(call).rejects.toThrowError(TxCreatedInFutureError);
      });
    });
  });

  describe("icrc1Transfer", () => {
    describe("no hardware wallet", () => {
      const to = {
        owner: Principal.fromHex("abcd"),
        subaccount: [] as [],
      };
      const amount = BigInt(100000);

      it("uses default transaction fee if not present", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.icrc1_transfer.mockResolvedValue({
          Ok: BigInt(1234),
        });
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
          serviceOverride: service,
        });
        await ledger.icrc1Transfer({
          to,
          amount,
        });

        expect(service.transfer_fee).not.toBeCalled();
        expect(service.icrc1_transfer).toBeCalledWith({
          amount,
          created_at_time: [],
          fee: [TRANSACTION_FEE],
          from_subaccount: [],
          memo: [],
          to,
        });
        expect(service.icrc1_transfer).toBeCalledTimes(1);
      });

      it("calls transfer certified service with data", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.icrc1_transfer.mockResolvedValue({
          Ok: BigInt(1234),
        });
        const fee = BigInt(10_000);
        const icrc1Memo = new Uint8Array([3, 4, 5, 6]);
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
        });
        await ledger.icrc1Transfer({
          to,
          amount,
          fee,
          icrc1Memo,
        });

        expect(service.icrc1_transfer).toBeCalledWith({
          to,
          fee: [fee],
          amount,
          memo: [icrc1Memo],
          created_at_time: [],
          from_subaccount: [],
        });
      });

      it("sets a default memo if not passed", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.icrc1_transfer.mockResolvedValue({
          Ok: BigInt(1234),
        });
        const fee = BigInt(10_000);
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
        });
        await ledger.icrc1Transfer({
          to,
          amount,
          fee,
        });

        expect(service.icrc1_transfer).toBeCalledWith({
          to,
          fee: [fee],
          amount,
          memo: [],
          created_at_time: [],
          from_subaccount: [],
        });
      });

      it("handles createdAt parameter", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.icrc1_transfer.mockResolvedValue({
          Ok: BigInt(1234),
        });
        const fee = BigInt(10_000);
        const icrc1Memo = new Uint8Array([3, 4, 5, 6]);
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
        });
        const createdAt = BigInt(123132223);
        await ledger.icrc1Transfer({
          to,
          amount,
          fee,
          icrc1Memo,
          createdAt,
        });

        expect(service.icrc1_transfer).toBeCalledWith({
          to,
          fee: [fee],
          amount,
          memo: [icrc1Memo],
          created_at_time: [createdAt],
          from_subaccount: [],
        });
      });

      it("handles from subaccount", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.icrc1_transfer.mockResolvedValue({
          Ok: BigInt(1234),
        });
        const fee = BigInt(10_000);
        const icrc1Memo = new Uint8Array();
        const fromSubAccount = new Uint8Array([
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 1,
        ]);
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
        });
        await ledger.icrc1Transfer({
          to,
          amount,
          fee,
          icrc1Memo,
          fromSubAccount,
        });

        expect(service.icrc1_transfer).toBeCalledWith({
          to,
          fee: [fee],
          amount,
          memo: [icrc1Memo],
          created_at_time: [],
          from_subaccount: [fromSubAccount],
        });
      });

      it("handles to subaccount", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.icrc1_transfer.mockResolvedValue({
          Ok: BigInt(1234),
        });
        const fee = BigInt(10_000);
        const icrc1Memo = new Uint8Array();
        const toSubAccount = new Uint8Array([
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 1,
        ]);
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
        });
        await ledger.icrc1Transfer({
          to: {
            ...to,
            subaccount: [toSubAccount],
          },
          amount,
          fee,
          icrc1Memo,
        });

        expect(service.icrc1_transfer).toBeCalledWith({
          to: {
            ...to,
            subaccount: [toSubAccount],
          },
          fee: [fee],
          amount,
          memo: [icrc1Memo],
          created_at_time: [],
          from_subaccount: [],
        });
      });

      it("handles duplicate transaction", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.icrc1_transfer.mockResolvedValue({
          Err: {
            Duplicate: {
              duplicate_of: BigInt(10),
            },
          },
        });
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
          serviceOverride: service,
        });
        const call = async () =>
          await ledger.icrc1Transfer({
            to,
            amount,
            fee: BigInt(10_000),
          });

        expect(call).rejects.toThrowError(TxDuplicateError);
      });

      it("handles insufficient balance", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.icrc1_transfer.mockResolvedValue({
          Err: {
            InsufficientFunds: {
              balance: BigInt(12312414),
            },
          },
        });
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
          serviceOverride: service,
        });
        const call = async () =>
          await ledger.icrc1Transfer({
            to,
            amount,
            fee: BigInt(10_000),
          });

        expect(call).rejects.toThrowError(InsufficientFundsError);
      });

      it("handles old tx", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.icrc1_transfer.mockResolvedValue({
          Err: {
            TooOld: null,
          },
        });
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
          serviceOverride: service,
        });
        const call = async () =>
          await ledger.icrc1Transfer({
            to,
            amount,
            fee: BigInt(10_000),
          });

        expect(call).rejects.toThrowError(TxTooOldError);
      });

      it("handles bad fee", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.icrc1_transfer.mockResolvedValue({
          Err: {
            BadFee: {
              expected_fee: BigInt(1234),
            },
          },
        });
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
          serviceOverride: service,
        });
        const call = async () =>
          await ledger.icrc1Transfer({
            to,
            amount,
            fee: BigInt(10_000),
          });

        expect(call).rejects.toThrowError(BadFeeError);
      });

      it("handles transaction created in the future", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.icrc1_transfer.mockResolvedValue({
          Err: {
            CreatedInFuture: { ledger_time: BigInt(1234) },
          },
        });
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
          serviceOverride: service,
        });
        const call = async () =>
          await ledger.icrc1Transfer({
            to,
            amount,
            fee: BigInt(10_000),
          });

        expect(call).rejects.toThrowError(TxCreatedInFutureError);
      });
    });
  });

  describe("icrc2Approve", () => {
    const approveRequest: Icrc2ApproveRequest = {
      spender: {
        owner: mockPrincipal,
        subaccount: [],
      },
      amount: BigInt(100_000_000),
      expires_at: 123n,
    };

    const approveRawRequest: Icrc2ApproveRawRequest = {
      expected_allowance: [],
      expires_at: [123n],
      from_subaccount: [],
      spender: {
        owner: mockPrincipal,
        subaccount: [],
      },
      fee: [],
      memo: [],
      created_at_time: [],
      amount: BigInt(100_000_000),
    };

    it("should return the block height successfully", async () => {
      const service = mock<ActorSubclass<LedgerService>>();
      const blockHeight = BigInt(100);
      service.icrc2_approve.mockResolvedValue({ Ok: blockHeight });

      const ledger = LedgerCanister.create({
        certifiedServiceOverride: service,
      });

      const res = await ledger.icrc2Approve(approveRequest);
      expect(res).toEqual(blockHeight);
      expect(service.icrc2_approve).toBeCalledWith({
        ...approveRawRequest,
        fee: [TRANSACTION_FEE],
      });
    });

    it("should call approve with default fee", async () => {
      const service = mock<ActorSubclass<LedgerService>>();
      const blockHeight = BigInt(100);
      service.icrc2_approve.mockResolvedValue({ Ok: blockHeight });

      const ledger = LedgerCanister.create({
        certifiedServiceOverride: service,
      });

      const res = await ledger.icrc2Approve(approveRequest);
      expect(res).toEqual(blockHeight);
      expect(service.icrc2_approve).toBeCalledWith({
        ...approveRawRequest,
        fee: [TRANSACTION_FEE],
      });
    });

    it("should call approve with custom fee", async () => {
      const service = mock<ActorSubclass<LedgerService>>();
      const blockHeight = BigInt(100);
      service.icrc2_approve.mockResolvedValue({ Ok: blockHeight });

      const ledger = LedgerCanister.create({
        certifiedServiceOverride: service,
      });

      const res = await ledger.icrc2Approve({
        ...approveRequest,
        fee: 123n,
      });
      expect(res).toEqual(blockHeight);
      expect(service.icrc2_approve).toBeCalledWith({
        ...approveRawRequest,
        fee: [123n],
      });
    });

    it("should call approve with memo", async () => {
      const service = mock<ActorSubclass<LedgerService>>();
      const blockHeight = BigInt(100);
      service.icrc2_approve.mockResolvedValue({ Ok: blockHeight });

      const ledger = LedgerCanister.create({
        certifiedServiceOverride: service,
      });

      const icrc1Memo = arrayOfNumberToUint8Array([1, 2, 3, 4, 5]);

      const res = await ledger.icrc2Approve({
        ...approveRequest,
        icrc1Memo,
      });
      expect(res).toEqual(blockHeight);
      expect(service.icrc2_approve).toBeCalledWith({
        ...approveRawRequest,
        fee: [TRANSACTION_FEE],
        memo: [icrc1Memo],
      });
    });

    it("should call approve with created at", async () => {
      const service = mock<ActorSubclass<LedgerService>>();
      const blockHeight = BigInt(100);
      service.icrc2_approve.mockResolvedValue({ Ok: blockHeight });

      const ledger = LedgerCanister.create({
        certifiedServiceOverride: service,
      });

      const res = await ledger.icrc2Approve({
        ...approveRequest,
        createdAt: 456n,
      });
      expect(res).toEqual(blockHeight);
      expect(service.icrc2_approve).toBeCalledWith({
        ...approveRawRequest,
        fee: [TRANSACTION_FEE],
        created_at_time: [456n],
      });
    });

    it("should call approve with expected allowance", async () => {
      const service = mock<ActorSubclass<LedgerService>>();
      const blockHeight = BigInt(100);
      service.icrc2_approve.mockResolvedValue({ Ok: blockHeight });

      const ledger = LedgerCanister.create({
        certifiedServiceOverride: service,
      });

      const res = await ledger.icrc2Approve({
        ...approveRequest,
        expected_allowance: 999n,
      });
      expect(res).toEqual(blockHeight);
      expect(service.icrc2_approve).toBeCalledWith({
        ...approveRawRequest,
        fee: [TRANSACTION_FEE],
        expected_allowance: [999n],
      });
    });

    it("should call approve with a from subaccount", async () => {
      const service = mock<ActorSubclass<LedgerService>>();
      const blockHeight = BigInt(100);
      service.icrc2_approve.mockResolvedValue({ Ok: blockHeight });

      const ledger = LedgerCanister.create({
        certifiedServiceOverride: service,
      });

      const res = await ledger.icrc2Approve({
        ...approveRequest,
        fromSubAccount: arrayOfNumberToUint8Array([4, 3, 2, 1]),
      });
      expect(res).toEqual(blockHeight);
      expect(service.icrc2_approve).toBeCalledWith({
        ...approveRawRequest,
        fee: [TRANSACTION_FEE],
        from_subaccount: [arrayOfNumberToUint8Array([4, 3, 2, 1])],
      });
    });

    it("should call approve with a spender with subaccount", async () => {
      const service = mock<ActorSubclass<LedgerService>>();
      const blockHeight = BigInt(100);
      service.icrc2_approve.mockResolvedValue({ Ok: blockHeight });

      const ledger = LedgerCanister.create({
        certifiedServiceOverride: service,
      });

      const spender: Account = {
        owner: mockPrincipal,
        subaccount: [arrayOfNumberToUint8Array([9, 8, 7, 6])],
      };

      const res = await ledger.icrc2Approve({
        ...approveRequest,
        spender,
      });
      expect(res).toEqual(blockHeight);
      expect(service.icrc2_approve).toBeCalledWith({
        ...approveRawRequest,
        fee: [TRANSACTION_FEE],
        spender,
      });
    });

    it("should raise CreatedInFutureError", async () => {
      const service = mock<ActorSubclass<LedgerService>>();
      service.icrc2_approve.mockResolvedValue({
        Err: {
          CreatedInFuture: { ledger_time: BigInt(1234) },
        },
      });

      const ledger = LedgerCanister.create({
        certifiedServiceOverride: service,
        serviceOverride: service,
      });

      const call = async () => await ledger.icrc2Approve(approveRequest);

      expect(call).rejects.toThrowError(CreatedInFutureError);
    });
  });
});
