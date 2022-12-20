import { Router } from "express";
import controllers from "../controllers";

const router = Router();

const { appointmentController } = controllers;

router.get("/", appointmentController.getAllAppointments);
router.get("/:id", appointmentController.getAppointmentbyId);
router.get("/:doctor_id", appointmentController.getAppointmentbyDoctorid);
router.get("/:patient_id", appointmentController.getAppointmentbyPatientId);
router.post("/", appointmentController.creatAppointment);
router.delete("/:id", appointmentController.deleteAppointmentById);


export default router;


