"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Doctor extends sequelize_1.Model {
}
exports.Doctor = Doctor;
Doctor.init({
    doctor_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
}, {
    sequelize: _1.sequelize
});
