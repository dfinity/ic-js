import { Cbor } from "@dfinity/agent";

// The minter converted a single UTXO to ckBTC.
export const MINT_MEMO_TYPE_UTXO_TO_CKBTC = 0;
// The minter minted accumulated KYT fees to the KYT provider.
export const MINT_MEMO_TYPE_ACCUMULATED_KYT_FEES = 1;
// The minter failed to check retrieve btc destination address or the destination address is tainted.
export const MINT_MEMO_TYPE_KYT_FAIL = 2;

// The memo will decode to either:
// * Convert: [0, [ tx_id, vout, kyt_fee]]
// * Kyt: [1]
// * KytFail: [2, [ kyt_fee, kyt_status, block_index]]
// Source: https://github.com/dfinity/ic/blob/c22a5aebd4f26ae2e4016de55e3f7aa00d086479/rs/bitcoin/ckbtc/minter/src/memo.rs#L25
type MintMemo =
  | [typeof MINT_MEMO_TYPE_UTXO_TO_CKBTC, [Uint8Array?, number?, number?]]
  | [typeof MINT_MEMO_TYPE_ACCUMULATED_KYT_FEES]
  | [typeof MINT_MEMO_TYPE_KYT_FAIL, [number, number?, number?]];

export class LegacyMintMemoError extends Error {}

/**
 * Helper that decodes the memo of a ckBTC mint transaction to an object.
 *
 * @param memo a Cbor encoded memo.
 * @throws LegacyMintMemoError when the memo length is 0 or 32 which identifying a legacy memo which are not supported by this help.
 * @returns {MintMemo} the decoded memo object.
 */
export const decodeMintMemo = (memo: Uint8Array | number[]): MintMemo => {
  // Legacy minting transaction have a memo of length 0 or 32.
  // We ignore them - those are not supported by this decoder.
  if (memo.length === 0 || memo.length === 32) {
    throw new LegacyMintMemoError();
  }

  return Cbor.decode(new Uint8Array(memo)) as MintMemo;
};
