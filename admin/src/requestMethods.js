import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
//   .currentUser.accessToken;
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDU1N2NlMDdkMWFhZjIyNzlmOTZhYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODE0ODg3OSwiZXhwIjoxNjU4NDA4MDc5fQ.ClPvDtW45jfR9pnayUcsU2ss5-gdHda8T6m4PJHvxZ0';
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
