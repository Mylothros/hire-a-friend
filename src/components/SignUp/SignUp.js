import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../styles/SignUp/signUp.scss';
import sign_up from "../../assets/sign_up.png";

const Article = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate('/');
  };

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
      const response = await axios.post(process.env.REACT_APP_URL, { email });
      if(response.status === 200) {
        navigate('/signup-success');
      } 
      else {
        setError('Our api has problem please try again in a short time!!!');
      }   
    } else {
      setError('Email is invalid');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="sign-up-area-1">
        <div className="sign-up-grid-item">
            <div className="sign-up-top-left-box" onClick={handleHomePage}>hire @ friend</div>
            <div className="sign-up-highlighted-word-grid-1">Be one of the first users !</div>
            <p>Pre-registration is open</p>
            <p style={{ fontSize: '15px' }}>Email*</p>
            <input
              placeholder="youremail@com"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {error && <h3 style={{color: 'red'}}>{error}</h3>}
            <div className="sign-up-grid-1-button">
                <button className="sign-up-arrow-button">Sign up</button>
            </div>
        </div>
        <div className="sign-up-grid-item-image">
            <img src={sign_up} alt="Landing Image" />
        </div>
      </div>
    </form>
  );
};

export default Article;