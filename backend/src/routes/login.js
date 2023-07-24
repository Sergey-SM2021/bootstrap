import express from "express";
import { LoginController } from "../controllers/login.js";
export const LoginRouter = express.Router();

LoginRouter.post("/", LoginController.login);
