import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducer";

let store = createStore(rootReducer, applyMiddleware(thunk));
export default store;


/*
I HAVE TO USE  THE PRELOAD METHOD IN COMBINE REDUCERS TO SET INITIAL STATE OF THE FIRST LOAD
 LIKE THIS 
AS TAUGHT IN THIS WEB-PAGE :
    https://redux.js.org/usage/structuring-reducers/initializing-state
*/