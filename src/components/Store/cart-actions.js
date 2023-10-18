import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = (cart) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://react-redux-d7d46-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      if (!res.ok) {
        throw new Error("something went wrong");
      }
      const data = await res.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          cartItems: cartData.cartItems || [],
          totalQuentity: cartData.totalQuentity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Fetching Failed",
          type: "error",
        })
      );
    }
  };
};

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
