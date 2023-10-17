import classes from "./CartItem.module.css";
import { useSelector } from "react-redux";
// import { cartActions } from "../Store/cart-slice";

function CartItem(props) {
  // const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.totalQuentity);
  // const newPrice = useSelector((state) => state.cart.cartItems);
  // console.log(newPrice);
  const price = props.price.toFixed(2);

  // const addBtnHandler = () => {
  //   dispatch(
  //     cartActions.addToCart({
  //       id: props.id,
  //       price: newPrice[0].price,
  //     })
  //   );
  // };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
      </div>
    </li>
  );
}

export default CartItem;
