import { isNullish } from "@dfinity/utils";
import type{ QueryAndUpdateParams } from "../types/query-and-update.params";

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
