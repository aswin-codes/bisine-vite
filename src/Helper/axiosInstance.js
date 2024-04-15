import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

// Add a request interceptor to attach JWT token to outgoing requests
axiosInstance.interceptors.request.use(
    (config) => {
      // Retrieve JWT token from local storage
      const token = localStorage.getItem("access_token");
  
      // If token exists, add it to the Authorization header
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
  });

export default axiosInstance;
