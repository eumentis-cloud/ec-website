module.exports = {
  siteMetadata: {
    title: 'Eumentis Cloud',
    tagline:
        'Digital transformation, Business digitization and automation, Online presence, Startup development, App development, IT automation',
    siteUrl: 'https://eumentis.com',
    author: 'Eumentis',
    twitter: 'https://twitter.com/eumentis_cloud',
    adsense: '',
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `teamImages`,
        path: `${__dirname}/src/images/team`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pngAssets`,
        path: `${__dirname}/src/images/png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `clientImages`,
        path: `${__dirname}/src/images/clients`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/team/`,
        name: `teamData`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/clients/`,
        name: `clientData`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // color is optional.
        color: `#000`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eumentis Cloud`,
        short_name: `Eumentis Cloud`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFF00`,
        display: `standalone`,
        icon: `static/img/android-chrome-384x384.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgAssets/,
        }
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
