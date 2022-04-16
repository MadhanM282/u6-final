import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose;

const middleware = [thunk]

const enhancer =  (applyMiddleware(...middleware));


export const Store = createStore(Reducer, enhancer)