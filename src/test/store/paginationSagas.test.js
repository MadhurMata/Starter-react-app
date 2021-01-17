import { takeLatest } from 'redux-saga/effects';
import { runSaga } from 'redux-saga';

import { REQUEST_API_DATA_FAILED, REQUEST_PAGE_NUMBER } from 'store/actions/types';
import paginationSaga, { changePageNumber } from 'store/sagas/pagination';
import { receivePageNumber, saveError } from 'store/actions/actions';

describe('Change page number', () => {
    const generator = paginationSaga();

    it('Should return the las action when a button is pressed', () => {
        expect(generator.next().value).toEqual(takeLatest(REQUEST_PAGE_NUMBER, changePageNumber));
    });

    it('should be done with next iteration', () => {
        expect(generator.next().done).toBeTruthy();
    });
});

describe('saga flow', () => {
    it('should call api and dispatch success action', async () => {
        const response = { page: 1 };
        const dispatched = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            changePageNumber,
            { page: 1 }
        );

        expect(dispatched).toEqual([receivePageNumber(response)]);
    });
 });
