import { Principal } from "@dfinity/principal";
import * as z from "zod";

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
export const PrincipalTextSchema = z.string().refine(
  (principal) => {
    try {
      Principal.fromText(principal);
      return true;
    } catch (err: unknown) {
      return false;
    }
  },
  {
    message: "Invalid textual representation of a Principal.",
  },
);

export type PrincipalText = z.infer<typeof PrincipalTextSchema>;
