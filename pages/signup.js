import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

import Logo from "components/LogoSvg.js";
import Button from "components/Button.js";
import Layout from "components/Layout";

import styles from "../styles/pages/signUp.module.scss";
import sign_up from "../public/assets/images/sign_up.webp";
import sign_up_phone from "public/assets/images/sign_up_phone.webp";
const signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [dataSubmited, setDataSubmited] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [windowWidth, setWindowWidth] = useState();

  const router = useRouter();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    const originalBackground = document.body.style.background;

    document.body.style.background = `
      url('https://d3pc0hdqierc2c.cloudfront.net/assets/images/noise.webp'),
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
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    if (isValidEmail(email) && !isSubmitting) {
      setIsSubmitting(true);
      setDataSubmited(true);
      try {
        const response = await axios.post(process.env.NEXT_PUBLIC_APP_URL, {
          email,
        });
        if (response.status === 200) {
          router.push("/SignUpSuccess/index.html");
        } else {
          setDataSubmited(false);
          setIsSubmitting(false);
          setError("Our API has a problem, please try again later!!!");
        }
      } catch (error) {
        setDataSubmited(false);
        setIsSubmitting(false);
        setError("Our API has a problem, please try again later!!!");
      }
    } else {
      setError("Email is invalid.");
    }
  };

  return (
    <Layout
      title="Sign Up"
      description="Sign Up in Hire A Friend"
      ogTitle="Sign Up"
      ogDescription="Sign Up in Hire A Friend"
    >
      <form onSubmit={handleSubmit}>
        <div className={styles["container"]}>
          <div className={styles["area-1"]}>
            <Logo />
            <p className={styles["target-paragraph-1"]}>
              <span>
                Be one of the first users ! <br />
              </span>
              <span>
                Pre-registration is open <br />
              </span>
            </p>
            <p className={styles["target-paragraph-2"]}>
              <span>
                Email* <br />
              </span>
              <span>
                <input
                  placeholder="youremail@com"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
                {error && (
                  <h3
                    style={{
                      color: "red",
                      fontSize: windowWidth <= 800 ? "16px" : "20px",
                    }}
                  >
                    {error}
                  </h3>
                )}
              </span>
            </p>
            <div>
              <Button slot3="Sign up" dataSubmited={dataSubmited} />
            </div>
          </div>
          <div className={styles["image-area-2"]}>
            <Image
              src={windowWidth > 800 ? sign_up : sign_up_phone}
              className={styles["img"]}
              alt="Landing Image"
            />
          </div>
        </div>
      </form>
    </Layout>
  );
};
export default signup;