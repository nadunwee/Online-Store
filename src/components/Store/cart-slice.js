import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartIsShown: false, cartItems: [], totalQuentity: 1 },
  reducers: {
    showCart(state) {
      state.cartIsShown = true;
    },
    hideCart(state) {
      state.cartIsShown = false;
    },
    addToCart(state, action) {
      const newItem = action.payload;

      // Check if item already available
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        state.totalQuentity++;
        existingItem.price += newItem.price;
      } else {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          description: newItem.description,
          name: newItem.name,
        });
      }
    },
    removeFromCart() {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
