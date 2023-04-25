import { combineReducers } from "redux";
import changeTheNumber from "./counterReducer";
import { createNewCategory, fetchAllCategory, removeSelectedCategory, modifySelectedCategory } from "./categoryReducer";
import { fetchAllSubCategory, createNewSubCategory, modifySelectedSubCategory, fetchAllSubCategoryByCategory } from "./subCategoryReducer";
import { fetchAllProduct, createNewProduct, removeSelectedProduct, modifySelectedProduct, fetchOnlyOneProduct } from "./productReducer";
import { fetchAllUser, createNewUser, removeSelectedUser, modifySelectedUser, fetchAllUserRole } from "./userReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
    changeTheNumber,
    fetchAllCategory,
    createNewCategory,
    removeSelectedCategory,
    modifySelectedCategory,
    fetchAllSubCategory,
    fetchAllSubCategoryByCategory,
    createNewSubCategory,
    modifySelectedSubCategory,
    fetchAllProduct,
    fetchOnlyOneProduct,
    createNewProduct,
    removeSelectedProduct,
    modifySelectedProduct,
    authReducer,
    fetchAllUser,
    createNewUser,
    removeSelectedUser,
    modifySelectedUser,
    fetchAllUserRole
})

export default rootReducer;