import { Router } from "express";
import controllers from "../controllers";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { isAuthorized } from "../middlewares/isAuthorized";

const router = Router();

const { doctorController } = controllers;

router.get("/:id",isAuthenticated, isAuthorized({
    role: ['admin'],
    allowSameUser: true
}),  doctorController.getDoctorbyId);
router.post("/newDoctor",isAuthenticated, isAuthorized({
    role: ['admin'],
    allowSameUser: true
}),doctorController.createDoctor);


export default router;


