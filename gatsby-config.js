const siteMetadata = require("./site-metadata.json");

module.exports = {
  pathPrefix: "/",
  siteMetadata: siteMetadata,
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-source-data",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {},
    },
    {
      resolve: "gatsby-remark-page-creator",
      options: {},
    },
    {
      resolve: "@stackbit/gatsby-plugin-menus",
      options: {
        sourceUrlPath: "fields.url",
        pageContextProperty: "menus",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Rakibul Hasan - Full-stack JavaScript Developer",
        short_name: "Rakibul Hasan",
        start_url: "/",
        background_color: "#2e3440",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "static/images/logo.png",
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/about/", "/contact/", "/thank-you/", "/blog/", "/posts/*", "/"],
        workboxConfig: {
          globPatterns: ["**/icon*"],
        },
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: ">",
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: "raikusy",
                host: "dev",
                global: false,
              },
              escapeEntities: {},
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1080,
            },
          },
        ],
      },
    },
  ],
};
