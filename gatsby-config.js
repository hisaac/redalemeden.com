const cssnext = require('postcss-cssnext')

module.exports = {
  siteMetadata: {
    title: 'Reda Lemeden',
    author: 'Reda Lemeden',
    siteUrl: 'https://redalemeden.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [cssnext()],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-abbr',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs'
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts/`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://redalemeden.com`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages/`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        icon: false,
      },
    },
  ]
};
