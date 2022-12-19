import { Router } from "express";
import controllers from "../controllers";


const router = Router();

const { UserController } = controllers;

router.get("/:id",UserController.getUserbyId);
router.post("/", UserController.register);


export default router;


