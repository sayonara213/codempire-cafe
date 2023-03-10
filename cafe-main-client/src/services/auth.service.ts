import axios from 'axios';

import { API_URL } from '../constants/url';
import { setToken } from './storage.service';

export const login = async (data: any) => {
  try {
    const res = await axios.post(API_URL.LOGIN, data);
    if (res.data.access_token) {
      setToken(res.data.access_token);
    }
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const register = async (data: any) => {
  try {
    const res = await axios.post(API_URL.REGISTER, data);
    if (res.data.access_token) {
      setToken(res.data.access_token);
    }
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
