import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Logo from 'components/LogoSvg.js';
import Button from 'components/Button.js';
import Layout from 'components/Layout';

import styles from '../styles/pages/signUp.module.scss';
import sign_up from "../public/assets/images/sign_up.png";

const signup = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [dataSubmited, setDataSubmited] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const originalBackground = document.body.style.background;
  
    document.body.style.background = `
      -webkit-linear-gradient(45deg, #be345481, #ffff003b, #be34547c, #be3454c2, #BE3455),
      linear-gradient(45deg, #ffff0027 25%, #be34547c, #be3454c2, #BE3455)
    `;
  
    return () => {
      document.body.style.background = originalBackground;
    };
  }, []);
  
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    if (isValidEmail(email) && !isSubmitting) {
      setIsSubmitting(true);
      setDataSubmited(true);
      try {
        const response = await axios.post(process.env.NEXT_PUBLIC_APP_URL, { email });
        if (response.status === 200) {
          router.push('/SignUpSuccess/index.html');
        } 
        else {
          setDataSubmited(false);
          setIsSubmitting(false);
          setError('Our API has a problem, please try again later!!!');
        }
      } catch (error) {
        setDataSubmited(false);
        setIsSubmitting(false);
        setError('Our API has a problem, please try again later!!!');
      }
    } 
    else {
      setError('Email is invalid.');
    }
  };

  return (
    <Layout 
      title="Custom Title"
      description="Custom Description"
      ogTitle="Custom OG Title"
      ogDescription="Custom OG Description">
      <form onSubmit={handleSubmit}>
        <div className={styles['container']}>
          <div className={styles['area-1']}>
            <Logo />
            <p className={styles['target-paragraph-1']}>
                <span>Be one of the first users ! <br/></span>
                <span>Pre-registration is open <br/></span>
            </p>
            <p className={styles['target-paragraph-2']}>
            <span>Email* <br/></span>
                <span>
                  <input
                    placeholder="youremail@com"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                  {error && <h3 style={{ color: 'red', fontSize: '20px'}}>{error}</h3>}
                </span> 
            </p>
            <Button slot3="Sign up" dataSubmited={dataSubmited} />  
          </div>
          <div className={styles['image-area-2']}>
            <Image src={sign_up} className={styles['img']}  alt="Landing Image" />
          </div>
        </div>
    </form>
  </Layout>
  );
};

export default signup;