import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMenu } from './../types/types.menu';
import { IProduct } from './../types/types.products';
import { apiGet } from './../services/api.service';
import { API_URL } from '../constants/url';

interface MenuListState {
  menuList: IMenu[] | IProduct[];
  menuListLoading: boolean;
  menuListError: string | null;
  isProduct: boolean;
}

const initialState: MenuListState = {
  menuList: [],
  menuListLoading: false,
  menuListError: null,
  isProduct: false,
};

export const fetchMenuList = createAsyncThunk(
  'menuList/fetchMenuList',
  async (isProduct: boolean) => {
    const api = isProduct ? API_URL.GET_ALL_PRODUCTS : API_URL.GET_ALL_MENUS;
    const response = await apiGet(api);
    return [...response.data];
  },
);

const menuListSlice = createSlice({
  name: 'menuList',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMenuList.pending, (state) => {
      state.menuListLoading = true;
    });
    builder.addCase(fetchMenuList.fulfilled, (state, action) => {
      state.menuListLoading = false;
      state.menuList = action.payload;
    });
    builder.addCase(fetchMenuList.rejected, (state, action) => {
      state.menuListLoading = false;
      state.menuListError = 'error';
    });
  },
  reducers: {
    setIsProduct: (state, action) => {
      state.isProduct = action.payload;
    },
  },
});

export default menuListSlice.reducer;

export const { setIsProduct } = menuListSlice.actions;
