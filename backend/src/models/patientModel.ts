import { DataTypes, Model, InferCreationAttributes, CreationOptional } from "sequelize";
import { sequelize } from ".";

export class Patient extends Model<InferCreationAttributes<Patient>> {
    declare patient_id: CreationOptional<number>;
    declare user_id: string;
    declare age: number;
    declare gender: string;
    declare deleted_at?: Date;

}

Patient.init({
    patient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.DATE
    },
    gender: {
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





