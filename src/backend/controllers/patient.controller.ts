import { Request, Response } from "express";
import { Patient } from "../models/patientModel";

const patientController ={
    getPatientbyId: async (req: Request, res: Response) => {
        try {
          const { id } = req.params;
    
          const patient = await Patient.findByPk(id);
    
          if (!patient) {
            return res.status(404).json({
              message: 'patient not found',
            });
          }
    
          res.status(200).json({
            patient,
          });
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: 'Server error'
          });
        }
      },

}
export default patientController;