import { DataTypes, Model, InferCreationAttributes } from "sequelize";
import { sequelize } from ".";
import { Role } from "./roleModel";

export class User extends Model<InferCreationAttributes<User>> {
    declare user_id: number;
    declare first_name: string;
    declare last_name: string;
    declare email: string;
    declare address: string;
    declare phone_number: number;
    declare password: string;

}

User.init({
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.TEXT,
    },
    last_name: {
        type: DataTypes.TEXT,
    },
    email: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.TEXT,
    },
    phone_number: {
        type: DataTypes.NUMBER,
    },
    password: {
        type: DataTypes.TEXT,
    },
}, {
    sequelize
});


User.hasOne(Role, {
    foreignKey: 'role_id',
    sourceKey: 'id',
});


