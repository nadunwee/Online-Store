import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { uiActions } from "./components/Store/ui-slice";

let isInitial = true;

function App() {
  const cartIsShown = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      // send state as pending
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request to FireBase",
          type: "warning",
        })
      );

      await fetch(
        "https://react-redux-d7d46-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      //send state as successfull
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sent the Request",
          type: "success",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((err) => {
      //Send state as error
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Failed",
          type: "error",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {cartIsShown && <Cart />}
      <Header />
      <main>
        <Products />
      </main>
    </Fragment>
  );
}

export default App;
