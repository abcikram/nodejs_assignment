import express from "express";
import { UserController } from "../controllers/user.controller.js";


const router = express.Router();

const userController = new UserController();

router.get("/", userController.getUsers);
router.post("/", userController.createUser);

export default router;
