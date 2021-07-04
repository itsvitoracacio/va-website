import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Page from "../templates/page";

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
      <h1>Blog Posts</h1>
      <ul>
        {data.allMarkdownRemark.edges.map((edge) => (
          <li key={edge.node.id}>
            <span>{edge.node.frontmatter.date}</span> »{" "}
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
