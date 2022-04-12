import { Memo, Payment, SendRequest } from "../proto/ledger_pb";
import { AccountIdentifier } from "./account_identifier";
import { toICPTs } from "./canisters/ledger/ledger.request.converts";
import { TRANSACTION_FEE } from "./constants/constants";
import {
  InsufficientFundsError,
  InvalidSenderError,
  TxCreatedInFutureError,
  TxDuplicateError,
  TxTooOldError,
} from "./errors/ledger.errors";
import { ICP } from "./icp";
import { LedgerCanister } from "./ledger";
import { E8s } from "./types/common";

describe("LedgerCanister.transfer", () => {
  const to = AccountIdentifier.fromHex(
    "3e8bbceef8b9338e56a1b561a127326e6614894ab9b0739df4cc3664d40a5958"
  );
  const amount = ICP.fromE8s(BigInt(100000));

  it("handles invalid sender", async () => {
    const ledger = LedgerCanister.create({
      updateCallOverride: () => {
        throw new Error(`Reject code: 5
            Reject text: Canister ryjl3-tyaaa-aaaaa-aaaba-cai trapped explicitly: Panicked at 'Sending from 2vxsx-fae is not allowed', rosetta-api/ledger_canister/src/main.rs:135:9`);
      },
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
    });

    const call = async () =>
      await ledger.transfer({
        to,
        amount,
      });

    await expect(call).rejects.toThrow(new TxDuplicateError(BigInt(1235123)));
  });

  it("handles insufficient balance", async () => {
    const ledger = LedgerCanister.create({
      updateCallOverride: () => {
        throw new Error(`Reject code: 5
            Reject text: Canister ryjl3-tyaaa-aaaaa-aaaba-cai trapped explicitly: Panicked at 'the debit account doesn't have enough funds to complete the transaction, current balance: 123.46789123', rosetta-api/ledger_canister/src/main.rs:135:9`);
      },
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
    });

    const res = await ledger.transfer({
      to,
      amount,
      fromSubAccountId: 1234,
    });

    expect(typeof res).toEqual("bigint");
  });

  const initExceptedRequest = ({
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
    });

    // @ts-ignore - private function
    const spy = jest.spyOn(ledger, "updateFetcher");

    const expectedRequest = initExceptedRequest({ to, amount });

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
    });

    // @ts-ignore - private function
    const spy = jest.spyOn(ledger, "updateFetcher");

    const fee = BigInt(990_000);

    const expectedRequest = initExceptedRequest({ to, amount, fee });

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
    });

    // @ts-ignore - private function
    const spy = jest.spyOn(ledger, "updateFetcher");

    const memo = BigInt(990_000);

    const expectedRequest = initExceptedRequest({ to, amount, memo });

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
