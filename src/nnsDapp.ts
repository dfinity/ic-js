import { Actor } from "@dfinity/agent";
import { idlFactory as certifiedIdlFactory } from "../candid/nns_dapp.certified.idl";
import { idlFactory, NNSDappService } from "../candid/nns_dapp.idl";
import {
  CreateSubAccountResponse,
  SubAccountDetails,
} from "../candid/nns_dappTypes";
import { AccountIdentifier } from "./account_identifier";
import { AccountNotFoundError } from "./errors";
import { NNSDappCanisterOptions } from "./types/nnsDapp";
import { defaultAgent } from "./utils/agent.utils";

export class NNSDappCanister {
  private constructor(
    private readonly service: NNSDappService,
    private readonly certifiedService: NNSDappService
  ) {
    this.service = service;
    this.certifiedService = certifiedService;
  }

  public static create(options: NNSDappCanisterOptions) {
    const agent = options.agent ?? defaultAgent();
    const canisterId = options.canisterId;

    const service =
      options.serviceOverride ??
      Actor.createActor<NNSDappService>(idlFactory, {
        agent,
        canisterId,
      });

    const certifiedService =
      options.certifiedServiceOverride ??
      Actor.createActor<NNSDappService>(certifiedIdlFactory, {
        agent,
        canisterId,
      });

    return new NNSDappCanister(service, certifiedService);
  }

  /**
   * Used to be able to create subAccounts
   *
   * TODO: Understand why we need this?
   *
   * @returns Promise<void>
   */
  public addAccount = async (): Promise<AccountIdentifier> => {
    const identifierText = await this.certifiedService.add_account();
    return AccountIdentifier.fromHex(identifierText);
  };

  /**
   * Creates a subaccount with the name and returns the Subaccount details
   *
   * TODO: Does this belong here in the "LedgerCanister"
   * TODO: Error messages
   * TODO: Why is calling to `add_account` needed?
   */
  public createSubAccount = async ({
    subAccountName,
  }: {
    subAccountName: string;
  }): Promise<SubAccountDetails> => {
    const {
      AccountNotFound,
      NameTooLong,
      SubAccountLimitExceeded,
      Ok,
    }: CreateSubAccountResponse = await this.certifiedService.create_sub_account(
      subAccountName
    );

    if (AccountNotFound === null) {
      throw new AccountNotFoundError("Error creating subAccount");
    }

    if (NameTooLong === null) {
      // Which is the character?
      throw new Error(`Error, name ${subAccountName} is too long`);
    }

    if (SubAccountLimitExceeded === null) {
      // Which is the limit of subaccounts?
      throw new Error(`Error, name ${subAccountName} is too long`);
    }

    return Ok;
  };
}
