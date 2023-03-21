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
  addresses: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
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
    setAddresses: (state, action) => {
      state.addresses = action.payload;
      return state;
    },
    toggleAddressActive: (state, action) => {
      const address = state.addresses.find((address) => address.id === action.payload.addressId);
      if (address) {
        address.isActive = action.payload.isActive;
      }
      return state;
    },
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
      return state;
    },
  },
});

export default userSlice.reducer;

export const {
  setUser,
  setNameAndPhone,
  setPhoto,
  logOut,
  setAddresses,
  toggleAddressActive,
  addAddress,
} = userSlice.actions;
