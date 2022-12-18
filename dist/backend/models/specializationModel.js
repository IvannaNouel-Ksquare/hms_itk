"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specialization = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Specialization extends sequelize_1.Model {
}
exports.Specialization = Specialization;
Specialization.init({
    specialization_name: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
    },
    specialization_id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    sequelize: _1.sequelize
});
