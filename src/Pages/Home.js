import React, { Fragment} from 'react';
import LandingPage from "./LandingPage";
import "../App.css";
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <Fragment>
            <LandingPage />
            <Footer/>
        </Fragment>
    )
}
export default Home;
