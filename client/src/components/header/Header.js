import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes["header"]}>
      <Link to="/" className={classes["logo"]}>
        <i className="fa fa-users" aria-hidden="true"></i> Contacts
      </Link>
    </div>
  );
};

export default Header;
