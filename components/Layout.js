import Head from "next/head";
import { useEffect, useState } from "react";

const Layout = ({ children, title, description, ogTitle, ogDescription }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  const metadataJson = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "description": "Find trusted companions for various activities, events, or simply for friendship on Hire a Friend. Browse through a diverse selection of people and make meaningful connections today.",
    "url": "https://www.hireafriend.co",
    "mainEntityOfPage": "https://www.hireafriend.co",
    "publisher": {
      "@type": "Organization",
      "name": "Hire a Friend",
      "logo": "https://www.hireafriend.co/logo192.png",
      "sameAs": [
        "https://www.linkedin.com/company/hirefriend/",
        "https://www.instagram.com/hirea.friend/"
      ]
    },
    "name": "Hire a Friend - Your Source for Finding Trusted Companions",
    "keywords": ["hire a friend", "companionship", "friendship", "activities", "social", "networking", "hireafriend", "Hire a Friend"]
  }
  return (
    <div className={`fade-in ${fadeIn ? "fade-in-entered" : ""}`}>
      <Head>
        <title>{title || "Hire a Friend: Your Source for Finding Trusted Companions"}</title>
        <meta
          name="description"
          content={description || "Hire a Friend is your trusted platform to find companions for various activities, events, or simply for friendship. Browse through a diverse selection of people and make meaningful connections today."}
        />
        <meta name="keywords" content="hire a friend, companionship, friendship, activities, social, networking, hireafriend, Hire A friend, Hire a friend" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="http://www.hireafriend.co" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hire a Friend: Your Source for Finding Trusted Companions" />
        <meta property="og:description" content="Hire a Friend is your trusted platform to find companions for various activities, events, or simply for friendship. Browse through a diverse selection of people and make meaningful connections today." />
        <meta
          property="og:image"
          content={"https://d3pc0hdqierc2c.cloudfront.net/assets/images/grid_1_imessage.jpg"}
        />
        <meta property="og:url" content="http://www.hireafriend.co" />
        <meta name="twitter:card" content="https://d3pc0hdqierc2c.cloudfront.net/assets/images/grid_1_imessage.jpg" />
        <link rel="icon" sizes="315x315" href="https://d3pc0hdqierc2c.cloudfront.net/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" sizes="315x315" href="https://d3pc0hdqierc2c.cloudfront.net/favicon.ico" type="image/x-icon" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(metadataJson) }}>
        </script>
        {/* <meta property="og:image" content="http://test-bucket-hire.s3-website-us-east-1.amazonaws.com/assets/images/grid_1_imessage.jpg" /> */}
      </Head>
      {children}
    </div>
  );
};
export default Layout;