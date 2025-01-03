import { combineReducers } from "redux"
import counterReducer from "./counterReducer"
import userReducer from "./userReducer"
import postReducer from "./postReducer"

const rootReducer= combineReducers({
    counter: counterReducer,
    user:userReducer,
    post:postReducer

})

export default rootReducer