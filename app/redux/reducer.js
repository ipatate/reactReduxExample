import { combineReducers } from 'redux';
import * as message from './reducers/message';

// mix reducer to one object, if you want you can create other reducer and add in object
const finalReducer = Object.assign({}, message);

const reducer = combineReducers(finalReducer);

export default reducer;
