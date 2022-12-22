import { Request, Response } from "express";
import { createUser, disableUser } from "../firebase";
import { Admin } from "../models/admimModel";

const AdminController = {
    createAdmin: async (req: Request, res: Response) => {
        const { displayName, email, password } = req.body;

        if (!displayName || !email || !password) {
            return res.status(400).send({
                error: 'missing data'
            })
        }
        try {
            const user_id = await createUser(displayName, email, password, 'admin');
            const admin = await Admin.create({
                user_id,
            });

            res.status(201).send({
                admin
            })

        } catch (error) {
            res.status(500).send({ error: 'something went wrong' });
            console.log(error);

        }

    },
    disableUser: async (req: Request, res: Response) => {
        let uid = req.params.uid;
        const { disabled } = req.body;

        if (disabled === undefined || typeof disabled !== 'boolean') {
            return res.status(400).send({
                error: 'invalid data'
            })
        }

        try {
            const user = await disableUser(uid, disabled);
            if (!user) {
                return res.status(400).send({
                    error: "invalid id"
                })
            }
            res.status(200).send(user)

        } catch (error) {
            res.status(500).send({ error: 'something went wrong' });

        }

    },

}
export default AdminController;