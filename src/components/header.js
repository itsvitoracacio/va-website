import * as React from "react";
import { Link } from "gatsby";
import * as headerStyles from "../styles/header.module.scss";
import NavbarContent from "./navbar";
import HeaderIcons from "./header-icons";

const Header = () => {
  return (
    <header>
      <div className={headerStyles.headerInner}>
        <div className={headerStyles.headerLogo}>
          <Link to="/" className={headerStyles.link}>
            <strong>Vitor</strong> Acacio
          </Link>
        </div>
        <nav className={headerStyles.desktopNav}>
          <NavbarContent />
        </nav>
        <div className={headerStyles.desktopHeaderIcons}>
          <HeaderIcons />
        </div>
        <input
          type="checkbox"
          name="nav-trigger"
          id="nav-trigger"
          className={headerStyles.navTrigger}
        />
        <label htmlFor="nav-trigger" className={headerStyles.mobileMenuToggle}>
          <svg
            className={headerStyles.menuIcon}
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <rect
              className={headerStyles.line1}
              x="3"
              y="6"
              width="18"
              height="2"
              rx=".94"
              ry=".94"
            />
            <rect
              className={headerStyles.line2}
              x="3"
              y="11"
              width="18"
              height="2"
              rx=".94"
              ry=".94"
            />
            <rect
              className={headerStyles.line3}
              x="7"
              y="16"
              width="14"
              height="2"
              rx=".94"
              ry=".94"
            />
          </svg>
          <span className={headerStyles.menuLines}>menu</span>
          <span className={headerStyles.menuX}>close</span>
        </label>
        <aside className={headerStyles.mobileMenu}>
          <nav className={headerStyles.mobileNav}>
            <NavbarContent />
          </nav>
          <div className={headerStyles.mobileHeaderIcons}>
          <HeaderIcons />
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
