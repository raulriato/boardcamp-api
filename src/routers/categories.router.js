import { listCategories, createCategory } from "../controllers/categories.controller.js";
import { Router } from "express";
import { categoriesMiddleware } from "../middlewares/categories.middleware.js";

const router = Router();

router.get('/categories', listCategories);

router.post("/categories", categoriesMiddleware, createCategory);

export default router;