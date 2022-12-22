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
      const doctor_id = res.locals.uid;

      const limit = Number(req.query.limit || 10);
      const offset = (Number(req.query.offset || 1) - 1) * limit;
      const patient_id = req.query.patient_id;
      const date = req.query.date;
      let order = req.query.order as string || "DESC";

      let filters = {};
      if (patient_id) filters = { ...filters, patient_id };
      if (date) filters = { ...filters, date };

      const appointment = await Appointment.findAll({
        attributes: ['appointment_id', 'patient_id', 'doctor_id', 'date'],
        limit,
        offset,
        order: [
          ['order', order]
        ],
        where: {
          doctor_id,
          ...filters,
        }
      });

      if (!appointment) {
        return res.status(404).json({
          message: 'appointments not found',
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
      const patient_id = res.locals.uid;

      const limit = Number(req.query.limit || 10);
      const offset = (Number(req.query.offset || 1) - 1) * limit;
      const doctor_id = req.query.doctor_id;

      let filters = {};
      if (doctor_id) filters = { ...filters, doctor_id };
      const appointment = await Appointment.findAll({
        attributes: ['appointment_id', 'patient_id', 'doctor_id', 'date'],
        limit,
        offset,
        where: {
          patient_id,
          ...filters
        }
      });
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

    const patient_id: string = res.locals.uid;
    const { date, reason, assisted, doctor_id } = req.body;

    try {
      const appointment = new Appointment({
        patient_id,
        doctor_id,
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
  getAllAppointments: async (req: Request, res: Response) => {

    const limit = Number(req.query.limit || 10);
    const offset = (Number(req.query.offset || 1) - 1) * limit;
    const doctor_id = req.query.doctor_id;
    const patient_id = req.query.patient_id;
    const deleted_at = req.query.deleted_at;

    let filters = {};
    if (doctor_id) filters = { ...filters, doctor_id };
    if (patient_id) filters = { ...filters, patient_id };
    if (deleted_at) filters = { ...filters, deleted_at };

    try {
      const appointment = await Appointment.findAll({
        attributes: ['appointment_id', 'patient_id', 'doctor_id', 'date'],
        limit,
        offset,
        where: filters
      })
      const list = await appointment;

      if (!appointment) {
        return res.status(404).json({
          message: 'no appointments found',
        });
      }
      res.status(200).json({
        list,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
  updateAppointmentDateById: async (req: Request, res: Response) => {

    const appointment_id = req.params.appointment_id
    const { date } = req.body;

    if (!date) {
      return res.status(404).json({
        message: "enter a date"
      })
    }
    try {
      const UpdatedAppointment = await Appointment.update({
        date
      }, {
        where: {
          appointment_id
        }
      });
      res.status(200).json({
        UpdatedAppointment
      });

    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  }
}
export default appointmentController;