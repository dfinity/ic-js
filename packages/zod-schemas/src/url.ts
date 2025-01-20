import * as z from "zod";

export type UrlProtocol = `${string}:`;

export const createUrlSchema = ({
  additionalProtocols = [],
  allowHttpLocally = true,
}: {
  additionalProtocols?: UrlProtocol[];
  allowHttpLocally?: boolean;
}): z.ZodEffects<z.ZodString, string, string> =>
  z
    .string()
    .url()
    .refine(
      (url: string | URL): boolean => {
        try {
          const { protocol, hostname } = new URL(url);

          // We allow http for development locally
          if (
            allowHttpLocally &&
            ["localhost", "127.0.0.1"].includes(hostname)
          ) {
            return ["http:", "https:"].includes(protocol);
          }

          return ["https:", ...additionalProtocols].includes(protocol);
        } catch (_err: unknown) {
          return false;
        }
      },
      {
        message: "Invalid URL.",
      },
    );

export const UrlSchema = createUrlSchema({});
