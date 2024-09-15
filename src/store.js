import { createStore, combineReducers, applyMiddleware } from "redux";

import { thunk } from "redux-thunk";
const reducer = combineReducers({
    //contain all reducers 

});
const initialState = {}
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,

    applyMiddleware(...middleware)
)
export default store