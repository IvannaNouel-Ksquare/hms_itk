import { Request, Response } from "express";
import { Specialization } from "../models/specializationModel";

const SpecializationController = {
  creatSpecialization: async (req: Request, res: Response) => {

    const { specialization_name } = req.body;

    if (!specialization_name) {
      return res.status(404).json({
        message: 'add a specialization',
      });
    }
    try {
      const specialization = await Specialization.create({
        specialization_name
      })

      res.status(200).json({
        specialization,
      });

    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
  getSpecializationbyId: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const specialization = await Specialization.findByPk(id);

      if (!specialization) {
        return res.status(404).json({
          message: 'role not found',
        });
      }

      res.status(200).json({
        specialization,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
}
export default SpecializationController;