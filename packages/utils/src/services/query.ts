import type { Identity } from "@dfinity/agent";
import { isNullish } from "@dfinity/utils";

export type OptionIdentity = Identity | undefined | null;

export interface QueryAndUpdateRequestParams {
  certified: boolean;
  identity: OptionIdentity;
}

export type QueryAndUpdateRequest<R> = (
  options: QueryAndUpdateRequestParams,
) => Promise<R>;

export type QueryAndUpdateOnResponse<R> = (options: {
  certified: boolean;
  response: R;
}) => void;

export interface QueryAndUpdateOnErrorOptions<E = unknown> {
  error: E;
  // The identity used for the request
  identity: OptionIdentity;
}

export type QueryAndUpdateOnError<E = unknown> = (
  options: {
    certified: boolean;
  } & QueryAndUpdateOnErrorOptions<E>,
) => void;

export type QueryAndUpdateOnCertifiedError<E = unknown> = (
  options: QueryAndUpdateOnErrorOptions<E>,
) => void;

export type QueryAndUpdateStrategy = "query_and_update" | "query" | "update";

export type QueryAndUpdatePromiseResolution = "all_settled" | "race";

export interface QueryAndUpdateParams<R, E = unknown> {
  request: QueryAndUpdateRequest<R>;
  onLoad: QueryAndUpdateOnResponse<R>;
  onError?: QueryAndUpdateOnError<E>;
  onCertifiedError?: QueryAndUpdateOnCertifiedError<E>;
  strategy?: QueryAndUpdateStrategy;
  identity: OptionIdentity;
  resolution?: QueryAndUpdatePromiseResolution;
}

/**
 * Perform a query and an update for security reasons.
 * For example, malicious nodes can forge transactions and balance if no update is performed to certify the results.
 */
export const queryAndUpdate = async <R, E = unknown>({
  request,
  onLoad,
  onError,
  onCertifiedError,
  strategy = "query_and_update",
  identity,
  resolution = "race",
}: QueryAndUpdateParams<R, E>): Promise<void> => {
  let certifiedDone = false;

  const queryOrUpdate = (certified: boolean) =>
    request({ certified, identity })
      .then((response) => {
        if (certifiedDone) {
          return;
        }

        onLoad({ certified, response });
      })
      .catch((error: E) => {
        if (certifiedDone) {
          return;
        }

        onError?.({ certified, error, identity });

        // Handling certified is handled as: just console error query error and do something with the update error
        if (isNullish(onCertifiedError)) {
          return;
        }

        console.error(error);

        if (!certified) {
          return;
        }

        onCertifiedError?.({ error, identity });
      })
      .finally(() => (certifiedDone = certifiedDone || certified));

  const requests: Array<Promise<void>> =
    strategy === "query"
      ? [queryOrUpdate(false)]
      : strategy === "update"
        ? [queryOrUpdate(true)]
        : [queryOrUpdate(false), queryOrUpdate(true)];

  await (resolution === "all_settled"
    ? Promise.allSettled(requests)
    : Promise.race(requests));
};
