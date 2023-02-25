

import { Action, configureStore, Store } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import testReducer from "./reducers/test";
import miscReducer from "./reducers/misc";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    test: testReducer,
    misc:miscReducer
});



const makeStore = (initialState, options) => {
  const store = configureStore({
    reducer: rootReducer,
    initialState,
    middleware: [thunk]
  });

  return store;
};

export default makeStore;
