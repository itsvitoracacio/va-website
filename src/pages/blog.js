import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Page from "../templates/page";
import Metadata from "../components/metadata";
import * as styles from "../styles/page.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                date(formatString: "DD MMM YYYY")
                title
                permalink
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
        title="Blog"
        description="List of all blog posts from www.vitoracacio.com"
      />
      <h1 className={styles.pageTitle}>Blog Posts</h1>
      <ul className={styles.postsList}>
        {data.allMarkdownRemark.edges.map((edge) => (
          <li key={edge.node.id}>
            <span className={styles.postsListDate}>{edge.node.frontmatter.date}</span> »{" "}
            <Link to={`/blog/${edge.node.fields.slug}/`}>
              {edge.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  );
};

export default BlogPage;
