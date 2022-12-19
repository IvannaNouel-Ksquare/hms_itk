import { DataTypes, Model, InferCreationAttributes } from "sequelize";
import { sequelize } from ".";

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

