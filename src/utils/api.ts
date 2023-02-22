import axios from "axios";

/**
 * axios instance
 */

axios.defaults.responseType = "json";

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
API.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export { API };
