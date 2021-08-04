import { combineReducers } from "redux";
import fetchReducer from './fetchReducer';
import changeReducer from "./changeReducer";

/*
let combined = combineReducers({
    quoteReducer, 
});
*/
export default combineReducers({ fetchReducer, changeReducer});

