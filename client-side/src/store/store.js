import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from '@redux-devtools/extension';

const compose = composeWithDevTools({});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));


export default store;