import {
    RECEIVE_API_DATA,
    REQUEST_API_DATA_FAILED,
    SAVE_SEARCH,
    RECEIVE_PAGE_NUMBER
} from 'store/actions/types';

const initialState = {
    repositories: [],
    error: '',
    search: '',
    pageNumber: 1
};

export default (state = initialState, { type, data }) => {
    switch (type) {
        case RECEIVE_API_DATA:
            console.log('repositories reducers', data);
            return {
                ...state,
                repositories: data
            };
        case REQUEST_API_DATA_FAILED:
            return {
                ...state,
                fechFailed: 'fetchError'
            };
        case SAVE_SEARCH:
            console.log('reducers in search', data);
            return {
                ...state,
                search: data
            };
        case RECEIVE_PAGE_NUMBER:
            console.log('reducers pagination', data);
            return {
                ...state,
                pageNumber: data.page
            };
        default:
            return state;
    }
};
