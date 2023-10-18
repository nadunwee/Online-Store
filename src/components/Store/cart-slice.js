import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], totalQuentity: 0 },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      // Check if item already available
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          description: newItem.description,
          totalPrice: newItem.price,
          quantity: 1,
          name: newItem.name,
        });
        state.totalQuentity++;
        state.totalPrice += newItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;

      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuentity--;
        state.totalPrice -= existingItem.price;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request to FireBase",
        type: "warning",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://react-redux-d7d46-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!res.ok) {
        throw new Error("something went wrong");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sent the Request",
          type: "success",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Failed",
          type: "error",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
