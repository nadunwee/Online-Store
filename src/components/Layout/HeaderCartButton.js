import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { uiActions } from "../Store/ui-slice";

function HeaderCartButton(props) {
  const totalQuantity = useSelector((state) => state.cart.totalQuentity);
  const dispatch = useDispatch();

  const headerBtnHandler = () => {
    dispatch(uiActions.toggle());
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
