import { DataTypes, Model, InferCreationAttributes, CreationOptional } from "sequelize";
import { sequelize } from ".";

export class Doctor extends Model<InferCreationAttributes<Doctor>> {
    declare doctor_id: CreationOptional<number>;
    declare user_id: string;
    declare first_name: string;
    declare last_name: string;
    declare address: string;
    declare phone_number: string;
    declare deleted_at?: Date;
}

Doctor.init({
    doctor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.STRING,
    },
    first_name: {
        type: DataTypes.STRING,
    },
    last_name: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    phone_number: {
        type: DataTypes.STRING(20),
    },
    deleted_at: {
        type: DataTypes.DATE,
    },
}, {
    sequelize,
    paranoid: true,
    deletedAt: 'deleted_at',
});

