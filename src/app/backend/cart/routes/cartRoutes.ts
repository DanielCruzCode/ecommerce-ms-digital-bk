import { Router } from "express";
import { validate } from "express-validation";
import cartGetController from "../controllers/cartGetController";
import cartPostController from "../controllers/cartPostController";
import { createCartItemValidation } from "./routeValidator";

const router = Router();

router.post(
	"/",
	validate(createCartItemValidation),
	cartPostController.addItemToCart,
);

router.get("/", cartGetController.list);

export const cartRouter = router;
