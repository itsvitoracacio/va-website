import React from "react";
import Page from "../templates/page";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <Page>
      <h1>404: Page Not Found</h1>
      <p>Well, this url doesn't link to an existing page...<br />
        But so you don't miss the trip,{" "}
        <Link to="/blog">check my latest articles</Link>
      </p>
    </Page>
  );
};

export default NotFoundPage;
