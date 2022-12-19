import { Request, Response } from "express";
import { Role } from "../models/roleModel";

const roleController ={
    getRolebyId: async (req: Request, res: Response) => {
        try {
          const { id } = req.params;
    
          const role = await Role.findByPk(id);
    
          if (!role) {
            return res.status(404).json({
              message: 'role not found',
            });
          }
    
          res.status(200).json({
            role,
          });
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: 'Server error'
          });
        }
      },
}
export default roleController;