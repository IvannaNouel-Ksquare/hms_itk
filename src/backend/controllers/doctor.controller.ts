import { Request, Response } from "express";
import { Op } from "sequelize";
import { createUser } from "../firebase";
import { Doctor } from "../models/doctorModel";
import { Specialization } from "../models/specializationModel";

const doctorController = {
  createDoctor: async (req: Request, res: Response) => {
    const {
      displayName,
      email,
      password,
      first_name,
      last_name,
      address,
      phone_number
    } = req.body;

    if (
      !displayName ||
      !email ||
      !password ||
      !first_name ||
      !last_name ||
      !address ||
      !phone_number
    ) {
      return res.status(400).send({
        error: 'missing data'
      })
    }

    try {
      const user_id = await createUser(displayName, email, password, 'doctor');
      const doctor = await Doctor.create({
        user_id,
        first_name,
        last_name,
        address,
        phone_number
      });

      res.status(201).send({
        doctor
      })

    } catch (error) {
      res.status(500).send({ error: 'something went wrong' });
      console.log(error);

    }

  },
  getDoctorbyId: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const doctor = await Doctor.findOne({
        where: {
          user_id: id
        }
      });

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
  addSpecialization: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { specializations_ids } = req.body;

      const doctor = await Doctor.findOne({
        where: {
          user_id: id
        }
      });

      if (!doctor) {
        return res.status(404).json({
          message: 'doctor not found',
        });

      }

      const specializations = await Specialization.findAll({
        where: {
          specialization_id: {
            [Op.in]: specializations_ids
          }
        }
      })
      /* 
            const doctorSpecialization = await Doctor.update({specializations},
              {
                where: {
                  user_id: res.locals.uid
                }
              }); */

      res.status(200).json({
        // doctorSpecialization
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