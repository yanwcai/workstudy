import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from "../Footer";
import "../Footer.css";

const PageTemplate = () => {
    return ( 
        <>
            <HeroSection title="Page Template" description={""}/>
            <Footer />
        </>
    );
};

export default PageTemplate;