import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../types/types.user';

export const initialState: IUser = {
  id: '',
  name: '',
  email: '',
  role: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;