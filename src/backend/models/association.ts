import { Appointment } from "./appointmentModel";
import { Doctor } from "./doctorModel";
import { Patient } from "./patientModel";
import { Role } from "./roleModel";
import { Specialization } from "./specializationModel";
import { User } from "./userModel";

// * User
User.hasOne(Role, {
    foreignKey: 'role_id',
    sourceKey: 'user_id',
});

// * Doctor
Doctor.hasMany(Specialization, {
    foreignKey: 'specialization_id',
    sourceKey: 'doctor_id',
});

Doctor.hasMany(Appointment,{
    foreignKey: 'appointment_id',
    sourceKey: 'doctor_id',
});
Doctor.belongsTo(Appointment,{
    foreignKey: 'doctor_id',
})

Doctor.hasOne(User,{
    foreignKey: 'user_id',
    sourceKey: 'doctor_id',
});

// * Appointment
Appointment.hasOne(Patient,{
    foreignKey: 'patient_id',
    sourceKey: 'appointment_id',
})

Appointment.hasOne(Doctor,{
    foreignKey: 'doctor_id',
    sourceKey: 'appointment_id',
})

// * Patient
Patient.hasOne(User,{
    foreignKey: 'user_id',
    sourceKey: 'patient_id',
});

Patient.hasMany(Appointment,{
    foreignKey: 'appointment_id',
    sourceKey: 'patient_id',
});




