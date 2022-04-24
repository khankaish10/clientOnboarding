import { combineReducers } from "redux";
import authReducer from './authReducer'
import cardReducer from "./cardReducer";


export default combineReducers({
    authReducer,
    cardReducer,
})


