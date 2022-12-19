import { Router } from "express";
import controllers from "../controllers";

const router = Router();

const { patientController } = controllers;

router.get("/:id", patientController.getPatientbyId);

export default router;


