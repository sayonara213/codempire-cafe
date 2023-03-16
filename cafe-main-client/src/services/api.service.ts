import axiosInstance from './axios.service';

export const apiGet = async (url: string) => {
  return await axiosInstance.get(url);
};

export const apiPost = async (url: string, data: any) => {
  return await axiosInstance.post(url, data);
};

export const apiDelete = async (url: string, id: string) => {
  return await axiosInstance.delete(`${url}/${id}`);
};

export const apiUpdate = async (url: string, id: string, data: any) => {
  return await axiosInstance.put(`${url}/${id}`, data);
};
