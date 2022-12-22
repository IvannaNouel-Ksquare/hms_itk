import { Router } from "express";
import controllers from "../controllers";

const router = Router();

const { doctorController } = controllers;


router.get("/:id", doctorController.getDoctorbyId);
router.post("/newDoctor", doctorController.createDoctor);


export default router;


