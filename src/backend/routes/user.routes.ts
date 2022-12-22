import { Router } from "express";
import controllers from "../controllers";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { isAuthorized } from "../middlewares/isAuthorized";

const router = Router();

const { UserController } = controllers;

router.post("/newUser", UserController.registerUser);
router.get("/",isAuthenticated, isAuthorized({
    role: ['admin'],
    allowSameUser: true
}),UserController.getAllUsers);
router.get('/:userId', isAuthenticated, isAuthorized({
    role: ['admin'],
    allowSameUser: true
}), UserController.getUserById);
router.put("/update/:uid", isAuthenticated, isAuthorized({
    role: ['admin', 'patient'],
    allowSameUser: true
}), UserController.updateUser);

export default router;
