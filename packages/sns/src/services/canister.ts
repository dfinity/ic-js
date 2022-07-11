import type { Principal } from "@dfinity/principal";
import type { CanisterParams } from "../types/canister.params";

export abstract class Canister<T> {
  protected constructor(
    private readonly id: Principal,
    protected readonly service: T,
    protected readonly certifiedService: T
  ) {}

  get canisterId(): Principal {
    return this.id;
  }

  protected caller = ({ certified = true }: CanisterParams): T =>
    certified ? this.certifiedService : this.service;
}
