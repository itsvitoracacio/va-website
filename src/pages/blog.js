import * as React from "react";
import { graphql } from "gatsby";
import Page from "../components/page";
import { sectionInner, aboveTheFold } from "../components/page.module.css";

const BlogPage = ({ data }) => {
  return (
    <Page>
      <section className={aboveTheFold}>
        <div className={sectionInner}>
          <h1>Blog Posts</h1>
          <ul>
            {data.allFile.nodes.map((node) => (
              <li key={(node.name, node.birthTime)}>
                {node.birthTime} » {node.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Page>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
        birthTime(formatString: "DD MMM YYYY")
      }
    }
  }
`;

export default BlogPage;
