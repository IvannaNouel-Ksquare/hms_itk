"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
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
        type: sequelize_1.DataTypes.STRING,
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
    },
    phone_number: {
        type: sequelize_1.DataTypes.STRING(20),
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    deleted_at: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    sequelize: _1.sequelize,
    paranoid: true,
    deletedAt: 'deleted_at',
});