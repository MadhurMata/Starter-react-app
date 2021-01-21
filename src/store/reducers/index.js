import { combineReducers } from 'redux';
import authStore from 'store/reducers/authReducers';
import repositoriesStore from 'store/reducers/repositoriesReducers';
import searchStore from 'store/reducers/searchReducers';
import paginationStore from 'store/reducers/paginationReducers';

export default combineReducers({
    authStore,
    repositoriesStore,
    searchStore,
    paginationStore
});
