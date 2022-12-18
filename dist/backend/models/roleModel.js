"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Role extends sequelize_1.Model {
}
exports.Role = Role;
Role.init({
    role_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    role: {
        type: sequelize_1.DataTypes.TEXT,
    }
}, {
    sequelize: _1.sequelize
});
