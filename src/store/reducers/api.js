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
            return {
                ...state,
                search: data
            };
        case RECEIVE_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: data.page
            };
        default:
            return state;
    }
};
