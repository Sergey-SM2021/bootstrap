import express from "express";
import { RegisterController } from "../controllers/register.js";
export const RegisterRouter = express.Router();

RegisterRouter.post("", RegisterController.register);
