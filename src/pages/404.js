import React from "react";
import Page from "../templates/page";
import { Link } from "gatsby";
import Metadata from "../components/metadata";

const NotFoundPage = () => {
  return (
    <Page>
      <Metadata
        title="404 Page"
        description="404 Error: page not found."
      />
      <h1>404: Page Not Found</h1>
      <p>
        Well, this url doesn't link to an existing page...
        <br />
        But so you don't miss the trip,{" "}
        <Link to="/journal">check out what I've been up to.</Link>
      </p>
    </Page>
  );
};

export default NotFoundPage;
