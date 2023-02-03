import axios from "axios";

// URL 
const fetchCategoryUrl = "http://localhost:3000/category";
const createCategoryUrl = "http://localhost:3000/add-category"


export const fetchCategory = () => axios.get(fetchCategoryUrl);
export const addCategory = (newCategory) => axios.post(createCategoryUrl, newCategory)