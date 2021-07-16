import React from "react";
import { graphql } from "gatsby";
import Page from "../templates/page";
import Metadata from "../components/metadata";
import * as styles from "../styles/page.module.scss"

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
      }
      timeToRead
      html
    }
  }
`;

const JournalEntries = (props) => {
  return (
    <Page>
      <Metadata
        title={props.data.markdownRemark.frontmatter.title}
        description={props.data.markdownRemark.frontmatter.description}
      />
      <h1 className={styles.postTitle}>{props.data.markdownRemark.frontmatter.title}</h1>
      <p className={styles.postDate}>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
      <div>
        
      </div>
    </Page>
  );
};

export default JournalEntries;
