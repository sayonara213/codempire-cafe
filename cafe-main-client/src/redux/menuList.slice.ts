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
  orderBy: {
    name: string;
    order: 'asc' | 'desc';
  };
  types: string[];
  search: string;
}

interface FetchMenuListPayload {
  isProduct: boolean;
  orderBy?: {
    name: string;
    order: 'asc' | 'desc';
  };
  types: string[];
}

const initialState: MenuListState = {
  menuList: [],
  menuListLoading: false,
  menuListError: null,
  isProduct: false,
  orderBy: {
    name: 'name',
    order: 'asc',
  },
  types: [],
  search: '',
};

export const fetchMenuList = createAsyncThunk(
  'menuList/fetchMenuList',
  async (payload: FetchMenuListPayload) => {
    const { isProduct, orderBy, types } = payload;

    const typesString = types
      .map((type) => `&types=${type}`)
      .join('')
      .toLowerCase();

    const getProductApi = `${API_URL.SEARCH_ALL_PRODUCTS}?sortBy=${orderBy?.name}&order=${orderBy?.order}${typesString}`;
    const getMenuApi = `${API_URL.GET_ALL_MENUS}?sortBy=${orderBy?.name}&order=${orderBy?.order}${typesString}`;

    const response = await apiGet(isProduct ? getProductApi : getMenuApi);
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
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
    setTypes: (state, action) => {
      state.types = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default menuListSlice.reducer;

export const { setIsProduct, setOrderBy, setTypes, setSearch } = menuListSlice.actions;
