import { useState, useEffect } from 'react';
import Image from 'next/image'

import Logo from 'components/LogoSvg.js';
import Circle from 'components/CircleSvg.js';
import LinkedIn from 'components/LinkedInSvg.js';
import Instagram from 'components/InstagramSvg.js';
import Button from 'components/Button.js';
import Card from 'components/Card.js';

import styles from 'styles/pages/landingPage.module.scss';
import grid_1_image from "public/assets/images/grid_1.png";
import grid_1_tablet from "public/assets/images/grid_1_tablet.png";
import grid_1_phone from "public/assets/images/grid_1_phone.png";
import grid_2_image from "public/assets/images/grid_2.png";
import grid_2_tablet from "public/assets/images/grid_2_tablet.png";
import grid_2_phone from "public/assets/images/grid_2_phone.png";

import Layout from 'components/Layout';

const LandingPage = () => {
    const [windowWidth, setWindowWidth] = useState();
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
          }
        const originalBackground = document.body.style.background; 
        document.body.style.background = `
          url('https://d3pc0hdqierc2c.cloudfront.net/assets/images/noise.png'),
          -webkit-linear-gradient(45deg, #be345481, #ffff003b, #be34547c, #be3454c2, #BE3455),
          linear-gradient(45deg, #be345481, #ffff003b, #be34547c, #be3454c2, #BE3455)
        `;   
        return () => {
            document.body.style.background = originalBackground;
            window.removeEventListener('resize', handleResize);
          };
      }, []);
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
    const card1Slot = {
        word1: "Step 1",
        word2: "Sign-up",
        word3: "*as a client or professional"
    }

    const card2Slot = {
        word1: "Step 2",
        word2: "Find your",
        word3: "perfect",
        word4: "friend",
        word5: "*buy or sell services"
    }

    const card3Slot = {
        word1: "Step 3",
        word2: "Have a",
        word3: " Blast!",
        word4: "*start communicating",
        word5: "and enjoy your new",
        word6: "connection"
    }

    return (
        <Layout>
        <div className={styles['container']}>
            <div className={styles['area-1']}>
                <div className={styles['grid-item']}>
                    <Logo />
                    <p className={styles['target-paragraph-1']}>
                        <span>Where friendship </span>
                        <span>MEETS </span>
                        <span><br/>opportunity </span>
                    </p>
                    <p className={styles['target-paragraph-2']}>
                        <span>Join as </span>
                        <span>a professional or as client.</span>
                        <span>Earn money, {windowWidth <= 800 ? <>find new connections and experience.</> : <><br/>find new connections and experience.</>}</span>
                    </p>
                    <Button slot1="Sign up for free"></Button>
                </div>
                <div className={styles['image']}>
                    <Image 
                        src={windowWidth > 1280 ? (
                            grid_1_image
                        ) : windowWidth <= 1280 && windowWidth > 800 ? (
                            grid_1_tablet
                        ) : (
                            grid_1_phone
                        )} 
                        className={styles['img']} alt="Landing Image" />
                </div>
            </div>

            <div className={styles['area-2']}>
                <div className={styles['grid-item']}>
                    <p className={styles['target-paragraph-1']}>
                        <span>What is <br/></span>
                        <span>Hire a friend?</span>
                    </p>
                    <div className={styles['target-paragraph-2']}>
                        <div className={styles['target-paragraph-2-list']}>
                            <div>
                            {windowWidth > 800 &&<Circle />}
                            
                        </div><span>Platform  for buying or selling services. From <div>private piano lessons to hang-out buddy.</div></span>
                        </div>
                  
                        <div className={styles['target-paragraph-2-list']}>
                        <div>
                        {windowWidth > 800 &&<Circle />}
                        </div><span>Possibility to use your skills and make money doing<div> what you love.</div></span>
                        </div>
                        <div className={styles['target-paragraph-2-list']}>
                        <div>
                        {windowWidth > 800 &&<Circle />}
                        </div><span>Possibility to hire a professional and get  <div>services of different categories.</div></span>
                        </div>
                
                        <div className={styles['target-paragraph-2-list']}>
                        <div>
                        {windowWidth > 800 &&<Circle />}
                        </div><span>Platform  for  learning and experiencing new  <div>things with a trustworthy professional.</div></span>
                        </div>
                    </div>
                </div>
                <div className={styles['image']}>
                    <Image 
                        src={windowWidth > 1280 ? (
                            grid_2_image
                        ) : windowWidth <= 1280 && windowWidth > 800 ? (
                            grid_2_tablet
                        ) : (
                            grid_2_phone
                        )} 
                        className={styles['img']} alt="Landing Image" />
                </div>
            </div>
            <div className={styles['area-3']}>
                
                    <p className={styles['target-paragraph']}>
                        <span>How do you get </span>
                        <span>started with us.<br/></span>
                        <span>You can create account for yourself just in 3 simple steps</span>
                    </p>
                        <div className={styles['image-container']}>
                            <Card slot1={card1Slot}/>
                            <Card slot2={card2Slot}/>
                            <Card slot3={card3Slot}/>
                        </div>
                    <Button slot2="Sign up" /> </div>
                <div className={styles['area-4']}>
                    <div className={styles['card']}>
                        <p>
                            Connect with us 
                            {/* <span className={styles['social']}>
                                <LinkedIn />
                                <Instagram />
                            </span> */}
                            <br/>
                            <a href="mailto:hireafriend.team@gmail.com">hireafriend.team@gmail.com
                            </a>
                            <span className={styles['social']}>
                                <LinkedIn />
                                <Instagram />
                            </span>
                        </p>  
                    </div>
                </div>  
        </div>
        </Layout>
    );
}

export default LandingPage;