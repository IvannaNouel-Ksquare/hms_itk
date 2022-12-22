import { Router } from "express";
import doctorRoutes from "./doctor.routes";
import appointmentRoutes from "./appointment.routes";
import patientRoutes from "./patient.routes";
import userRoutes from "./user.routes";
import adminRoutes from "./admin.routes";

import specializationRoutes from "./specialization.routes";

const router = Router();

router.use('/doctor', doctorRoutes);
router.use('/appointment', appointmentRoutes);
router.use('/patient', patientRoutes);
router.use('/user', userRoutes);
router.use('/specialization', specializationRoutes);
router.use('/admin', adminRoutes);


export default router;