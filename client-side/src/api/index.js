import axios from "axios";

// LIVE URL
// https://go-gadgets.onrender.com

// URL

// USER URL
const signInUrl = "http://localhost:3000/signup";
const signUpUrl = "http://localhost:3000/signin";
const fetchUserUrl = "http://localhost:3000/user";
const createUserUrl = "http://localhost:3000/signin";
const deleteUserUrl = "http://localhost:3000/delete-user";
const updateUserUrl = "http://localhost:3000/update-user";
const fetchUserRoleUrl = "http://localhost:3000/role";


// CATEGORY URL
const fetchCategoryUrl = "http://localhost:3000/category";
const createCategoryUrl = "http://localhost:3000/add-category"
const deleteCategoryUrl = "http://localhost:3000/delete-category";
const updateCategoryUrl = "http://localhost:3000/update-category";

// SUBCATEGORY URL
const fetchSubCategoryUrl = "http://localhost:3000/sub-category";
const fetchSubCategoryByCategoryUrl = "http://localhost:3000/filterd-subcategory";
const createSubCategoryUrl = "http://localhost:3000/add-sub-category"
const deleteSubCategoryUrl = "http://localhost:3000/delete-category";
const updateSubCategoryUrl = "http://localhost:3000/update-subcategory";

// PRODUCT URL
const fetchProductUrl = "http://localhost:3000/product";
const fetchOneProductUrl = "http://localhost:3000/single-product";
const createProductUrl = "http://localhost:3000/add-product"
const deleteProductUrl = "http://localhost:3000/delete-product";
const updateProductUrl = "http://localhost:3000/update-product";


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




