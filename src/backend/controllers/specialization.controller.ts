import { Request, Response } from "express";
import { Specialization } from "../models/specializationModel";

const SpecializationController ={
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