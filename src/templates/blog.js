import React from "react";
import _ from "lodash";
import dayjs from "dayjs";
import { graphql } from "gatsby";

import { Layout } from "../components/index";
import { getPages, Link, withPrefix } from "../utils";
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

export default class Blog extends React.Component {
  render() {
    let display_posts = _.orderBy(getPages(this.props.pageContext.pages, "/posts"), "frontmatter.date", "desc");
    return (
      <Layout {...this.props}>
        <header className="screen-reader-text">
          <h1>{_.get(this.props, "pageContext.frontmatter.title", null)}</h1>
        </header>
        <div className="post-feed">
          <div className="post-feed-inside">
            {_.map(display_posts, (post, post_idx) => (
              <article key={post_idx} className="post post-card">
                <div className="post-inside">
                  {_.get(post, "frontmatter.thumb_img_path", null) && (
                    <Link className="post-thumbnail" to={withPrefix(_.get(post, "url", null))}>
                      <img
                        src={withPrefix(_.get(post, "frontmatter.thumb_img_path", null))}
                        alt={_.get(post, "frontmatter.thumb_img_alt", null)}
                      />
                    </Link>
                  )}
                  <header className="post-header">
                    <h2 className="post-title">
                      <Link to={withPrefix(_.get(post, "url", null))} rel="bookmark">
                        {_.get(post, "frontmatter.title", null)}
                      </Link>
                    </h2>
                  </header>
                  {_.get(post, "frontmatter.excerpt", null) && (
                    <div className="post-content">
                      <p>{_.get(post, "frontmatter.excerpt", null)}</p>
                    </div>
                  )}
                  <footer className="post-meta">
                    <time className="published" dateTime={dayjs(_.get(post, "frontmatter.date", null)).format("LLL")}>
                      {dayjs(_.get(post, "frontmatter.date", null)).format("LLL")}
                    </time>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}
