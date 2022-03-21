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
import { MAINNET_LEDGER_CANISTER_ID } from "./constants/canister_ids";
import { mapTransferError } from "./errors/ledger.errors";
import { ICP } from "./icp";
import {BlockHeight, CanisterCall} from "./types/common";
import { LedgerCanisterOptions } from "./types/ledger";
import { defaultAgent } from "./utils/agent.utils";
import { queryCall, updateCall } from "./utils/proto.utils";

export class LedgerCanister {
  private constructor(
    private readonly agent: Agent,
    private readonly canisterId: Principal,
    private readonly updateFetcher: CanisterCall,
    private readonly queryFetcher: CanisterCall
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
   * @throws {Error}
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
    const responseBytes = await callMethod(
      this.agent,
      this.canisterId,
      "account_balance_pb",
      request.serializeBinary()
    );

    if (responseBytes instanceof Error) {
      // An error is never expected from this endpoint.
      throw Error;
    }

    return ICP.fromE8s(
      BigInt(ICPTs.deserializeBinary(new Uint8Array(responseBytes)).getE8s())
    );
  };

  /**
   * Transfer ICP from the caller to the destination `accountIdentifier`.
   * Returns the index of the block containing the tx if it was successful.
   *
   * TODO: support remaining options (subaccounts, memos, etc.)
   *
   * @throws {TransferError}
   */
  public transfer = async ({
    to,
    amount,
    memo,
  }: {
    to: AccountIdentifier;
    amount: ICP;
    memo?: bigint;
  }): Promise<BlockHeight> => {
    const request = new SendRequest();
    request.setTo(to.toProto());

    const payment = new Payment();
    payment.setReceiverGets(amount.toProto());
    request.setPayment(payment);

    if (memo) {
      const memo = new Memo();
      memo.setMemo(memo.toString());
      request.setMemo(memo);
    }

    const responseBytes = await this.updateFetcher(
      this.agent,
      this.canisterId,
      "send_pb",
      request.serializeBinary()
    );

    if (responseBytes instanceof Error) {
      throw mapTransferError(responseBytes);
    }

    // Successful tx. Return the block height.
    return BigInt(PbBlockHeight.deserializeBinary(responseBytes).getHeight());
  };
}
