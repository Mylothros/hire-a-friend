import Head from "next/head";
import grid_2_image from "public/assets/images/grid_1.png";
import { useEffect, useState } from "react";

const Layout = ({ children, title, description, ogTitle, ogDescription }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);
  return (
    <div className={`fade-in ${fadeIn ? "fade-in-entered" : ""}`}>
      <Head>
        <title>{title || "Hire A Friend"}</title>
        <meta
          name="description"
          content={description || "A page to make new friends"}
          key="desc"
        />
        <meta property="og:title" content={ogTitle || "Hire A Friend"} />
        <meta
          property="og:description"
          content={ogDescription || "An easy way to connect"}
        />
        <meta
          property="og:image"
          content={"https://d3pc0hdqierc2c.cloudfront.net/assets/images/grid_1.png"
          }
        />
        {/* <meta property="og:image" content="http://test-bucket-hire.s3-website-us-east-1.amazonaws.com/assets/images/grid_1.png" /> */}
      </Head>
      {children}
    </div>
  );
};
export default Layout;