import { Router } from "express";
import controllers from "../controllers";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { isAuthorized } from "../middlewares/isAuthorized";

const router = Router();

const { adminController } = controllers;

router.post("/newAdmin", isAuthenticated, isAuthorized({
    role: ['admin'],
    allowSameUser: true
}),adminController.createAdmin);
router.put("/disable/:uid", isAuthenticated, isAuthorized({
    role: ['admin'],
    allowSameUser: true
}),adminController.disableUser);


export default router;


