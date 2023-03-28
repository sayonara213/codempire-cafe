import { createSlice } from '@reduxjs/toolkit';

export interface ICart {
  id: string;
  isProduct: boolean;
  quantity: number;
  price: number;
}

const initialState = {
  cartItems: [] as ICart[],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const item = action.payload;
      const itemExists = state.cartItems.find((i) => i.id === item.id);

      if (itemExists) {
        itemExists.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }
    },
    removeItemFromCart(state, action) {
      const item = action.payload;
      const itemExists = state.cartItems.find((i) => i.id === item.id);

      if (itemExists) {
        itemExists.quantity -= item.quantity;
        if (itemExists.quantity === 0) {
          state.cartItems = state.cartItems.filter((i) => i.id !== item.id);
        }
      }
    },
    incrementItemQuantity(state, action) {
      const item = action.payload;
      const itemExists = state.cartItems.find((i) => i.id === item.id);

      if (itemExists) {
        itemExists.quantity += 1;
      }
    },
    decrementItemQuantity(state, action) {
      const item = action.payload;
      const itemExists = state.cartItems.find((i) => i.id === item.id);

      if (itemExists) {
        itemExists.quantity -= 1;
        if (itemExists.quantity === 0) {
          state.cartItems = state.cartItems.filter((i) => i.id !== item.id);
        }
      }
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export default cartSlice.reducer;

export const {
  addItemToCart,
  removeItemFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
  setTotalPrice,
  clearCart,
} = cartSlice.actions;
