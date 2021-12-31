import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import Reducers from "../reducers/RootReducers";
const Store = () => {
    return createStore(Reducers, applyMiddleware(thunk));
};

export default Store;