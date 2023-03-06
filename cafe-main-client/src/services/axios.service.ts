import axios from 'axios';
import { getToken } from './storage.service';

const axiosInstance = axios.create({
  timeout: 20000,
});
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = 'Bearer ' + getToken();
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default axiosInstance;
