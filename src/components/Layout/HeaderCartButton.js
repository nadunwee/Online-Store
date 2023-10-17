import { Fragment } from "react";
import { useDispatch } from "react-redux";

import classes from "./HeaderCartButton.module.css";
import { cartActions } from "../Store/cart-slice";

function HeaderCartButton(props) {
  const dispatch = useDispatch();

  const headerBtnHandler = () => {
    dispatch(cartActions.showCart());
  };
  return (
    <Fragment>
      <button className={classes.button} onClick={headerBtnHandler}>
        Cart
      </button>
    </Fragment>
  );
}

export default HeaderCartButton;
