import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE_DATA } from "../../constants/siteData";

const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogType,
  canonicalUrl,
}) => {
  const seoSettings = SITE_DATA.seo;

  const seoTitle = title
    ? seoSettings.titleTemplate.replace("%s", title)
    : seoSettings.defaultTitle;

  const seoDescription = description || seoSettings.defaultDescription;
  const seoKeywords = keywords || seoSettings.defaultKeywords;
  const seoOgImage = ogImage || seoSettings.ogImage;
  const seoOgType = ogType || "website";
  const seoCanonical = canonicalUrl || seoSettings.siteUrl;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={seoSettings.author} />
      <link rel="canonical" href={seoCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seoOgType} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoOgImage} />
      <meta property="og:url" content={seoCanonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoOgImage} />
      {seoSettings.twitterHandle && (
        <meta name="twitter:site" content={seoSettings.twitterHandle} />
      )}
    </Helmet>
  );
};

export default SEO;
