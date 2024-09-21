import {Router} from "express";
import {validate} from "express-validation";
import userPostController from "../controllers/userPostController";
import {createUserValidation} from "./routeValidator";

const router = Router();

router.post("/", validate(createUserValidation), userPostController.create);

export const userRouter = router;
