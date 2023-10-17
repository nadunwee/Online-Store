import { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  const cartIsShown = useSelector((state) => state.cart.cartIsShown);

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
