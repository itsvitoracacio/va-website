import * as React from "react";
import { Link } from "gatsby";
import * as footerStyles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <section className={footerStyles.mainFooter}></section>
      <section class={footerStyles.copyrightArea}>
        <p>
          made with my 👋 in Belo Horizonte
          <br /> this website <Link to="/privacy">only collects data</Link> you
          actively submit
        </p>
      </section>
    </footer>
  );
};

export default Footer;
