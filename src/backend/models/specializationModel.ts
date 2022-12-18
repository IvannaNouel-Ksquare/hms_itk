import { DataTypes, Model, InferCreationAttributes } from "sequelize";
import { sequelize } from ".";

export class Specialization extends Model<InferCreationAttributes<Specialization>> {
    declare specialization_id: number;
    declare specialization_name: string;

}

Specialization.init({
    specialization_name: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
    },
    specialization_id: {
        type: DataTypes.INTEGER,
    },
}, {
    sequelize
});

