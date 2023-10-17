import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./HeaderCartButton.module.css";
import { cartActions } from "../Store/cart-slice";
import CartIcon from "../Cart/CartIcon";

function HeaderCartButton(props) {
  const totalQuantity = useSelector((state) => state.cart.totalQuentity);
  const dispatch = useDispatch();

  const headerBtnHandler = () => {
    dispatch(cartActions.showCart());
  };
  return (
    <Fragment>
      <button className={classes.button} onClick={headerBtnHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{totalQuantity}</span>
      </button>
    </Fragment>
  );
}

export default HeaderCartButton;
