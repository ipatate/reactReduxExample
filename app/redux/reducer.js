import { combineReducers } from 'redux';
import * as message from './reducers/message';

const finalReducer = Object.assign({}, message);

const reducer = combineReducers(finalReducer);

export default reducer;
