import { Request, Response } from "express";
import { createUser, disableUser, getAllUsers, readUser, updateUser } from "../firebase";
import { Patient } from "../models/patientModel";

const UserController = {
  registerUser: async (req: Request, res: Response) => {
    const { displayName, email, password, age, gender} = req.body;

    if (!displayName || !email || !password) {
      return res.status(400).send({
        error: 'missing data'
      })
    }

    try {
      const user_id = await createUser(displayName, email, password, 'patient');
      const patient = await Patient.create({
        user_id,
        age,
        gender
      })
      res.status(201).send({
        patient
      })

    } catch (error) {
      res.status(500).send({ error: 'something went wrong' });
      console.log(error);

    }

  },

  updateUser: async (req: Request, res: Response) => {
    let uid = req.params.uid;
    const { displayName, email, password } = req.body;

    try {
        const updatedUser = await updateUser(uid, displayName, email, password);
        if (!updatedUser) {
            return res.status(400).send({
                error: "invalid id"
            })
        }
        res.status(201).send({
            updatedUser
        })

    } catch (error) {
        res.status(500).send({ error: 'something went wrong' });
    }

  },
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await getAllUsers();
      res.status(202).send({
        users
      })

    }
    catch (error) {
      res.status(500).send({ error: 'something went wrong' });
    }

  },
  getUserById: async (req: Request, res: Response) => {
    let uid = req.params.userId;
    
    try {
      const user = await readUser(uid);
      if (!user) {
        return res.status(400).send({
          error: "invalid id"
        })
      }
      res.status(202).send({
        user

      })
      console.log(user);
      console.log(res.locals);


    }
    catch (error) {
      res.status(500).send({ error: 'something went wrong' });
    }

  },

}
export default UserController;
