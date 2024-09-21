import { Router } from "express";
import cartPostController from "../controllers/cartPostController";

const router = Router();

router.post("/", cartPostController.createCartItem);

export const cartRouter = router;
