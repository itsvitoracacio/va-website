module.exports = {
  siteMetadata: {
    siteUrl: "https://www.vitoracacio.com",
    title: "Vitor Acacio - Digital Strategist, Digital Business Consultant",
    description:
      "I'm an international digital strategist building my own business and documenting it.",
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
