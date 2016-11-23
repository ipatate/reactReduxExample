import { combineReducers } from 'redux';
import * as message from './reducers/message';

const finalReducer = Object.assign({}, message);
console.log(finalReducer);
const reducer = combineReducers(finalReducer);

export default reducer;
