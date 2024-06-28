import React from 'react';
import Styles from "../Modules/LandingPage.module.css";
import LandingImg from "../assist/bg.acf6dd16915fc15a406c.jpg"; 

const LandingPage = () => {
    return (
    <div className={Styles.landing}>
            <img src={LandingImg} alt='landing bg' />
            <div className={Styles.content}>
                <h1 className={Styles.title}>NEW SEASON ARRIVALS</h1> 
                <p className={Styles.paragraph}>CHECK OUT ALL THE TRENDS</p>
            </div>
    </div>
)
}
export default LandingPage;
