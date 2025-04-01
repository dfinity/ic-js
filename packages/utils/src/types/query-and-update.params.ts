import type { Identity } from "@dfinity/agent";

export type QueryAndUpdateIdentity = Identity | undefined | null;

export interface QueryAndUpdateRequestParams {
  certified: boolean;
  identity: QueryAndUpdateIdentity;
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
  identity: QueryAndUpdateIdentity;
}


export type QueryAndUpdateOnError<E = unknown> = (
  options: QueryAndUpdateOnErrorOptions<E>,
) => void;

export type QueryAndUpdateOnUpdateError<E = unknown> = (
  options: QueryAndUpdateOnErrorOptions<E>,
) => void;

export type QueryAndUpdateStrategy = "query_and_update" | "query" | "update";

export type QueryAndUpdatePromiseResolution = "all_settled" | "race";

export interface QueryAndUpdateParams<R, E = unknown> {
  request: QueryAndUpdateRequest<R>;
  onLoad: QueryAndUpdateOnResponse<R>;
  onError?: QueryAndUpdateOnError<E>;
  onUpdateError?: QueryAndUpdateOnUpdateError<E>;
  strategy?: QueryAndUpdateStrategy;
  identity: QueryAndUpdateIdentity;
  resolution?: QueryAndUpdatePromiseResolution;
}
