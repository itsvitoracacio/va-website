import * as React from "react";
import { Link } from "gatsby";
import * as headerStyles from "../styles/header.module.scss";

const navActive = {
  textDecoration: "underline",
};

const NavbarContent = () => {
  return (
    <ul>
      <li>
        <Link to="/about" className={headerStyles.link} activeStyle={navActive}>
          about
        </Link>
      </li>
      <li>
        <Link
          to="/journal"
          className={headerStyles.link}
          activeStyle={navActive}
          partiallyActive={true}
        >
          journal
        </Link>
      </li>
    </ul>
  );
};

export default NavbarContent;
