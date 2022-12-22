import { DataTypes, Model, InferCreationAttributes, CreationOptional } from "sequelize";
import { sequelize } from ".";

export class Admin extends Model<InferCreationAttributes<Admin>> {
    declare admin_id: CreationOptional<number>;
    declare user_id: string;
    declare deleted_at?: Date;

}
Admin.init({
    admin_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
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

