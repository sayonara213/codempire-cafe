import { createSlice } from '@reduxjs/toolkit';
import { IMAGES } from '../constants/images';
import { IUser } from '../types/types.user';

export const initialState: IUser = {
  id: '',
  name: '',
  email: '',
  phone: '',
  role: '',
  image: IMAGES.testUser,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log('action.payload', action.payload);

      state = action.payload;
      if (action.payload.name === '' || action.payload.name === null) {
        state.name = `USER${action.payload.id.substring(0, 5)}`;
      }
      if (!action.payload.image) {
        state.image = IMAGES.testUser;
      }
      return state;
    },
    setNameAndPhone: (state, action) => {
      state.name = action.payload.username;
      state.phone = action.payload.phone;
      return state;
    },
    setPhoto: (state, action) => {
      state.image = action.payload;
      return state;
    },
    logOut: (state) => {
      state = initialState;
      return state;
    },
  },
});

export default userSlice.reducer;

export const { setUser, setNameAndPhone, setPhoto, logOut } = userSlice.actions;
