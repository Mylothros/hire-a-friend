import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/SignUp/signUp.scss';
import sign_up_success from "../../assets/sign_up_success.png";

const Article = () => {

  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate('/');
  };

  return (
      <div className="sign-up-area-1">
        <div className="sign-up-grid-item">
            <div className="sign-up-top-left-box" onClick={handleHomePage}>hire @ friend</div>
            <div className="sign-up-highlighted-word-grid-1">
              Your pre-registration is complete.
            </div>
            <p>You will recieve a notification when the project starts.</p>
            <div className="sign-up-grid-1-button">
                <button className="sign-up-arrow-button" onClick={handleHomePage}>Go to Homepage</button>
            </div>
        </div>
        <div className="sign-up-grid-item-image">
            <img src={sign_up_success} alt="Landing Image" />
        </div>
      </div>
  );
};

export default Article;