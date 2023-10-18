import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { sendCartData } from "./components/Store/cart-slice";

let isInitial = true;

function App() {
  const cartIsShown = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart))
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
