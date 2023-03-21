import type { ActorMethod } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export interface Account {
  owner: Principal;
  subaccount: [] | [Uint8Array];
}
export type BitcoinAddress =
  | { p2sh: Uint8Array }
  | { p2wpkh_v0: Uint8Array }
  | { p2pkh: Uint8Array };
export type BtcNetwork =
  | { Mainnet: null }
  | { Regtest: null }
  | { Testnet: null };
export type Event =
  | {
      received_utxos: { to_account: Account; utxos: Array<Utxo> };
    }
  | {
      sent_transaction: {
        change_output: [] | [{ value: bigint; vout: number }];
        txid: Uint8Array;
        utxos: Array<Utxo>;
        requests: BigUint64Array;
        submitted_at: bigint;
      };
    }
  | { init: InitArgs }
  | { upgrade: UpgradeArgs }
  | {
      accepted_retrieve_btc_request: {
        received_at: bigint;
        block_index: bigint;
        address: BitcoinAddress;
        amount: bigint;
      };
    }
  | { checked_utxo: { clean: boolean; utxo: Utxo; uuid: string } }
  | { removed_retrieve_btc_request: { block_index: bigint } }
  | { confirmed_transaction: { txid: Uint8Array } }
  | { ignored_utxo: { utxo: Utxo } };
export interface InitArgs {
  kyt_principal: [] | [Principal];
  ecdsa_key_name: string;
  mode: Mode;
  retrieve_btc_min_amount: bigint;
  ledger_id: Principal;
  max_time_in_queue_nanos: bigint;
  btc_network: BtcNetwork;
  min_confirmations: [] | [number];
}
export type MinterArg = { Upgrade: [] | [UpgradeArgs] } | { Init: InitArgs };
export type Mode =
  | { RestrictedTo: Array<Principal> }
  | { DepositsRestrictedTo: Array<Principal> }
  | { ReadOnly: null }
  | { GeneralAvailability: null };
export interface RetrieveBtcArgs {
  address: string;
  amount: bigint;
}
export type RetrieveBtcError =
  | { MalformedAddress: string }
  | { GenericError: { error_message: string; error_code: bigint } }
  | { TemporarilyUnavailable: string }
  | { AlreadyProcessing: null }
  | { AmountTooLow: bigint }
  | { InsufficientFunds: { balance: bigint } };
export interface RetrieveBtcOk {
  block_index: bigint;
}
export type RetrieveBtcStatus =
  | { Signing: null }
  | { Confirmed: { txid: Uint8Array } }
  | { Sending: { txid: Uint8Array } }
  | { AmountTooLow: null }
  | { Unknown: null }
  | { Submitted: { txid: Uint8Array } }
  | { Pending: null };
export type UpdateBalanceError =
  | {
      GenericError: { error_message: string; error_code: bigint };
    }
  | { TemporarilyUnavailable: string }
  | { AlreadyProcessing: null }
  | {
      NoNewUtxos: {
        required_confirmations: number;
        current_confirmations: [] | [number];
      };
    };
export interface UpgradeArgs {
  mode: [] | [Mode];
  retrieve_btc_min_amount: [] | [bigint];
  max_time_in_queue_nanos: [] | [bigint];
  min_confirmations: [] | [number];
}
export interface Utxo {
  height: number;
  value: bigint;
  outpoint: { txid: Uint8Array; vout: number };
}
export type UtxoStatus =
  | { ValueTooSmall: Utxo }
  | { Tainted: Utxo }
  | {
      Minted: {
        minted_amount: bigint;
        block_index: bigint;
        utxo: Utxo;
      };
    }
  | { Checked: Utxo };
export interface _SERVICE {
  estimate_fee: ActorMethod<[{ amount: [] | [bigint] }], bigint>;
  get_btc_address: ActorMethod<
    [{ owner: [] | [Principal]; subaccount: [] | [Uint8Array] }],
    string
  >;
  get_events: ActorMethod<[{ start: bigint; length: bigint }], Array<Event>>;
  get_withdrawal_account: ActorMethod<[], Account>;
  retrieve_btc: ActorMethod<
    [RetrieveBtcArgs],
    { Ok: RetrieveBtcOk } | { Err: RetrieveBtcError }
  >;
  retrieve_btc_status: ActorMethod<
    [{ block_index: bigint }],
    RetrieveBtcStatus
  >;
  update_balance: ActorMethod<
    [{ owner: [] | [Principal]; subaccount: [] | [Uint8Array] }],
    { Ok: Array<UtxoStatus> } | { Err: UpdateBalanceError }
  >;
}
