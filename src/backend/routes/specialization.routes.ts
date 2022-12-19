import { Router } from "express";
import controllers from "../controllers";

const router = Router();

const { SpecializationController } = controllers;

router.get("/:id", SpecializationController.getSpecializationbyId);

export default router;


