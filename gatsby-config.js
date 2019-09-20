module.exports = {
  siteMetadata: {
    title: `Parth Doshi`,
    description: `My Website`,
    author: `Parth Doshi`,
    resume: `https://doagga.bn.files.1drv.com/y4mjdSQPZ7X0REWp3IMwSdSU8FP9Y2GnUdC30wAwL3z0s3-PpCt3iGzAjcAsYj5vhmxB0wwlZhoCTHKUp6PYKdP0ew1aC5ZRmmYJD-7qbTtK5Z5kz6if7NZtiU7Xt1GlfwRw-TbYyMIo2lMCi4T-6w_pn8IomEa9oojNlV5RNfVY6_-ENiGkfiLNoDgK0NBteCv/Parth%20Doshi%20Resume.pdf`,
    email: `contact@parthdoshi.com`
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
  ],
}
