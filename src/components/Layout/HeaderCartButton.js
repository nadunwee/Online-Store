import { Fragment } from "react";

import classes from "./HeaderCartButton.module.css";

function HeaderCartButton() {
  return (
    <Fragment>
      <button className={classes.button}>Cart</button>
    </Fragment>
  );
}

export default HeaderCartButton;
