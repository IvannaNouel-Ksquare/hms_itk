import { Router } from "express";
import controllers from "../controllers";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { isAuthorized } from "../middlewares/isAuthorized";

const router = Router();

const { patientController } = controllers;

router.get("/:id",isAuthenticated, isAuthorized({
    role: ['admin'],
    allowSameUser: true
}),patientController.getPatientbyId);

export default router;


