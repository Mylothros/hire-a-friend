import React, { useState, useEffect } from "react";
import Image from "next/image";

import Logo from "components/LogoSvg.js";
import Button from "components/Button.js";
import Layout from "components/Layout";

import styles from "../styles/pages/signUpSuccess.module.scss";
import sign_up from "../public/assets/images/sign_up_success.png";

const SignUpSuccess = () => {
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    const originalBackground = document.body.style.background;
    document.body.style.background = `
      url('https://d3pc0hdqierc2c.cloudfront.net/assets/images/noise.png'),
      -webkit-linear-gradient(45deg, #be345481, #ffff003b, #be34547c, #be3454c2, #BE3455),
      linear-gradient(45deg, #ffff0027 25%, #be34547c, #be3454c2, #BE3455)
    `;

    return () => {
      document.body.style.background = originalBackground;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <Layout
      title="Signed up"
      description="You will recieve a notification when the project
      starts."
      ogTitle="Signing up was successful"
      ogDescription="You will recieve a notification when the project
      starts."
    >
      <div className={styles["container"]}>
        <div className={styles["area-1"]}>
          <Logo />
          <p className={styles["target-paragraph-1"]}>
            <span>
              Your pre-
              {windowWidth <= 800 ? (
                <>
                  <br />
                </>
              ) : null}
              registration is <br /> complete.
              <br />
            </span>
            <span>
              You will recieve a notification when{" "}
              {windowWidth <= 800 ? (
                <>
                  <br />
                </>
              ) : null}
              the project
              {windowWidth <= 800 ? null : (
                <>
                  <br />
                </>
              )}{" "}
              starts.
              <br />
            </span>
          </p>
          {windowWidth > 1280 ? <Button slot4="Go to Homepage" /> : null}
        </div>
        <div className={styles["image-area-2"]}>
          <Image src={sign_up} className={styles["img"]} alt="Landing Image" />
        </div>
        {windowWidth <= 1280 ? <Button slot4="Go to Homepage" /> : null}
      </div>
    </Layout>
  );
};
export default SignUpSuccess;