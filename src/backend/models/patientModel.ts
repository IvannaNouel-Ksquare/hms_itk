import { DataTypes, Model, InferCreationAttributes } from "sequelize";
import { sequelize } from ".";
import { Appointment } from "./appointmentModel";
import { User } from "./userModel";

export class Patient extends Model<InferCreationAttributes<Patient>> {
    declare patient_id: number;
    declare age: number;
    declare gender: string;
}

Patient.init({
    patient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    age: {
        type: DataTypes.DATE
    },
    gender: {
        type: DataTypes.BOOLEAN
    },
}, {
    sequelize
});

Patient.hasMany(Appointment,{
    foreignKey: 'appointment_id',
    sourceKey: 'id',
});

Patient.hasOne(User,{
    foreignKey: 'user_id',
    sourceKey: 'id',
});





