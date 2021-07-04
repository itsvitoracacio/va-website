import React from "react";
import { graphql } from "gatsby";
import Page from "../templates/page";

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      timeToRead
      html
    }
  }
`;

const BlogPost = (props) => {
  return (
    <Page>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <span>{props.data.markdownRemark.frontmatter.date}</span>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Page>
  );
};

export default BlogPost;
