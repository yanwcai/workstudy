import React from "react";
import HeroSection from '../HeroSection';
import Footer from "../Footer";
import "../Footer.css";

 
const News = () => {
    return (
        <>
            <HeroSection title={"News Page"} description={"News Page Description"}/>
            <Footer />
        </>
    );
};
 
export default News;