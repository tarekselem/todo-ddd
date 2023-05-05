import axios from "axios";
import { API_BASE_URL } from "@core/providers";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  params: {},
  headers: {
    "Content-Type": "application/json",
  },
});
