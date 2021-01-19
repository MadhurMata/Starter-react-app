import { combineReducers } from 'redux';
import service from 'store/reducers/reducers';
import authReducer from 'store/reducers/authReducer';

export default combineReducers({
    service,
    authReducer
});
