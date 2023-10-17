import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartIsShown: false, cartItems: [], totalQuentity: 0 },
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
        existingItem.quantity++;
        existingItem.price += newItem.price;
      } else {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          description: newItem.description,
          totalPrice: newItem.totalPrice,
          quantity: 1,
          name: newItem.name,
        });
        state.totalQuentity++;
      }
    },
    removeFromCart() {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
