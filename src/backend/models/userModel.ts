import { DataTypes, Model, InferCreationAttributes } from "sequelize";
import { sequelize } from ".";

export class User extends Model<InferCreationAttributes<User>> {
    [x: string]: any;
    declare user_id?: number;
    declare first_name: string;
    declare last_name: string;
    declare email: string;
    declare address: string;
    declare phone_number: string;
    declare password: string;
    declare deleted_at?: Date;

}

User.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
    },
    last_name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    phone_number: {
        type: DataTypes.STRING(20),
    },
    password: {
        type: DataTypes.STRING,
    },
    deleted_at: {
        type: DataTypes.DATE,
    },
}, {
    sequelize,
    paranoid: true,
    deletedAt: 'deleted_at',
});



