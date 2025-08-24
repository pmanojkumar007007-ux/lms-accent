import axios from "axios";

// Create an axios instance with baseURL from env
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Request interceptor to add token to headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      if (config.headers) {
        (config.headers as any)["Authorization"] = `Bearer ${token}`;
      } else {
        config.headers = { ...(config.headers || {}), Authorization: `Bearer ${token}` } as any;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
