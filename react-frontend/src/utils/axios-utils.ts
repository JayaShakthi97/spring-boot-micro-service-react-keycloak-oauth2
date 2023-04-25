import axios from "axios";
import AuthService from "../services/auth-service";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9090",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (AuthService.isLoggedIn()) {
      config.headers.Authorization = `Bearer ${AuthService.getToken()}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);
    
    const config = error?.config;

    if (!error?.response || (error?.response?.status === 401 && !config?.sent)) {
      config.sent = true;

      await AuthService.updateToken();

      config.headers = {
        ...config.headers,
        authorization: `Bearer ${AuthService.getToken()}`,
      };

      return axios(config);
    }
    return Promise.reject(error);
  }
);

export const AxiosService = axiosInstance;
