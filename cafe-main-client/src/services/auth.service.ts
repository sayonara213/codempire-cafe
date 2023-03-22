import axios from 'axios';

import { API_URL } from '../constants/url';
import { errorToast } from '../notifications/notifications';
import { setUser } from '../redux/user.slice';
import { apiGet } from './api.service';
import { setToken } from './storage.service';

export const login = async (data: any) => {
  try {
    const res = await axios.post(API_URL.LOGIN, data);
    if (res.data.access_token) {
      setToken(res.data.access_token);
    }
    return res.data;
  } catch (err) {
    errorToast('Wrong email or password');
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
    errorToast('That email is already in use');
    console.log(err);
  }
};

export const retrieveUserInfo = async (dispatch: any) => {
  const user = await apiGet(API_URL.RETRIEVE_USER_INFO);
  dispatch(setUser(user.data));
};
