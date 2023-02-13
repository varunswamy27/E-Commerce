import axios from "axios";

// URL 
const fetchCategoryUrl = "http://localhost:3000/category";
const createCategoryUrl = "http://localhost:3000/add-category"
const deleteCategoryUrl = "http://localhost:3000/delete-category";
const updateCategoryUrl = "http://localhost:3000/update-category"



export const fetchCategory = () => axios.get(fetchCategoryUrl);
export const addCategory = (categories) => axios.post(createCategoryUrl, categories);
export const deleteCategory = (id) => axios.delete(`${deleteCategoryUrl}/${id}`);
export const updateCategory = (id, updatedCat) => axios.patch(`${updateCategoryUrl}/${id}`, updatedCat);