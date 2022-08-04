import type { _SERVICE as SnsLedgerService } from "../candid/ledger";
import { idlFactory as certifiedIdlFactory } from "../candid/ledger.certified.idl";
import { idlFactory } from "../candid/ledger.idl";
import { Canister } from "./services/canister";
import type { SnsCanisterOptions } from "./types/canister.options";
import type {
  TokenInfoResponse,
  TokenNameResponse,
  TokenSymbolResponse,
} from "./types/governance.responses";
import type { QueryParams } from "./types/query.params";
import { createServices } from "./utils/actor.utils";

export class SnsLedgerCanister extends Canister<SnsLedgerService> {
  static create(options: SnsCanisterOptions<SnsLedgerService>) {
    const { service, certifiedService, canisterId } =
      createServices<SnsLedgerService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new SnsLedgerCanister(canisterId, service, certifiedService);
  }

  /**
   * The token name.
   */
  getName = (params: QueryParams): Promise<TokenNameResponse> =>
    this.caller(params).name();

  /**
   * The token symbol.
   */
  getSymbol = (params: QueryParams): Promise<TokenSymbolResponse> =>
    this.caller(params).symbol();

  /**
   * The token info - name and symbol - at once.
   * Note: this performs two queries, one for each information.
   */
  tokenInfo = async (params: QueryParams): Promise<TokenInfoResponse> => {
    const [{ name }, { symbol }] = await Promise.all([
      this.getName(params),
      this.getSymbol(params),
    ]);
    return { name, symbol };
  };
}
