import { Request, Response } from "express";
import { Appointment } from "../models/appointmentModel";

const appointmentController = {
  getAppointmentbyId: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const appointment = await Appointment.findByPk(id);

      if (!appointment) {
        return res.status(404).json({
          message: 'appointment not found',
        });
      }

      res.status(200).json({
        appointment,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
  creatAppointment: async (req: Request, res: Response) => {

    try {
      const { date, reason, assisted } = req.body;
      const appointment = new Appointment({
        date,
        reason,
        assisted,
      
      });

      await appointment.save();

      res.status(200).json({
        message: "User created",
      })

    } catch (error) {
      res.status(500).json({
        message: "ERROR",
      }
      )
      console.log(error);
    }


  }
}
export default appointmentController;