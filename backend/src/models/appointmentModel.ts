import { DataTypes, Model, InferCreationAttributes } from "sequelize";
import { sequelize } from ".";

export class Appointment extends Model<InferCreationAttributes<Appointment>> {
    declare appointment_id?: number;
    declare patient_id?:string;
    declare doctor_id?: string;
    declare date: number;
    declare reason: string;
    declare assisted: boolean;
    declare deleted_at?: Date;
}

Appointment.init({
    appointment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    doctor_id: {
        type: DataTypes.STRING
    },
    patient_id: {
        type: DataTypes.STRING
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
    deleted_at: {
        type: DataTypes.DATE,
    },
}, {
    sequelize,
    paranoid: true,
    deletedAt: 'deleted_at',

});
