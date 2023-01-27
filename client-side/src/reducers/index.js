import { combineReducers } from "redux";
import changeTheNumber from "./counterReducer";
import { fetchAllCategory } from "./categoryReducer";

const rootReducer = combineReducers({
    changeTheNumber,
    fetchAllCategory
})

export default rootReducer;