import React from "react";
import { Helmet } from "react-helmet";
import { URL } from "../data/data";

const Seo = props => {
  return (
    <Helmet>
      <html data-theme={props.theme} data-react-helmet="true" />
      <title>{props.title}</title>
      <meta name="title" content={props.title} data-react-helmet="true" />
      <meta
        name="description"
        content={props.metaDescription}
        data-react-helmet="true"
      />
      <meta property="og:title" content={props.title} data-react-helmet="true" />
      <meta
        property="og:image"
        content={props.image.src}
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content={props.metaDescription}
        data-react-helmet="true"
      />
      <meta property="og:url" content={props.URL} data-react-helmet="true" />
    </Helmet>
  );
};

export default Seo;
