import { DataTypes, Model, InferCreationAttributes } from "sequelize";
import { sequelize } from ".";
import { Appointment } from "./appointmentModel";
import { Specialization } from "./specializationModel";
import { User } from "./userModel";

export class Doctor extends Model<InferCreationAttributes<Doctor>> {
    declare doctor_id: number;
    
}

Doctor.init({
    doctor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
}, {
    sequelize
});


Doctor.hasMany(Specialization, {
    foreignKey: 'specialization_id',
    sourceKey: 'id',
});

Doctor.hasMany(Appointment,{
    foreignKey: 'appointment_id',
    sourceKey: 'id',
});

Doctor.hasOne(User,{
    foreignKey: 'user_id',
    sourceKey: 'id',
});

