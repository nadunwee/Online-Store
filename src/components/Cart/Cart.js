import { useDispatch, useSelector } from "react-redux";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { cartActions } from "../Store/cart-slice";
import CartItem from "./CartItem";

function Cart(props) {
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
    dispatch(cartActions.hideCart());
  };

  return (
    <Modal>
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
