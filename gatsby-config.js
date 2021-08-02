module.exports = {
  siteMetadata: {
    siteUrl: "https://www.vitoracacio.com",
    title: "Vitor Acacio - Online Business Builder & Consultant",
    description:
      "I'm an international online business consultant building my own business and learning about blockchain & crypto.",
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
