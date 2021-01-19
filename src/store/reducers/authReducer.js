import { RECEIVE_LOGIN } from 'store/actions/types';

const initialState = {
    user: null
};

export default (state = initialState, { type, data }) => {
    switch (type) {
        case RECEIVE_LOGIN:
            return {
                ...state,
                user: data.user
            };
        default:
            return state;
    }
};
