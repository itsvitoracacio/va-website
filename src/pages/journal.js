import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Page from "../templates/page";
import Metadata from "../components/metadata";
import * as styles from "../styles/page.module.scss"

const JournalPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                date(formatString: "DD MMM YYYY")
                title
              }
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  return (
    <Page>
      <Metadata
        title="Journal"
        description="List of all journal entries from Vitor Acacio"
      />
      <h1 className={styles.pageTitle}>All Journal Entries</h1>
      <p>These are some thoughts on what I'm working on, the challenges I'm facing, and how I'm getting past them. Might help you if you're doing something similar.</p>
      <ul className={styles.postsList}>
        {data.allMarkdownRemark.edges.map((edge) => (
          <li key={edge.node.id}>
            <span className={styles.postsListDate}>{edge.node.frontmatter.date}</span> »{" "}
            <Link to={`/journal/${edge.node.fields.slug}/`}>
              {edge.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  );
};

export default JournalPage;
