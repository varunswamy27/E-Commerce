import express from "express";
import { createUser, createUserRole, deleteUser, getRoles, getUser, loginUser, updateUser } from "../controllers/user.controller";
import { createCategory, deleteCategory, getCategory, updateCategory } from "../controllers/category.controller";
import { createSubCategory, deleteSubCategory, fetchSubCategory, fetchSubCategoryByCategory, updateSubCategory } from "../controllers/subCategory.controller";
import { createProduct, deleteProduct, filterPriceProduct, getOneProduct, getProduct, sortProductAsc, sortProductDes, updateProduct } from "../controllers/product.controller";
import { auth, isAuthorized, verifyToken } from "../middleware/auth";


const router = express.Router();



// User API

router.get("/user", getUser);
router.post('/signin', createUser);
router.post('/signup', loginUser);
router.delete('/delete-user/:id', deleteUser);
router.patch('/update-user/:id', updateUser);

// User Role APL

router.get('/role', getRoles);
router.post('/create-role', createUserRole);

// Category API

router.get('/category', getCategory);
router.post('/add-category', createCategory);
router.delete('/delete-category/:id', deleteCategory);
router.patch('/update-category/:id', updateCategory);

// SubCategory API

router.get('/sub-category', fetchSubCategory);
router.get('/filterd-subcategory/:id', fetchSubCategoryByCategory)
router.post('/add-sub-category', createSubCategory);
router.patch('/update-subcategory/:id', updateSubCategory);
router.delete('/delete-subcategory/:id', deleteSubCategory);


// Product API

router.get('/product', getProduct);
router.get('/single-product/:id', getOneProduct);
router.post('/add-product', createProduct);
router.patch('/update-product/:id', updateProduct);
router.delete('/delete-product/:id', deleteProduct);
router.post('/filter-product/:price', filterPriceProduct);
router.get('/sort-product-asc', sortProductAsc);
router.get('/sort-product-des', sortProductDes);


export default router;