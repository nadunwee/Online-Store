import { useDispatch } from "react-redux";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { cartActions } from "../Store/cart-slice";

function Cart(props) {
  const cartItemObj = props.cartItems;

  // const cartItems = (
  //   <ul className={classes["cart-items"]}>
  //     {cartItemObj.map((item) => (
  //       <cartItems />
  //     ))}
  //   </ul>
  // );

  const dispatch = useDispatch();

  const closeBtnHandler = () => {
    dispatch(cartActions.hideCart());
  };

  return (
    <Modal>
      {/* {cartItems} */}
      <div className={classes.actions}>
        <button onClick={closeBtnHandler} className={classes.button}>
          Close
        </button>
        <button className={classes.submit}>Submit</button>
      </div>
    </Modal>
  );
}

export default Cart;
