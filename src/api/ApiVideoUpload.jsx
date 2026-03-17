import axios from "axios";

export const videoUploadUrl = axios({
  baseURL: "https://vidtrim-backend-vercel.vercel.app",
  withCredentials: true,
});
