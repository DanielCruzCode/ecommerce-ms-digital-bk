import { Router } from "express";
import { cartRouter } from "./app/backend/cart/routes/cartRoutes";
import { productRouter } from "./app/backend/product/routes/productRoutes";
import { userRouter } from "./app/backend/user/routes/userRoutes";

const router = Router();

router.use("/cart", cartRouter);
router.use("/user", userRouter);
router.use("/product", productRouter);

export const mainRouter = router;
