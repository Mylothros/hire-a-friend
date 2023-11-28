import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Logo from 'components/LogoSvg.js';
import Button from 'components/Button.js';

import styles from '../styles/pages/signUpSuccess.module.scss';
import sign_up from "../public/assets/images/sign_up_success.png";

const SignUpSuccess = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
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

    if (isValidEmail(email)) {
      try {
        const response = await axios.post(process.env.NEXT_PUBLIC_APP_URL, { email });
        if (response.status === 200) {
          router.push('/signup-success');
        } 
        else {
          setError('Our API has a problem, please try again later!!!');
        }
      } catch (error) {
        setError('Our API has a problem, please try again later!!!');
      }
    } 
    else {
      setError('Email is invalid.');
    }
  };

  return (
      <div className={styles['container']}>
        <div className={styles['area-1']}>
          <Logo />
          <p className={styles['target-paragraph-1']}>
              <span>Your pre-registration is <br/> complete.<br/></span>
              <span>You will recieve a notification when the project<br/>starts<br/></span>
          </p>
          <Button slot4="Go to Homepage" />  
        </div>
        <div className={styles['image-area-2']}>
          <Image src={sign_up} className={styles['img']}  alt="Landing Image" />
        </div>
      </div>
  );
};

export default SignUpSuccess;