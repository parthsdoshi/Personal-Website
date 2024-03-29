const path = require('path')

module.exports = {
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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data`
    //   }
    // },
    // `gatsby-transformer-remark`,
    // `gatsby-transformer-json`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `chef`,
    //     path: `${__dirname}/src/content/chef`
    //   }
    // },
    `gatsby-plugin-sass`,
    'gatsby-background-image',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://parthdoshi-strapi.azurewebsites.net`,
        queryLimit: 1000,
        contentTypes: [`article`, `category`, `writer`, `work-experience`],
        singleTypes: [`global`, `home`, `blog`],
      },
    },
    `gatsby-transformer-video`,
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        extraDirsToCache: [
          "node_modules/.cache/gatsby-transformer-video/"
        ]
      }
    }
  ],
}