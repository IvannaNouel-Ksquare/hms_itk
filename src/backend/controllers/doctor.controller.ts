import { Request, Response } from "express";
import { Doctor } from "../models/doctorModel";

const doctorController = {
  getDoctorbyId: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const doctor = await Doctor.findByPk(id);

      if (!doctor) {
        return res.status(404).json({
          message: 'doctor not found',
        });
      }

      res.status(200).json({
        doctor,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
}
export default doctorController;