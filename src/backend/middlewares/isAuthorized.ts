import { Request, Response } from 'express';
import { Role } from '../firebase'

export const isAuthorized = (options: { role: Role[]; allowSameUser: boolean }) => {
    return (req: Request, res: Response, next: Function) => {
        const { uid, email, role } = res.locals;
        const { userId } = req.params;

        if (!role) {
            return res.status(403).send();
        }
        if (role === 'Super USER') {
            return next();
        }
        if (options.allowSameUser && userId && userId === uid) {
            return next();
        }
        if (options.role.includes(role)) {
            return next()
        }
        return res.status(403).send();
    }
}
