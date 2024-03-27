import { ActorSubclass } from "@dfinity/agent";
import { Memo, Payment, SendRequest } from "@dfinity/nns-proto";
import { Principal } from "@dfinity/principal";
import { arrayOfNumberToUint8Array } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import type { _SERVICE as LedgerService } from "../candid/ledger";
import { AccountIdentifier } from "./account_identifier";
import { toICPTs } from "./canisters/ledger/ledger.request.converts";
import { TRANSACTION_FEE } from "./constants/constants";
import {
  BadFeeError,
  InsufficientFundsError,
  InvalidSenderError,
  TxCreatedInFutureError,
  TxDuplicateError,
  TxTooOldError,
} from "./errors/ledger.errors";
import { LedgerCanister } from "./ledger.canister";
import { mockAccountIdentifier } from "./mocks/ledger.mock";
import { E8s } from "./types/common";

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

    describe("for hardware wallet", () => {
      it("returns account balance with query call", async () => {
        const queryFetcher = jest
          .fn()
          .mockResolvedValue(new Uint8Array(32).fill(0));
        const ledger = LedgerCanister.create({
          queryCallOverride: queryFetcher,
          hardwareWallet: true,
        });
        const balance = await ledger.accountBalance({
          accountIdentifier: mockAccountIdentifier,
          certified: false,
        });
        expect(typeof balance).toEqual("bigint");
        expect(queryFetcher).toBeCalled();
      });

      it("returns account balance with update call", async () => {
        const updateFetcher = jest
          .fn()
          .mockResolvedValue(new Uint8Array(32).fill(0));
        const ledger = LedgerCanister.create({
          updateCallOverride: updateFetcher,
          hardwareWallet: true,
        });
        const balance = await ledger.accountBalance({
          accountIdentifier: mockAccountIdentifier,
          certified: true,
        });
        expect(typeof balance).toEqual("bigint");
        expect(updateFetcher).toBeCalled();
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

    describe("for hardware wallet", () => {
      const to = mockAccountIdentifier;
      const amount = BigInt(100000);

      it("handles invalid sender", async () => {
        const ledger = LedgerCanister.create({
          updateCallOverride: () => {
            throw new Error(`Reject code: 5
                Reject text: Canister ryjl3-tyaaa-aaaaa-aaaba-cai trapped explicitly: Panicked at 'Sending from 2vxsx-fae is not allowed', rosetta-api/ledger_canister/src/main.rs:135:9`);
          },
          hardwareWallet: true,
        });

        const call = async () =>
          await ledger.transfer({
            to,
            amount,
          });

        await expect(call).rejects.toThrow(new InvalidSenderError());
      });

      it("handles duplicate transaction", async () => {
        const ledger = LedgerCanister.create({
          updateCallOverride: () => {
            throw new Error(`Reject code: 5
                Reject text: Canister ryjl3-tyaaa-aaaaa-aaaba-cai trapped explicitly: Panicked at 'transaction is a duplicate of another transaction in block 1235123', rosetta-api/ledger_canister/src/main.rs:135:9`);
          },
          hardwareWallet: true,
        });

        const call = async () =>
          await ledger.transfer({
            to,
            amount,
          });

        await expect(call).rejects.toThrow(
          new TxDuplicateError(BigInt(1235123)),
        );
      });

      it("handles insufficient balance", async () => {
        const ledger = LedgerCanister.create({
          updateCallOverride: () => {
            throw new Error(`Reject code: 5
                Reject text: Canister ryjl3-tyaaa-aaaaa-aaaba-cai trapped explicitly: Panicked at 'the debit account doesn't have enough funds to complete the transaction, current balance: 123.46789123', rosetta-api/ledger_canister/src/main.rs:135:9`);
          },
          hardwareWallet: true,
        });

        const call = async () =>
          await ledger.transfer({
            to,
            amount,
          });

        await expect(call).rejects.toThrow(
          new InsufficientFundsError(BigInt(12346789123)),
        );
      });

      it("handles future tx", async () => {
        const ledger = LedgerCanister.create({
          updateCallOverride: () => {
            throw new Error(`Reject code: 5
                Reject text: Canister ryjl3-tyaaa-aaaaa-aaaba-cai trapped explicitly: Panicked at 'transaction's created_at_time is in future', rosetta-api/ledger_canister/src/main.rs:135:9`);
          },
          hardwareWallet: true,
        });

        const call = async () =>
          await ledger.transfer({
            to,
            amount,
          });

        await expect(call).rejects.toThrow(new TxCreatedInFutureError());
      });

      it("handles old tx", async () => {
        const ledger = LedgerCanister.create({
          updateCallOverride: () => {
            throw new Error(`Reject code: 5
                Reject text: Canister ryjl3-tyaaa-aaaaa-aaaba-cai trapped explicitly: Panicked at 'transaction is older than 123 seconds', rosetta-api/ledger_canister/src/main.rs:135:9`);
          },
          hardwareWallet: true,
        });

        const call = async () =>
          await ledger.transfer({
            to,
            amount,
          });

        await expect(call).rejects.toThrow(new TxTooOldError(123));
      });

      it("handles subaccount for hw", async () => {
        const ledger = LedgerCanister.create({
          updateCallOverride: jest
            .fn()
            .mockResolvedValue(new Uint8Array(32).fill(0)),
          hardwareWallet: true,
        });
        const fromSubAccount = [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 1,
        ];

        const res = await ledger.transfer({
          to,
          amount,
          fromSubAccount,
        });

        expect(typeof res).toEqual("bigint");
      });

      const initExpectedRequest = async ({
        to,
        amount,
        memo,
        fee,
      }: {
        to: AccountIdentifier;
        amount: bigint;
        memo?: bigint;
        fee?: E8s;
      }): Promise<SendRequest> => {
        const expectedRequest = new SendRequest();
        expectedRequest.setTo(await to.toProto());

        const payment = new Payment();
        payment.setReceiverGets(await toICPTs(amount));
        expectedRequest.setPayment(payment);

        const requestMemo = new Memo();
        requestMemo.setMemo((memo ?? BigInt(0)).toString());
        expectedRequest.setMemo(requestMemo);

        expectedRequest.setMaxFee(await toICPTs(fee ?? TRANSACTION_FEE));

        return expectedRequest;
      };

      it("should set a default fee for a transfer", async () => {
        const ledger = LedgerCanister.create({
          updateCallOverride: () => Promise.resolve(new Uint8Array()),
          hardwareWallet: true,
        });

        // @ts-ignore - private function
        const spy = jest.spyOn(ledger, "updateFetcher");

        const expectedRequest = await initExpectedRequest({ to, amount });

        await ledger.transfer({
          to,
          amount,
        });

        expect(spy).toHaveBeenCalledWith({
          // @ts-ignore - private variable
          agent: ledger.agent,
          // @ts-ignore - private variable
          canisterId: ledger.canisterId,
          methodName: "send_pb",
          arg: expectedRequest.serializeBinary(),
        });
      });

      it("should use custom fee for a transfer", async () => {
        const ledger = LedgerCanister.create({
          updateCallOverride: () => Promise.resolve(new Uint8Array()),
          hardwareWallet: true,
        });

        // @ts-ignore - private function
        const spy = jest.spyOn(ledger, "updateFetcher");

        const fee = BigInt(990_000);

        const expectedRequest = await initExpectedRequest({ to, amount, fee });

        await ledger.transfer({
          to,
          amount,
          fee,
        });

        expect(spy).toHaveBeenCalledWith({
          // @ts-ignore - private variable
          agent: ledger.agent,
          // @ts-ignore - private variable
          canisterId: ledger.canisterId,
          methodName: "send_pb",
          arg: expectedRequest.serializeBinary(),
        });
      });

      it("should use custom memo for a transfer", async () => {
        const ledger = LedgerCanister.create({
          updateCallOverride: () => Promise.resolve(new Uint8Array()),
          hardwareWallet: true,
        });

        // @ts-ignore - private function
        const spy = jest.spyOn(ledger, "updateFetcher");

        const memo = BigInt(990_000);

        const expectedRequest = await initExpectedRequest({ to, amount, memo });

        await ledger.transfer({
          to,
          amount,
          memo,
        });

        expect(spy).toHaveBeenCalledWith({
          // @ts-ignore - private variable
          agent: ledger.agent,
          // @ts-ignore - private variable
          canisterId: ledger.canisterId,
          methodName: "send_pb",
          arg: expectedRequest.serializeBinary(),
        });
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

    describe("for hardware wallet", () => {
      const to = {
        owner: Principal.fromHex("abcd"),
        subaccount: [] as [],
      };
      const amount = BigInt(100000);

      it("should set a default fee for a transfer", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.icrc1_transfer.mockResolvedValue({
          Ok: BigInt(1234),
        });
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
          serviceOverride: service,
          hardwareWallet: true,
        });

        const icrc1Memo = new Uint8Array();
        await ledger.icrc1Transfer({
          to,
          amount,
          icrc1Memo,
        });

        expect(service.transfer_fee).not.toBeCalled();

        expect(service.icrc1_transfer).toBeCalledWith({
          to,
          fee: [BigInt(10000)],
          amount,
          memo: [icrc1Memo],
          created_at_time: [],
          from_subaccount: [],
        });
      });

      it("should use custom fee for a transfer", async () => {
        const service = mock<ActorSubclass<LedgerService>>();
        service.icrc1_transfer.mockResolvedValue({
          Ok: BigInt(1234),
        });
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
          serviceOverride: service,
          hardwareWallet: true,
        });

        const fee = BigInt(990_000);
        const icrc1Memo = new Uint8Array();
        await ledger.icrc1Transfer({
          to,
          amount,
          fee,
          icrc1Memo,
        });

        expect(service.transfer_fee).not.toBeCalled();

        expect(service.icrc1_transfer).toBeCalledWith({
          to,
          fee: [fee],
          amount,
          memo: [icrc1Memo],
          created_at_time: [],
          from_subaccount: [],
        });
      });
    });
  });
});
