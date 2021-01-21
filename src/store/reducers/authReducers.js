import { RECEIVE_LOGIN } from 'store/actions/types';

const initialState = {
    userName: null,
    athenticated: false
};

export default (state = initialState, { type, data }) => {
    switch (type) {
        case RECEIVE_LOGIN:
            return {
                ...state,
                user: data.userName,
                authenticated: true
            };
        default:
            return state;
    }
};
