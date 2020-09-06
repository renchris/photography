/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/photography",

  siteMetadata: {
    title: "Chris Ren",
    author: "Chris Ren",
  },

  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Photography`,
        short_name: `Photo`,
        start_url: `.`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: "src/logo/camera.svg",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        //how to properly store api keys
        //spaceId: process.env.CONTENTFUL_SPACE_ID,
        //accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: "2nrqdftp624b",
        accessToken: "RG5vEsipoBqj4INAw5bOekl9_IP7oa0_vvcS12QNxgg",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              //maxWidth: "750",
              quality: 100,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },

    //console.log("##########", process.env.CONTENTFUL_SPACE_ID),
    //console.log("##########", process.env.CONTENTFUL_ACCESS_TOKEN)
  ],
  /* Your site config here */
}
