import { DataTypes, Model, InferCreationAttributes } from "sequelize";
import { sequelize } from ".";

export class Role extends Model<InferCreationAttributes<Role>> {
    declare role_id: number;
    declare role: string;
    
}

Role.init({
    role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    role: {
        type: DataTypes.TEXT,
    }
}, {
    sequelize
});


