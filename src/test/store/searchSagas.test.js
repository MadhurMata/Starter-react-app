import { takeEvery } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';

import { SEARCH } from 'store/actions/types';
import searchSaga, { searchRepository } from 'store/sagas/search';
import { receiveSearchValue } from 'store/actions/actions';

describe('Save search value in store', () => {
    const generator = searchSaga();

    it('Should return the las action when a button is pressed', () => {
        expect(generator.next().value).toEqual(takeEvery(SEARCH, searchRepository));
    });

    it('should be done with next iteration', () => {
        expect(generator.next().done).toBeTruthy();
    });
});

describe('saga flow', () => {
    it('should save the search value', async () => {
        const response = { value: 'ro' };
        const dispatched = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            searchRepository,
            { value: 'ro' }
        );

        expect(dispatched).toEqual([receiveSearchValue(response)]);
    });
});
