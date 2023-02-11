import { combineReducers } from "redux";
import changeTheNumber from "./counterReducer";
import { createNewCategory, fetchAllCategory, removeSelectedCategory } from "./categoryReducer";

const rootReducer = combineReducers({
    changeTheNumber,
    fetchAllCategory,
    createNewCategory,
    removeSelectedCategory
})

export default rootReducer;