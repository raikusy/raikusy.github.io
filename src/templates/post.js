import React from "react";
import _ from "lodash";
import dayjs from "dayjs";
import { graphql } from "gatsby";

import { Layout } from "../components/index";
import { htmlToReact, withPrefix } from "../utils";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: { eq: $url }) {
      id
    }
  }
`;

export default class Post extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <article className="post post-full">
          <header className="post-header inner-sm">
            <h1 className="underline post-title">{_.get(this.props, "pageContext.frontmatter.title", null)}</h1>
            {_.get(this.props, "pageContext.frontmatter.subtitle", null) && (
              <div className="post-subtitle">
                {htmlToReact(_.get(this.props, "pageContext.frontmatter.subtitle", null))}
              </div>
            )}
          </header>
          {_.get(this.props, "pageContext.frontmatter.content_img_path", null) && (
            <div className="post-image">
              <img
                src={withPrefix(_.get(this.props, "pageContext.frontmatter.content_img_path", null))}
                alt={_.get(this.props, "pageContext.frontmatter.content_img_alt", null)}
              />
            </div>
          )}
          <div className="post-content inner-sm">{htmlToReact(_.get(this.props, "pageContext.html", null))}</div>
          <footer className="post-meta inner-sm">
            <time
              className="published"
              dateTime={dayjs(_.get(this.props, "pageContext.frontmatter.date", null)).format("LLL")}
            >
              {dayjs(_.get(this.props, "pageContext.frontmatter.date", null)).format("LLL")}
            </time>
          </footer>
        </article>
      </Layout>
    );
  }
}
