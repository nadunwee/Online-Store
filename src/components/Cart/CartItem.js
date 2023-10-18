import { useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
import { cartActions } from "../Store/cart-slice";

function CartItem(props) {
  const dispatch = useDispatch();

  const price = (props.price * props.amount).toFixed(2);

  const addItemHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: props.id,
        price: props.price,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeFromCart(props.id));
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
}

export default CartItem;
