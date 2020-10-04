/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:"World Wide Project",
    description: "This is the description of our website",
    keywords: "gatsby, project, digital works",
    image: '/static/images/barcelona.jpg',
    url: 'https://www.gatsbyjs.org'

  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-source-wordpress`, options: {
        baseUrl: `practice.codingsrc.com`,
        protocol: `http`,
        hostingWPCOM: false,
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}


