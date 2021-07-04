import * as React from "react";
import Layout from "../components/layout";
import { content, sectionInner } from "../components/page.module.scss";

const Page = ({ children }) => {
  return (
    <Layout>
      <section className={content}>
        <div className={sectionInner}>{children}</div>
      </section>
    </Layout>
  );
};

export default Page;
