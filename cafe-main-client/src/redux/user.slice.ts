import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../types/types.user';

export const initialState: IUser = {
  id: '',
  name: '',
  email: '',
  password: '',
  role: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
