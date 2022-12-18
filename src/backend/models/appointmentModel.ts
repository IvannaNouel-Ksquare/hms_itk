import { DataTypes, Model, InferCreationAttributes } from "sequelize";
import { sequelize } from ".";
import { Doctor } from "./doctorModel";
import { Patient } from "./patientModel";

export class Appointment extends Model<InferCreationAttributes<Appointment>> {
    declare appointment_id: number;
    declare date: number;
    declare reason: string;
    declare assited: boolean;

}

Appointment.init({
    appointment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE
    },
    reason: {
        type: DataTypes.TEXT
    },
    assited: {
        type: DataTypes.BOOLEAN
    },
}, {
    sequelize
});

Appointment.hasOne(Doctor,{
    foreignKey: 'appointment_id',
    sourceKey: 'id',
})

Appointment.hasOne(Patient,{
    foreignKey: 'appointment_id',
    sourceKey: 'id',
})
