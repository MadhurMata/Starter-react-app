import { RECEIVE_API_DATA } from 'store/actions/types';

const initialState = {
    repositories: []
};

export default (state = initialState, { type, data }) => {
    switch (type) {
        case RECEIVE_API_DATA:
            return {
                ...state,
                repositories: data
            };
        default:
            return state;
    }
};
