import { Router } from "express";
import controllers from "../controllers";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { isAuthorized } from "../middlewares/isAuthorized";

const router = Router();

const { appointmentController } = controllers;

router.get("/",isAuthenticated, isAuthorized({
    role: ['admin'],
    allowSameUser: true
}), appointmentController.getAllAppointments);
router.get("/:id",isAuthenticated, isAuthorized({
    role: ['admin','patient','doctor'],
    allowSameUser: true
}), appointmentController.getAppointmentbyId);
router.get("/doctor/:doctor_id",isAuthenticated, isAuthorized({
    role: ['admin','doctor'],
    allowSameUser: true
}),appointmentController.getAppointmentbyDoctorid);
router.get("/patient/:patient_id",isAuthenticated, isAuthorized({
    role: ['admin','patient'],
    allowSameUser: true
}), appointmentController.getAppointmentbyPatientId);
router.post("/",isAuthenticated, isAuthorized({
    role: ['admin','patient'],
    allowSameUser: true
}),appointmentController.creatAppointment);
router.delete("/:id",isAuthenticated, isAuthorized({
    role: ['admin','patient'],
    allowSameUser: true
}),appointmentController.deleteAppointmentById);


export default router;


