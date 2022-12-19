import { Router } from "express";
import doctorRoutes from "./doctor.routes";
import appointmentRoutes from "./appointment.routes";
import patientRoutes from "./patient.routes";
import userRoutes from "./user.routes";

const router = Router();

router.use('/doctor', doctorRoutes);
router.use('/appointment', appointmentRoutes);
router.use('/patient', patientRoutes);
router.use('/user', userRoutes);


export default router;