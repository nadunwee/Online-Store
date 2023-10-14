import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Redux XXX</h1>
        <HeaderCartButton />
      </header>
    </Fragment>
  );
}

export default Header;
