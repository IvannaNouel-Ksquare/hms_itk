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
  getAppointmentbyDoctorid: async (req: Request, res: Response) => {
    try {
      const { doctor_id } = req.params;

      const appointment = await Appointment.findByPk(doctor_id);

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
  getAppointmentbyPatientId: async (req: Request, res: Response) => {
    try {
      const { patient_id } = req.params;

      const appointment = await Appointment.findByPk(patient_id);

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
        message: "Appointment created",
        appointment
      })

    } catch (error) {
      res.status(500).json({
        message: "ERROR",
      })
      console.log(error);
    }
  },
  deleteAppointmentById: async (req: Request, res: Response) => {

    try {
      const { id } = req.params;

      const appointment = await Appointment.findByPk(id);

      if (!appointment) {
        res.status(404).json({
          error: "appointment not found",
        });
        return;
      }

      if (appointment) {
         await appointment.destroy(); 
      }
       res.status(200).json({
          message: "appointment deleted",
          appointment,
        })

    } catch (error) {
      res.status(500).json({
        message: "ERROR",
      })
      console.log(error);
    }
  },
  getAllAppointments: async (_req: Request, res: Response) => {
    try {
      const appointment = await Appointment.findAll();

      if (!appointment) {
        return res.status(404).json({
          message: 'no appointments found',
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
}
export default appointmentController;