import express from "express";
import { login, refreshToken, register } from "../controllers/authController.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/refresh-token", refreshToken);

export default userRouter;
