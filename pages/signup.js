import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from 'components/LogoSvg.js';

import styles from '../styles/pages/signUp.module.scss';
import sign_up from "../public/assets/images/sign_up.png";

const Article = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const router = useRouter();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (isValidEmail(email)) {
      try {
        const response = await axios.post(process.env.NEXT_PUBLIC_APP_URL, { email });
        if (response.status === 200) {
          router.push('/signup-success');
        } else {
          setError('Our API has a problem, please try again later!!!');
        }
      } catch (error) {
        setError('Our API has a problem, please try again later!!!');
      }
    } else {
      setError('Email is invalid');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className={styles['sign-up-area-1']}> {/* Use CSS Module classes */}
      <div className={styles['sign-up-grid-item']}>
      <Logo />
        <div className={styles['sign-up-highlighted-word-grid-1']}>
          Be one of the first users !
        </div>
        <p>Pre-registration is open</p>
        <p style={{ fontSize: '15px' }}>Email*</p>
        <input
          placeholder="youremail@com"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {error && <h3 style={{ color: 'red' }}>{error}</h3>}
        <div className={styles['sign-up-grid-1-button']}>
          <button className={styles['sign-up-arrow-button']}>Sign up</button>
        </div>
      </div>
      <div className={styles['sign-up-grid-item-image']}>
        <Image src={sign_up} alt="Landing Image" /> {/* Using Next.js Image component */}
      </div>
    </div>
  </form>
  );
};

export default Article;