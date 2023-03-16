import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../types/types.user';

export const initialState: IUser = {
  id: '',
  name: '',
  email: '',
  phone: '',
  role: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
      state.name = `USER${action.payload.id.substring(0, 5)}`;
      return state;
    },
    setNameAndPhone: (state, action) => {
      state.name = action.payload.username;
      state.phone = action.payload.phone;
      return state;
    },
  },
});

export default userSlice.reducer;

export const { setUser, setNameAndPhone } = userSlice.actions;
