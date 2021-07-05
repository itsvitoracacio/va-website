import * as React from "react";
import { Link } from "gatsby";
import Page from "../templates/page";
import Metadata from "../components/metadata";

const AuditRequested = () => {
  return (
    <Page>
      <Metadata
        title="Audit Request Received"
        description="You free audit request has been received and Vitor will get back to you as soon as possible."
      />
      <h1>You free audit request has been received!</h1>
      <p>Hey, I've just received your free website audit request. I'll review it and get back to you as soon as I can.</p>
      <p>In the meantime, how about checking out <Link to="/blog">the latest blog posts</Link>? You'll certainly find something that can help your business there.</p>
      <p>Chat soon.</p>
      <p>- Vitor</p>
    </Page>
  );
};

export default AuditRequested;