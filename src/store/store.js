import {applyMiddleware, combineReducers, createStore} from 'redux'
import counterReducer from '../reducer/counterReducer';
import userReducer from '../reducer/userReducer';
import rootReducer from '../reducer/rootreducer';
import {thunk} from "redux-thunk";


const store= createStore(rootReducer,applyMiddleware(thunk));

export default store;