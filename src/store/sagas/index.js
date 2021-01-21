import { all, fork } from 'redux-saga/effects';

import repositoriesSaga from 'store/sagas/repositoriesSagas';
import searchSaga from 'store/sagas/searchSagas';
import paginationSaga from 'store/sagas/paginationSagas';
import authSaga from 'store/sagas/authSagas';

export default function* rootSaga() {
    yield all([fork(paginationSaga), fork(searchSaga), fork(repositoriesSaga), fork(authSaga)]);
}
