import axios from "axios";

// LIVE URL
// https://go-gadgets.onrender.com

// LocalHost
// http://localhost:3000

// URL

// USER URL
const signInUrl = "https://go-gadgets.onrender.com/signup";
const signUpUrl = "https://go-gadgets.onrender.com/signin";
const fetchUserUrl = "https://go-gadgets.onrender.com/user";
const createUserUrl = "https://go-gadgets.onrender.com/signin";
const deleteUserUrl = "https://go-gadgets.onrender.com/delete-user";
const updateUserUrl = "https://go-gadgets.onrender.com/update-user";
const fetchUserRoleUrl = "https://go-gadgets.onrender.com/role";


// CATEGORY URL
const fetchCategoryUrl = "https://go-gadgets.onrender.com/category";
const createCategoryUrl = "https://go-gadgets.onrender.com/add-category"
const deleteCategoryUrl = "https://go-gadgets.onrender.com/delete-category";
const updateCategoryUrl = "https://go-gadgets.onrender.com/update-category";

// SUBCATEGORY URL
const fetchSubCategoryUrl = "https://go-gadgets.onrender.com/sub-category";
const fetchSubCategoryByCategoryUrl = "https://go-gadgets.onrender.com/filterd-subcategory";
const createSubCategoryUrl = "https://go-gadgets.onrender.com/add-sub-category"
const deleteSubCategoryUrl = "https://go-gadgets.onrender.com/delete-category";
const updateSubCategoryUrl = "https://go-gadgets.onrender.com/update-subcategory";

// PRODUCT URL
const fetchProductUrl = "https://go-gadgets.onrender.com/product";
const fetchOneProductUrl = "https://go-gadgets.onrender.com/single-product";
const createProductUrl = "https://go-gadgets.onrender.com/add-product"
const deleteProductUrl = "https://go-gadgets.onrender.com/delete-product";
const updateProductUrl = "https://go-gadgets.onrender.com/update-product";


// CATEGORY API
export const fetchCategory = () => axios.get(fetchCategoryUrl);
export const addCategory = (categories) => axios.post(createCategoryUrl, categories);
export const deleteCategory = (id) => axios.delete(`${deleteCategoryUrl}/${id}`);
export const updateCategory = (id, updatedCat) => axios.patch(`${updateCategoryUrl}/${id}`, updatedCat);

// SUBCATEGORY API
export const fetchSubCategory = () => axios.get(fetchSubCategoryUrl);
export const fetchSubCategoryByCategory = (id) => axios.get(`${fetchSubCategoryByCategoryUrl}/${id}`);
export const addSubCategory = (subcategories) => axios.post(createSubCategoryUrl, subcategories);
export const updateSubCategory = (id, updatedSubCat) => axios.patch(`${updateSubCategoryUrl}/${id}`, updatedSubCat);

// PRODUCT API
export const fetchProduct = () => axios.get(fetchProductUrl);
export const fetchOneProduct = (id) => axios.get(`${fetchOneProductUrl}/${id}`);
export const addProduct = (product) => axios.post(createProductUrl, product);
export const deleteProduct = (id) => axios.delete(`${deleteProductUrl}/${id}`);
export const updateProduct = (id, updatedPro) => axios.patch(`${updateProductUrl}/${id}`, updatedPro);

// USER API
export const signIn = (formData) => axios.post(signInUrl, formData);
export const signUp = (formData) => axios.post(signUpUrl, formData);
export const fetchUser = () => axios.get(fetchUserUrl);
export const addUser = (user) => axios.post(createUserUrl, user);
export const deleteUser = (id) => axios.delete(`${deleteUserUrl}/${id}`);
export const updateUser = (id, updatedUser) => axios.patch(`${updateUserUrl}/${id}`, updatedUser);
export const fetchUserRole = () => axios.get(fetchUserRoleUrl);




