import { RECEIVE_API_DATA, REQUEST_API_DATA_FAILED } from 'store/actions/types';

const initialState = {
    repositories: [],
    error: ''
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
        default:
            return state;
    }
};
