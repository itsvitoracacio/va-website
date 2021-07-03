import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/layout.scss";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header />
      <main>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
