import { useDispatch, useSelector } from "react-redux";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { uiActions } from "../Store/ui-slice";
import Notification from "../UI/Notification";

function Cart(props) {
  const notification = useSelector((state) => state.ui.notification);

  let total = 0;
  const itemsInCart = useSelector((state) => state.cart.cartItems);
  itemsInCart.forEach((item) => {
    total += item.totalPrice;
  });

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {itemsInCart.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.quantity}
          total={item.totalPrice}
        />
      ))}
    </ul>
  );

  const dispatch = useDispatch();

  const closeBtnHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <Modal>
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{total}</span>
      </div>
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
