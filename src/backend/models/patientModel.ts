import { DataTypes, Model, InferCreationAttributes } from "sequelize";
import { sequelize } from ".";

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





