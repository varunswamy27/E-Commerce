import { combineReducers } from "redux";
import changeTheNumber from "./counterReducer";

const rootReducer = combineReducers({
    changeTheNumber
})

export default rootReducer;