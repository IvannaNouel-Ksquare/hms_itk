"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
const roleModel_1 = require("./roleModel");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: sequelize_1.DataTypes.TEXT,
    },
    last_name: {
        type: sequelize_1.DataTypes.TEXT,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    address: {
        type: sequelize_1.DataTypes.TEXT,
    },
    phone_number: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    password: {
        type: sequelize_1.DataTypes.TEXT,
    },
}, {
    sequelize: _1.sequelize
});
User.hasOne(roleModel_1.Role, {
    foreignKey: 'role_id',
    sourceKey: 'id',
});
