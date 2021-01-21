import { RECEIVE_PAGE_NUMBER } from 'store/actions/types';

const initialState = {
    pageNumber: 1
};

export default (state = initialState, { type, data }) => {
    switch (type) {
        case RECEIVE_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: data.page
            };
        default:
            return state;
    }
};
