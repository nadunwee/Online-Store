import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartIsShown: false },
  reducers: {
    showCart(state) {
      state.cartIsShown = true;
    },
    hideCart(state) {
      state.cartIsShown = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
