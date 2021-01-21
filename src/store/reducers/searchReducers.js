import { SAVE_SEARCH } from 'store/actions/types';

const initialState = {
    search: ''
};

export default (state = initialState, { type, data }) => {
    switch (type) {
        case SAVE_SEARCH:
            return {
                ...state,
                search: data
            };
        default:
            return state;
    }
};
