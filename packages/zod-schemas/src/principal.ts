import { Principal } from "@dfinity/principal";
import { z } from "zod/v4-mini";

/**
 * Zod schema to validate a string as a valid textual representation of a Principal.
 *
 * This schema checks if the provided string can be converted into a `Principal` instance.
 * If the conversion fails, validation will return an error message.
 *
 * @example
 * ```typescript
 * const result = PrincipalTextSchema.safeParse('aaaaa-aa');
 * console.log(result.success); // true or false
 * ```
 */
export const PrincipalTextSchema = z.string().check(
  z.refine(
    (principal) => {
      try {
        Principal.fromText(principal);
        return true;
      } catch (_err: unknown) {
        return false;
      }
    },
    {
      error: "Invalid textual representation of a Principal.",
    },
  ),
);

export type PrincipalText = z.infer<typeof PrincipalTextSchema>;
