import { Router } from "express";
import controllers from "../controllers";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { isAuthorized } from "../middlewares/isAuthorized";

const router = Router();

const { SpecializationController } = controllers;

router.post("/newSpecialization",isAuthenticated, isAuthorized({
    role: ['admin'],
    allowSameUser: true
}),SpecializationController.creatSpecialization);

router.get("/:id",isAuthenticated, isAuthorized({
    role: ['admin'],
    allowSameUser: true
}),SpecializationController.getSpecializationbyId);

export default router;


