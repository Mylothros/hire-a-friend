import React from 'react';
import Image from 'next/image'

import Logo from 'components/LogoSvg.js';
import Circle from 'components/CircleSvg.js';
import LinkedIn from 'components/LinkedInSvg.js';
import Instagram from 'components/InstagramSvg.js';
import Button from 'components/Button.js';
import Card from 'components/Card.js';

import styles from 'styles/pages/landingPage.module.scss';
import grid_1_image from "public/assets/images/grid_1.png";
import grid_2_image from "public/assets/images/grid_2.png";

import Layout from 'components/Layout'; // Path to your Layout component

const LandingPage = () => {

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
        <Layout >
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
                        <span>Earn money, <br/>find new connections and experience.</span>
                    </p>
                    <Button slot1="Sign up for free"></Button>
                </div>
                <div className={styles['image']}>
                    <Image src={grid_1_image} className={styles['img']} alt="Landing Image" />
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
                            <Circle /><span>Platform  for buying or selling services. From <br/><div>private piano lessons to hang-out buddy.</div></span>
                        </div>
                  
                        <div className={styles['target-paragraph-2-list']}>
                        <Circle /><span>Possibility to use your skills and make <br/> <div>money doing what you love.</div></span>
                        </div>
              
                        <div className={styles['target-paragraph-2-list']}>
                        <Circle /><span>Possibility to hire a professional and get <br/> <div>services of different categories.</div></span>
                        </div>
                
                        <div className={styles['target-paragraph-2-list']}>
                        <Circle /><span>Platform  for  learning and experiencing new <br/> <div>things with a trustworthy professional.</div></span>
                        </div>
                    </div>
                </div>
                <div className={styles['image']}>
                    <Image src={grid_2_image} className={styles['img']} alt="Landing Image" />
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
                            <LinkedIn />
                            <Instagram />
                            <br/>
                            <a href="mailto:hireafriend.team@gmail.com">hireafriend.team@gmail.com</a>
                        </p>  
                    </div>
                </div>
           
        </div></Layout>
    );
}

export default LandingPage;