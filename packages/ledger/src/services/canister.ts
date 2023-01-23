import type { Principal } from "@dfinity/principal";
import type { QueryParams } from "../types/query.params";

// TODO: extract to utils
export abstract class Canister<T> {
  protected constructor(
    private readonly id: Principal,
    protected readonly service: T,
    protected readonly certifiedService: T
  ) {}

  get canisterId(): Principal {
    return this.id;
  }

  protected caller = ({ certified = true }: QueryParams): T =>
    certified ? this.certifiedService : this.service;
}
