import axios from "axios";
import { API_BASE_URL } from "@core/providers";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  params: {
    key: "f9e162d1b7a448a3b4116386a2add570",
  },
  headers: {
    "Content-Type": "application/json",
  },
});
