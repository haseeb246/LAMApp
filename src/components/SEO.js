import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
// import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        author
        description
        fbAppId
        image
        keywords
        siteUrl
        title
        titleTemplate
        twitterUsername
      }
    }
  }
`;

const SEO = ({
  customDescription,
  customKeywords,
  customTitle,
  noIndex,
  path
}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          description,
          image,
          keywords,
          fbAppId,
          siteUrl,
          title,
          titleTemplate,
          twitterUsername
        }
      }
    }) => {
      const seo = {
        description: customDescription || description,
        keywords: customKeywords || keywords,
        image: `${siteUrl}${image}`,
        title: customTitle || title,
        url: `${siteUrl}/${path || ``}`
      };

      return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
          {noIndex && <meta name="robots" content="noindex" />}

          <html lang="en" />

          {seo.url && <meta property="og:url" content={seo.url} />}

          <meta property="og:type" content="website" />

          {seo.title && <meta property="og:title" content={seo.title} />}
          {seo.title && <meta name="twitter:title" content={seo.title} />}

          <meta name="description" content={seo.description} />
          <meta property="og:description" content={seo.description} />
          <meta name="twitter:description" content={seo.description} />

          {fbAppId && <meta property="fb:app_id" content={fbAppId} />}

          <meta name="image" content={seo.image} />
          {seo.image && <meta property="og:image" content={seo.image} />}
          <meta name="twitter:card" content="summary_large_image" />
          {seo.image && <meta name="twitter:image" content={seo.image} />}

          {seo.keywords && <meta name="keywords" content={seo.keywords} />}

          {twitterUsername && (
            <meta name="twitter:creator" content={twitterUsername} />
          )}
        </Helmet>
      );
    }}
  />
);

SEO.defaultProps = {
  customDescription: null,
  customKeywords: null,
  customTitle: null,
  noIndex: false,
  path: null
};

SEO.propTypes = {
  customDescription: PropTypes.string,
  customKeywords: PropTypes.string,
  customTitle: PropTypes.string,
  noIndex: PropTypes.bool,
  path: PropTypes.string
};

export default SEO;
