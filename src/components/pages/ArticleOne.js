import React from "react";
import HeroSection from '../HeroSection';
import Footer from "../Footer";
import "../Footer.css";
 
const ArticleOne = () => {
    return (
        <>
            <HeroSection title={"Article One"} description={"Sample Article One"}/>
            <Footer />
        </>
    );
};
 
export default ArticleOne;