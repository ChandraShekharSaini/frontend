import axios from "axios";

export const videoUploadUrl = axios.create({
  baseURL: "http://localhost:3600",
  withCredentials: true,
});
