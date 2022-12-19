"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Patient extends sequelize_1.Model {
}
exports.Patient = Patient;
Patient.init({
    patient_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    age: {
        type: sequelize_1.DataTypes.DATE
    },
    gender: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {
    sequelize: _1.sequelize
});
