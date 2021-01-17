import { all, fork } from 'redux-saga/effects';

import repositoriesSaga from 'store/sagas/repositories';
import searchSaga from 'store/sagas/search';
import paginationSaga from 'store/sagas/pagination';

export default function* rootSaga() {
    yield all([fork(paginationSaga), fork(searchSaga), fork(repositoriesSaga)]);
}
