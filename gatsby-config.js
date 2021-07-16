module.exports = {
  siteMetadata: {
    siteUrl: "https://www.vitoracacio.com",
    title: "Vitor Acacio - SMEs Marketer Discovers Cryptocurrency",
    description:
      "I’m an international marketing professional building my own business and learning about blockchain & crypto.",
    author: "itsvitoracacio",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
  ],
};
