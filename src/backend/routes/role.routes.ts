import { Router } from "express";
import controllers from "../controllers";

const router = Router();

const { roleController } = controllers;

router.get("/:id", roleController.getRolebyId);

export default router;


