import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import FeaturedSection from '../FeaturedSection';
import BlogSection from "../BlogSection";
import ConnectSection from '../ConnectSection';
import Footer from "../Footer";
import "../Footer.css";

const Home = () => {
    return ( 
        <>
            <HeroSection title="Home Page" description={"Home Page Description"}/>
            <FeaturedSection />
            <BlogSection />
            <ConnectSection />
            <Footer />
        </>
    );
};

export default Home;