import { isNullish } from "@dfinity/utils";
import type { QueryAndUpdateParams } from "../types/query-and-update.params";

/**
 * This service performs a query (not-certified) call and/or an update (certified) call, and handles the results.
 *
 * It is useful because it can do both type of calls for security reasons.
 * For example, malicious nodes can forge transactions and balance if no update is performed to certify the results.
 *
 * Furthermore, it can handle the results of the calls in different ways:
 * - `query` only performs a query call.
 * - `update` only performs an update call.
 * - `query_and_update` performs both calls.
 *
 * The resolution can be:
 * - `all_settled` waits for all calls to settle.
 * - `race` waits for the first call to settle.
 *
 * Once the call(s) are done, the response is handled by the `onLoad` callback.
 * However, if an error occurs, the error is handled by the `onError` callback, if provided.
 * If the error is from the update call, the `onCertifiedError` callback is called too, if provided.
 *
 * @param {QueryAndUpdateParams<R, E>} params The parameters to perform the request.
 * @param {QueryAndUpdateRequest<R>} params.request The request to perform.
 * @param {QueryAndUpdateOnResponse<R>} params.onLoad The callback to handle the response of the request.
 * @param {QueryAndUpdateOnError<E>} params.onError The callback to handle the error of the request.
 * @param {QueryAndUpdateOnCertifiedError<E>} params.onCertifiedError The additional callback to handle the error of the update request.
 * @param {QueryAndUpdateStrategy} params.strategy The strategy to use. Default is `query_and_update`.
 * @param {OptionIdentity} params.identity The identity to use for the request.
 * @param {QueryAndUpdatePromiseResolution} params.resolution The resolution to use. Default is `race`.
 *
 * @template R The type of the response.
 * @template E The type of the error.
 *
 * @returns A promise that resolves when the request is done.
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
