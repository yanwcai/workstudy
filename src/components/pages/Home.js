import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import SimpleCardSection from '../SimpleCardSection';
import Footer from "../Footer";
import "../Footer.css";

const Home = () => {
    return ( 
        <>
            <HeroSection title="Home Page Title" description={"Home Page Description"}/>
            <SimpleCardSection />
            <Footer />

        </>
    );
};

export default Home;