import type {CanisterParams} from './canister.params';
import type {Principal} from '@dfinity/principal';
import type {NeuronId} from '../../candid/sns_governance';

export interface ListNeuronsParams extends CanisterParams {
    principal?: Principal | undefined;
    limit?: number;
    beforeNeuronId?: NeuronId;
}
