const path = require('path')
const REPO_ABSOLUTE_PATH = path.join(process.cwd(), '')

module.exports = {
  siteMetadata: {
    title: `Parth Doshi`,
    description: `My Website`,
    author: `Parth Doshi`,
    resume: `https://onedrive.live.com/embed?cid=5FFDC0A7660E0685&resid=5FFDC0A7660E0685%2151809&authkey=AK5Q5ppEccrGH2M&em=2`,
    email: `contact@parthdoshi.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        enabled: process.env.NODE_ENV !== "production",
        toolbar: true,
        plugins: [
          {
            resolve: "gatsby-tinacms-git",
            options: {
              pathToRepo: REPO_ABSOLUTE_PATH,
              pathToContent: '/',
              defaultCommitMessage: 'Edited with CMS',
              defaultCommitName: 'CMS',
              defaultCommitEmail: 'cms@parthdoshi.com',
              pushOnCommit: false,
            }
          },
          "gatsby-tinacms-remark"
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chef`,
        path: `${__dirname}/src/content/chef`
      }
    },
    `gatsby-plugin-sass`,
    'gatsby-background-image',
    `gatsby-plugin-styled-components`,
  ],
}