import type { CanisterOptions } from "@dfinity/utils";
import type { _SERVICE as LedgerService } from "../candid/ledger";

export type LedgerCanisterOptions = CanisterOptions<LedgerService>;
