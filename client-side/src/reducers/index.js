import { combineReducers } from "redux";
import changeTheNumber from "./counterReducer";
import { createNewCategory, fetchAllCategory, removeSelectedCategory, modifySelectedCategory } from "./categoryReducer";

const rootReducer = combineReducers({
    changeTheNumber,
    fetchAllCategory,
    createNewCategory,
    removeSelectedCategory,
    modifySelectedCategory
})

export default rootReducer;