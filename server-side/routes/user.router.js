import express from "express";
import { createUser, getUser } from "../controllers/user.controller";
import { createCategory, getCategory } from "../controllers/category.controller";


const router = express.Router();

router.get("/user", getUser);
router.post("/user", createUser);

// Category API

router.get('/category', getCategory);
router.post('/add-category', createCategory);


export default router;