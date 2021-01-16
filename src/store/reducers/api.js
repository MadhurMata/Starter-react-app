import { RECEIVE_API_DATA, REQUEST_API_DATA_FAILED, SAVE_SEARCH } from 'store/actions/types';

const initialState = {
    repositories: [],
    error: '',
    search: ''
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
        default:
            return state;
    }
};
