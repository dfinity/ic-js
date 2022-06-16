import { Actor, Agent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { idlFactory as certifiedIdlFactory } from "../candid/ledger.certified.idl";
import { idlFactory, _SERVICE as LedgerService } from "../candid/ledger.idl";
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
  toTransferRawRequest,
} from "./canisters/ledger/ledger.request.converts";
import { MAINNET_LEDGER_CANISTER_ID } from "./constants/canister_ids";
import { TRANSACTION_FEE } from "./constants/constants";
import {
  mapTransferError,
  mapTransferProtoError,
} from "./errors/ledger.errors";
import { ICP } from "./icp";
import { BlockHeight } from "./types/common";
import { LedgerCanisterCall, LedgerCanisterOptions } from "./types/ledger";
import { TransferRequest } from "./types/ledger_converters";
import { defaultAgent } from "./utils/agent.utils";
import { queryCall, updateCall } from "./utils/proto.utils";

export class LedgerCanister {
  private constructor(
    private readonly agent: Agent,
    private readonly canisterId: Principal,
    private readonly service: LedgerService,
    private readonly certifiedService: LedgerService,
    private readonly updateFetcher: LedgerCanisterCall,
    private readonly queryFetcher: LedgerCanisterCall,
    private readonly hardwareWallet: boolean = false
  ) {}

  public static create(options: LedgerCanisterOptions = {}) {
    const agent = options.agent ?? defaultAgent();
    const canisterId = options.canisterId ?? MAINNET_LEDGER_CANISTER_ID;

    const service =
      options.serviceOverride ??
      Actor.createActor<LedgerService>(idlFactory, {
        agent,
        canisterId,
      });

    const certifiedService =
      options.certifiedServiceOverride ??
      Actor.createActor<LedgerService>(certifiedIdlFactory, {
        agent,
        canisterId,
      });
    return new LedgerCanister(
      agent,
      canisterId,
      service,
      certifiedService,
      options.updateCallOverride ?? updateCall,
      options.queryCallOverride ?? queryCall,
      options.hardwareWallet
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
    if (this.hardwareWallet) {
      return this.accountBalanceHardwareWallet({
        accountIdentifier,
        certified,
      });
    }
    const service = certified ? this.certifiedService : this.service;
    const tokens = await service.account_balance({
      account: accountIdentifier.toNumbers(),
    });
    return ICP.fromE8s(tokens.e8s);
  };

  /**
   * Transfer ICP from the caller to the destination `accountIdentifier`.
   * Returns the index of the block containing the tx if it was successful.
   *
   * @throws {@link TransferError}
   */
  public transfer = async (request: TransferRequest): Promise<BlockHeight> => {
    if (this.hardwareWallet) {
      return this.transferHardwareWallet(request);
    }
    if (request.fee === undefined) {
      const {
        transfer_fee: { e8s },
      } = await this.service.transfer_fee({});
      request.fee = e8s;
    }
    const rawRequest = toTransferRawRequest(request);
    const response = await this.certifiedService.transfer(rawRequest);
    if ("Err" in response) {
      throw mapTransferError(response.Err);
    }
    return response.Ok;
  };

  private accountBalanceHardwareWallet = async ({
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

  private transferHardwareWallet = async ({
    to,
    amount,
    memo,
    fee,
    fromSubAccountId,
  }: TransferRequest): Promise<BlockHeight> => {
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
        throw mapTransferProtoError(err);
      }

      throw err;
    }
  };
}
