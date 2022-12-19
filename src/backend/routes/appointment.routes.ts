import { Router } from "express";
import controllers from "../controllers";

const router = Router();

const { appointmentController } = controllers;

router.get("/:id", appointmentController.getAppointmentbyId);

export default router;


