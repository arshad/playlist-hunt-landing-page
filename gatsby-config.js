require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: "PlaylistHunt",
    description:
      "Learn how to build PlaylistHunt, a fullstack JAMstack application using Gatsby and other modern tools.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
    eggheadUrl:
      "https://egghead.io/playlists/build-a-full-stack-jamstack-application-with-gatsby-c6f8?af=6xn1w",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    "@reflexjs/gatsby-theme-post",
    {
      resolve: "@reflexjs/gatsby-plugin-metatags",
      options: {
        types: [`Page`, `Post`],
      },
    },
  ],
};
