import classes from "./ProductsList.module.css";

function ProductsList(props) {
  const price = `$ ${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <button className={classes.button}>+ Add</button>
      </div>
    </li>
  );
}

export default ProductsList;
