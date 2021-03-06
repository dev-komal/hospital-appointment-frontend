import axios from 'axios';

export const APPOINTMENT_BY_DATE_AREA = 'localhost:3000/getappointments';
export const SERVICE_APPOINTMENT = 'localhost:3000/appointments';

// eslint-disable-next-line camelcase
export function getListAppointmentByDateService(department_id, date) {
  return axios.post(APPOINTMENT_BY_DATE_AREA, {
    appointment: {
      department_id,
      date,
    },
  });
}

// eslint-disable-next-line camelcase
export function saveAppointment(appointmentDate, startTime, endTime, user_id, doctor_id) {
  return axios.post(SERVICE_APPOINTMENT, {
    appointment: {
      appointmentDate,
      startTime,
      endTime,
      status: true,
      user_id,
      doctor_id,
    },
  });
}

// eslint-disable-next-line camelcase
export const ListAppointmentByPatient = user_id => axios.get(SERVICE_APPOINTMENT, {
  params: {
    user_id,
  },
});
