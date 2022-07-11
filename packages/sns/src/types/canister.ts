import type {Principal} from '@dfinity/principal';

export interface Canister {
    get canisterId(): Principal;
}
