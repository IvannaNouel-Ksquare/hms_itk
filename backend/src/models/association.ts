import { Appointment } from "./appointmentModel";
import { Doctor } from "./doctorModel";
import { Patient } from "./patientModel";
import { Specialization } from "./specializationModel";

// * Doctor
Doctor.belongsToMany(Specialization, {
    through: "doctor_specialization"
});
Specialization.belongsToMany(Doctor, {
    through: "doctor_specialization"
});

Doctor.hasMany(Appointment, {
    foreignKey: 'appointment_id',
    sourceKey: 'doctor_id',
});
Doctor.belongsTo(Appointment, {
    foreignKey: 'doctor_id',
})

// * Appointment
Appointment.hasOne(Patient, {
    foreignKey: 'patient_id',
    sourceKey: 'appointment_id',
})

Appointment.hasOne(Doctor, {
    foreignKey: 'doctor_id',
    sourceKey: 'appointment_id',
})

// * Patient

Patient.hasMany(Appointment, {
    foreignKey: 'appointment_id',
    sourceKey: 'patient_id',
});





