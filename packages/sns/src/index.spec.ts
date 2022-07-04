import {mock} from 'jest-mock-extended';
import {_SERVICE as SnsRootService} from '../../../candid/sns_root';

// TODO: to be deleted, placeholder to have one test in the repo for CI purpose and avoid the use of --passWithNoTests
describe('Sns', () => {
    it('should say hello', () => {
        const service = mock<SnsRootService>();
       expect(service).not.toBeNull();
    });
})
