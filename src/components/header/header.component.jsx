import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";

export const Header = () => (
  <div className="header">
    <Link classname="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
    </div>
    <div className="options">
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);
