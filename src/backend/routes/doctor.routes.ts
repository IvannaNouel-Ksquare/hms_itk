import { Router } from "express";
import controllers from "../controllers";

const router = Router();

const { doctorController } = controllers;

router.get("/:id", doctorController.getDoctorbyId);

export default router;


