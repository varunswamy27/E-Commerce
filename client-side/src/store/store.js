import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';

const compose = composeWithDevTools({});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    cartReducer: {
        cartItems: cartItems
    }
}

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk)));


export default store;