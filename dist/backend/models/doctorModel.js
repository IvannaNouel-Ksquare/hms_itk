"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
const appointmentModel_1 = require("./appointmentModel");
const specializationModel_1 = require("./specializationModel");
const userModel_1 = require("./userModel");
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
Doctor.hasMany(specializationModel_1.Specialization, {
    foreignKey: 'specialization_id',
    sourceKey: 'id',
});
Doctor.hasMany(appointmentModel_1.Appointment, {
    foreignKey: 'appointment_id',
    sourceKey: 'id',
});
Doctor.hasOne(userModel_1.User, {
    foreignKey: 'user_id',
    sourceKey: 'id',
});
