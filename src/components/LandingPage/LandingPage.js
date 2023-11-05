import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/LandingPage/landingPage.scss';
import grid_1_image from "../../assets/grid_1.png";
import grid_2_image from "../../assets/grid_2.png";
import product_1 from "../../assets/product_1.png";
import product_2 from "../../assets/product_2.png";
import product_3 from "../../assets/product_3.png";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate('/signup');
    };
    
    const handleHomePage = () => {
        navigate('/');
    };

    return (
        <div className="landing-page">
            <div className="section area-1">
                <div className="grid-item">
                    <div className="top-left-box" onClick={handleHomePage}>hire @ friend</div>
                    <h2>Where friendship MEETS <div className="highlighted-word-grid-1">&nbsp;OPPORTUNITY</div></h2>
                    <p>Join as <div className="highlighted-word">a professional or as client</div>. Earn money, find new connections and experience. </p>
                    <div className="grid-1-button">
                        <button className="arrow-button" onClick={handleSignupClick}>Sign up for free</button>
                    </div>
                </div>
                <div className="grid-item-image">
                    <img src={grid_1_image} alt="Landing Image" />
                </div>
            </div>

            <div className="section area-2">
                <div className="grid-item">
                    <ul>
                        <h2>What is<div className="highlighted-word-grid-2">Hire a friend?</div></h2>
                        <li>
                            Platform  for buying or selling services. From private piano lessons to hang-out buddy.
                        </li>
                        <li>
                            Possibility to use your skills and make money doing what you love</li>
                        <li>
                            Possibility to hire professional and get services of different categories
                        </li>
                        <li>
                            Platform  for  learning and experiencing new things with a trustworthy professionals
                        </li>
                    </ul>
                </div>
                <div className="grid-item-image">
                    <img src={grid_2_image} alt="Landing Image" />
                </div>
            </div>
            
            <div className="section area-3">
                <h2>How do you get &nbsp;<div className="highlighted-word-grid-3">started with us.</div></h2>
                <h3>You can create account for yourself just in 3 simple steps</h3>
                <div className="image-container">
                    <div className="image-container--image">
                        <img src={product_1} alt="Product 1" />
                            <p> 
                                <div className="highlighted-word-grid-3-step">Step 1 </div>
                                <div className="highlighted-word-grid-3-1">Sign-up</div>
                                <div className="highlighted-word-grid-3-2">*as a client or professional</div>
                            </p>
                    </div>
                    <div className="image-container--image">
                        <img src={product_2} alt="Product 2" />
                        <p> 
                            <div className="highlighted-word-grid-3-step">Step 2 </div>
                            <div className="highlighted-word-grid-3-3">Find your</div> 
                            <div className="highlighted-word-grid-3-1">perfect </div>
                            <div className="highlighted-word-grid-3-3">friend</div> 
                            <div className="highlighted-word-grid-3-2">*buy or sell services</div>
                        </p>
                    </div>
                    <div className="image-container--image">
                        <img src={product_3} alt="Product 3" />
                        <p>
                            <div className="highlighted-word-grid-3-step">Step 3 </div>
                            <div className="highlighted-word-grid-3-3">Have a </div>
                            <div className="highlighted-word-grid-3-1">Blast! </div>
                            <div className="highlighted-word-grid-3-2">*start communicating and <br />enjoy your new connection</div>
                        </p>
                    </div>
                </div>
                <button className="arrow-button" onClick={handleSignupClick}>Sign Up</button>
            </div>
            <div className="section area-4">
                <div className="test">
                    <p>Connect with us</p>
                    <div className="icons">
                        <a href="" className="fa fa-instagram" target="_blank"></a>&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/hire-afriend-b5088a293/" className="fa fa-linkedin" target="_blank"></a>    
                    </div> 
                    <p><a href="mailto:hireafriend@gmail.com">hireafriend@gmail.com</a></p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;