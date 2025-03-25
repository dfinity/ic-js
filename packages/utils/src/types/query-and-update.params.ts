import type { Identity } from "@dfinity/agent";

export type OptionIdentity = Identity | undefined | null;

export interface QueryAndUpdateRequestParams {
  certified: boolean;
  identity: OptionIdentity;
}

export type QueryAndUpdateRequest<R> = (
  options: QueryAndUpdateRequestParams
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
  } & QueryAndUpdateOnErrorOptions<E>
) => void;

export type QueryAndUpdateOnCertifiedError<E = unknown> = (
  options: QueryAndUpdateOnErrorOptions<E>
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
