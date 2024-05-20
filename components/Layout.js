import Head from "next/head";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const Layout = ({
  children,
  crawl,
  title,
  description,
  ogTitle,
  ogDescription,
  ogUrl,
  canonical,
}) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  const metadataJson = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    description:
      "Find trusted companions for various activities, events, or simply for friendship on Hire a Friend. Browse through a diverse selection of people and make meaningful connections today.",
    url: { ogUrl },
    mainEntityOfPage: { ogUrl },
    publisher: {
      "@type": "Organization",
      name: "Hire a Friend",
      logo: "https://www.hireafriend.co/logo192.png",
      sameAs: [
        "https://www.linkedin.com/company/hirefriend/",
        "https://www.instagram.com/hirea.friend/",
      ],
    },
    name: "Hire a Friend - Your Source for Finding Trusted Companions",
    keywords: [
      "hire a friend",
      "companionship",
      "friendship",
      "activities",
      "social",
      "networking",
      "hireafriend",
      "Hire a Friend",
    ],
  };
  return (
    <div className={`fade-in ${fadeIn ? "fade-in-entered" : ""}`}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta
          property="og:image"
          content={
            "https://d3pc0hdqierc2c.cloudfront.net/assets/images/grid_1_imessage.jpg"
          }
        />
        <meta
          name="twitter:card"
          content="https://d3pc0hdqierc2c.cloudfront.net/assets/images/grid_1_imessage.jpg"
        />
        <link
          rel="icon"
          sizes="315x315"
          href="https://d3pc0hdqierc2c.cloudfront.net/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="shortcut icon"
          sizes="315x315"
          href="https://d3pc0hdqierc2c.cloudfront.net/favicon.ico"
          type="image/x-icon"
        />
        {crawl === true ? (
          <>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
            <meta
              name="keywords"
              content="hire a friend, companionship, friendship, activities, social, networking, hireafriend, Hire A friend, Hire a friend"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta property="og:url" content={ogUrl} />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(metadataJson) }}
            ></script>
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </div>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  crawl: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ogTitle: PropTypes.string.isRequired,
  ogDescription: PropTypes.string.isRequired,
  ogUrl: PropTypes.string,
  canonical: PropTypes.string,
};