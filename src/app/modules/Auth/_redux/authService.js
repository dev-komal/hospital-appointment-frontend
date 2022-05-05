import axios from 'axios';

export const LOGIN_URL = 'localhost:3000/tokens';
export const REGISTER_URL = 'localhost:3000/users';
export const PEOPLE_REGISTER = 'localhost:3000/people';
export const GET_DEPARTMENTS = 'localhost:3000/departments';
export const GET_DOCTOR_CALENDAR = 'localhost:3000/doctor_calendars';
export const GET_PATIENT_ROLE = 'localhost:3000/roles';
export const GET_PATIENT_DEPARTMENT = 'localhost:3000/departments/1/getPatientDepartment';

export function login(username, password) {
  return axios.post(LOGIN_URL, { user: { username, password } });
}

export function registerUser(email, username, password, personid, roleId, departmentId) {
  return axios.post(REGISTER_URL, {
    user: {
      email,
      username,
      password,
      password_digest: password,
      role_id: roleId,
      department_id: departmentId,
      person_id: personid,
    },
  });
}

export function registerPeople(firstName, lastName, documentId, phone, historyNumber) {
  return axios.post(PEOPLE_REGISTER, {
    person: {
      firstName,
      lastName,
      documentId,
      phone,
      historyNumber,
    },
  });
}

export function getDepartments() {
  return axios.get(GET_DEPARTMENTS);
}

export function getDoctorCalendars() {
  return axios.get(GET_DOCTOR_CALENDAR);
}

export function getPatientRole() {
  return axios.get(GET_PATIENT_ROLE);
}

export function getPatientDepartment() {
  return axios.get(GET_PATIENT_DEPARTMENT);
}
