import { Fragment } from "react";
import { useDispatch } from "react-redux";

import classes from "./ProductItem.module.css";
import { cartActions } from "../Store/cart-slice";

function ProductItem(props) {
  const dispatch = useDispatch();

  const { id, name, description } = props;

  const price = `$ ${props.price.toFixed(2)}`;

  const addItemHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        description,
        price: props.price,
      })
    );
  };

  return (
    <Fragment>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </li>
      <button className={classes.button} onClick={addItemHandler}>
        + Add
      </button>
    </Fragment>
  );
}

export default ProductItem;
