import express from "express";
import { createUser, getUser } from "../controllers/user.controller";
import { createCategory, deleteCategory, getCategory, updateCategory } from "../controllers/category.controller";
import { createSubCategory, fetchSubCategory } from "../controllers/subCategory.controller";


const router = express.Router();

router.get("/user", getUser);
router.post("/user", createUser);

// Category API

router.get('/category', getCategory);
router.post('/add-category', createCategory);
router.delete('/delete-category/:_id', deleteCategory);
router.put('/update-category/:id', updateCategory);

// SubCategory API

router.get('/sub-category', fetchSubCategory);
router.post('/add-sub-category', createSubCategory);


export default router;