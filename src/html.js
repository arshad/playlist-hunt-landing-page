import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>
          Fullstack Gatsby | Learn how to build a fullstack application on
          Egghead
        </title>
        <meta
          name="title"
          content="Fullstack Gatsby | Learn how to build a fullstack application on Egghead"
        />
        <meta
          name="description"
          content="Learn how to build PlaylistHunt, a fully-featured JAMstack application using Gatsby and other modern tools. Hosted by Egghead.io."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://learn.playlisthunt.dev/" />
        <meta
          property="og:title"
          content="Fullstack Gatsby | Learn to build a fullstack application on Egghead"
        />
        <meta
          property="og:description"
          content="Learn how to build PlaylistHunt, a fullstack JAMstack application using Gatsby and other modern tools. Hosted by Egghead.io."
        />
        <meta
          property="og:image"
          content="https://learn.playlisthunt.dev/og-image.jpg?v=20201112"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://learn.playlisthunt.dev/"
        />
        <meta
          property="twitter:title"
          content="Fullstack Gatsby | Learn to build a fullstack application on Egghead"
        />
        <meta
          property="twitter:description"
          content="Learn how to build PlaylistHunt, a fullstack JAMstack application using Gatsby and other modern tools. Hosted by Egghead.io."
        />
        <meta
          property="twitter:image"
          content="https://learn.playlisthunt.dev/og-image.jpg?v=20201112"
        />
        <meta
          name="twitter:image:src"
          content="https://learn.playlisthunt.dev/og-image.jpg?v=20201112"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
