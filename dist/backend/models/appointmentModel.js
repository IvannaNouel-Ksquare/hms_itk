"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
const doctorModel_1 = require("./doctorModel");
const patientModel_1 = require("./patientModel");
class Appointment extends sequelize_1.Model {
}
exports.Appointment = Appointment;
Appointment.init({
    appointment_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: sequelize_1.DataTypes.DATE
    },
    reason: {
        type: sequelize_1.DataTypes.TEXT
    },
    assited: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {
    sequelize: _1.sequelize
});
Appointment.hasOne(doctorModel_1.Doctor, {
    foreignKey: 'appointment_id',
    sourceKey: 'id',
});
Appointment.hasOne(patientModel_1.Patient, {
    foreignKey: 'appointment_id',
    sourceKey: 'id',
});
