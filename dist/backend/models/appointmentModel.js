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
        type: sequelize_1.DataTypes.STRING
    },
    patient_id: {
        type: sequelize_1.DataTypes.STRING
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
    deleted_at: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    sequelize: _1.sequelize,
    paranoid: true,
    deletedAt: 'deleted_at',
});
