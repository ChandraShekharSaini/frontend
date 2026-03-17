import axios from "axios";

//Production
export const videoUploadUrl = axios.create({
  baseURL: "https://vidtrim-backend-vercel.vercel.app",
  withCredentials: true,
});

//Local
// export const videoUploadUrl = axios.create({
//   baseURL: "http://localhost:3600",
//   withCredentials: true,
// });
