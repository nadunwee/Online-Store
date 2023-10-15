import { Fragment } from "react";

import classes from "./ProductItem.module.css";

function ProductItem(props) {
  const price = `$ ${props.price.toFixed(2)}`;

  return (
    <Fragment>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </li>
      <button className={classes.button}>+ Add</button>
    </Fragment>
  );
}

export default ProductItem;
