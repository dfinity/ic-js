import type { ActorSubclass, Agent } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";
import { createServices } from "@dfinity/utils";
import type { _SERVICE as LedgerService } from "../candid/ledger";
import { idlFactory as certifiedIdlFactory } from "../candid/ledger.certified.idl";
import { idlFactory } from "../candid/ledger.idl";
import type { AccountIdentifier } from "./account_identifier";
import {
  subAccountNumbersToSubaccount,
  toICPTs,
  toTransferRawRequest,
} from "./canisters/ledger/ledger.request.converts";
import { MAINNET_LEDGER_CANISTER_ID } from "./constants/canister_ids";
import { TRANSACTION_FEE } from "./constants/constants";
import {
  mapTransferError,
  mapTransferProtoError,
} from "./errors/ledger.errors";
import type { BlockHeight } from "./types/common";
import type {
  LedgerCanisterCall,
  LedgerCanisterOptions,
} from "./types/ledger.options";
import type { TransferRequest } from "./types/ledger_converters";
import { importNnsProto, queryCall, updateCall } from "./utils/proto.utils";

export class LedgerCanister {
  private constructor(
    private readonly agent: Agent,
    private readonly canisterId: Principal,
    private readonly service: ActorSubclass<LedgerService>,
    private readonly certifiedService: ActorSubclass<LedgerService>,
    private readonly updateFetcher: LedgerCanisterCall,
    private readonly queryFetcher: LedgerCanisterCall,
    private readonly hardwareWallet: boolean = false,
  ) {}

  public static create(options: LedgerCanisterOptions = {}) {
    const canisterId: Principal =
      options.canisterId ?? MAINNET_LEDGER_CANISTER_ID;

    const { service, certifiedService, agent } = createServices<LedgerService>({
      options: {
        ...options,
        canisterId,
      },
      idlFactory,
      certifiedIdlFactory,
    });

    return new LedgerCanister(
      agent,
      canisterId,
      service,
      certifiedService,
      options.updateCallOverride ?? updateCall,
      options.queryCallOverride ?? queryCall,
      options.hardwareWallet,
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
  }): Promise<bigint> => {
    if (this.hardwareWallet) {
      return this.accountBalanceHardwareWallet({
        accountIdentifier,
        certified,
      });
    }
    const service = certified ? this.certifiedService : this.service;
    const tokens = await service.account_balance({
      account: accountIdentifier.toUint8Array(),
    });
    return tokens.e8s;
  };

  /**
   * Returns the transaction fee of the ledger canister
   * @returns {BigInt}
   */
  public transactionFee = async () => {
    const {
      transfer_fee: { e8s },
    } = await this.service.transfer_fee({});
    return e8s;
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
    // When candid is implemented, the previous lines will go away.
    // But the transaction fee method is not supported by Ledger App yet.
    if (request.fee === undefined) {
      request.fee = this.hardwareWallet
        ? TRANSACTION_FEE
        : await this.transactionFee();
    }
    const rawRequest = toTransferRawRequest(request);
    const response = await this.certifiedService.transfer(rawRequest);
    if ("Err" in response) {
      throw mapTransferError(response.Err);
    }
    return response.Ok;
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
    // When candid is implemented, the previous lines will go away.
    // But the transaction fee method is not supported by Ledger App yet.
    if (request.fee === undefined) {
      request.fee = this.hardwareWallet
        ? TRANSACTION_FEE
        : await this.transactionFee();
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
  }): Promise<bigint> => {
    const callMethod = certified ? this.updateFetcher : this.queryFetcher;

    const { AccountBalanceRequest: AccountBalanceRequestConstructor, ICPTs } =
      await importNnsProto();

    const request = new AccountBalanceRequestConstructor();
    request.setAccount(await accountIdentifier.toProto());

    const responseBytes = await callMethod({
      agent: this.agent,
      canisterId: this.canisterId,
      methodName: "account_balance_pb",
      arg: request.serializeBinary(),
    });

    return BigInt(
      ICPTs.deserializeBinary(new Uint8Array(responseBytes)).getE8s(),
    );
  };

  private transferHardwareWallet = async ({
    to,
    amount,
    memo,
    fee,
    fromSubAccount,
    createdAt,
  }: TransferRequest): Promise<BlockHeight> => {
    const { SendRequest, Payment, Memo, TimeStamp, BlockHeight } =
      await importNnsProto();

    const request = new SendRequest();
    request.setTo(await to.toProto());

    const payment = new Payment();
    payment.setReceiverGets(await toICPTs(amount));
    request.setPayment(payment);

    request.setMaxFee(await toICPTs(fee ?? TRANSACTION_FEE));

    // Always explicitly set the memo for compatibility with ledger wallet - hardware wallet
    const requestMemo = new Memo();
    requestMemo.setMemo((memo ?? BigInt(0)).toString());
    request.setMemo(requestMemo);

    if (createdAt !== undefined) {
      const timestamp = new TimeStamp();
      timestamp.setTimestampNanos(createdAt.toString());
      request.setCreatedAtTime(timestamp);
    }

    if (fromSubAccount !== undefined) {
      request.setFromSubaccount(
        await subAccountNumbersToSubaccount(fromSubAccount),
      );
    }

    try {
      const responseBytes = await this.updateFetcher({
        agent: this.agent,
        canisterId: this.canisterId,
        methodName: "send_pb",
        arg: request.serializeBinary(),
      });

      // Successful tx. Return the block height.
      return BigInt(BlockHeight.deserializeBinary(responseBytes).getHeight());
    } catch (err) {
      if (err instanceof Error) {
        throw mapTransferProtoError(err);
      }

      throw err;
    }
  };
}
