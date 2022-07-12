/**
 * The common parameters to query Sns features
 */
export interface QueryParams {
  /** Perform update calls (certified) or query calls (not certified). */
  certified?: boolean;
}
