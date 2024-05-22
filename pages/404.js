import { useEffect } from "react";
import Button from "components/Button.js";
import Layout from "components/Layout";

import styles from "styles/pages/404.module.scss";

export default function Custom404() {
  useEffect(() => {
    const originalBackground = document.body.style.background;
    document.body.style.background = `
      url('https://d3pc0hdqierc2c.cloudfront.net/assets/images/noise.webp'),
      -webkit-linear-gradient(45deg, #be345481, #ffff003b, #be34547c, #be3454c2, #BE3455),
      linear-gradient(45deg, #ffff0027 25%, #be34547c, #be3454c2, #BE3455)
    `;

    return () => {
      document.body.style.background = originalBackground;
    };
  }, []);

  return (
    <Layout
      crawl={false}
      title="Wrong path url"
      description="This path does not exist"
      ogTitle="Wrong path url"
      ogDescription="This path does not exist"
    >
    <div className={styles["container"]}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
            <Button slot4="Home"/>
    </div>
    </Layout>
  );
}