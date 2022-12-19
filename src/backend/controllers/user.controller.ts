import { Request, Response } from "express";
import { User } from "../models/userModel";
import jwt from "jsonwebtoken";
const bcrypt = require('bcrypt');
const SECRET_TOKEN = process.env.SECRET_TOKEN;


const UserController = {
  getUserbyId: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({
          message: 'role not found',
        });
      }

      const { password, ...rest } = user.toJSON();
      res.status(200).json({
        user: rest,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Server error'
      });
    }
  },
  register: async (req: Request, res: Response) => {
    try {
      const { user_id, first_name, last_name,
        email, address, phone_number, password, deleted_at } = req.body;

      const exist = await User.findOne({
        where: {
          email,
        }
      });
      if (exist) {
        res.status(409).json({
          message: "Email already exists",
        })
        return;
      }
      const salt = await bcrypt.genSalt(10);
      const pass = await bcrypt.hash(password, salt);
      const newUser = new User({
        first_name,
        last_name,
        email,
        address,
        phone_number,
        password: pass,
        deleted_at
      });
      await newUser.save();

      const token = jwt.sign(
        { user_id, email },
        process.env.SECRET_TOKEN as string
        , {
          expiresIn: "2h",
        }
      );
      // save user token
      newUser.token = token;
      console.log(token)

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

  },
  login: async (req: Request, res: Response) => {

    try {
      const { password, email } = req.body;
      const user = await User.findOne({
        where: {
          email,
        }
      });
      if (!user) {
        return res.status(404).json({
          message: "email not found",
        })
      }

      const correctPass = await bcrypt.compare(password, user.password);

      if (!correctPass) {
        return res.status(403).json({
          message: "wrong password",
        })
      }

      const { _id, email: string } = user;
      const token = jwt.sign({ _id, email }, process.env.SECRET_TOKEN as string, { expiresIn: "24h" });

      res.status(200).json({
        message: "User logged",
        token,
      });

    } catch (error) {
      res.status(500).json({
        message: "ERROR",
      });
      console.log(error);
    }
  },


}
export default UserController;