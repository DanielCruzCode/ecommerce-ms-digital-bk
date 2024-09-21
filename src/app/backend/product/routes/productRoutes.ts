import { Router } from "express";
import { validate } from "express-validation";
import productPostController from "../controllers/productPostController";
import { createProductValidation } from "./routeValidator";

const router = Router();

router.post(
	"/",
	validate(createProductValidation),
	productPostController.create,
);

export const productRouter = router;
