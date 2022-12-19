import { DataTypes, Model, InferCreationAttributes } from "sequelize";
import { sequelize } from ".";

export class Appointment extends Model<InferCreationAttributes<Appointment>> {
    declare appointment_id?: number;
    declare doctor_id?:number;
    declare date: number;
    declare reason: string;
    declare assisted: boolean;

}

Appointment.init({
    appointment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    doctor_id: {
        type: DataTypes.INTEGER
    },
    date: {
        type: DataTypes.DATE
    },
    reason: {
        type: DataTypes.TEXT
    },
    assisted: {
        type: DataTypes.BOOLEAN
    },
}, {
    sequelize
});
