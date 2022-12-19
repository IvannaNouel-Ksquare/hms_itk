"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Appointment extends sequelize_1.Model {
}
exports.Appointment = Appointment;
Appointment.init({
    appointment_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    doctor_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    date: {
        type: sequelize_1.DataTypes.DATE
    },
    reason: {
        type: sequelize_1.DataTypes.TEXT
    },
    assisted: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {
    sequelize: _1.sequelize
});
