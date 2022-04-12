import { Agent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import {
  AccountBalanceRequest,
  BlockHeight as PbBlockHeight,
  ICPTs,
  Memo,
  Payment,
  SendRequest,
} from "../proto/ledger_pb";
import { AccountIdentifier } from "./account_identifier";
import {
  subAccountIdToSubaccount,
  toICPTs,
} from "./canisters/ledger/ledger.request.converts";
import { MAINNET_LEDGER_CANISTER_ID } from "./constants/canister_ids";
import { TRANSACTION_FEE } from "./constants/constants";
import { mapTransferError } from "./errors/ledger.errors";
import { ICP } from "./icp";
import { BlockHeight, E8s } from "./types/common";
import { LedgerCanisterCall, LedgerCanisterOptions } from "./types/ledger";
import { defaultAgent } from "./utils/agent.utils";
import { queryCall, updateCall } from "./utils/proto.utils";

export class LedgerCanister {
  private constructor(
    private readonly agent: Agent,
    private readonly canisterId: Principal,
    private readonly updateFetcher: LedgerCanisterCall,
    private readonly queryFetcher: LedgerCanisterCall
  ) {}

  public static create(options: LedgerCanisterOptions = {}) {
    return new LedgerCanister(
      options.agent ?? defaultAgent(),
      options.canisterId ?? MAINNET_LEDGER_CANISTER_ID,
      options.updateCallOverride ?? updateCall,
      options.queryCallOverride ?? queryCall
    );
  }

  /**
   * Returns the balance of the specified account identifier.
   *
   * If `certified` is true, the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   *
   * @throws {@link Error}
   */
  public accountBalance = async ({
    accountIdentifier,
    certified = true,
  }: {
    accountIdentifier: AccountIdentifier;
    certified?: boolean;
  }): Promise<ICP> => {
    const callMethod = certified ? this.updateFetcher : this.queryFetcher;

    const request = new AccountBalanceRequest();
    request.setAccount(accountIdentifier.toProto());

    const responseBytes = await callMethod({
      agent: this.agent,
      canisterId: this.canisterId,
      methodName: "account_balance_pb",
      arg: request.serializeBinary(),
    });

    return ICP.fromE8s(
      BigInt(ICPTs.deserializeBinary(new Uint8Array(responseBytes)).getE8s())
    );
  };

  /**
   * Transfer ICP from the caller to the destination `accountIdentifier`.
   * Returns the index of the block containing the tx if it was successful.
   *
   * @throws {@link TransferError}
   */
  public transfer = async ({
    to,
    amount,
    memo,
    fee,
    fromSubAccountId,
  }: {
    to: AccountIdentifier;
    amount: ICP;
    memo?: bigint;
    fee?: E8s;
    fromSubAccountId?: number;
  }): Promise<BlockHeight> => {
    const request = new SendRequest();
    request.setTo(to.toProto());

    const payment = new Payment();
    payment.setReceiverGets(amount.toProto());
    request.setPayment(payment);

    request.setMaxFee(toICPTs(fee ?? TRANSACTION_FEE));

    // Always explicitly set the memo for compatibility with ledger wallet - hardware wallet
    const requestMemo: Memo = new Memo();
    requestMemo.setMemo((memo ?? BigInt(0)).toString());
    request.setMemo(requestMemo);

    if (fromSubAccountId !== undefined) {
      request.setFromSubaccount(subAccountIdToSubaccount(fromSubAccountId));
    }

    try {
      const responseBytes = await this.updateFetcher({
        agent: this.agent,
        canisterId: this.canisterId,
        methodName: "send_pb",
        arg: request.serializeBinary(),
      });

      // Successful tx. Return the block height.
      return BigInt(PbBlockHeight.deserializeBinary(responseBytes).getHeight());
    } catch (err) {
      if (err instanceof Error) {
        throw mapTransferError(err);
      }

      throw err;
    }
  };
}
