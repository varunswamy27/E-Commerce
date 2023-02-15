import { combineReducers } from "redux";
import changeTheNumber from "./counterReducer";
import { createNewCategory, fetchAllCategory, removeSelectedCategory, modifySelectedCategory } from "./categoryReducer";
import { fetchAllSubCategory, createNewSubCategory, modifySelectedSubCategory } from "./subCategoryReducer";
import { fetchAllProduct, createNewProduct, removeSelectedProduct, modifySelectedProduct } from "./productReducer";

const rootReducer = combineReducers({
    changeTheNumber,
    fetchAllCategory,
    createNewCategory,
    removeSelectedCategory,
    modifySelectedCategory,
    fetchAllSubCategory,
    createNewSubCategory,
    modifySelectedSubCategory,
    fetchAllProduct,
    createNewProduct,
    removeSelectedProduct,
    modifySelectedProduct

})

export default rootReducer;