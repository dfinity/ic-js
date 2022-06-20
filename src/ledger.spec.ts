import { mock } from "jest-mock-extended";
import { LedgerService } from "../candid/ledger.idl";
import { Memo, Payment, SendRequest } from "../proto/ledger_pb";
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
import { ICP } from "./icp";
import { LedgerCanister } from "./ledger";
import { E8s } from "./types/common";

describe("LedgerCanister", () => {
  const accountIdentifier = AccountIdentifier.fromHex(
    "3e8bbceef8b9338e56a1b561a127326e6614894ab9b0739df4cc3664d40a5958"
  );
  describe("accountBalance", () => {
    describe("no hardware wallet", () => {
      const tokens = {
        e8s: BigInt(30_000_000),
      };
      it("returns account balance with query call", async () => {
        const service = mock<LedgerService>();
        service.account_balance.mockResolvedValue(tokens);
        const ledger = LedgerCanister.create({
          serviceOverride: service,
        });

        const balance = await ledger.accountBalance({
          accountIdentifier,
          certified: false,
        });
        expect(balance.toE8s()).toEqual(tokens.e8s);
        expect(service.account_balance).toBeCalled();
      });

      it("returns account balance with update call", async () => {
        const service = mock<LedgerService>();
        service.account_balance.mockResolvedValue(tokens);
        const ledger = LedgerCanister.create({
          certifiedServiceOverride: service,
        });

        const balance = await ledger.accountBalance({
          accountIdentifier,
          certified: true,
        });
        expect(balance.toE8s()).toEqual(tokens.e8s);
        expect(service.account_balance).toBeCalled();
      });
    });

    describe("transactionFee", () => {
      it("returns the transaction fee in e8s", async () => {
        const fee = BigInt(10_000);
        const service = mock<LedgerService>();
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
          accountIdentifier,
          certified: false,
        });
        expect(typeof balance.toE8s()).toEqual("bigint");
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
          accountIdentifier,
          certified: true,
        });
        expect(typeof balance.toE8s()).toEqual("bigint");
        expect(updateFetcher).toBeCalled();
      });
    });
  });

  describe("transfer", () => {
    describe("no hardware wallet", () => {
      const to = accountIdentifier;
      const amount = ICP.fromE8s(BigInt(100000));

      it("fetches transaction fee if not present", async () => {
        const service = mock<LedgerService>();
        service.transfer_fee.mockResolvedValue({
          transfer_fee: { e8s: BigInt(10_000) },
        });
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

        expect(service.transfer_fee).toBeCalled();
      });

      it("calls transfer certified service with data", async () => {
        const service = mock<LedgerService>();
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
          to: to.toNumbers(),
          fee: {
            e8s: fee,
          },
          amount: {
            e8s: amount.toE8s(),
          },
          memo,
          created_at_time: [],
          from_subaccount: [],
        });
      });

      it("sets a default memo if not passed", async () => {
        const service = mock<LedgerService>();
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
          to: to.toNumbers(),
          fee: {
            e8s: fee,
          },
          amount: {
            e8s: amount.toE8s(),
          },
          memo: defaultMemo,
          created_at_time: [],
          from_subaccount: [],
        });
      });

      it("handles subaccount", async () => {
        const service = mock<LedgerService>();
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
          to: to.toNumbers(),
          fee: {
            e8s: fee,
          },
          amount: {
            e8s: amount.toE8s(),
          },
          memo,
          created_at_time: [],
          from_subaccount: [fromSubAccount],
        });
      });

      it("handles duplicate transaction", async () => {
        const service = mock<LedgerService>();
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
        const service = mock<LedgerService>();
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
        const service = mock<LedgerService>();
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
        const service = mock<LedgerService>();
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
        const service = mock<LedgerService>();
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
      const to = accountIdentifier;
      const amount = ICP.fromE8s(BigInt(100000));

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
          new TxDuplicateError(BigInt(1235123))
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
          new InsufficientFundsError(ICP.fromE8s(BigInt(12346789123)))
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

      it("handles subaccount", async () => {
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

      const initExpectedRequest = ({
        to,
        amount,
        memo,
        fee,
      }: {
        to: AccountIdentifier;
        amount: ICP;
        memo?: bigint;
        fee?: E8s;
      }): SendRequest => {
        const expectedRequest = new SendRequest();
        expectedRequest.setTo(to.toProto());

        const payment = new Payment();
        payment.setReceiverGets(amount.toProto());
        expectedRequest.setPayment(payment);

        const requestMemo: Memo = new Memo();
        requestMemo.setMemo((memo ?? BigInt(0)).toString());
        expectedRequest.setMemo(requestMemo);

        expectedRequest.setMaxFee(toICPTs(fee ?? TRANSACTION_FEE));

        return expectedRequest;
      };

      it("should set a default fee for a transfer", async () => {
        const ledger = LedgerCanister.create({
          updateCallOverride: () => Promise.resolve(new Uint8Array()),
          hardwareWallet: true,
        });

        // @ts-ignore - private function
        const spy = jest.spyOn(ledger, "updateFetcher");

        const expectedRequest = initExpectedRequest({ to, amount });

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

        const expectedRequest = initExpectedRequest({ to, amount, fee });

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

        const expectedRequest = initExpectedRequest({ to, amount, memo });

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
});
