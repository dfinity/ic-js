import { assertNonNullish } from "./asserts.utils";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz234567";

// Build a lookup table for decoding.
const LOOKUP_TABLE: Record<string, number> = Object.create(null);
for (let i = 0; i < ALPHABET.length; i++) {
  LOOKUP_TABLE[ALPHABET[i]] = i;
}

// Add aliases for rfc4648.
LOOKUP_TABLE["0"] = LOOKUP_TABLE.o;
LOOKUP_TABLE["1"] = LOOKUP_TABLE.i;

/**
 * Encode an Uint8Array to a base32 string.
 *
 * @param input The input array to encode.
 * @returns A Base32 string encoding the input.
 */
export const encodeBase32 = (input: Uint8Array): string => {
  // How many bits will we skip from the first byte.
  let skip = 0;
  // 5 high bits, carry from one byte to the next.
  let bits = 0;

  // The output string in base32.
  let output = "";

  function encodeByte(byte: number): number {
    if (skip < 0) {
      // we have a carry from the previous byte
      bits |= byte >> -skip;
    } else {
      // no carry
      bits = (byte << skip) & 248;
    }

    if (skip > 3) {
      // Not enough data to produce a character, get us another one
      skip -= 8;
      return 1;
    }

    if (skip < 4) {
      // produce a character
      output += ALPHABET[bits >> 3];
      skip += 5;
    }

    return 0;
  }

  for (let i = 0; i < input.length; ) {
    i += encodeByte(input[i]);
  }

  return output + (skip < 0 ? ALPHABET[bits >> 3] : "");
};

/**
 * Decode a base32 string to Uint8Array.
 *
 * @param input The input string to decode.
 * @param input The base32 encoded string to decode.
 */
export function decodeBase32(input: string): Uint8Array {
  // how many bits we have from the previous character.
  let skip = 0;
  // current byte we're producing.
  let byte = 0;

  const output = new Uint8Array(((input.length * 4) / 3) | 0);
  let o = 0;

  function decodeChar(char: string) {
    // Consume a character from the stream, store
    // the output in this.output. As before, better
    // to use update().
    let val = LOOKUP_TABLE[char.toLowerCase()];
    assertNonNullish(val, `Invalid character: ${JSON.stringify(char)}`);

    // move to the high bits
    val <<= 3;
    byte |= val >>> skip;
    skip += 5;

    if (skip >= 8) {
      // We have enough bytes to produce an output
      output[o++] = byte;
      skip -= 8;

      if (skip > 0) {
        byte = (val << (5 - skip)) & 255;
      } else {
        byte = 0;
      }
    }
  }

  for (const c of input) {
    decodeChar(c);
  }

  return output.slice(0, o);
}
