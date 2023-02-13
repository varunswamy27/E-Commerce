import express from "express";
import { createUser, getUser } from "../controllers/user.controller";
import { createCategory, deleteCategory, getCategory, updateCategory } from "../controllers/category.controller";
import { createSubCategory, fetchSubCategory, updateSubCategory } from "../controllers/subCategory.controller";
import { createProduct, deleteProduct, filterPriceProduct, getProduct, sortProduct, updateProduct } from "../controllers/product.controller";


const router = express.Router();

// User API

router.get("/user", getUser);
router.post("/user", createUser);

// Category API

router.get('/category', getCategory);
router.post('/add-category', createCategory);
router.delete('/delete-category/:id', deleteCategory);
router.patch('/update-category/:id', updateCategory);

// SubCategory API

router.get('/sub-category', fetchSubCategory);
router.post('/add-sub-category', createSubCategory);
router.put('/update-subcategory/:id', updateSubCategory);

// Product API

router.get('/product', getProduct);
router.post('/add-product', createProduct);
router.put('/update-product/:id', updateProduct);
router.delete('/delete-product/:id', deleteProduct);
router.get('/filter-product', filterPriceProduct);
router.get('/sort-product', sortProduct);


export default router;